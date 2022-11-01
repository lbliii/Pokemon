function NidoranM(level){
    this.level = level
    this.maxHealth = level * 2 + 5
    this.attack1
    this.attack2
    this.attack3
    this.attack4

    this.hp = 46
    this.attack = 57
    this.defense = 40
    this.specialAttack = 40
    this.specialDefense = 40
    this.speed = 50

    this.img_front = new Image()
    this.img_front.src = "images/pokemon/nidoran-m-front.png"
    this.img_back = new Image()
    this.img_back.src = "images/pokemon/nidoran-m-back.png"

    this.setAttacks()
}

NidoranM.prototype.setAttacks = function(){
    if (1 <= this.level){
        this.attack1 = new Attack(new Scratch())
    }
    if (4 <= this.level){
        this.attack2 = new Attack(new Scratch())
    }
    if (7 <= this.level){
        this.attack3 = new Attack(new Scratch())
    }
    if (10 <= this.level){
        this.attack4 = new Attack(new Scratch())
    }
}