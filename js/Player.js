class Player{
	constructor(color){
		this.color = color;
		//will hold own token info
		this.tokens = [];
	}
	
	addToken(tokenData){
		let newToken = GameE.circ(tokenData.x,tokenData.y,40,this.color,"white",1);
		this.tokens[this.tokens.length] = newToken;
	}

	//will only drop and update token info if active
	dropToken(token){
		//visual code
	}
}