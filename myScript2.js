	var bg = document.getElementById("particles-js");
	var key;

	document.addEventListener('keydown', function(){
		// alert("Vous avez Clicker");

		bg.style.backgroundColor = getRandomColor();
	});

	function getRandomColor(){
		var letters ="0123456789ABCDEF";
		var colors = "#";
		for(var i = 0; i < 6; i++){
			colors = colors + letters[Math.floor(Math.random() * letters.length)];
		}
		console.log(colors);
		return colors;
	}


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
      
    audio.currentTime = 0;
    audio.play();

    if (!audio) {
    	var sound = new Audio("sounds/lose.mp3");
			audio.play();
		}
  }
    

    
 


	// bg.style.backgroundColor = "black";
 
	window.addEventListener('keydown', playSound);   
