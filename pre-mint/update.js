const fs = require('fs');
const jsonfile = require('jsonfile');
var files = fs.readdirSync('./metadata');

for(var w_i = 0; w_i < files.length; w_i++)
{
    var w_path = 'metadata/' + files[w_i];
    //console.log(w_path);
    var obj = jsonfile.readFileSync(w_path);
    obj.image = 'https://ipfs.io/ipfs/QmQAb2uTNomXovr4TipMXPqfdHhP2G4VmjwCMSebcsoYJ1/' + obj.tokenId + ".png";
    jsonfile.writeFileSync(w_path, obj);
}