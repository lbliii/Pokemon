function Abra(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 25
    this.attack = 20
    this.defense = 15
    this.specialAttack = 105
    this.specialDefense = 55
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/abra-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/abra-back.png"

    this.setAttacks()
}

Abra.prototype.setAttacks = function () {
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