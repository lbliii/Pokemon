function gyarados(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 125
    this.defense = 79
    this.specialAttack = 60
    this.specialDefense = 100
    this.speed = 81

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/gyarados-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/gyarados-back.png"

    this.setAttacks()
}

gyarados.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bite())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Bite())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bite())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Bite())
    }
}