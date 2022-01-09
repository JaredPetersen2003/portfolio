$(document).ready(function(){
	isOpen = false;
	console.log(isOpen);
});

//methods
fullpage_api.setAllowScrolling(false);

var isOpen;


function navClick(){
	console.log(isOpen);
	if (isOpen == false){
		openNav();
		isOpen = true;
	}
	else{
		closeNav();
		isOpen = false;
	}
}

function linkClick(){
		$('.false-check').prop('checked', false);
		navClick();

}

/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }