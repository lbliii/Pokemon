function Nidorino(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 61
    this.attack = 72
    this.defense = 57
    this.specialAttack = 55
    this.specialDefense = 55
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidorino-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidorino-back.png"

    this.setAttacks()
}

Nidorino.prototype.setAttacks = function () {
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