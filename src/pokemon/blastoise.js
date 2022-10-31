function blastoise(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 79
    this.attack = 83
    this.defense = 100
    this.specialAttack = 85
    this.specialDefense = 105
    this.speed = 78

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/blastoise-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/blastoise-back.png"

    this.setAttacks()
}

blastoise.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Tail_Whip())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Bubble())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Withdraw())
    }
}