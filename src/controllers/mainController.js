
const mainController = {
    index: async(req, res) => {

        res.render('main/index', { user:req.session.userLogged})
    },

}

module.exports = mainController
