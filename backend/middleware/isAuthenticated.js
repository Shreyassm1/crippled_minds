const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  console.log('Token:', token);
  const excludedRoutes = ['/mnnitchessclub/register', '/mnnitchessclub/login'];
  if (excludedRoutes.includes(req.path)) {
    return next();
  }
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'fstiwrhsb', (err, decoded) => {
    console.log('Decoded Token:', decoded);
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = authenticateUser;
