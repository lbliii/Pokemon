function eevee(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 55
    this.defense = 50
    this.specialAttack = 45
    this.specialDefense = 65
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/eevee-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/eevee-back.png"

    this.setAttacks()
}

eevee.prototype.setAttacks = function () {
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