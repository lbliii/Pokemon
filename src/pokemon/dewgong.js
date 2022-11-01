function Dewgong(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 90
    this.attack = 70
    this.defense = 80
    this.specialAttack = 70
    this.specialDefense = 95
    this.speed = 70

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/dewgong-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/dewgong-back.png"

    this.setAttacks()
}

Dewgong.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Ice_Beam())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Ice_Beam())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Ice_Beam())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Ice_Beam())
    }
}