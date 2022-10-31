function vileplume(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 75
    this.attack = 80
    this.defense = 85
    this.specialAttack = 110
    this.specialDefense = 90
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/vileplume-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/vileplume-back.png"

    this.setAttacks()
}

vileplume.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Acid())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Acid())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Acid())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Acid())
    }
}