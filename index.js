const { json } = require('micro');
const jsdoc = require('jsdoc-to-markdown');

module.exports = async (req, res) => {
  const opts = await json(req);
  return await jsdoc.render(opts);
};
