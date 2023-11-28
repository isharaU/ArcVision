import { sendLocationSMS } from "../Components/SendSms";

export const setNumberFunction = (phoneNumber) => {
  console.log("Setting phone number:", phoneNumber);
  sendLocationSMS(phoneNumber);
};
