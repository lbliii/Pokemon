function Hypno(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 85
    this.attack = 73
    this.defense = 70
    this.specialAttack = 73
    this.specialDefense = 115
    this.speed = 67

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/hypno-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/hypno-back.png"

    this.setAttacks()
}

Hypno.prototype.setAttacks = function () {
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