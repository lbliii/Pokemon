function zapados(level) {
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
    this.img_front.src = "images/pokemon/zapados-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/zapados-back.png"

    this.setAttacks()
}

zapados.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new IceBeam())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new IceBeam())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new IceBeam())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new IceBeam())
    }
}