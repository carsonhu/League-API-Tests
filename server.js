var http = require('http');
var fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn('RGAPI-09d8e37e-515b-4928-bf92-835617760a49')();
const PORT=8080;

console.log(kayn);

// kayn.Summoner.by.name('Contractz').callback(function(err, summoner) {
//   return summoner
// })
const main = async () => {
    const ctz = await kayn.Summoner.by.name('Kosan');
    console.log(ctz);
}

main();

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});
