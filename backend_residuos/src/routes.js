const express = require("express")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)

module.exports = router