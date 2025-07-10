/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

import httpStatus from "http-status-codes";
import { UserServices } from "./user.services";
import { catchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUserService(req.body);
    // res.status(httpStatus.CREATED).json({
    //   massage: "user created successfully",
    //   user,
    // });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User created successfully",
      data: user,
    });
  }
);
// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserServices.createUserService(req.body);
//     res.status(httpStatus.CREATED).json({
//       massage: "user created successfully",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

const getAllUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();

    // res.status(httpStatus.OK).json({
    //   success: true,
    //   message: "All users Retrieved successfully",
    //   data: users,
    // });
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Users Retrieved Successfully",
      data: result.data,
      meta: result.meta,
    });
  }
);

export const UserController = {
  createUser,
  getAllUser,
};
