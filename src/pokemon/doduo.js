function doduo(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 35
    this.attack = 85
    this.defense = 45
    this.specialAttack = 35
    this.specialDefense = 35
    this.speed = 75

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/doduo-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/doduo-back.png"

    this.setAttacks()
}

doduo.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Peck())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Peck())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Peck())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Peck())
    }
}
