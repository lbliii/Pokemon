function Omastar(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 60
    this.defense = 125
    this.specialAttack = 115
    this.specialDefense = 70
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/omastar-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/omastar-back.png"

    this.setAttacks()
}

Omastar.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Water_Gun())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Water_Gun())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Water_Gun())
    }
}