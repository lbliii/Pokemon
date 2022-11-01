function Charmeleon(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 58
    this.attack = 64
    this.defense = 58
    this.specialAttack = 80
    this.specialDefense = 65
    this.speed = 80

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/charmeleon-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/charmeleon-back.png"

    this.setAttacks()
}

Charmeleon.prototype.setAttacks = function(){
    if(1 <= this.level){
        this.attack1 = new Attack(new Scratch())
    }
    if(4 <= this.level){
        this.attack2 = new Attack(new Growl())
    }
    if(7 <= this.level){
        this.attack3 = new Attack(new Ember())
    }
    if(10 <= this.level){
        this.attack4 = new Attack(new Smokescreen())
    }
}