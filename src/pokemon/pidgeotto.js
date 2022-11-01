function Pidgeotto(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 63
    this.attack = 60
    this.defense = 55
    this.specialAttack = 50
    this.specialDefense = 50
    this.speed = 71

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/pidgeotto-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/pidgeotto-back.png"

    this.setAttacks()
}

Pidgeotto.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Sand_Attack())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Quick_Attack())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Whirlwind())
    }
}