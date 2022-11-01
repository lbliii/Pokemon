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