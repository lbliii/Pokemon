function pikachu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 55
    this.defense = 30
    this.specialAttack = 50
    this.specialDefense = 40
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pikachu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pikachu-back.png"

    this.setAttacks()
}

pikachu.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Thunder_Shock())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Thunderbolt())
    }
}