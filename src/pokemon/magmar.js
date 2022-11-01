function Magmar(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 95
    this.defense = 57
    this.specialAttack = 100
    this.specialDefense = 85
    this.speed = 93

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/magmar-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/magmar-back.png"

    this.setAttacks()
}

Magmar.prototype.setAttacks = function () {
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