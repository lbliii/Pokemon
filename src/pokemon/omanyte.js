function omanyte(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 40
    this.defense = 100
    this.specialAttack = 90
    this.specialDefense = 55
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/omanyte-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/omanyte-back.png"

    this.setAttacks()
}

omanyte.prototype.setAttacks = function () {
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