const User = require('../models/user');

//TODO: Listar usuarios */
const getUsers = async (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
};

/* TODO: Listar un usuario */

//TODO: Crear un usuario */
const createUser = async (req, res) => {
  try {
    const { user_name, user_password, user_level, turno, user_status } =
      req.body;
    const user = await User.findOne({ user_name: user_name });
    if (user) return res.status(400).json({ message: 'El usuario ya existe.' });

    const newUser = await User({
      user_name: user_name,
      user_password: user_password,
      user_level: user_level,
      turno: turno,
      user_status: user_status,
    });
    //TODO: Añadir validaciones de campos*/
    await newUser.save();
    res.send({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* TODO: Actualizazr usuario */

/* TODO: ELiminar usuario */

module.exports = { getUsers, createUser };
