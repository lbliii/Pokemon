function vaporeon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 130
    this.attack = 65
    this.defense = 60
    this.specialAttack = 110
    this.specialDefense = 95
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/vaporeon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/vaporeon-back.png"

    this.setAttacks()
}

vaporeon.prototype.setAttacks = function () {
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