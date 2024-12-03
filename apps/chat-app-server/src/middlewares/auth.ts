import type { NextFunction, Request, Response } from "express";
import httpContext from "express-http-context";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).send("You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token is not valid!");

    httpContext.set("userId", payload?.userId);

    // req.userId = payload?.userId;
    next();
  });
};
