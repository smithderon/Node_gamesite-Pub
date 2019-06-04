let express = require("express")
let router = express.Router()
let data = require("../data/data.json")

router.get("/companies", (req, res)=>{
    let logos = [];
    data.developers.forEach((devs)=>{
        logos.push(devs.logo)
    })
    res.render("companies",{
       cLogo: logos,
       developers: data.developers 
    })
})

module.exports = router