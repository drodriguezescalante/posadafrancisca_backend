const jwt = require('jsonwebtoken');
const tokenSign = async (user) => {
  return jwt.sign(
    { id: user._id, estado: user.estado, role: user.role },
    process.env.TOKEN_SECRET_KEY,
    { expiresIn: '10h' }
  );
};
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET_KEY);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
