function sandslash(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 100
    this.defense = 110
    this.specialAttack = 45
    this.specialDefense = 55
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/sandslash-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/sandslash-back.png"

    this.setAttacks()
}

sandslash.prototype.setAttacks = function () {
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