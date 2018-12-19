const GameE = new CanvasGame("theCanvas");
const Connect4 = new Game();
const C4Table = new Table();
const bgDefault = GameE.rect(0,0,GameE.canvas.width,GameE.canvas.height,"#ff4499");
const boardV = GameE.image(100,75,700,600,"res/board.png");


//test table, make token dummy, when clicked
//quantify token and updates whoseTurn's tokens

let col = 0;
const mouse = GameE.mouseListener('click');
const dragMouse = GameE.mouseListener('mousemove');

const token = new Token(0);
const tokenDisplay = GameE.circ(token.x, token.y, 40, Connect4.whoseTurn().color, "white", 1);

const update = () => {
	//check mouse position for corresponding col
	col = (dragMouse.x - 100 - (dragMouse.x % 100)) / 100;
	//find next available row
	
	if(C4Table.checkRow(col) != false || C4Table.checkRow(col) === 0){
		token.col = col;	
		token.row = C4Table.checkRow(token.col);
		//update the tokenDisplay
		token.quantifyXY();
		tokenDisplay.x = token.x;
		tokenDisplay.y = token.y;
		if(mouse.triggered){
			// after dropping first token make a new one after
			// every drop, and update the game's turn
			// update the player's token's as circle objects
			// with corresponding colors

			Connect4.whoseTurn().addToken(token);
			C4Table.update(token.row,token.col);
			Connect4.turn++;
			tokenDisplay.fill = Connect4.whoseTurn().color;
		}
	}
	
	
	

	mouse.triggReset();
	dragMouse.triggReset();
}

const render = () => {
	update();
	bgDefault.draw();
	GameE.drawAll(Connect4.playerRed.tokens);
	GameE.drawAll(Connect4.playerBlack.tokens);
	tokenDisplay.draw();
	boardV.draw();
}

GameE.run(render,60);
























// const spacesV = [];

//testing xy's for circles
// for(let i = 0; i < 42; i++){
// 	let x = 100 + 50 + (100 * (i % 7)),
// 		y = 75 + 50 + 100 * (i - (i % 7)) / 7 ;
// 	spacesV[i] = game.circ(x,y,35,"black","white",2);
// }