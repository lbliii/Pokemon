function oddish(level) {
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

oddish.prototype.setAttacks = function () {
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
