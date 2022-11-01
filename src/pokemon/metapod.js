function Metapod(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 20
    this.defense = 55
    this.specialAttack = 25
    this.specialDefense = 25
    this.speed = 30

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/metapod-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/metapod-back.png"

    this.setAttacks()
}

Metapod.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Harden())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Harden())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Harden())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Harden())
    }
}