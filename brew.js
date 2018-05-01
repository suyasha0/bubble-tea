function addWood(){
   	let wood = document.createElement('div');
	wood.className = "wood";
	document.body.appendChild(wood);	

	let water = document.getElementById("water");
	water.remove();

	let gradient = document.getElementsByClassName("gradient")[0];
	gradient.remove();
}

function addTea(){
	let tea = document.createElement('div');
	tea.className = "tea";
	document.body.appendChild(tea);	

	let thetea = document.getElementsByClassName("tea")[0];
	thetea.addEventListener("click", function( event ) {
	    thetea.style.background = "url('assets/bubb.png')";
	    thetea.style.width = '300px';
	    thetea.style.height = '445px';

  	}, false);
}

function start(){
	setTimeout(addWood, 10000);
	setTimeout(addTea, 11000);
}

start();