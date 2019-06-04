let express = require("express")
let router = express.Router()

let data = require("../data/data.json")

router.get("/" && "/home", (req, res)=>{
    let rep = [];
    data.developers.forEach((devs)=>{
        rep.push(devs.carouselPic)
    })
    res.render("index",{
       cLogo: rep,
       company: data.developers 
    })
})

module.exports = router