const express = require("express");
const router = express.Router();
const Axios = require("axios");

/**
 * @route DELETE /series/delete
 * @desc get a show out of the logged user account
 * @returns {array} of the deleted show infos
 */

router.delete('/', async (req, res) => {
    let apiKey = process.env.API_KEY;

    let apiUrl = 'https://api.betaseries.com/shows/show';
    let token = req.body.token;
    let showId = req.body.id;
    
    await Axios({
        method: "delete",
        url: apiUrl,
        data: {
            id: showId,
            Token: token,
        },
        headers: {
            Authorization: token,
            "X-BetaSeries-Key": apiKey,
            "X-BetaSeries-Version": "3.0",
        },
    })
    .then(response => {
        return res.status(200).json(response.data);
    })
    .catch(error => {
        return res.status(401).json(error.response.data.errors);
    });
});

module.exports = router;