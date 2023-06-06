const { filterUniqueArray } = require('../helpers/util');
const Request = require('../models/request');
const Table = require('../models/table');
const Product = require('../models/product');
const TableCtrl = require('../controllers/tableCtrl');

const getRequestsByStatus = async (req, res) => {
  const { status } = req.params;
  Request.find({request_status:status},(err,requests) => {
    Table.populate(requests,{path: 'table'},(err,requests) => {
      res.status(200).send(requests);
    })
  });
};

const getRequestById = async (req, res) => {
  const { id } = req.params;
  Request.find({_id:id},(err,requests) => {
    Table.populate(requests,{path: 'table'},(err,requests) => {
      res.status(200).send(requests);
    })
  });
};

const getRequestsByTable = async (req, res) => {
  const { id } = req.params;
  Request.find({request_status:"En proceso"},(err,requests) => {
    Table.populate(requests,{path: 'table'},(err,reqs) => {
      const requestsInList  = reqs.filter( o =>  o.table[0]._id == id ).map( (item) => item );
      res.status(200).send(requestsInList);

    })
  });
  
};

const getTablesByStatus = async (req, res) => {
  const { status } = req.params;
  Table.find({table_status:status},(err,requests) => {
    res.status(200).send(requests);
  });
};

/*
const getRequests = async (req, res) => {
    Request.find()
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
  };
*/

const createRequest = async (req, res) => {
  try {
    const defaultStatus =   "En proceso";
    const { 
        request_number,
        table,
        order_structure,
        request_status,
        request_detail,
        create_user,
        create_date, 
        last_audit_user,
        audit_date,
    } = req.body;
    const newRequest = await Request({
        request_number:1,
        table:table,
        order_structure:order_structure,
        request_status:defaultStatus,
        request_detail: request_detail,
        create_user: create_user,
        create_date:create_date,
        last_audit_user:last_audit_user,
        audit_date:audit_date,
    });
    if ( !order_structure || !table || !create_user || !last_audit_user) {
      return res
        .status(400)
        .send({ message: '*Debe completar todos los campos*' });
    }
    newRequest.save();

    Table.findById({_id : table[0]},(err,table) => {
      if (err) {
        console.log(err);
      } else {
        table.table_status  = true;
        TableCtrl.updateTableStatus(table);
      }
    });

    res.status(200).send({ message: 'Pedido creado exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateRequest = async (req, res) => {
  console.log("id: "+req.params.id);
};

/*
const updateRequest = async (req,res) => {
  try{
    console.log("abc");
  }catch(e){
    console.log(e);
  }
  Request.findByIdAndUpdate(req.params.id,{
    table           : table,
    request_detail  : request_detail,
    request_detail  : req.body.request_detail,
    last_audit_user : req.body.last_audit_user,
    audit_date      : new Date()
  }, function(err,response){
    if (err) return handleError(err);
    res.send(response);
  })
}
*/

module.exports = { getRequestById, getRequestsByStatus, getTablesByStatus, getRequestsByTable, createRequest,updateRequest };
