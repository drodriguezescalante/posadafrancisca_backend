//Franquito se la come.

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user_name:{
        /* 
            1.  Nombre de usuario, los cuales se conforman de la inicial del nombre & primer apellido 
                & opcional segundo apellido & opcional numeración.
            2.  Ejemplo: DRODRIGUEZ || DRODRIGUEZE || DRODRIGUEZE1 || DRODRIGUEZE2
            3.  Max. longitud: 12
        */
        type:String,
        required:true
    },
    user_password:{
        /* 
            1.  Contraseña de usuario, los cuales son generadas por el administrador al momento de generar un 
                nuevo usuario. Se podría autogenerar, y cuando exista el modulo de mantenimiento, al admin puede 
                autogenerarlo o colocarlo manualmente. 
                Por el momento que se maneje como autogenerado con 4 caracteres alfanumericos.
            2.  Ejemplo: A123 || G781 || B1T8
            3.  Max. longitud: 4
        */
        type:String,
        required:true
    },
    user_level:{
        /* 
            1.  Nivel de usuario, que determina a que modulos puede ingresar un usuario.
            2.  Ejemplo: {'mantenimiento':true,'pedidos:':false}
            3.  Max. longitud: Array
        */
        type:Array,
        required:true
    },
    user_workshift:{
        /* 
            1.  Turno de trabajo del usuario.
            2.  Ejemplo: Dia || Tarde || Noche
            3.  Max. longitud: 20
        */
        type:String,
        required:true
    },
    user_status:{
        /* 
            1.  Estado del usuario, que determina si un usuario se encuentra activo, es decir si puede ingresar a
                la web.
            2.  Ejemplo: true | false
            3.  Max. longitud: Boolean
        */
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('User',userSchema)