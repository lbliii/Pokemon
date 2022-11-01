function Abra(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 25
    this.attack = 20
    this.defense = 15
    this.specialAttack = 105
    this.specialDefense = 55
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/abra-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/abra-back.png"

    this.setAttacks()
}

Abra.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Aerodactyl(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 105
    this.defense = 65
    this.specialAttack = 60
    this.specialDefense = 75
    this.speed = 130

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/aerodactyl-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/aerodactyl-back.png"

    this.setAttacks()
}

Aerodactyl.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Alakazam(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 50
    this.defense = 45
    this.specialAttack = 135
    this.specialDefense = 95
    this.speed = 120

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/alakazam-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/alakazam-back.png"

    this.setAttacks()
}

Alakazam.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Arbok(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 95
    this.defense = 69
    this.specialAttack = 65
    this.specialDefense = 79
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/arbok-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/arbok-back.png"

    this.setAttacks()
}

Arbok.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Bite())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Wrap())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Poison_Sting())
    }
} 
 function Arcanine(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 110
    this.defense = 80
    this.specialAttack = 100
    this.specialDefense = 80
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/arcanine-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/arcanine-back.png"

    this.setAttacks()
}

Arcanine.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bite())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bite())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bite())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bite())
    }
} 
 function Articuno(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 85
    this.defense = 100
    this.specialAttack = 95
    this.specialDefense = 125
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/articuno-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/articuno-back.png"

    this.setAttacks()
}

Articuno.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ice_Beam())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ice_Beam())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ice_Beam())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ice_Beam())
    }
} 
 function Beedrill(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 90
    this.defense = 40
    this.specialAttack = 45
    this.specialDefense = 80
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/beedrill-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/beedrill-back.png"

    this.setAttacks()
}

Beedrill.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Poison_Sting())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Twineedle())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Fury_Attack())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Rage())
    }
} 
 function Bellsprout(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 75
    this.defense = 35
    this.specialAttack = 70
    this.specialDefense = 30
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/bellsprout-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/bellsprout-back.png"

    this.setAttacks()
}

Bellsprout.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Blastoise(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 79
    this.attack = 83
    this.defense = 100
    this.specialAttack = 85
    this.specialDefense = 105
    this.speed = 78

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/blastoise-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/blastoise-back.png"

    this.setAttacks()
}

Blastoise.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Withdraw())
    }
} 
 function Bulbasaur(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 49
    this.defense = 49
    this.specialAttack = 65
    this.specialDefense = 65
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/bulbasaur-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/bulbasaur-back.png"

    this.setAttacks()
}

Bulbasaur.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Vine_Whip())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Poison_Powder())
    }
} 
 function Butterfree(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 45
    this.defense = 50
    this.specialAttack = 90
    this.specialDefense = 80
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/butterfree-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/butterfree-back.png"

    this.setAttacks()
}

Butterfree.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Super_Sonic())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Psybeam())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Stun_Spore())
    }
} 
 function Caterpie(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 30
    this.defense = 35
    this.specialAttack = 20
    this.specialDefense = 20
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/caterpie-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/caterpie-back.png"

    this.setAttacks()
}

Caterpie.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new String_Shot())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Bug_Bite())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Poison_Powder())
    }
} 
 function Chansey(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 250
    this.attack = 5
    this.defense = 5
    this.specialAttack = 35
    this.specialDefense = 105
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/chansey-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/chansey-back.png"

    this.setAttacks()
}

Chansey.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
} 
 function Charizard(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 78
    this.attack = 84
    this.defense = 78
    this.specialAttack = 109
    this.specialDefense = 85
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charizard-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charizard-back.png"

    this.setAttacks()
}

Charizard.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Smokescreen())
    }
} 
 function Charmander(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 39
    this.attack = 52
    this.defense = 43
    this.specialAttack = 60
    this.specialDefense = 50
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charmander-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charmander-back.png"

    this.setAttacks()
}

Charmander.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Smokescreen())
    }
} 
 function Charmeleon(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 58
    this.attack = 64
    this.defense = 58
    this.specialAttack = 80
    this.specialDefense = 65
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charmeleon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charmeleon-back.png"

    this.setAttacks()
}

Charmeleon.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Scratch())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Growl())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Ember())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Smokescreen())
    }
} 
 function Clefable(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 70
    this.defense = 73
    this.specialAttack = 95
    this.specialDefense = 90
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/clefable-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/clefable-back.png"

    this.setAttacks()
}

Clefable.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Sing())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Metronome())
    }
} 
 function Clefairy(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 45
    this.defense = 48
    this.specialAttack = 60
    this.specialDefense = 65
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/clefairy-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/clefairy-back.png"

    this.setAttacks()
}

