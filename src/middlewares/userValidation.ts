import { NextFunction, Request, Response } from 'express';

const ERROR_USERNAME_LENGTH = { message: '"username" length must be at least 3 characters long' };
const ERROR_USERNAME_NOT_STRING = { message: '"username" must be a string' };
const ERROR_USERNAME_REQUIRED = { message: '"username" is required' };
const ERROR_CLASSE_LENGTH = { message: '"classe" length must be at least 3 characters long' };
const ERROR_CLASSE_NOT_STRING = { message: '"classe" must be a string' };
const ERROR_CLASSE_REQUIRED = { message: '"classe" is required' };
const ERROR_LEVEL_LENGTH = { message: '"level" must be greater than or equal to 1' };
const ERROR_LEVEL_NOT_STRING = { message: '"level" must be a number' };
const ERROR_LEVEL_REQUIRED = { message: '"level" is required' };
const ERROR_PASSWORD_LENGTH = { message: '"password" length must be at least 8 characters long' };
const ERROR_PASSWORD_NOT_STRING = { message: '"password" must be a string' };
const ERROR_PASSWORD_REQUIRED = { message: '"password" is required' };
const BAD_REQUEST_STATUS = 400;
const UNPROCESSABLE_ENTITY_STATUS = 422;

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_USERNAME_REQUIRED);
  }
  if (typeof username !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_USERNAME_NOT_STRING);
  }
  if (username.length <= 2) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_USERNAME_LENGTH);
  }
  next();
};

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_CLASSE_REQUIRED);
  }
  if (typeof classe !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_CLASSE_NOT_STRING);
  }
  if (classe.length <= 2) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_CLASSE_LENGTH);
  }
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level <= 0) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_LEVEL_LENGTH);
  }
  if (!level) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_LEVEL_REQUIRED);
  }
  if (typeof level !== 'number') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_LEVEL_NOT_STRING);
  }
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(BAD_REQUEST_STATUS).send(ERROR_PASSWORD_REQUIRED);
  }
  if (typeof password !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_PASSWORD_NOT_STRING);
  }
  if (password.length < 8) {
    return res.status(UNPROCESSABLE_ENTITY_STATUS).send(ERROR_PASSWORD_LENGTH);
  }
  next();
};

export {
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
};