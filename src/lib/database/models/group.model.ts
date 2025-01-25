import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const GroupSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [MessageSchema],
});
/*Check if models?.Group Exists:

models?.Group: Checks if a model named "Group" is already defined in the models cache.
Why? To avoid redefining the same model multiple times, which can throw an error in Mongoose.*/

/*Why Use This Pattern?
This pattern is commonly used in Next.js or development environments with hot module replacement (HMR) to prevent issues caused by redefining models when files are reloaded.

Without this check:
const Group = model("Group", GroupSchema);
You might get an error like:
OverwriteModelError: Cannot overwrite `Group` model once compiled.
*/ 
const Group = models?.Group || model("Group", GroupSchema);
export default Group;