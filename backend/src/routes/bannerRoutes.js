const express = require("express")
const { getBannerById, createBanner, getAllBanners } = require("../controllers/BannerController")

const banner = express.Router()

banner.post("/create", createBanner)
banner.get("/", getAllBanners)
banner.get("/get/:id", getBannerById)


module.exports = banner