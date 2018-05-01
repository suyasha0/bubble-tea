

let woodnum = 0;

let wood = document.getElementsByClassName("wood")[0];
wood.addEventListener("click", function( event ) {

	console.log(woodnum);

	woodnum++;
	if(woodnum==4){ woodnum=0 }

	if(woodnum==0){
		wood.style.background = "url('assets/wood2.png')";
	}
	else if(woodnum==1){
		wood.style.background = "url('assets/wood.png')";
	}
	else if(woodnum==2){
		wood.style.background = "url('assets/wood2.png')";
	}
	else if(woodnum==3){
		wood.style.background = "url('assets/wood3.png')";
	}
}, false);


