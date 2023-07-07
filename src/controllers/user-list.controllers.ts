import { Request, Response } from "express";
import { initModels } from "../models/init-models";
import { user_lists } from "../models/user_lists";
import { titles } from "../models/titles";
import { error_logs } from "../models/error_logs";
import * as jwtUtil from "../utils/jwt.util";
import * as commonUtil from "../utils/common.util";
import { sequelize } from "../models/index";
import * as userListRepo from "../repositories/user-list.repo";
initModels(sequelize);

import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const created_at = new Date();
  const updated_at = new Date();

  const { name, email, password, last_name } = req.body;

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await user_lists.create({
      name,
      email,
      password: hashPassword,
      last_name,
      created_at,
      updated_at,
      isAdmin: 1,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  userListRepo.getOne(req.body.email).then(
    (user: user_lists) => {
      if (user) {
        const match = bcrypt.compare(req.body.password, user.password);
        if (match) {
          const token = jwtUtil.sign({
            email: user.email,
            id: user.id,
            isAdmin: user.isAdmin,
          });
          // res.status(201).send({ status: "Success", token });
          res.json({ token });
        } else {
          res.status(304).json("BAD REQUEST");
        }
      } else {
        res.status(304).json("BAD REQUEST");
      }
    },
    (reason) => {
      res.status(304).json("BAD REQUEST");
    }
  );
};

export const createAUser = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const last_name = req.body.last_name;

    const data = {
      name,
      email,
      password,
      last_name,
    };

    const createUser = await userListRepo.createNewUser(data);

    if (createUser) {
      res.status(201).send({ status: "Create a new user complete" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const getUsers = await userListRepo.getAllUser();
    if (getUsers) {
      res.status(200).send({ status: "sucess", data: getUsers });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteUr: user_lists | null = await user_lists.findByPk(id);
    if (deleteUr) {
      await user_lists.destroy({ where: { id } });
      res.status(200).send({ status: "User has been delete" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.body);

  try {
    const id = req.params.id;
    const name = req.body.name;
    await user_lists.update({ name }, { where: { id } });
    console.log("hello " + req.body.name);
    const updateUr: user_lists | null = await user_lists.findByPk(id);
    if (updateUr) {
      res.status(200).send({ status: "success", data: updateUr });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserWithId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: user_lists | null = await user_lists.findByPk(id);
    if (user) {
      res.status(200).send({ status: "success", data: user });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getTitles = async (req: Request, res: Response) => {
  try {
    const title = await titles.findAll();
    if (title) {
      res.status(200).send({ status: "sucess", data: title });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export const getErrors = async (req: Request, res: Response) => {
  try {
    const error = await error_logs.findAll();
    if (error) {
      res.status(200).send({ status: "success", data: error });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export const createTitle = async (req: Request, res: Response) => {
  try {
    const { price, documents, note, source, legal_address, condo_name } =
      req.body;

    const data = {
      price,
      documents,
      note,
      source,
      legal_address,
      condo_name,
    };

    const create = await userListRepo.createNewTitle(data);

    if (create) {
      res.status(200).send({ status: "Create a new title complete" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
