const Table = require('../models/table');

const updateTableStatus = async (req,res) => {
  const id = req._id.valueOf();
  const { table_number, table_desc, table_status} = req;
  Table.replaceOne( {_id:id} , { table_number: table_number, table_desc: table_desc, table_status: table_status  })
  .then(result => {
    console.log(result);
  });
}

const getTables = async (req, res) => {
  Table.find()
    .where('table_status')
    .then((data) => res.send(data))
    .catch((error) => res.json(error));

    /*
      Table.find()
    .where('table_status').equals('false')
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
    */
}; 

const createTable = async (req, res) => {
  try {
    const { table_number, table_desc, table_status } = req.body;
    const newTable = await Table({
        table_number: table_number,
        table_desc: table_desc,
        table_status:table_status,
    });
    if (!table_number || !table_desc) {
      return res
        .status(400)
        .send({ message: '*Debe completar todos los campos*' });
    }
    newTable.save();
    res.status(200).send({ message: 'Mesa creada exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getTables, createTable , updateTableStatus };
