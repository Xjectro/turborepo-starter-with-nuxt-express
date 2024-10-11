import jwt from "jsonwebtoken";

export const generateToken = (payload: object, expiresIn: number) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as any;
};

export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: 30 * 24 * 60 * 60,
  });
};

export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: 315360000,
  });
};
