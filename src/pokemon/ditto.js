function ditto(level) {
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

ditto.prototype.setAttacks = function () {
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