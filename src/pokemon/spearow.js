function spearow(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 40
    this.attack = 60
    this.defense = 30
    this.specialAttack = 31
    this.specialDefense = 31
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/spearow-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/spearow-back.png"

    this.setAttacks()
}

spearow.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Peck())
    }
    if (5 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if (9 <= this.level){
        this.attack3 = new Attack(new Fury_Attack())
    }
    if (13 <= this.level){
        this.attack4 = new Attack(new Drill_Peck())
    }
}