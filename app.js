 

 $(document).ready(function() {
	  // all code goes in here
	 $('.box').on('click',function(){
	 	$(this).addClass(color);
	 })

	 $('.box').on('dblclick', function(){
	 	$(this).removeClass(colors);
	 })

	 $('#reset').on('click', function(){
		$('.box').removeClass(colors)
	 })

	 var colors = 'white green red blue yellow';

	 var color = 'whte';

	  $('#red').on('click', function() {
	    color = 'red';
	  })

	  $('#blue').on('click', function() {
	    color = 'blue';
	  })

	  $('#green').on('click', function() {
	    color = 'green';
	  })

	  $('#yellow').on('click', function() {
	    color = 'yellow';
	  })

	  $('#white').on('click', function() {
	    color = 'white';
	  })

 })