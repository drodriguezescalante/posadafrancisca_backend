const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Role = require('../models/role');
const { tokenSign } = require('../helpers/generateToken');

//TODO : Login user*/
const loginUser = async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const user = await User.findOne({ user_name: user_name });

    if (!user)
      return res.status(400).send({ message: 'El usuario no existe.' });

    const validPassword = await bcrypt.compare(
      user_password,
      user.user_password
    );
    if (!validPassword)
      return res.status(400).send({ message: 'Contraseña incorrecta.' });
    
    token = await tokenSign(user);
    res.status(200).send({
      token: token,
      status: user.user_status,
      userId: user._id,
      message: 'Inicio de session exitosa.',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//TODO: Verificar token */
const verifyCtrl = async (req, res) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.send(false);
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, verified) => {
      if (err) return res.send(false);
      const user = await User.findById(verified.id);
      if (!user) return res.send(false);

      return res.send(true);
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};
module.exports = { loginUser, verifyCtrl };
