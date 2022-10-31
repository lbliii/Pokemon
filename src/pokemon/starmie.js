function starmie(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 75
    this.defense = 85
    this.specialAttack = 100
    this.specialDefense = 85
    this.speed = 115

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/starmie-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/starmie-back.png"

    this.setAttacks()
}

starmie.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new WaterGun())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new WaterGun())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new WaterGun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new WaterGun())
    }
}