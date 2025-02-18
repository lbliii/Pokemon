function Gastly(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 35
    this.defense = 30
    this.specialAttack = 100
    this.specialDefense = 35
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gastly-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gastly-back.png"

    this.setAttacks()
}

Gastly.prototype.setAttacks = function () {
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