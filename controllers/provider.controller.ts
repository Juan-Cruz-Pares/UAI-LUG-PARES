const { response, request } = require("express");
import Provider from "../models/provider";

const providerPost = async (req = request, res = response) => {
    const p = await Provider.find({ name: req.body.name }).exec();
    const { name, phone, email } = req.body;
    if (!p) {
        const provider = new Provider({ name, phone, email });
        await provider.save();
        res.status("200").json({
            msg: `Provider ${name} was added`,
        });
    }else{
        res.status("200").json({
            msg: `Provider ${name} existing`,
        });
    }
};

module.exports = {
    providerPost,
};
