// (function(){
//   var hamburger = document.getElementById('navIcon');
//   var menu = document.getElementById('menu');

//   hamburger.addEventListener("click", function(){
//     if(menu.classList.contains('shown')) {
//       menu.classList.remove('shown')
//     } else {
//       menu.classList.add('shown')
//     }
//   });

// })();

function changeContent() {
	document.getElementById('page1').style.display = "none";
	document.getElementById('page2').style.display = "block";
	document.getElementById('email').value = '';
	document.getElementById('name').value = '';
}
function changeBack() {
	setTimeout(function() {
		document.getElementById('page1').style.display = "block";
		document.getElementById('page2').style.display = "none";
	}, 1000);
}