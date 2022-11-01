function Golduck(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 82
    this.defense = 78
    this.specialAttack = 95
    this.specialDefense = 80
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/golduck-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/golduck-back.png"

    this.setAttacks()
}

Golduck.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Scratch())
    }
}