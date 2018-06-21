
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Ander = new User();
var Wendy = new User();
Ander.name = "Anderson";
Wendy.name = "Wendy";

Ander.giveLife(Wendy);
console.log("Ander:" + Ander.life);
console.log("Wendy:" + Wendy.life);

//can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Ander.uppercut(Ander);
console.log("Ander:" + Ander.life);
console.log("Wendy:" + Wendy.life);

//add propperties to all object
User.prototype.magic = 60;
    console.log(Ander.magic);
    console.log(Wendy.magic);
