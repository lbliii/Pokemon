function paras(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 70
    this.defense = 55
    this.specialAttack = 45
    this.specialDefense = 55
    this.speed = 25

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/paras-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/paras-back.png"

    this.setAttacks()
}

paras.prototype.setAttacks = function () {
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
