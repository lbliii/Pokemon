function zubat(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 35
    this.specialAttack = 30
    this.specialDefense = 40
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/zubat-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/zubat-back.png"

    this.setAttacks()
}

zubat.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bite())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bite())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bite())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bite())
    }
}