function Arbok(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 95
    this.defense = 69
    this.specialAttack = 65
    this.specialDefense = 79
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/arbok-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/arbok-back.png"

    this.setAttacks()
}

Arbok.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Bite())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Leer())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Wrap())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Poison_Sting())
    }
}