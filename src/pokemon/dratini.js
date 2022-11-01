function Dratini(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 41
    this.attack = 64
    this.defense = 45
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dratini-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dratini-back.png"

    this.setAttacks()
}

Dratini.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Wrap())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Wrap())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Wrap())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Wrap())
    }
}