function Hitmonchan(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 105
    this.defense = 79
    this.specialAttack = 35
    this.specialDefense = 110
    this.speed = 76

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/hitmonchan-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/hitmonchan-back.png"

    this.setAttacks()
}

Hitmonchan.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Comet_Punch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Comet_Punch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Comet_Punch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Comet_Punch())
    }
}