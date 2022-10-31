function lickitung(level) {
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

lickitung.prototype.setAttacks = function () {
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