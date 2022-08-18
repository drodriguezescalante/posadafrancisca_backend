const User = require('../models/user')

/* TODO: Listar usuarios */

/* TODO: Listar un usuario */

/* TODO: Crear un usuario */
const createUser = async (req,res)=>{
    try{
        const {user_name,user_password,user_level,turno,user_status} = req.body
        const user = await User.findOne({user_name:user_name})
        if(user) return res.status(400).json({message:'El usuario ya existe.'})
        
    } catch (error) {
        
    }
}

/* TODO: Actualizazr usuario */

/* TODO: ELiminar usuario */