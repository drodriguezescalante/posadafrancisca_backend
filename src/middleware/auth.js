const jwt = require('jsonwebtoken');

//TODO : Validacion del token del usuario*/
const checkAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token)
      return res.status(401).json({
        message: 'Sin Autorizacion.',
      });
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err)
        return res.status(400).json({ message: 'Autorizacion Invalida.' });
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { checkAuth };
