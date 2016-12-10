// var marked = require('marked');
//
// // console.log(marked('I am using __markdown__!'));
//
// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log(err.stack);
//   }
//   else {
//      var contents = marked(buffer.toString());
//     fs.writeFile(process.argv[3], contents, function(err){
//       if (err) {
//         console.error(err.stack);
//       }else {
//         console.log('Success!');
//       }
//
//     });
//   }
// });

var _ = require('lodash');

var shuffled = _.shuffle([{"point": 3, "suit": "hearts"}, {"point": 10, "suit": "diamonds"}, {"point": 7, "suit": "spades"}]);

console.log(shuffled);

var request = require('request');
var cheerio = require('cheerio');

request('https:/www.npmjs.com', function(error, response, body){
  if(!error && response.statusCode ==200) {
    $ = cheerio.load(body);
    console.log(body);
    var $freqInstalled = $'(#pane-frequently-installed li h3 a');
     //need rest of code

  }
});
