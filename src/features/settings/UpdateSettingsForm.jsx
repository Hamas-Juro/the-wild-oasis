import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimumBookingLength,
      maximumBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  function handleBlur(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minimumBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "minimumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maximumBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maximumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;