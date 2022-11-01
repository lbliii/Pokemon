function Muk(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 105
    this.attack = 105
    this.defense = 75
    this.specialAttack = 65
    this.specialDefense = 100
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/muk-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/muk-back.png"

    this.setAttacks()
}

Muk.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
}