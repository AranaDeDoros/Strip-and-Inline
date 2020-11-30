
//node script kargs...
//input output
//'./in/' './out/'

const juice = require('juice');
const stripHtmlComments = require('strip-html-comments')
const fs = require('fs');
let origin = './in/';
let target = './out/';

if(process.argv[2]){
    origin = process.argv[2].endsWith("/") ? process.argv[2] : process.argv[2]+"/";
}

if(process.argv[3]){
    target = process.argv[3].endsWith("/") ? process.argv[3] : process.argv[3]+"/";
}

const options = {
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: true,
    applyWidthAttributes: true,
    applyAttributesTableElements: true,
}

const fileNames = fs.readdirSync(origin).map(file => file);

console.info(fileNames.join('\n'));

fs.readdirSync(origin).forEach(file =>{

  fs.readFile(origin+file, 'utf8', function (err,html) {
      if (err) {
        return console.log(err);
      }
      console.info("STRIPPING COMMENTS");
      let str = stripHtmlComments(html);
      console.log(str);

     console.info("INLINING CSS");
      let fileName = file;
      let res = juice(str, options);

         fs.writeFile(target+fileName, res, function (err) {
            console.log(target+fileName);
              if (err) return console.log("writting err "+ err);
              console.log('written to' + target+fileName, res.length);
            });

    });
});
