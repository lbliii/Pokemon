function Ekans(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 60
    this.defense = 44
    this.specialAttack = 40
    this.specialDefense = 54
    this.speed = 55

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ekans-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ekans-back.png"

    this.setAttacks()
}

Ekans.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Wrap())
    }
    if (5 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if (9 <= this.level){
        this.attack3 = new Attack(new Poison_Sting())
    }
    if (13 <= this.level){
        this.attack4 = new Attack(new Bite())
    }
}