const bcrypt = require('bcrypt');
const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, Number(process.env.SALT));
  return hash;
};
module.exports = { encrypt };