Clefairy.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (5 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (9 <= this.level) {
        this.attack3 = new Attack(new Sing())
    }
    if (13 <= this.level) {
        this.attack4 = new Attack(new Metronome())
    }
}
 
 function Cloyster(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 95
    this.defense = 180
    this.specialAttack = 85
    this.specialDefense = 45
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/cloyster-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/cloyster-back.png"

    this.setAttacks()
}

Cloyster.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Cubone(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 50
    this.defense = 95
    this.specialAttack = 40
    this.specialDefense = 50
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/cubone-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/cubone-back.png"

    this.setAttacks()
}

Cubone.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Dewgong(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 70
    this.defense = 80
    this.specialAttack = 70
    this.specialDefense = 95
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dewgong-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dewgong-back.png"

    this.setAttacks()
}

Dewgong.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Ice_Beam())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Ice_Beam())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Ice_Beam())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Ice_Beam())
    }
} 
 function Diglett(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 10
    this.attack = 55
    this.defense = 25
    this.specialAttack = 35
    this.specialDefense = 45
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/diglett-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/diglett-back.png"

    this.setAttacks()
}

Diglett.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Ditto(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 48
    this.attack = 48
    this.defense = 48
    this.specialAttack = 48
    this.specialDefense = 48
    this.speed = 48

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ditto-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ditto-back.png"

    this.setAttacks()
}

Ditto.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Transform())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Transform())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Transform())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Transform())
    }
} 
 function Dodrio(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 110
    this.defense = 70
    this.specialAttack = 60
    this.specialDefense = 60
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dodrio-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dodrio-back.png"

    this.setAttacks()
}

Dodrio.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Peck())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Peck())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Peck())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Peck())
    }
} 
 function Doduo(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 85
    this.defense = 45
    this.specialAttack = 35
    this.specialDefense = 35
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/doduo-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/doduo-back.png"

    this.setAttacks()
}

Doduo.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Peck())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Peck())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Peck())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Peck())
    }
}
 
 function Dragonair(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 61
    this.attack = 84
    this.defense = 65
    this.specialAttack = 70
    this.specialDefense = 70
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dragonair-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dragonair-back.png"

    this.setAttacks()
}

Dragonair.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Dragon_Rage())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Dragon_Rage())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Dragon_Rage())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Dragon_Rage())
    }
} 
 function Dragonite(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 91
    this.attack = 134
    this.defense = 95
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dragonite-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dragonite-back.png"

    this.setAttacks()
}

Dragonite.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Dragon_Rage())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Dragon_Rage())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Dragon_Rage())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Dragon_Rage())
    }
} 
 function Dratini(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 41
    this.attack = 64
    this.defense = 45
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dratini-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dratini-back.png"

    this.setAttacks()
}

Dratini.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Wrap())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Wrap())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Wrap())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Wrap())
    }
} 
 function Drowzee(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 48
    this.defense = 45
    this.specialAttack = 43
    this.specialDefense = 90
    this.speed = 42

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/drowzee-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/drowzee-back.png"

    this.setAttacks()
}

Drowzee.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Dugtrio(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 80
    this.defense = 50
    this.specialAttack = 50
    this.specialDefense = 70
    this.speed = 120

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dugtrio-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dugtrio-back.png"

    this.setAttacks()
}

Dugtrio.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
}
 
 function Eevee(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 55
    this.defense = 50
    this.specialAttack = 45
    this.specialDefense = 65
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/eevee-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/eevee-back.png"

    this.setAttacks()
}

Eevee.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Ekans(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 60
    this.defense = 44
    this.specialAttack = 40
    this.specialDefense = 54
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ekans-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ekans-back.png"

    this.setAttacks()
}

Ekans.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Wrap())
    }
    if (5 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if (9 <= this.level){
        this.attack3 = new Attack(new Poison_Sting())
    }
    if (13 <= this.level){
        this.attack4 = new Attack(new Bite())
    }
} 
 function Electabuzz(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 83
    this.defense = 57
    this.specialAttack = 95
    this.specialDefense = 85
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/electabuzz-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/electabuzz-back.png"

    this.setAttacks()
}

Electabuzz.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Quick_Attack())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Quick_Attack())
    }
} 
 function Electrode(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 50
    this.defense = 70
    this.specialAttack = 80
    this.specialDefense = 80
    this.speed = 140

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/electrode-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/electrode-back.png"

    this.setAttacks()
}

Electrode.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Exeggcute(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 40
    this.defense = 80
    this.specialAttack = 60
    this.specialDefense = 45
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/exeggcute-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/exeggcute-back.png"

    this.setAttacks()
}

Exeggcute.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Exeggutor(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 95
    this.defense = 85
    this.specialAttack = 125
    this.specialDefense = 65
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/exeggutor-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/exeggutor-back.png"

    this.setAttacks()
}

