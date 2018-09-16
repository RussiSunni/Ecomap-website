$(function () {
		
	
	
	var FooterTimeScript = $("#footer-time-template").html();

	// Compile the template
	var FooterTimeTemplate = Handlebars.compile(FooterTimeScript);

	// Define our data object
	var context={
		"footer": "123",
		
	};

	// Pass our data to the template
	var theCompiledHtmlFooter = FooterTimeTemplate(context);

	// Add the compiled html to the page
	$('.footer-time-placeholder').html(theCompiledHtmlFooter);
	
	


});



