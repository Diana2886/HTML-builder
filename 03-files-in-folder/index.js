const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'secret-folder');

fs.readdir(folder, {withFileTypes: true}, (err, data) => {
  if (err) console.log('Error', err.message);
  for (let file of data) {
    if (file.isFile()) {
      let fileFolder = path.join(__dirname, 'secret-folder', file.name);
      fs.stat(fileFolder, (error, stats) => {
        if (error) console.log('Error', error.message);
        let fileName = file.name.split('.')[0];
        let fileExt = path.extname(file.name).split('.')[1];
        let fileSize = `${(stats.size / 1024).toFixed(3)}kb`;
        console.log(`${fileName} - ${fileExt} - ${fileSize}`);
      });
    }
  }
});