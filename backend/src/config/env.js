import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const schema = Joi.object({
  PORT: Joi.number().default(5000),
  MONGO_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().min(10).required(),
  JWT_EXPIRES: Joi.string().default("1d"),
  CLIENT_URL: Joi.string().required(),
  USE_EXTERNAL_API: Joi.string().valid("true", "false").default("false")
}).unknown();

const { error, value } = schema.validate(process.env);

if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

export default value;
