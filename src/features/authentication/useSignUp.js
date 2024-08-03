import { useMutation } from "@tanstack/react-query";
import { Signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: Signup,
    onSuccess: (user) => {
      console.log("user", user);
      toast.success(
        "User created Successfully! Please verify the new user from  user's email"
      );
    },
  });
  return { signup, isLoading };
}
