function drowzee(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 48
    this.defense = 45
    this.specialAttack = 43
    this.specialDefense = 90
    this.speed = 42

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/drowzee-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/drowzee-back.png"

    this.setAttacks()
}

drowzee.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
}