Exeggutor.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Farfetchd(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 52
    this.attack = 65
    this.defense = 55
    this.specialAttack = 58
    this.specialDefense = 62
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/farfetchd-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/farfetchd-back.png"

    this.setAttacks()
}

Farfetchd.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Peck())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Peck())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Peck())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Peck())
    }
} 
 function Fearow(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 90
    this.defense = 65
    this.specialAttack = 61
    this.specialDefense = 61
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/fearow-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/fearow-back.png"

    this.setAttacks()
}

Fearow.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Peck())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Peck())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Peck())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Peck())
    }
} 
 function Flareon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 130
    this.defense = 60
    this.specialAttack = 95
    this.specialDefense = 110
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/flareon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/flareon-back.png"

    this.setAttacks()
}

Flareon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Gastly(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 35
    this.defense = 30
    this.specialAttack = 100
    this.specialDefense = 35
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gastly-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gastly-back.png"

    this.setAttacks()
}

Gastly.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Lick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Lick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Lick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Lick())
    }
} 
 function Gengar(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 65
    this.defense = 60
    this.specialAttack = 130
    this.specialDefense = 75
    this.speed = 110

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gengar-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gengar-back.png"

    this.setAttacks()
}

Gengar.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Lick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Lick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Lick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Lick())
    }
} 
 function Geodude(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 80
    this.defense = 100
    this.specialAttack = 30
    this.specialDefense = 30
    this.speed = 20

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/geodude-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/geodude-back.png"

    this.setAttacks()
}

Geodude.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Gloom(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 65
    this.defense = 70
    this.specialAttack = 85
    this.specialDefense = 75
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gloom-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gloom-back.png"

    this.setAttacks()
}

Gloom.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Golbat(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 80
    this.defense = 70
    this.specialAttack = 65
    this.specialDefense = 75
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/golbat-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/golbat-back.png"

    this.setAttacks()
}

Golbat.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Goldeen(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 67
    this.defense = 60
    this.specialAttack = 35
    this.specialDefense = 50
    this.speed = 63

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/goldeen-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/goldeen-back.png"

    this.setAttacks()
}

Goldeen.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Golduck(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 82
    this.defense = 78
    this.specialAttack = 95
    this.specialDefense = 80
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/golduck-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/golduck-back.png"

    this.setAttacks()
}

Golduck.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Golem(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 110
    this.defense = 130
    this.specialAttack = 55
    this.specialDefense = 65
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/golem-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/golem-back.png"

    this.setAttacks()
}

Golem.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Graveler(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 95
    this.defense = 115
    this.specialAttack = 45
    this.specialDefense = 45
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/graveler-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/graveler-back.png"

    this.setAttacks()
}

Graveler.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Grimer(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 80
    this.defense = 50
    this.specialAttack = 40
    this.specialDefense = 50
    this.speed = 25

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/grimer-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/grimer-back.png"

    this.setAttacks()
}

Grimer.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Growlithe(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 70
    this.defense = 45
    this.specialAttack = 70
    this.specialDefense = 50
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/growlithe-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/growlithe-back.png"

    this.setAttacks()
}

Growlithe.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ember())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ember())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ember())
    }
} 
 function Gyarados(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 125
    this.defense = 79
    this.specialAttack = 60
    this.specialDefense = 100
    this.speed = 81

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gyarados-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gyarados-back.png"

    this.setAttacks()
}

Gyarados.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bite())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bite())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bite())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bite())
    }
} 
 function Haunter(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 50
    this.defense = 45
    this.specialAttack = 115
    this.specialDefense = 55
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/haunter-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/haunter-back.png"

    this.setAttacks()
}

Haunter.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Lick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Lick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Lick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Lick())
    }
} 
 function Hitmonchan(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 105
    this.defense = 79
    this.specialAttack = 35
    this.specialDefense = 110
    this.speed = 76

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/hitmonchan-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/hitmonchan-back.png"

    this.setAttacks()
}

Hitmonchan.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Comet_Punch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Comet_Punch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Comet_Punch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Comet_Punch())
    }
} 
 function Hitmonlee(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 120
    this.defense = 53
    this.specialAttack = 35
    this.specialDefense = 110
    this.speed = 87

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/hitmonlee-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/hitmonlee-back.png"

    this.setAttacks()
}

Hitmonlee.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Rolling_Kick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Rolling_Kick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Rolling_Kick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Rolling_Kick())
    }
} 
 function Horsea(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 40
    this.defense = 70
    this.specialAttack = 70
    this.specialDefense = 25
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/horsea-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/horsea-back.png"

    this.setAttacks()
}

