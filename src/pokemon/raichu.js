function raichu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 90
    this.defense = 55
    this.specialAttack = 90
    this.specialDefense = 80
    this.speed = 110

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/raichu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/raichu-back.png"

    this.setAttacks()
}

raichu.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Thunder_Shock())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Thunderbolt())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Thunder())
    }
}