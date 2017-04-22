function main() {
	$('.fresh').hide();
	$('.edgy').hide();
	$('.dank').hide();
	$('.old').hide();
	
	$('#fresh-btn').on('click', function() {
		$('.dank').hide();
		$('.edgy').hide();
		$('.old').hide();
		$('.fresh').slideToggle(1000);
	});
	$('#edgy-btn').on('click', function() {
		$('.dank').hide();
		$('.fresh').hide();
		$('.old').hide();
		$('.edgy').slideToggle(1000);
	});
	$('#dank-btn').on('click', function() {
		$('.edgy').hide();
		$('.fresh').hide();
		$('.old').hide();
		$('.dank').slideToggle(1000);
	});
	$('#old-btn').on('click', function() {
		$('.dank').hide();
		$('.fresh').hide();
		$('.edgy').hide();
		$('.old').slideToggle(1000);
	});
}
$(document).ready(main);