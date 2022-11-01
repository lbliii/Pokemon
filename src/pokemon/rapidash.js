function Rapidash(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 100
    this.defense = 70
    this.specialAttack = 80
    this.specialDefense = 80
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/rapidash-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/rapidash-back.png"

    this.setAttacks()
}

Rapidash.prototype.setAttacks = function () {
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