function Ivysaur(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 60
    this.attack = 62
    this.defense = 63
    this.specialAttack = 80
    this.specialDefense = 80
    this.speed = 60

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/ivysaur-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/ivysaur-back.png"

    this.setAttacks()
}

Ivysaur.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Tackle())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Growl())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Vine_Whip())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Poison_Powder())
    }
}