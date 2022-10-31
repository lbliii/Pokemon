function scyther(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 110
    this.defense = 80
    this.specialAttack = 55
    this.specialDefense = 80
    this.speed = 105

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/scyther-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/scyther-back.png"

    this.setAttacks()
}

scyther.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Slash())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Slash())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Slash())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Slash())
    }
}