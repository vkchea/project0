
const fs = require('fs');
const dir = './iamges0';
fs.readdir(dir, (err, files)=>{
    console.log(files.length);
})
