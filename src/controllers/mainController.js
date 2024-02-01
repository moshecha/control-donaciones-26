
const mongoDb = require('../database/connectionMongoDb')
const ObjectId = require('mongodb').ObjectId;


async function resultdbTest() {
    // console.log( await ( mongoDb.insertDocuments('users',[{hello:'banana'},{hellowin:'frita',lopez:'gomez'}] ) ) )
    // console.log( await mongoDb.updateDocuments('users',{hello:'banana'},{hellowin:'frita'}) )
    // console.log( await ( mongoDb.deleteDocuments('users',{_id: new ObjectId("65b98c20c1542a001268e78e")}) ) )
    console.log( await mongoDb.findDocuments('users') )
    console.log( await mongoDb.finalizarConexion() )
}

// resultdbTest()
const mainController = {
    index: async(req, res) => {
        mongoDb.finalizarConexion()
        res.render('main/index', { user:req.session.userLogged})
    },
    cerrarSesion: async (req,res)=>{
        res.clearCookie('usu');
		req.session.destroy();
		return res.redirect('back');
    },

}

module.exports = mainController
