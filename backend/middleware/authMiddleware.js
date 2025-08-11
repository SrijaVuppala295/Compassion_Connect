const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const protect = (req,res,next)=>{
    const authHeader =  req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message:"No token found"});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decode = jwt.verify(token,secret);
        req.user = decode //attach user data to request

    }
    catch(e){
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

module.exports = protect;