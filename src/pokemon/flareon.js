function flareon(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 130
    this.defense = 60
    this.specialAttack = 95
    this.specialDefense = 110
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/flareon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/flareon-back.png"

    this.setAttacks()
}

flareon.prototype.setAttacks = function () {
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