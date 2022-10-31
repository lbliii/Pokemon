function hitmonlee(level) {
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

hitmonlee.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new RollingKick())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new RollingKick())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new RollingKick())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new RollingKick())
    }
}