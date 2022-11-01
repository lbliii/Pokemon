function Krabby(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 105
    this.defense = 90
    this.specialAttack = 25
    this.specialDefense = 25
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/krabby-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/krabby-back.png"

    this.setAttacks()
}

Krabby.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bubble())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bubble())
    }
}