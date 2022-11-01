function Jynx(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 50
    this.defense = 35
    this.specialAttack = 115
    this.specialDefense = 95
    this.speed = 95

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/jynx-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/jynx-back.png"

    this.setAttacks()
}

Jynx.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
}