function mankey(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 80
    this.defense = 35
    this.specialAttack = 35
    this.specialDefense = 45
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mankey-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mankey-back.png"

    this.setAttacks()
}

mankey.prototype.setAttacks = function () {
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