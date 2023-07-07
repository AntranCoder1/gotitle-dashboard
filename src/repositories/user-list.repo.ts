import { user_lists } from "../models/user_lists";
import { titles } from "../models/titles";
import * as common from "../utils/common.util";

import bcrypt from "bcrypt";

export const createNewUser = (data) => {
  const created_at = new Date();
  const updated_at = new Date();
  const userList = new user_lists({
    name: data.name,
    email: data.email,
    // password: common.randomString(),
    password: "hoangLe",
    last_name: data.last_name,
    created_at,
    updated_at,
  });
  return userList.save();
};

export const createAdmin = (data) => {
  const created_at = new Date();
  const updated_at = new Date();

  console.log("aaa", common.encryptPassword(data.password));
  const ps: any = common.encryptPassword(data.password);

  const userList = new user_lists({
    name: data.name,
    email: data.email,
    password: ps,
    last_name: data.last_name,
    created_at,
    updated_at,
    isAdmin: 1,
  });
  return userList.save();
};

export const getAllUser = () => {
  return user_lists.findAll({
    attributes: ["id", "name", "email", "last_name", "created_at"],
  });
};

export const getAllTitles = () => {
  return titles.findAll();
};

export const getOne = (email) => {
  return user_lists.findOne({ where: { email } });
};

export const createNewTitle = (data) => {
  const created_at = new Date();
  const updated_at = new Date();

  const dd = String(created_at.getDate()).padStart(2, "0");
  const mm = String(created_at.getMonth() + 1).padStart(2, "0");
  const yy = created_at.getFullYear();

  const dateEffect = yy + "-" + mm + "-" + dd;

  const titleList = new titles({
    price: data.price,
    documents: data.documents,
    created_at,
    updated_at,
    date_effective: dateEffect,
    note: data.note,
    status: "published",
    last_title_step: "full",
    search_type: "commercial",
    search_type_detail: "limit",
    legal_address: data.legal_address,
    source: data.source,
    condo_name: data.condo_name,
  });
  return titleList.save();
};
