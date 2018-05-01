var newleaf, newleaf2, newleaf3, newleaf4, newleaf5;

for(let i=0; i<50; i++){

	/* random rotation */

	newleaf = document.createElement('div');
	newleaf.className = "leaf";
	newleaf.style.top = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf.style.left = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf.style.transform = 'rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';

	newleaf2 = document.createElement('div');
	newleaf2.className = "leaf2";
	newleaf2.style.top = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf2.style.left = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf2.style.transform = 'rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';

	newleaf3 = document.createElement('div');
	newleaf3.className = "peppermint";
	newleaf3.style.top = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf3.style.left = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf3.style.transform = 'rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';


	newleaf4 = document.createElement('div');
	newleaf4.className = "green";
	newleaf4.style.top = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf4.style.left = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf4.style.transform = 'rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';


	newleaf5 = document.createElement('div');
	newleaf5.className = "black";
	newleaf5.style.top = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf5.style.left = Math.floor((Math.random() * 99) - 3) + '%';
	newleaf5.style.transform = 'rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';

	document.body.appendChild(newleaf);	
	document.body.appendChild(newleaf2);
	document.body.appendChild(newleaf3);
	document.body.appendChild(newleaf4);
	document.body.appendChild(newleaf5);  

}