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