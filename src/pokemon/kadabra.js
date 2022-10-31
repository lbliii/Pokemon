function kadabra(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 35
    this.defense = 30
    this.specialAttack = 120
    this.specialDefense = 70
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/kadabra-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/kadabra-back.png"

    this.setAttacks()
}

kadabra.prototype.setAttacks = function () {
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