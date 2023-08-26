import express from "express";
import validateResource from "../middleware/validateResource";
import { cardCreationSchema, cardUpdateSchema } from "../schema/finco.schema";
import { createCardHandler, createTransactionHandler, updateCardHandler } from "../controller/finco.controller";

const fincoRouter = express.Router();

fincoRouter.post(
  '/finco/cards/create/:accID',
  validateResource(cardCreationSchema),
  createCardHandler
);

fincoRouter.put(
  '/finco/cards/:cardNumber/update/:field/',
  updateCardHandler
)

fincoRouter.post(
  '/finco/transactions/add/:cardNumber',
  validateResource(cardUpdateSchema),
  createTransactionHandler
)

export default fincoRouter;
