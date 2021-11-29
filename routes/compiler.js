const { HtmlCompiler } = require('../utils/html-compiler');

/*
 * POST compile html.
 */
exports.compile = function (req, res) {
  const { body } = req;
  res.json(200, { result: HtmlCompiler.compile(body.html) });
};
