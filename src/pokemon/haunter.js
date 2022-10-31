function haunter(level) {
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

haunter.prototype.setAttacks = function () {
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