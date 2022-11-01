function Chansey(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 250
    this.attack = 5
    this.defense = 5
    this.specialAttack = 35
    this.specialDefense = 105
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/chansey-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/chansey-back.png"

    this.setAttacks()
}

Chansey.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
}