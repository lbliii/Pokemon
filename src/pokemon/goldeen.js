function Goldeen(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 45
    this.attack = 67
    this.defense = 60
    this.specialAttack = 35
    this.specialDefense = 50
    this.speed = 63

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/goldeen-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/goldeen-back.png"

    this.setAttacks()
}

Goldeen.prototype.setAttacks = function () {
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