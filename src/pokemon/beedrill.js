function beedrill(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 65
    this.attack = 90
    this.defense = 40
    this.specialAttack = 45
    this.specialDefense = 80
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/beedrill-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/beedrill-back.png"

    this.setAttacks()
}

beedrill.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Poison_Sting())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Twineedle())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Fury_Attack())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Rage())
    }
}