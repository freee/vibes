// via https://issuehunt.io/r/storybookjs/storybook/issues/15916
function findTransform(transform, fileName) {
  const self = transform.find(([pattern]) =>
    new RegExp(pattern).test(fileName)
  );
  const transformExcludeSelf = transform.filter((t) => t !== self);
  return transformExcludeSelf.find(([pattern]) =>
    new RegExp(pattern).test(fileName)
  );
}

function generateCJS(fileName, { code }) {
  return `${code};
if(exports.default != null) {
  exports.default.parameters = exports.default.parameters || {};
  exports.default.parameters.fileName = '${fileName.replace(/\\/g, '\\\\')}';
}
`;
}

module.exports = {
  process(src, fileName, config) {
    const [, transformFileName] = findTransform(
      config.config.transform,
      fileName
    );
    const processed = require(transformFileName).default.process(
      src,
      fileName,
      config
    );
    return generateCJS(fileName, processed);
  },
};
