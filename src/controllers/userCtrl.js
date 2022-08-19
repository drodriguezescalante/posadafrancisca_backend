const User = require('../models/user');
const Role = require('../models/role');
const { encrypt } = require('../helpers/handleBcrypt');

//TODO: Listar usuarios */
const getUsers = async (req, res) => {
  User.find({}, (err, users) => {
    Role.populate(users, { path: 'role' }, (err, users) => {
      res.status(200).send(users);
    });
  });
};

//TODO: Listar un usuario */
const getUser = async (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, users) => {
    Role.populate(users, { path: 'role' }, (err, users) => {
      res.status(200).send(users);
    });
  });
};

//TODO: Crear un usuario */
const createUser = async (req, res) => {
  try {
    const { user_name, user_password, role, user_workshift, user_status } =
      req.body;
    const user = await User.findOne({ user_name: user_name });
    if (user) return res.status(400).json({ message: 'El usuario ya existe.' });
    const passwordHash = await encrypt(user_password);

    const newUser = await User({
      user_name: user_name,
      user_password: passwordHash,
      role: role,
      user_workshift: user_workshift,
      user_status: user_status,
    });
    //TODO: Añadir validaciones de campos*/
    if (!user_name || !user_password || !role || !user_workshift)
      return res
        .status(400)
        .send({ message: 'Debe completar todos los campos.' });
    await newUser.save();
    res.status(200).send({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//TODO: Actualizar usuario */
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, user_password, role, user_workshift, user_status } =
      req.body;

    await User.updateOne(
      { _id: id },
      { $set: { user_name, user_password, role, user_workshift, user_status } }
    );
    res.status(200).send({ message: 'Usuario actualizado correctamente.' });
  } catch (error) {
    res.status(500).send({ message: 'Error interno del servidor.' });
  }
};
//TODO: ELiminar usuario */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id })
    .then((data) => res.json({ message: 'Usuario eliminado.', data }))
    .catch((error) => res.json({ message: error }));
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
