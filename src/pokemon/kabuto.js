function Kabuto(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 80
    this.defense = 90
    this.specialAttack = 55
    this.specialDefense = 45
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kabuto-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kabuto-back.png"

    this.setAttacks()
}

Kabuto.prototype.setAttacks = function () {
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