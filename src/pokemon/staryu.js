function Staryu(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 45
    this.defense = 55
    this.specialAttack = 70
    this.specialDefense = 55
    this.speed = 85

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/staryu-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/staryu-back.png"

    this.setAttacks()
}

Staryu.prototype.setAttacks = function () {
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