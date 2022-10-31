function kinger(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 130
    this.defense = 115
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kingler-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kingler-back.png"

    this.setAttacks()
}

kinger.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Crabhammer())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Crabhammer())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Crabhammer())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Crabhammer())
    }
}