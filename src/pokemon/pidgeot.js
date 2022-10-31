function pidgeot(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 83
    this.attack = 80
    this.defense = 75
    this.specialAttack = 70
    this.specialDefense = 70
    this.speed = 101

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pidgeot-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pidgeot-back.png"

    this.setAttacks()
}

pidgeot.prototype.setAttacks = function() {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Sand_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Gust())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Whirlwind())
    }
}