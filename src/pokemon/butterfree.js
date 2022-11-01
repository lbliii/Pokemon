function Butterfree(level) {
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 45
    this.defense = 50
    this.specialAttack = 90
    this.specialDefense = 80
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/butterfree-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/butterfree-back.png"

    this.setAttacks()
}

Butterfree.prototype.setAttacks = function () {
    if (1 <= this.level) {
        this.attack1 = new Attack(new Confusion())
    }
    if (4 <= this.level) {
        this.attack2 = new Attack(new Super_Sonic())
    }
    if (7 <= this.level) {
        this.attack3 = new Attack(new Psybeam())
    }
    if (10 <= this.level) {
        this.attack4 = new Attack(new Stun_Spore())
    }
}