Horsea.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Leer())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Agility())
    }
} 
 function Hypno(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 85
    this.attack = 73
    this.defense = 70
    this.specialAttack = 73
    this.specialDefense = 115
    this.speed = 67

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/hypno-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/hypno-back.png"

    this.setAttacks()
}

Hypno.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Ivysaur(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 62
    this.defense = 63
    this.specialAttack = 80
    this.specialDefense = 80
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ivysaur-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ivysaur-back.png"

    this.setAttacks()
}

Ivysaur.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Growl())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Vine_Whip())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Poison_Powder())
    }
} 
 function Jigglypuff(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 115
    this.attack = 45
    this.defense = 20
    this.specialAttack = 45
    this.specialDefense = 25
    this.speed = 20

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/jigglypuff-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/jigglypuff-back.png"

    this.setAttacks()
}

Jigglypuff.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
} 
 function Jolteon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 65
    this.defense = 60
    this.specialAttack = 110
    this.specialDefense = 95
    this.speed = 130

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/jolteon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/jolteon-back.png"

    this.setAttacks()
}

Jolteon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Jynx(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 50
    this.defense = 35
    this.specialAttack = 115
    this.specialDefense = 95
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/jynx-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/jynx-back.png"

    this.setAttacks()
}

Jynx.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
} 
 function Kabuto(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 80
    this.defense = 90
    this.specialAttack = 55
    this.specialDefense = 45
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kabuto-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kabuto-back.png"

    this.setAttacks()
}

Kabuto.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Kabutops(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 115
    this.defense = 105
    this.specialAttack = 65
    this.specialDefense = 70
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kabutops-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kabutops-back.png"

    this.setAttacks()
}

Kabutops.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Horn_Attack())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Horn_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Horn_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Horn_Attack())
    }
} 
 function Kadabra(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 35
    this.defense = 30
    this.specialAttack = 120
    this.specialDefense = 70
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kadabra-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kadabra-back.png"

    this.setAttacks()
}

Kadabra.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Kakuna(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 25
    this.defense = 50
    this.specialAttack = 25
    this.specialDefense = 25
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kakuna-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kakuna-back.png"

    this.setAttacks()
}

Kakuna.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Harden())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Harden())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Harden())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Harden())
    }
} 
 function Kangaskhan(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 105
    this.attack = 95
    this.defense = 80
    this.specialAttack = 40
    this.specialDefense = 80
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kangaskhan-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kangaskhan-back.png"

    this.setAttacks()
}

Kangaskhan.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Kingler(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 130
    this.defense = 115
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kingler-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kingler-back.png"

    this.setAttacks()
}

Kingler.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Crab_Hammer())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Crab_Hammer())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Crab_Hammer())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Crab_Hammer())
    }
} 
 function Koffing(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 65
    this.defense = 95
    this.specialAttack = 60
    this.specialDefense = 45
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/koffing-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/koffing-back.png"

    this.setAttacks()
}

Koffing.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Krabby(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 105
    this.defense = 90
    this.specialAttack = 25
    this.specialDefense = 25
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/krabby-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/krabby-back.png"

    this.setAttacks()
}

Krabby.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bubble())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bubble())
    }
} 
 function Lapras(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 130
    this.attack = 85
    this.defense = 80
    this.specialAttack = 85
    this.specialDefense = 95
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/lapras-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/lapras-back.png"

    this.setAttacks()
}

Lapras.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Lickitung(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 55
    this.defense = 75
    this.specialAttack = 60
    this.specialDefense = 75
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/lickitung-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/lickitung-back.png"

    this.setAttacks()
}

Lickitung.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Lick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Lick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Lick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Lick())
    }
} 
 function Machamp(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 130
    this.defense = 80
    this.specialAttack = 65
    this.specialDefense = 85
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machamp-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machamp-back.png"

    this.setAttacks()
}

Machamp.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Machoke(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 100
    this.defense = 70
    this.specialAttack = 50
    this.specialDefense = 60
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machoke-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machoke-back.png"

    this.setAttacks()
}

Machoke.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Karate_Chop())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Karate_Chop())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Karate_Chop())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Karate_Chop())
    }
} 
 function Machop(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 80
    this.defense = 50
    this.specialAttack = 35
    this.specialDefense = 35
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machop-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machop-back.png"

    this.setAttacks()
}

Machop.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Magikarp(level) {
  this.level = level;
  this.maxHealth = level * 2 + 5;
  this.attack1;
  this.attack2;
  this.attack3;
  this.attack4;

  this.hp = 20;
  this.attack = 10;
  this.defense = 55;
  this.specialAttack = 15;
  this.specialDefense = 20;
  this.speed = 80;

  this.img_front = new Image();
  this.img_front.src = "images/pokemon/magikarp-front.png";
  this.img_back = new Image();
  this.img_back.src = "images/pokemon/magikarp-back.png";

  this.setAttacks();
}

Magikarp.prototype.setAttacks = function () {
  if (1 <= this.level) {
    this.attack1 = new Attack(new Splash());
  }
  if (4 <= this.level) {
    this.attack2 = new Attack(new Splash());
  }
  if (7 <= this.level) {
    this.attack3 = new Attack(new Splash());
  }
  if (10 <= this.level) {
    this.attack4 = new Attack(new Splash());
  }
};
 
 function Magmar(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 95
    this.defense = 57
    this.specialAttack = 100
    this.specialDefense = 85
    this.speed = 93

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/magmar-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/magmar-back.png"

    this.setAttacks()
}

Magmar.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ember())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ember())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ember())
    }
} 
 function Magnemite(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 25
    this.attack = 35
    this.defense = 70
    this.specialAttack = 95
    this.specialDefense = 55
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/magnemite-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/magnemite-back.png"

    this.setAttacks()
}

Magnemite.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Magneton(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 60
    this.defense = 95
    this.specialAttack = 120
    this.specialDefense = 70
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/magneton-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/magneton-back.png"

    this.setAttacks()
}

Magneton.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Mankey(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 80
    this.defense = 35
    this.specialAttack = 35
    this.specialDefense = 45
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mankey-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mankey-back.png"

    this.setAttacks()
}

Mankey.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Marowak(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 80
    this.defense = 110
    this.specialAttack = 50
    this.specialDefense = 80
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/marowak-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/marowak-back.png"

    this.setAttacks()
}

Marowak.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Meowth(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 35
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/meowth-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/meowth-back.png"

    this.setAttacks()
}

Meowth.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Metapod(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 20
    this.defense = 55
    this.specialAttack = 25
    this.specialDefense = 25
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/metapod-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/metapod-back.png"

    this.setAttacks()
}

Metapod.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Harden())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Harden())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Harden())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Harden())
    }
} 
 function Mew(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 100
    this.attack = 100
    this.defense = 100
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mew-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mew-back.png"

    this.setAttacks()
}

Mew.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Psychic())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Psychic())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Psychic())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Psychic())
    }
} 
 function Mewtwo(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 106
    this.attack = 110
    this.defense = 90
    this.specialAttack = 154
    this.specialDefense = 90
    this.speed = 130

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mewtwo-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mewtwo-back.png"

    this.setAttacks()
}

Mewtwo.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Moltres(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 100
    this.defense = 90
    this.specialAttack = 125
    this.specialDefense = 85
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/moltres-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/moltres-back.png"

    this.setAttacks()
}

Moltres.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Fire_Blast())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Fire_Blast())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Fire_Blast())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Fire_Blast())
    }
} 
 function Mrmime(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 65
    this.specialAttack = 100
    this.specialDefense = 120
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mrmime-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mrmime-back.png"

    this.setAttacks()
}

Mrmime.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Muk(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 105
    this.attack = 105
    this.defense = 75
    this.specialAttack = 65
    this.specialDefense = 100
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/muk-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/muk-back.png"

    this.setAttacks()
}

Muk.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
} 
 function Nidoking(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 81
    this.attack = 102
    this.defense = 77
    this.specialAttack = 85
    this.specialDefense = 75
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoking-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoking-back.png"

    this.setAttacks()
}

Nidoking.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Nidoqueen(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 92
    this.defense = 87
    this.specialAttack = 75
    this.specialDefense = 85
    this.speed = 76

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoqueen-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoqueen-back.png"

    this.setAttacks()
}

Nidoqueen.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function NidoranF(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 47
    this.defense = 52
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 41

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoran-f-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoran-f-back.png"

    this.setAttacks()
}

NidoranF.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function NidoranM(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 46
    this.attack = 57
    this.defense = 40
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoran-m-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoran-m-back.png"

    this.setAttacks()
}

NidoranM.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Nidorina(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 62
    this.defense = 67
    this.specialAttack = 55
    this.specialDefense = 55
    this.speed = 56

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidorina-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidorina-back.png"

    this.setAttacks()
}

Nidorina.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Nidorino(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 61
    this.attack = 72
    this.defense = 57
    this.specialAttack = 55
    this.specialDefense = 55
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidorino-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidorino-back.png"

    this.setAttacks()
}

Nidorino.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Ninetales(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 73
    this.attack = 76
    this.defense = 75
    this.specialAttack = 81
    this.specialDefense = 100
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ninetales-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ninetales-back.png"

    this.setAttacks()
}

Ninetales.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Oddish(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 50
    this.defense = 55
    this.specialAttack = 75
    this.specialDefense = 65
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/oddish-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/oddish-back.png"

    this.setAttacks()
}

