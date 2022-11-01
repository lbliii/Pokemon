function Magnemite(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 25
    this.attack = 35
    this.defense = 70
    this.specialAttack = 95
    this.specialDefense = 55
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/magnemite-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/magnemite-back.png"

    this.setAttacks()
}

Magnemite.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
}