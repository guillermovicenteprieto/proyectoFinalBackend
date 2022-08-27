import mongoose from "mongoose";
// export const Chat = mongoose.model(
//   "chat",
//   new mongoose.Schema({
//     timestamp: { type: Date, default: Date.now },
//     email: { type: String },
//     text: { type: String },
//     date:{ type: Date}
//   }, { versionKey: false }
//   )
// );


const chatSchema = new mongoose.Schema ({
  email: {
      type: String,
      required: true
  },
  message: {
      type: String
  }
},{
  timestamps: true
})

export default mongoose.model("chat", chatSchema)