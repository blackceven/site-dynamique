$(document).ready(function(){
    // nar slide Toglle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    // stickey nav
    $(window).scroll(function(){
        var sc= $(this).scrollTop();
        if(sc > 50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })
})

$('.js-fixed-footer').footerReveal({
	ombre : fausse,
	zIndice : 1
});


  $(document).ready(function(){
    // Lorsque vous cliquez sur un lien dans le menu
    $('.nav-list a').on('click', function(e) {
        // Empêcher le comportement de lien par défaut
        e.preventDefault();

        // Récupérer l'attribut href du lien cliqué
        var target = $(this).attr('href');

        // Vérifier si la cible existe dans le document
        if ($(target).length) {
            // Calculer la position de défilement de la cible
            var scrollToPosition = $(target).offset().top;

            // Animer le défilement jusqu'à la position de la cible
            $('html, body').animate({
                scrollTop: scrollToPosition
            }, 1000); // Durée de l'animation en millisecondes
        }
    });
});

!function(a){a.fn.footerReveal=function(b){var c=a(this),d=c.prev(),e=a(window),f=a.extend({shadow:!0,shadowOpacity:.8,zIndex:-100},b);a.extend(!0,{},f,b);return c.outerHeight()<=e.outerHeight()&&c.offset().top>=e.outerHeight()&&(c.css({"z-index":f.zIndex,position:"fixed",bottom:0}),f.shadow&&d.css({"-moz-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")","-webkit-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")","box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")"}),e.on("load resize footerRevealResize",function(){c.css({width:d.outerWidth()}),d.css({"margin-bottom":c.outerHeight()})})),this}}(jQuery);
