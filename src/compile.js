const fs  = require('fs');
const path = require('path');

const attackList = fs.readdirSync(path.join(__dirname, 'attack'));
console.log(attackList);



//for each attack, add the script to the index.html (for example, <script src="src/attack/attack_name>.js"></script>)

let attackListHtml = '';
attackList.forEach((attack) => {
    attackListHtml += `<script src="/src/attack/${attack}"></script>`;
});
console.log(attackListHtml);


const pokemonList = fs.readdirSync(path.join(__dirname, 'pokemon'));
console.log(pokemonList);


let pokemonListHtml = '';
pokemonList.forEach((pokemon) => {
    pokemonListHtml += `<script src="/src/pokemon/${pokemon}"></script>`;
});
console.log(pokemonListHtml);
