var from_top = 0;
$(document).ready(function(){

    $('.expand').each( function(){
        var id = "#"+$(this)[0].id;
        if( !$('a.expand-toggle[href="'+id+'"]').hasClass( 'expand-toggled' ) )
            $(this).hide();
        else
            expanded = id;
    });


    $('.expand-toggle').on( 'click', function( event ){
        event.preventDefault();
        var that = $(this);
        var id = $(this).attr('href');
        if( $(id).is(':hidden') ){
            $(id).slideDown(200);
            from_top = that.offset().top
            that.addClass('expand-toggled');
            if( expanded != null && false == $(expanded).is(':hidden') ){
                if($(expanded).height() <= from_top){
                    from_top -= $(expanded).height();
                }
                $(expanded).slideUp(200);
                $('a.expand-toggle[href="'+expanded+'"]').removeClass('expand-toggled');
            }
            $("body").animate( { scrollTop: ( from_top ) }, 500 );
            expanded = id;
        }else{
            expanded = null;
            $(id).slideUp(200);
            that.removeClass('expand-toggled');
        }
    });
});
