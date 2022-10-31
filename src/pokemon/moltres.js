function moltres(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 100
    this.defense = 90
    this.specialAttack = 125
    this.specialDefense = 85
    this.speed = 90

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/moltres-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/moltres-back.png"

    this.setAttacks()
}

moltres.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new FireBlast())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new FireBlast())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new FireBlast())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new FireBlast())
    }
}