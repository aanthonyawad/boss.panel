import * as mongoose from "mongoose";

export const ContactDetailsSchema = new mongoose.Schema({
  urlName: { type: String, required: true, unique: true },
  organization: { type: String, required: true, unique: true },
  customerLocations: { type: String, required: true },
  willWorkRemotely: { type: Boolean, required: true },
  website: { type: String, required: false, unique: false },
  services: { type: String, required: true },
  offices: {
    type: [
      {
        location: { type: String, required: true },
        address: { type: String, required: true },
        coordinates: { type: String, required: true },
      },
    ],
    required: true,
  },
});
const ContactDetails = mongoose.model("ContactDetails", ContactDetailsSchema);
export default ContactDetails;
