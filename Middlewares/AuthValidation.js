const Joi = require('joi')

const SignUpValidation = (req,res,next)=>{
    const schema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(3).max(20).required(),
    })

    const {error} = schema.validate(req.body)
    if(error)
    {
        return res.status(400).json({message:'Bad Request',error})
    }
    next()
}


const LoginInValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      message: "Bad Request",
      error: error.details
    });
  }

  next();
};
module.exports = {SignUpValidation,LoginInValidation}