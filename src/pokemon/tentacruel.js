function Tentacruel(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 70
    this.defense = 65
    this.specialAttack = 80
    this.specialDefense = 120
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/tentacruel-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/tentacruel-back.png"

    this.setAttacks()
}

Tentacruel.prototype.setAttacks = function () {
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