function slowpoke(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 65
    this.defense = 65
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 15

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/slowpoke-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/slowpoke-back.png"

    this.setAttacks()
}

slowpoke.prototype.setAttacks = function () {
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