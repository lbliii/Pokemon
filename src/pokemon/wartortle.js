function wartortle(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 59
    this.attack = 63
    this.defense = 80
    this.specialAttack = 65
    this.specialDefense = 80
    this.speed = 58

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/wartortle-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/wartortle-back.png"

    this.setAttacks()
}

wartortle.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Water_Gun())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Withdraw())
    }
}