function growlithe(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 70
    this.defense = 45
    this.specialAttack = 70
    this.specialDefense = 50
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/growlithe-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/growlithe-back.png"

    this.setAttacks()
}

growlithe.prototype.setAttacks = function () {
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