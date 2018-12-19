class Game{
	constructor(){
		this.turn = 0;
		this.playerRed = new Player("red");
		this.playerBlack = new Player("black");
	}
	//determine player's turn
	whoseTurn(){
		if(this.turn % 2 == 0){
			return this.playerRed;
		}else{
			return this.playerBlack;
		}
	}
	//determine winner
}