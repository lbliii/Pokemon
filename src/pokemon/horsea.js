function horsea(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 30
    this.attack = 40
    this.defense = 70
    this.specialAttack = 70
    this.specialDefense = 25
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/horsea-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/horsea-back.png"

    this.setAttacks()
}

horsea.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Bubble())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Leer())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Agility())
    }
}