var index = 1,
	x = document.querySelectorAll('.slides'),
	buttons = document.querySelectorAll('button');


function showImage(n) {
	

	if(n > x.length) {
		index = 1;
	} else if(n < 1) {
		index = x.length;
	}
	

	for(var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}

	x[index-1].style.display = "block";

}

showImage();




for(var i = 0; i < buttons.length; i++) {
	var btn = buttons[i];

	btn.addEventListener('click', function(){
		
		index = index + 1;
		showImage(index);

	}, false);
	
}

function autoSlide() {

	for(var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}

	if(index > x.length) {
		index = 1;
	}

	x[index-1].style.display = "block";

	index++;

	setTimeout(autoSlide, 2000);
}

autoSlide();
