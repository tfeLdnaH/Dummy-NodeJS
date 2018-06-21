var vt = 1;
 function rec1(va1){
 console.log("Valor:" + va1);		
		vt = vt * va1;
		va1--;
		if (va1 == 1){
			console.log("valor final:"+ vt);
			console.log("vakor de retorno:" + false);
			return false;	
		} 
		else {
				return rec1(va1);
		}
		

 };
 
 rec1(10);
