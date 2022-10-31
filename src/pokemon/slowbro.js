function slowbro(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 75
    this.defense = 110
    this.specialAttack = 100
    this.specialDefense = 80
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/slowbro-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/slowbro-back.png"

    this.setAttacks()
}

slowbro.prototype.setAttacks = function () {
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