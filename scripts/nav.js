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

function addEvent(clicked_id) {
	if(clicked_id == "1")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 1, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "2")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 2, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "3")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 3, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "4")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 4, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "5")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 5, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "6")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Hanukkah Begins';
		date.innerHTML = "December 6, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "7")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Pearl Harbor Day';
		date.innerHTML = "December 7, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "8")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 8, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "9")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 9, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "10")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 10, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "11")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 11, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "12")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 12, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "13")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 13, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "14")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 14, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "15")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 15, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "16")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 16, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "17")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Jameson Party - 7pm';
		date.innerHTML = "December 17, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "18")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 18, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "19")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 19, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "20")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 20, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "21")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Winter Begins';
		date.innerHTML = "December 21, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "22")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 22, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "23")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 23, 2015";
	}
	if(clicked_id == "24")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Christmas Eve';
		date.innerHTML = "December 24, 2015";
		description.innerHTML = "Open Normal Hours"
	}
	if(clicked_id == "25")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Christmas Day';
		date.innerHTML = "December 25, 2015";
		description.innerHTML = "Closed for the Day"
	}
	if(clicked_id == "26")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'Boxing Day';
		date.innerHTML = "December 26, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "27")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 27, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "28")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 28, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "29")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 29, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "30")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 30, 2015";
		description.innerHTML = "";
	}
	if(clicked_id == "31")
	{
		var month = document.getElementById('monthly-event');
		var date = document.getElementById('date');
		var description = document.getElementById('monthly-description');
		month.innerHTML = 'No Events';
		date.innerHTML = "December 31, 2015";
		description.innerHTML = "";
	}
}