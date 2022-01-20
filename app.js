const power = (req, res) => {

    const {base, exp} = req.body;

    const result = base ** exp
    return res.status(200).json({message: "number powered", result})
};

module.exports = power
