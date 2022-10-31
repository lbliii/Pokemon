function dragonair(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 61
    this.attack = 84
    this.defense = 65
    this.specialAttack = 70
    this.specialDefense = 70
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dragonair-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dragonair-back.png"

    this.setAttacks()
}

dragonair.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new DragonRage())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new DragonRage())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new DragonRage())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new DragonRage())
    }
}