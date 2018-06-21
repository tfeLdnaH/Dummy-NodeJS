class Rect {
  constructor(height, width) {
    this.height = height;
    this.width = width;	
  }
  
  area(){
	  return this.height * this.width;
  }
}
//chamada do cálculo
r1 = new Rect(2,3);
a1 = r1.area();
console.log("height:" + r1.height);
console.log("width:" + r1.width);
console.log("area:" + a1);
console.log("-----");
 
//hierarquia retangulo para um poligono
class pol extends Rect{
	constructor(height, width, att){
		super(height, width);
		this.thirdside = att;
	}
	calc(){
		return this.height + this.width + this.thirdside;
	}
}
poll = new pol(45,45, 2);
console.log(poll.height);
console.log(poll.width);
console.log(poll.calc());
