function Rhydon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 105
    this.attack = 130
    this.defense = 120
    this.specialAttack = 45
    this.specialDefense = 45
    this.speed = 40

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rhydon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rhydon-back.png"

    this.setAttacks()
}

Rhydon.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
}