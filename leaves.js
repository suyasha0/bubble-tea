
var newleaf, newleaf2;

for(let i=0; i<30; i++){
	newleaf = document.createElement('div');
	newleaf.className = "leaf";
	newleaf.style.top = Math.floor((Math.random() * 99) + 1) + '%';
	newleaf.style.left = Math.floor((Math.random() * 99) + 1) + '%';

	newleaf2 = document.createElement('div');
	newleaf2.className = "leaf2";
	newleaf2.style.top = Math.floor((Math.random() * 99) + 1) + '%';
	newleaf2.style.left = Math.floor((Math.random() * 99) + 1) + '%';

	document.body.appendChild(newleaf);
	document.body.appendChild(newleaf2);
}