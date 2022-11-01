function Snorlax(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 160
    this.attack = 110
    this.defense = 65
    this.specialAttack = 65
    this.specialDefense = 110
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/snorlax-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/snorlax-back.png"

    this.setAttacks()
}

Snorlax.prototype.setAttacks = function () {
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