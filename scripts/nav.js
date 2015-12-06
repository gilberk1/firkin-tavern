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

( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );
