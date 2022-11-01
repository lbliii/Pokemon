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