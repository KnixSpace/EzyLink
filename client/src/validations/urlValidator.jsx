import joi from "joi";
const validateUrl = (longUrl) => {
  //   const schema = joi.object({
  //     longUrl: joi.string().uri({ scheme: ["http", "https"] }),
  //   });
  const schema = joi
    .string()
    .uri({ scheme: ["http", "https"] })
    .required();
  const { error } = schema.validate(longUrl);
  if (error) {
    return error.details[0].message;
  }
  return;
};

export default validateUrl;
