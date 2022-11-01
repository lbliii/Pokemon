function Machamp(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 130
    this.defense = 80
    this.specialAttack = 65
    this.specialDefense = 85
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machamp-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machamp-back.png"

    this.setAttacks()
}

Machamp.prototype.setAttacks = function () {
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