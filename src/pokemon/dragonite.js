function Dragonite(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 91
    this.attack = 134
    this.defense = 95
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dragonite-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dragonite-back.png"

    this.setAttacks()
}

Dragonite.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Dragon_Rage())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Dragon_Rage())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Dragon_Rage())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Dragon_Rage())
    }
}