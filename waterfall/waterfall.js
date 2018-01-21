var waterfall = {
	bind:function(){
		var _this = this;
       _this.layout();
       $(window).on('resize',function(){
       	   _this.layout()
       })
	},

	layout:function(){
	    var	_this = this; 
		var colHeightArray = [];
		var imgWidth = $('.content .item').outerWidth(true);
		var colCount = Math.floor( $(window).width()/imgWidth );
		for(var i=0; i<colCount; i++){
	        colHeightArray[i] = 0;
        }

        $('.content .item').each(function(){
	
		    var minHeight = colHeightArray[0];
		    var minIndex = 0;
		    console.log()

		    for(var i=0; i<colCount; i++){
		    	if(colHeightArray[i] < minHeight){
		    		minHeight = colHeightArray[i]
		    		minIndex = i
		    	}
		    }

			$(this).css({
			    	left:minIndex*imgWidth,
			    	top:minHeight
			})
		    
		    colHeightArray[minIndex] += $(this).outerHeight(true);

		          
	    })
    }
}
		waterfall.bind();


// var colCount;
// var colHeightArray = [];
// var imgWidth = $('.content .item').outerWidth(true);

// colCount = Math.floor( $(window).width()/imgWidth );

// for(var i=0; i<colCount; i++){
// 	colHeightArray[i] = 0;
// }

// $('.content .item').each(function(){
	
//     var minHeight = colHeightArray[0];
//     var minIndex = 0;

//     for(var i=0; i<colCount; i++){
//     	if(colHeightArray[i] < minHeight){
//     		minHeight = colHeightArray[i]
//     		minIndex = i
//     	}
//     }

// 	$(this).css({
// 	    	left:minIndex*imgWidth,
// 	    	top:minHeight
// 	        })
    
//     colHeightArray[minIndex] += $(this).outerHeight(true);

// })

// $(window).on('resize',function(){
// 	colHeightArray = []
// 	colCount = Math.floor( $(window).width()/imgWidth )
// 	for(var i=0; i<colCount; i++){
// 	colHeightArray[i] = 0;
// }

// $('.content .item').each(function(){
	
//     var minHeight = colHeightArray[0];
//     var minIndex = 0;

//     for(var i=0; i<colCount; i++){
//     	if(colHeightArray[i] < minHeight){
//     		minHeight = colHeightArray[i]
//     		minIndex = i
//     	}
//     }

// 	$(this).css({
// 	    	left:minIndex*imgWidth,
// 	    	top:minHeight
// 	        })
    
//     colHeightArray[minIndex] += $(this).outerHeight(true);

//     })
	
// })