class Token{
	constructor(col){
		this.row = 0;
		this.col = col;
		this.dropped = false;
		this.x = 50;
		this.y = 0;
	}

	quantifyXY(){
		if(this.col < 0){
			this.col = 0;
		}else if(this.col > 6){
			this.col = 6;
		}
		if(this.row < 0){
			this.row = 0;
		}else if(this.row > 5){
			this.row = 5;
		}
		this.x = 100 + 50 + this.col * 100;
		this.y = 75 + 50 + this.row * 100;
	}

	//before dropped, make table display drop space
	// displayDrop(col, table){
	// 	let row = table.checkRow(col);
	// }
}