(function(jQuery, $) {
	$('body').on('keyup', function(e){
		var pressed = e.which || e.keyCode;
		if (pressed == 222) // single quote && double quote
		{
			var target = $(e.target);
			// prevent textbox or textarea triggering duplicate task event
			if ( ! (target.is('input') || target.is('textarea')))
			{
				var v = $('#tasksToolbox').find('select').val('Duplicate Task').trigger('change');
			}
		}
	});
})(jQuery, jQuery.noConflict(true));
