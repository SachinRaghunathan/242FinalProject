(function( window ){

    var body = document.body,
        mask = document.createElement("div"),
        togglePushLeft = document.querySelector( ".toggle-push-left" ),
        activeNav;
    

    mask.className = "mask";

    /* add active menu if button is clicked */
    togglePushLeft.addEventListener( "click", function(){
		classie.add( body, "pml-open" );
		document.body.appendChild(mask);
		activeNav = "pml-open";
	} );

    /* hide active menu if mask is clicked */
    mask.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );

    /* hide active menu if close menu button is clicked */
    [].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
        el.addEventListener( "click", function(){
            classie.remove( body, activeNav );
            activeNav = "";
            document.body.removeChild(mask);
        } );
    });
    
    $(function(){
        $(".element").typed({
            strings: ["Coffee Addict", "CS &#64; University of Illinois"],
            typeSpeed: 40,
            loop: true,
            showCursor: false,
            backDelay: 3000
        });
    });

})( window );
