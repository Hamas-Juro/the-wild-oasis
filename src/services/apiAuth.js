import supabase from "./supabase";

export async function Signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function Login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}

export async function Logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function UpdateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  // Updating Password OR Full Name
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) {
    throw new Error(error.message);
  }
  if (!avatar) return data;
  // Uploading Avatar Image
  const fileName = `avatar-${data.user.id}-${Math.random()}.jpg`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) {
    throw new Error(storageError.message);
  }
  // update Avatar in User
  const Image_BASEURL =
    "https://wwldymlhfdvpgijpdqoe.supabase.co/storage/v1/object/public/avatars";
  const { data: updatedUser, error: updatedError } =
    await supabase.auth.updateUser({
      data: { avatar: `${Image_BASEURL}/${fileName}` },
    });
  if (updatedError) {
    throw new Error(updatedError.message);
  }
  return updatedUser;
}
