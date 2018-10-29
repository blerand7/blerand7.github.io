
var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 485, 285);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function myFunction() {
    var letter = document.getElementById("teksti").value.toLowerCase();
    var teksti;

    
    if (letter == "larte" || letter == "north"|| letter == "not"|| letter == "lot"|| letter == "louder"|| letter == "lotto"|| letter == "night"|| letter == "lorde") {
      moveup();
	    //document.getElementById("titulli").innerHTML = "LARTË";
    }  
	  else if(letter == "majtas"|| letter == "mitis"|| letter == "midas"|| letter == "my test"|| letter == "my thoughts") {
       moveleft();
	   document.getElementById("titulli").innerHTML = "MAJTAS";
    }	
		  else if(letter == "djathtas"|| letter == "blastoise"|| letter == "justice"|| letter == "gattis"|| letter == "otis"|| letter == "the artist" || letter == "delta's"|| letter == "dentist"|| letter == "lapis") {
       moveright();
	   //document.getElementById("titulli").innerHTML = "DJATHTAS";
    }	
		  else if(letter == "poshte"|| letter == "forced" || letter == "forester"|| letter == "first"|| letter == "port"|| letter == "post"|| letter == "borst") {
       movedown();
	  // document.getElementById("titulli").innerHTML = "POSHTË";
    }	
     else {
       myGamePiece = new component(30, 30, "blue", 485, 285);
    }
 
  
}
