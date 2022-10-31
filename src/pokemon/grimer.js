function grimer(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 80
    this.defense = 50
    this.specialAttack = 40
    this.specialDefense = 50
    this.speed = 25

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/grimer-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/grimer-back.png"

    this.setAttacks()
}

grimer.prototype.setAttacks = function () {
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