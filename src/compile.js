var fs  = require('fs');
const path = require('path');

const attackList = fs.readdirSync(path.join(__dirname, 'attack'));

let attackDB = {}

// create a file that looks like the following:

// attackDB = {
//   acid_armor: function Acid_Armor() {
//     this.pp = 40;
//     this.power = 0;
//     this.accuracy = 1;
//     this.type = "Poison";
//     this.priority = 0;
//   },
// };

attackList.forEach(attack => {
    // read the file. 
    let attackFile = fs.readFileSync(path.join(__dirname, 'attack', attack), 'utf8');

    // get the name of the attack
    let attackName = (attackFile.match(/function (.*)\(/)[1]).toLowerCase();

    attackDB[attackName] = attackFile;

});

console.log(attackDB);


