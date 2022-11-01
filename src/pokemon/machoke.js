function Machoke(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 100
    this.defense = 70
    this.specialAttack = 50
    this.specialDefense = 60
    this.speed = 45

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/machoke-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/machoke-back.png"

    this.setAttacks()
}

Machoke.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Karate_Chop())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Karate_Chop())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Karate_Chop())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Karate_Chop())
    }
}