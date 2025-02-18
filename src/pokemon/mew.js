function Mew(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 100
    this.attack = 100
    this.defense = 100
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 100

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/mew-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/mew-back.png"

    this.setAttacks()
}

Mew.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Psychic())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Psychic())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Psychic())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Psychic())
    }
}