function Geodude(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 80
    this.defense = 100
    this.specialAttack = 30
    this.specialDefense = 30
    this.speed = 20

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/geodude-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/geodude-back.png"

    this.setAttacks()
}

Geodude.prototype.setAttacks = function () {
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