import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: (data) => {
      console.log("Edit Success:", data); // Added console log
      toast.success("Setting Successfully Edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      console.error("Edit Error:", err); // Added console log
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSetting };
}