Oddish.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Absorb())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Absorb())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Absorb())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Absorb())
    }
}
 
 function Omanyte(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 40
    this.defense = 100
    this.specialAttack = 90
    this.specialDefense = 55
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/omanyte-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/omanyte-back.png"

    this.setAttacks()
}

Omanyte.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Omastar(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 60
    this.defense = 125
    this.specialAttack = 115
    this.specialDefense = 70
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/omastar-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/omastar-back.png"

    this.setAttacks()
}

Omastar.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Water_Gun())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Water_Gun())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Water_Gun())
    }
} 
 function Onix(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 45
    this.defense = 160
    this.specialAttack = 30
    this.specialDefense = 45
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/onix-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/onix-back.png"

    this.setAttacks()
}

Onix.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Paras(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 70
    this.defense = 55
    this.specialAttack = 45
    this.specialDefense = 55
    this.speed = 25

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/paras-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/paras-back.png"

    this.setAttacks()
}

Paras.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
}
 
 function Parasect(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 95
    this.defense = 80
    this.specialAttack = 60
    this.specialDefense = 80
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/parasect-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/parasect-back.png"

    this.setAttacks()
}

Parasect.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Persian(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 70
    this.defense = 60
    this.specialAttack = 65
    this.specialDefense = 65
    this.speed = 115

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/persian-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/persian-back.png"

    this.setAttacks()
}

Persian.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
}
 
 function Pidgeot(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 83
    this.attack = 80
    this.defense = 75
    this.specialAttack = 70
    this.specialDefense = 70
    this.speed = 101

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pidgeot-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pidgeot-back.png"

    this.setAttacks()
}

Pidgeot.prototype.setAttacks = function() {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Sand_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Gust())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Whirlwind())
    }
} 
 function Pidgeotto(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 63
    this.attack = 60
    this.defense = 55
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 71

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pidgeotto-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pidgeotto-back.png"

    this.setAttacks()
}

Pidgeotto.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Sand_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Whirlwind())
    }
} 
 function Pidgey(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 40
    this.specialAttack = 35
    this.specialDefense = 35
    this.speed = 56

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pidgey-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pidgey-back.png"

    this.setAttacks()
}

Pidgey.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (5 <= this.level) {
        this.attack2 = new Attack(new Sand_Attack())
    }
    if (9 <= this.level) {
        this.attack3 = new Attack(new Gust())
    }
    if (13 <= this.level) {
        this.attack4 = new Attack(new Quick_Attack())
    }
}
 
 function Pikachu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 55
    this.defense = 30
    this.specialAttack = 50
    this.specialDefense = 40
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pikachu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pikachu-back.png"

    this.setAttacks()
}

Pikachu.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Thunder_Shock())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Thunderbolt())
    }
} 
 function Pinsir(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 125
    this.defense = 100
    this.specialAttack = 55
    this.specialDefense = 70
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pinsir-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pinsir-back.png"

    this.setAttacks()
}

Pinsir.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Poliwag(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 50
    this.defense = 40
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/poliwag-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/poliwag-back.png"

    this.setAttacks()
}

Poliwag.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bubble())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bubble())
    }
} 
 function Poliwhirl(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 65
    this.defense = 65
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/poliwhirl-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/poliwhirl-back.png"

    this.setAttacks()
}

Poliwhirl.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bubble())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bubble())
    }
} 
 function Poliwrath(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 95
    this.defense = 95
    this.specialAttack = 70
    this.specialDefense = 90
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/poliwrath-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/poliwrath-back.png"

    this.setAttacks()
}

Poliwrath.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Ponyta(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 85
    this.defense = 55
    this.specialAttack = 65
    this.specialDefense = 65
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ponyta-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ponyta-back.png"

    this.setAttacks()
}

Ponyta.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ember())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ember())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ember())
    }
} 
 function Porygon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 60
    this.defense = 70
    this.specialAttack = 85
    this.specialDefense = 75
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/porygon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/porygon-back.png"

    this.setAttacks()
}

Porygon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Primeape(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 105
    this.defense = 60
    this.specialAttack = 60
    this.specialDefense = 70
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/primeape-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/primeape-back.png"

    this.setAttacks()
}

Primeape.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Psyduck(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 52
    this.defense = 48
    this.specialAttack = 65
    this.specialDefense = 50
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/psyduck-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/psyduck-back.png"

    this.setAttacks()
}

Psyduck.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Raichu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 90
    this.defense = 55
    this.specialAttack = 90
    this.specialDefense = 80
    this.speed = 110

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/raichu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/raichu-back.png"

    this.setAttacks()
}

