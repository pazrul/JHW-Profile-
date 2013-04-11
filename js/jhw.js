var changer = function(button){
	var $active = $('head link[rel="stylesheet"]').eq(1);

	if ($active.attr('href') !== button){
	$('body').fadeOut(800, function(){
		$('head link[rel="stylesheet"]').eq(1).attr('href', button);
	});
		$('body').fadeIn(800);
	}
	else {
		var errMsg = '<div id="errored">That\'s the currently active look!</div>';
		$('body').append(errMsg);
		$('#errored').hide().slideDown(600).delay(1000).slideUp(900, function(){
			$(this).remove();
		});
	}

};

$(document).ready(function(){

	$('#styleChange a').on('click', function(e){
		e.preventDefault();
		changer($(this).data('style'));

	});
});

