function Ponyta(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 85
    this.defense = 55
    this.specialAttack = 65
    this.specialDefense = 65
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ponyta-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ponyta-back.png"

    this.setAttacks()
}

Ponyta.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Ember())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Ember())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Ember())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Ember())
    }
}