Raichu.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Thunder_Shock())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Thunderbolt())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Thunder())
    }
} 
 function Rapidash(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 100
    this.defense = 70
    this.specialAttack = 80
    this.specialDefense = 80
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rapidash-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rapidash-back.png"

    this.setAttacks()
}

Rapidash.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ember())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ember())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ember())
    }
} 
 function Raticate(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 81
    this.defense = 60
    this.specialAttack = 50
    this.specialDefense = 70
    this.speed = 97

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/raticate-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/raticate-back.png"

    this.setAttacks()
}

Raticate.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Hyper_Fang())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Super_Fang())
    }
} 
 function Rattata(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 56
    this.defense = 35
    this.specialAttack = 25
    this.specialDefense = 35
    this.speed = 72

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rattata-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rattata-back.png"

    this.setAttacks()
}

Rattata.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (4 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level) {
        this.attack4 = new Attack(new Focus_Energy())
    }
}
 
 function Rhydon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 105
    this.attack = 130
    this.defense = 120
    this.specialAttack = 45
    this.specialDefense = 45
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rhydon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rhydon-back.png"

    this.setAttacks()
}

Rhydon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Rhyhorn(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 85
    this.defense = 95
    this.specialAttack = 30
    this.specialDefense = 30
    this.speed = 25

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rhyhorn-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rhyhorn-back.png"

    this.setAttacks()
}

Rhyhorn.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Horn_Attack())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Horn_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Horn_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Horn_Attack())
    }
} 
 function Sandshrew(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 75
    this.defense = 85
    this.specialAttack = 20
    this.specialDefense = 30
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/sandshrew-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/sandshrew-back.png"

    this.setAttacks()
}

Sandshrew.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Defense_Curl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Sand_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Swift())
    }
} 
 function Sandslash(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 100
    this.defense = 110
    this.specialAttack = 45
    this.specialDefense = 55
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/sandslash-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/sandslash-back.png"

    this.setAttacks()
}

Sandslash.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Scyther(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 110
    this.defense = 80
    this.specialAttack = 55
    this.specialDefense = 80
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/scyther-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/scyther-back.png"

    this.setAttacks()
}

Scyther.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Slash())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Slash())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Slash())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Slash())
    }
} 
 function Seadra(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 65
    this.defense = 95
    this.specialAttack = 95
    this.specialDefense = 45
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/seadra-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/seadra-back.png"

    this.setAttacks()
}

Seadra.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Seaking(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 92
    this.defense = 65
    this.specialAttack = 65
    this.specialDefense = 80
    this.speed = 68

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/seaking-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/seaking-back.png"

    this.setAttacks()
}

Seaking.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Horn_Attack())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Horn_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Horn_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Horn_Attack())
    }
} 
 function Seel(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 45
    this.defense = 55
    this.specialAttack = 45
    this.specialDefense = 70
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/seel-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/seel-back.png"

    this.setAttacks()
}

Seel.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Shellder(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 65
    this.defense = 100
    this.specialAttack = 45
    this.specialDefense = 25
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/shellder-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/shellder-back.png"

    this.setAttacks()
}

Shellder.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Slowbro(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 75
    this.defense = 110
    this.specialAttack = 100
    this.specialDefense = 80
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/slowbro-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/slowbro-back.png"

    this.setAttacks()
}

Slowbro.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Slowpoke(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 65
    this.defense = 65
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 15

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/slowpoke-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/slowpoke-back.png"

    this.setAttacks()
}

Slowpoke.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
} 
 function Snorlax(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 160
    this.attack = 110
    this.defense = 65
    this.specialAttack = 65
    this.specialDefense = 110
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/snorlax-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/snorlax-back.png"

    this.setAttacks()
}

Snorlax.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Spearow(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 60
    this.defense = 30
    this.specialAttack = 31
    this.specialDefense = 31
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/spearow-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/spearow-back.png"

    this.setAttacks()
}

Spearow.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Peck())
    }
    if (5 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if (9 <= this.level){
        this.attack3 = new Attack(new Fury_Attack())
    }
    if (13 <= this.level){
        this.attack4 = new Attack(new Drill_Peck())
    }
} 
 function Squirtle(level) {
    this.level = level
    this.maxHealth = level * 3 + 10
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 44
    this.attack = 48
    this.defense = 65
    this.specialAttack = 50
    this.specialDefense = 64
    this.speed = 43

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/squirtle-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/squirtle-back.png"

    this.setAttacks()
}

Squirtle.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Withdraw())
    }
}

 
 function Starmie(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 75
    this.defense = 85
    this.specialAttack = 100
    this.specialDefense = 85
    this.speed = 115

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/starmie-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/starmie-back.png"

    this.setAttacks()
}

