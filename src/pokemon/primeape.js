function primeape(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 105
    this.defense = 60
    this.specialAttack = 60
    this.specialDefense = 70
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/primeape-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/primeape-back.png"

    this.setAttacks()
}

primeape.prototype.setAttacks = function () {
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