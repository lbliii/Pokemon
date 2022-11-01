function Jigglypuff(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 115
    this.attack = 45
    this.defense = 20
    this.specialAttack = 45
    this.specialDefense = 25
    this.speed = 20

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/jigglypuff-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/jigglypuff-back.png"

    this.setAttacks()
}

Jigglypuff.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Pound())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Pound())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Pound())
    }
}