const mongoDb = require('../database/connectionMongoDb')
const ObjectId = require('mongodb').ObjectId;


const userController = {
    perfil: async(req, res) => {
        let user = req.session.userLogged
        let userData = user ? await mongoDb.findDocuments('users', {email: user.email})[0] : null

        mongoDb.finalizarConexion()
        res.render('main/index', { user:req.session.userLogged, userData})
    },


}

module.exports = userController
