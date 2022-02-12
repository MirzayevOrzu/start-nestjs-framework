import * as Joi from "joi";

export const createCatSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),

    age: Joi.number()
        .integer()
        .min(1)
        .max(40)
        .required(),

    breed: Joi.string()
        .min(4)
        .max(30)
        .required(),
});