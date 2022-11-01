function Cloyster(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 50
    this.attack = 95
    this.defense = 180
    this.specialAttack = 85
    this.specialDefense = 45
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/cloyster-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/cloyster-back.png"

    this.setAttacks()
}

Cloyster.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tackle())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Tackle())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Tackle())
    }
}