var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_view", {
        nama: "mulida",
        kelas: "MI.03",
        alamat: "sigli"
    });
});

module.exports = router;