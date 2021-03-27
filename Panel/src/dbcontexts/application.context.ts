import { ConntectionStrings } from "./../constants/connectionStrings";
import * as mongoose from "mongoose";
import SomeException from "../exceptions/some-error.exception";
import { ContactDetailsSchema } from "../entities/contactDetails.schema";

mongoose.connect(
  ConntectionStrings.Uri,
  {
    useNewUrlParser: true,
    dbName:ConntectionStrings.DatabaseName,
    useUnifiedTopology: true,
  },
  (err: any) => {
    if (err) new SomeException("Could not Connect to Mongo Db");
  }
);
const ContactDetailsDbContext = mongoose.model("ContactDetails", ContactDetailsSchema);
export default ContactDetailsDbContext;

