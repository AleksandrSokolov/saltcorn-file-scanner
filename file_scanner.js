// https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
//const dirPath = path.join(__dirname, 'Documents');
//const dirPath = path.join('/home/asokolov','Documents');
//const dirPath = path.join('/home/asokolov','Downloads');
const dirPath = path.join('/media/asokolov/WDC2TB','backups');
//passsing directoryPath and callback function
let f_count=0;
const getAllFiles = (dirPath) => {
    console.log("Scan dir:" + dirPath);
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {

        if (file.isDirectory()) {
           getAllFiles(dirPath + '/' + file.name);
        } else {
           f_count++;
           console.log(f_count + '>' + dirPath + '/' + file.name);+
        }
    };
};
// main
getAllFiles(dirPath);
