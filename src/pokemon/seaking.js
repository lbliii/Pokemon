function Seaking(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 92
    this.defense = 65
    this.specialAttack = 65
    this.specialDefense = 80
    this.speed = 68

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/seaking-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/seaking-back.png"

    this.setAttacks()
}

Seaking.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Horn_Attack())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Horn_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Horn_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Horn_Attack())
    }
}