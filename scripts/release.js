const path = require('path');
const replace = require('replace-in-file');
const execSync = require('child_process').execSync;
const commitTargets = [
  './README.md',
  './src/utilities/index.ts',
  './package.json',
  './package-lock.json',
  './vibes_2021.css',
  './vibes_2021.min.css',
  './dist',
];

const statusBuffer = execSync('git status -s');
if (statusBuffer.length > 0) {
  console.error('Git working directory not clean.\n');
  process.exit(1);
}

const level = process.argv[2];
if (!['major', 'minor', 'patch'].includes(level)) {
  console.error(
    "Release version is invalid. Please specify 'major', 'minor' or 'patch'.\n"
  );
  process.exit(1);
}
execSync('npm test');
// install時に出る差分をコミットしないようにする
execSync('git checkout ./package-lock.json');

execSync(`npm version ${level} --no-git-tag-version`);
const version = require(path.resolve(__dirname, '../package.json')).version;

// Replace versions
const replaceFiles = ['src/utilities/index.ts', 'README.md'];
const versionRegexp = /[\d]+\.[\d]+\.[\d]+/g;
replaceFiles.forEach((filepath) => {
  try {
    const result = replace.sync({
      files: filepath,
      from: versionRegexp,
      to: version,
    });
    console.log('Replacement version result: ', result);
  } catch (error) {
    console.error('Replacement error: ', error);
  }
});

execSync('npm run build');
execSync(`git add -f ${commitTargets.join(' ')}`);
execSync(`git commit -m '${version}'`);
console.log(`Release commit for version ${version} created!`);
