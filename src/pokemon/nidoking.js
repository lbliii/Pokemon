function Nidoking(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 81
    this.attack = 102
    this.defense = 77
    this.specialAttack = 85
    this.specialDefense = 75
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoking-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoking-back.png"

    this.setAttacks()
}

Nidoking.prototype.setAttacks = function () {
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