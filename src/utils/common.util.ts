import bcrypt from "bcrypt";

// export let encryptPassword = (password: string) => {
//   const hashPassword = bcrypt.hash(password, 12);
//   return hashPassword;
// };

// export let comparePassword = async (hashPassword: string, password: string) => {
//   hashPassword = hashPassword.replace(/^\$2y(.+)$/i, "$2a$1");
//   return bcrypt.compare(password, hashPassword);
// };

import { Md5 } from "ts-md5/dist/md5";

const hash = (plain: string) => {
  const md5 = new Md5();
  md5.appendStr(plain);
  return md5.end();
};

export let encryptPassword = (password: string) => {
  const time = new Date().getTime();
  const salt = hash(time.toString());
  const hashPassword = hash(password + salt);
  return { salt, hashPassword };
};

export let comparePassword = (
  hashPassword: string,
  salt: string,
  password: string
) => {
  const toCompareHashPassword = hash(password + salt);
  return hashPassword === toCompareHashPassword;
};

export const randomString = () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 1; i <= 6; ++i)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export const randomString8 = () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 1; i <= 8; ++i)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
