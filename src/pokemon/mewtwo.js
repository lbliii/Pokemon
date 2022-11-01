function Mewtwo(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 106
    this.attack = 110
    this.defense = 90
    this.specialAttack = 154
    this.specialDefense = 90
    this.speed = 130

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mewtwo-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mewtwo-back.png"

    this.setAttacks()
}

Mewtwo.prototype.setAttacks = function () {
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