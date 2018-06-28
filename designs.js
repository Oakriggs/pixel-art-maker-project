// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  console.log('makeGrid is ready');

	var canvas, cell, gHeight, gWidth, rows;

	canvas = $('#pixelCanvas');
	gHeight = $('#inputHeight').val();
	gWidth = $('#inputWeight').val();

	canvas.children().remove();

	for (i = 0; i < gHeight; i++) {
		canvas.append('<tr></tr>');
	};

	rows = $('tr');

	for (j = 0; j < gWidth; j++) {
		rows.append('<td></td>');
	};

	cell = canvas.find('td');

	cell.click(function(){
		console.log("Colour Added");
		var colour;
		colour = $("#colorPicker").val();
		$(this).attr('bgcolor', colour);
	});
};

var submitProcess;

submitProcess = $('input[type="submit"]');

submitProcess.click(function(event){
	event.preventDefault();
	makeGrid();
});
}
