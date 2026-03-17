import * as Joi from "joi";

export const loginValidator = Joi.object({
    email: Joi.string()
        .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .required()
        .messages({
            "string.empty":"Email is required",
            "string.pattern.base":"Wrong email",
        }),
    password: Joi.string()
        .min(8)
        .max(14)
        .required()
        .messages({
            "string.empty":"Password is required",
            "string.min":"At least 8 characters long",
            "string.max":"Too long, maximum 14 characters",
        }),
});
