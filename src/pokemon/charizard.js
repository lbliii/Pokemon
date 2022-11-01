function Charizard(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 78
    this.attack = 84
    this.defense = 78
    this.specialAttack = 109
    this.specialDefense = 85
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charizard-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charizard-back.png"

    this.setAttacks()
}

Charizard.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Smokescreen())
    }
}