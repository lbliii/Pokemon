function mrmime(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 45
    this.defense = 65
    this.specialAttack = 100
    this.specialDefense = 120
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mrmime-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mrmime-back.png"

    this.setAttacks()
}

mrmime.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Confusion())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Confusion())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Confusion())
    }
}