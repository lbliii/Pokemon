function poliwag(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 50
    this.defense = 40
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/poliwag-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/poliwag-back.png"

    this.setAttacks()
}

poliwag.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bubble())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bubble())
    }
}