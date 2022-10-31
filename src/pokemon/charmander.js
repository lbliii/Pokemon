function charmander(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 39
    this.attack = 52
    this.defense = 43
    this.specialAttack = 60
    this.specialDefense = 50
    this.speed = 65

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charmander-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charmander-back.png"

    this.setAttacks()
}

charmander.prototype.setAttacks = function () {
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