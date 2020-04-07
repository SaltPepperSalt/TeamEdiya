// mini project js
var menuOpen = $('.btnMenuopen');
var menuClose = $('.btnMenuClose');
var infoOpen = $('.infoButton');
var infoClose = $('.closeinfoButton');
var infoCard = $('.infoCard')

menuOpen.on('click keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === 'click') {
        $(this).parent().addClass('isAct');
    }
});

menuClose.on('click keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === 'click') {
        $(this).parent().removeClass('isAct');
    }
});

infoOpen.on('click keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === 'click') {
        $(this).siblings(infoCard).css('transition','opacity .5s linear');
        $(this).siblings(infoCard).addClass('infoOpen');
        $(this).siblings(infoCard).attr('aria-hidden', 'false')
    }
});

infoClose.on('click keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === 'click') {
        $(this).parent().css('transition','opacity .5s linear, z-index 0s .5s')
        $(this).parent().removeClass('infoOpen');
        $(this).parent().attr('aria-hidden', 'true')
    }
});

$( '.scrollUp' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );
