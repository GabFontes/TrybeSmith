import { NextFunction, Request, Response } from 'express';

const ERROR_NAME_LENGTH = { message: '"name" length must be at least 3 characters long' };
const ERROR_NAME_NOT_STRING = { message: '"name" must be a string' };
const ERROR_NAME_REQUIRED = { message: '"name" is required' };
const ERROR_AMOUNT_LENGTH = { message: '"amount" length must be at least 3 characters long' };
const ERROR_AMOUNT_NOT_STRING = { message: '"amount" must be a string' };
const ERROR_AMOUNT_REQUIRED = { message: '"amount" is required' };
const BAD_REQUEST_STATUS = 400;
const UNPROCESSABLE_ENTITY_STATUS = 422;

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_NAME_REQUIRED);
  }
  if (typeof name !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_NAME_NOT_STRING);
  }
  if (name.length <= 2) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_NAME_LENGTH);
  }
  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_AMOUNT_REQUIRED);
  }
  if (typeof amount !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_AMOUNT_NOT_STRING);
  }
  if (amount.length <= 2) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_AMOUNT_LENGTH);
  }
  next();
};

export {
  validateName,
  validateAmount,
};