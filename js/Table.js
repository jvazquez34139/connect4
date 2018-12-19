class Table{
	constructor(){
		//sets all spaces on the grid to available by default
		let rows = [];

		for(let i = 0; i < 6; i++){
			rows[i] = [];
		}

		rows.forEach(row => {
			for(let j = 0; j < 7; j++){
				row[j] = true;
			}
		});
		this.spaces = rows;
	}

	//get next available row for hovered col
	checkRow(col){
		let nextRow = false;
		for(let i = 0; i < 6; i++){
			if(i == 0){
				if(this.spaces == false){
					return false;
				}else if(this.spaces == true){
					nextRow = 0;
				}
			}
			if(this.spaces[i][col] == true){
				if(nextRow >= 0){
					nextRow = i;
				}
			}
		}
		return nextRow;
	}

	//update which spaces are available
	update(row, col){
		this.spaces[row][col] = false;
	}
}