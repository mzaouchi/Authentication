const { body, validationResult } = require('express-validator')

exports.registerValidation = [
    body('name','Name should contain 4 char min').isLength({min : 4}),
    body('email','Wrong email').isEmail(),
    body('password','Password should contain 8 char min').isLength({min : 8})
]

exports.logginValidation = [
    body('email','Wrong email').isEmail(),
    body('password','Password should contain 8 char min').isLength({min : 8})
]




exports.validation=(req, res,next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}