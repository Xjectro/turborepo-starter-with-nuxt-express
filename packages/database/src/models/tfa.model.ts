import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface TfaType extends mongoose.Document {
  user: any;
  interaction: string;
  used: boolean;
  usage_code: string;
  expiration: Date;
}

interface TfaModel extends mongoose.Model<TfaType> {
  checkTfa({
    usage_code,
  }: {
    usage_code: TfaType["usage_code"];
  }): Promise<TfaType>;
  createTfa({
    user,
    format,
    interaction,
  }: {
    user: TfaType["user"];
    format?: "jwt";
    interaction: TfaType["interaction"];
  }): Promise<{ usage_code: string; expiration: Date; tfa: TfaType }>;
}

const tfaSchema = new Schema<TfaType>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    interaction: {
      type: String,
      required: true,
    },
    used: {
      type: Boolean,
      required: false,
      default: false,
    },
    usage_code: {
      type: String,
      required: true,
    },
    expiration: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

tfaSchema.statics.checkTfa = async function checkTfa({
  usage_code,
}: {
  usage_code: TfaType["usage_code"];
}) {
  const tfa = await Tfa.findOne({ usage_code }).populate("user");

  if (!tfa?.user) {
    throw new Error("No user found matching usage code");
  }

  if (tfa.expiration <= new Date()) {
    throw new Error("Usage code has expired");
  }

  tfa.used = true;
  await tfa.save();

  return tfa;
};

tfaSchema.statics.createTfa = async function createTfa({
  user,
  format,
  interaction,
}: {
  user: TfaType["user"];
  format: "jwt";
  interaction: TfaType["interaction"];
}) {
  let usage_code = "";
  const expiration = new Date(Date.now() + 180 * 1000);

  switch (format) {
    case "jwt":
      usage_code = jwt.sign(
        { user, interaction },
        process.env.JWT_SECRET as string,
        {
          expiresIn: 180,
        },
      );
      break;
    case undefined:
      usage_code = crypto
        .randomBytes(64)
        .toString("base64")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, 5);
      break;
  }

  const tfa = await Tfa.create({
    user,
    interaction,
    usage_code,
    expiration,
  });

  return { usage_code, expiration, tfa };
};

export const Tfa = mongoose.model<TfaType, TfaModel>("tfa", tfaSchema);
