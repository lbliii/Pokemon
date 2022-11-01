function Lapras(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 130
    this.attack = 85
    this.defense = 80
    this.specialAttack = 85
    this.specialDefense = 95
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/lapras-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/lapras-back.png"

    this.setAttacks()
}

Lapras.prototype.setAttacks = function () {
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