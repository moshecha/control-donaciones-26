
const apiController = {
    getDate: async(req, res) => {

        res.json({
            date: Date.now()
        })
    },

}

module.exports = apiController
