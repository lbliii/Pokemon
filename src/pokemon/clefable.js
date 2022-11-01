function Clefable(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 95
    this.attack = 70
    this.defense = 73
    this.specialAttack = 95
    this.specialDefense = 90
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/clefable-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/clefable-back.png"

    this.setAttacks()
}

Clefable.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Pound())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Growl())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Sing())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Metronome())
    }
}