function raticate(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 55
    this.attack = 81
    this.defense = 60
    this.specialAttack = 50
    this.specialDefense = 70
    this.speed = 97

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/raticate-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/raticate-back.png"

    this.setAttacks()
}

raticate.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Quick_Attack())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Hyper_Fang())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Super_Fang())
    }
}