Starmie.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Water_Gun())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Water_Gun())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Water_Gun())
    }
} 
 function Staryu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 45
    this.defense = 55
    this.specialAttack = 70
    this.specialDefense = 55
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/staryu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/staryu-back.png"

    this.setAttacks()
}

Staryu.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Tangela(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 55
    this.defense = 115
    this.specialAttack = 100
    this.specialDefense = 40
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/tangela-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/tangela-back.png"

    this.setAttacks()
}

Tangela.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Vine_Whip())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Vine_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Vine_Whip())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Vine_Whip())
    }
} 
 function Tauros(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 100
    this.defense = 95
    this.specialAttack = 40
    this.specialDefense = 70
    this.speed = 110

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/tauros-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/tauros-back.png"

    this.setAttacks()
}

Tauros.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Tentacool(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 40
    this.defense = 35
    this.specialAttack = 50
    this.specialDefense = 100
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/tentacool-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/tentacool-back.png"

    this.setAttacks()
}

Tentacool.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Tentacruel(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 70
    this.defense = 65
    this.specialAttack = 80
    this.specialDefense = 120
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/tentacruel-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/tentacruel-back.png"

    this.setAttacks()
}

Tentacruel.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
} 
 function Vaporeon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 130
    this.attack = 65
    this.defense = 60
    this.specialAttack = 110
    this.specialDefense = 95
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/vaporeon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/vaporeon-back.png"

    this.setAttacks()
}

Vaporeon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Venomoth(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 65
    this.defense = 60
    this.specialAttack = 90
    this.specialDefense = 75
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/venomoth-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/venomoth-back.png"

    this.setAttacks()
}

Venomoth.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Venonat(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 55
    this.defense = 50
    this.specialAttack = 40
    this.specialDefense = 55
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/venonat-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/venonat-back.png"

    this.setAttacks()
}

Venonat.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Venusaur(level){ 
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 82
    this.defense = 83
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/venusaur-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/venusaur-back.png"

    this.setAttacks()
}

Venusaur.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Growl())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Vine_Whip())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Poison_Powder())
    }
} 
 function Victreebel(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 105
    this.defense = 65
    this.specialAttack = 100
    this.specialDefense = 60
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/victreebel-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/victreebel-back.png"

    this.setAttacks()
}

Victreebel.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
} 
 function Vileplume(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 80
    this.defense = 85
    this.specialAttack = 110
    this.specialDefense = 90
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/vileplume-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/vileplume-back.png"

    this.setAttacks()
}

Vileplume.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
} 
 function Voltorb(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 30
    this.defense = 50
    this.specialAttack = 55
    this.specialDefense = 55
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/voltorb-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/voltorb-back.png"

    this.setAttacks()
}

Voltorb.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Vulpix(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 38
    this.attack = 41
    this.defense = 40
    this.specialAttack = 50
    this.specialDefense = 65
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/vulpix-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/vulpix-back.png"

    this.setAttacks()   
}

Vulpix.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
} 
 function Wartortle(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 59
    this.attack = 63
    this.defense = 80
    this.specialAttack = 65
    this.specialDefense = 80
    this.speed = 58

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/wartortle-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/wartortle-back.png"

    this.setAttacks()
}

Wartortle.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Withdraw())
    }
} 
 function Weedle(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 35
    this.defense = 30
    this.specialAttack = 20
    this.specialDefense = 20
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/weedle-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/weedle-back.png"

    this.setAttacks()
}

Weedle.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Poison_Sting())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new String_Shot())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Bug_Bite())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Poison_Powder())
    }
} 
 function Weepinbell(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 90
    this.defense = 50
    this.specialAttack = 85
    this.specialDefense = 45
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/weepinbell-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/weepinbell-back.png"

    this.setAttacks()
}

Weepinbell.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
}
 
 function Weezing(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 90
    this.defense = 120
    this.specialAttack = 85
    this.specialDefense = 70
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/weezing-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/weezing-back.png"

    this.setAttacks()
}

Weezing.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
} 
 function Wigglytuff(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 140
    this.attack = 70
    this.defense = 45
    this.specialAttack = 85
    this.specialDefense = 50
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/wigglytuff-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/wigglytuff-back.png"

    this.setAttacks()
}

Wigglytuff.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
} 
 function Zapdos(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 85
    this.defense = 100
    this.specialAttack = 95
    this.specialDefense = 125
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/zapdos-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/zapdos-back.png"

    this.setAttacks()
}

Zapdos.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ice_Beam())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ice_Beam())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ice_Beam())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ice_Beam())
    }
} 
 function Zubat(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 35
    this.specialAttack = 30
    this.specialDefense = 40
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/zubat-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/zubat-back.png"

    this.setAttacks()
}

Zubat.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bite())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bite())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bite())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bite())
    }
} 
 