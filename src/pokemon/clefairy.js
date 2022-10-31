function clefairy(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 70
    this.attack = 45
    this.defense = 48
    this.specialAttack = 60
    this.specialDefense = 65
    this.speed = 35

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/clefairy-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/clefairy-back.png"

    this.setAttacks()
}

clefairy.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (5 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (9 <= this.level) {
        this.attack3 = new Attack(new Sing())
    }
    if (13 <= this.level) {
        this.attack4 = new Attack(new Metronome())
    }
}
