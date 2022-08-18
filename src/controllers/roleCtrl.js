const Role = require('../models/role');

//TODO: Listar roles */
const getRoles = async (req, res) => {
  Role.find()
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
};

//TODO: Crear un rol*/
const createRole = async (req, res) => {
  try {
    const { role_name, role_type } = req.body;
    const newRole = await Role({
      role_name: role_name,
      role_type: role_type,
    });
    if (!role_name || !role_type) {
      return res
        .status(400)
        .send({ message: '*Debe completar todos los campos*' });
    }
    newRole.save();
    res.status(200).send({ message: 'Rol creado exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getRoles, createRole };
