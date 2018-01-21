start();
var clock;

$(window).on('scroll',function(){
	if(clock){
		clearTimeout(clock);
	}
	clock = setTimeout(function(){
        start();
	},500)
})

function start(){
	
    $('.lazyLoad img').not('[data-isloaded]').each(function(){
		var $node = $(this);
	    if(isShow($node)){
	    	loaded($node);	   
	    }	
    })
}

function isShow($node){
    return $node.offset().top <= $(window).height() + $(window).scrollTop();
}

function loaded($img){
    $img.attr('src',$img.attr('data-src'));
    $img.attr('data-isloaded',1)
}

