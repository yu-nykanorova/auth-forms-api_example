import * as Joi from "joi";

export const signupValidator = Joi.object({
    name: Joi.string()
        .min(2)
        .pattern(/^[A-Za-z]+$/)
        .required()
        .messages({
            "string.empty":"Username is required",
            "string.min":"At least 2 characters",
            "string.pattern.base":"Only letters allowed",
        }),
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
    avatar: Joi.string()
        .uri()
        .required()
        .messages({
            "string.empty":"Avatar URL is required",
            "string.uri":"Invalid URL",
        })
});
