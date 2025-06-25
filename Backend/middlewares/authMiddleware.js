const jwt = require('jsonwebtoken');
const Token = require('../models/Token');



const authenticate = async(req,res,next)=>{
try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    const storedToken = await Token.findOne({where: {token}});
    
    if (!storedToken) {
      return res.status(401).json({ message: 'Invalid token (not found in DB)' });
    }

     // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    
    req.user = decoded;
    

    next();

} catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Unauthorized access' });
}
}

module.exports = authenticate;