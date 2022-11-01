function Farfetchd(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 52
    this.attack = 65
    this.defense = 55
    this.specialAttack = 58
    this.specialDefense = 62
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/farfetchd-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/farfetchd-back.png"

    this.setAttacks()
}

Farfetchd.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Peck())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Peck())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Peck())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Peck())
    }
}