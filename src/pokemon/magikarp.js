function Magikarp(level) {
  this.level = level;
  this.maxHealth = level * 2 + 5;
  this.attack1;
  this.attack2;
  this.attack3;
  this.attack4;

  this.hp = 20;
  this.attack = 10;
  this.defense = 55;
  this.specialAttack = 15;
  this.specialDefense = 20;
  this.speed = 80;

  this.img_front = new Image();
  this.img_front.src = "images/pokemon/magikarp-front.png";
  this.img_back = new Image();
  this.img_back.src = "images/pokemon/magikarp-back.png";

  this.setAttacks();
}

Magikarp.prototype.setAttacks = function () {
  if (1 <= this.level) {
    this.attack1 = new Attack(new Splash());
  }
  if (4 <= this.level) {
    this.attack2 = new Attack(new Splash());
  }
  if (7 <= this.level) {
    this.attack3 = new Attack(new Splash());
  }
  if (10 <= this.level) {
    this.attack4 = new Attack(new Splash());
  }
};
