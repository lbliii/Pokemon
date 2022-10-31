function bellsprout(level) {
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

bellsprout.prototype.setAttacks = function () {
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