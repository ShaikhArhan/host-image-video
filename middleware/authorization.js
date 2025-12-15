require("dotenv").config();
const authorization = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization !== process.env.PASS_CODE) {
        return res.status(401).json({ error: "Unauthorized" });
    }    

    next();
}


module.exports = authorization;