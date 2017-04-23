function main() {
	$('.edgy').hide();
	$('.old').hide();
	$('.dank').hide();
	
	$('#fresh-btn').on('click', function() {
		$('.dank').hide();
		$('.edgy').hide();
		$('.old').hide();
		$('.fresh').fadeToggle(500);
	});
	$('#edgy-btn').on('click', function() {
		$('.dank').hide();
		$('.fresh').hide();
		$('.old').hide();
		$('.edgy').fadeToggle(500);
	});
	$('#dank-btn').on('click', function() {
		$('.edgy').hide();
		$('.fresh').hide();
		$('.old').hide();
		$('.dank').fadeToggle(500);
	});
	$('#old-btn').on('click', function() {
		$('.dank').hide();
		$('.fresh').hide();
		$('.edgy').hide();
		$('.old').fadeToggle(500);
	});
}
$(document).ready(main);