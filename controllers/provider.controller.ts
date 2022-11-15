const { response, request } = require("express");
import Provider from "../models/provider";

const providerGet = async (req = request, res = response) => {
    const provider = await Provider.find();
    if (provider.length) {
        res.status("200").json({ provider })
    } else {
        res.status("200").json({ msg: "There are no provider" });
    }
};

const providerPost = async (req = request, res = response) => {
    const p = await Provider.find({ name: req.body.name }).exec();
    const { name, phone, email } = req.body;
    if (p.length === 0) {
        const provider = new Provider({ name, phone, email });
        await provider.save();
        res.status("200").json({
            msg: `Provider ${provider._id} was added`,
        });
    }else{
        res.status("200").json({
            msg: `Provider ${name} existing`,
        });
    }
};

module.exports = {
    providerPost,
    providerGet
};
