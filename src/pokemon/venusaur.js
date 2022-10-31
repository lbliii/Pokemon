function venusaur(level){ 
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 80
    this.attack = 82
    this.defense = 83
    this.specialAttack = 100
    this.specialDefense = 100
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/venusaur-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/venusaur-back.png"

    this.setAttacks()
}

venusaur.prototype.setAttacks = function(){
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