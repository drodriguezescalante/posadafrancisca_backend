const User = require('../models/user');
const Role = require('../models/role');

//TODO: Listar usuarios */
const getUsers = async (req, res) => {
  User.find({}, (err, users) => {
    Role.populate(users, { path: 'role' }, (err, users) => {
      res.status(200).send(users);
    });
  });
};

//TODO: Listar un usuario */

//TODO: Crear un usuario */
const createUser = async (req, res) => {
  try {
    const { user_name, user_password, role, user_workshift, user_status } =
      req.body;
    const user = await User.findOne({ user_name: user_name });
    if (user) return res.status(400).json({ message: 'El usuario ya existe.' });

    const newUser = await User({
      user_name: user_name,
      user_password: user_password,
      role: role,
      user_workshift: user_workshift,
      user_status: user_status,
    });
    //TODO: Añadir validaciones de campos*/
    await newUser.save();
    res.send({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//TODO: Actualizar usuario */

//TODO: ELiminar usuario */

module.exports = { getUsers, createUser };
