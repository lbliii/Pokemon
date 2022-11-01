function Machop(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 80
    this.defense = 50
    this.specialAttack = 35
    this.specialDefense = 35
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machop-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machop-back.png"

    this.setAttacks()
}

Machop.prototype.setAttacks = function () {
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