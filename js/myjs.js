$(function(){
    var window_width = $(window).width();
    var window_height = $(window).height();
    var page_header_height = $('.page-header').height();
/*    var copyright_height = $('.copyright').outerHeight();
console.log(page_header_height,copyright_height);
    $('.page-index .page-body').css({'height':window_height-page_header_height-copyright_height});*/
    /* 滑出导航菜单 */
    $('.page-header .icon-menu').on('click',function(){
        $('.page-nav').addClass('show');
        $('html,body,.page').addClass('overflow');
    });
    $('.page-nav').on('click',function(){
        $('.page-nav').removeClass('show');
        $('html,body,.page').removeClass('overflow');
    });

    /*右上角下拉菜单*/
    $('.dropSelect .drop-menu').css({'width':window_width,'height':window_height-page_header_height});
    $('.dropSelect .drop-btn').on('click',function(){
        var $this = $(this);
        var dropSelect = $this.closest('.dropSelect');
        var isOpen = dropSelect.hasClass('open');
        dropSelect.find('.drop-menu')[isOpen?'slideUp':'slideDown']();
        dropSelect[isOpen?'removeClass':'addClass']('open');
    });
    $('.dropSelect .drop-menu').on('click',function(){
        var $this = $(this);
        var dropSelect = $this.closest('.dropSelect');
        dropSelect.find('.drop-menu').slideUp();
        dropSelect.removeClass('open');
    });
    $('.dropSelect .drop-menu .menu').on('click',function(){
        var $this = $(this);
        var dropSelect = $this.closest('.dropSelect');
        var text = $this.text();
        dropSelect.find('.drop-btn .text').text(text);
    });

    /*点击页面隐藏车型引导页*/
    $('html,body,.page-cartype').on('click',function(){
        $('.page-cartype .lead').remove();
    });

    /*设置想去图片的高度*/
    var page_cartype_detail_article_width = $('.page-cartype-detail .article-img').width();
    $('.page-cartype-detail .article-img .img').css({'height':page_cartype_detail_article_width*0.60});

    $('body').on('click','#emailModal .close',function(){
        $(this).closest('.myModal').remove();
    });


/*    $('#emailModal .close').on('click',function(){
        alert();
        $(this).closest('.myModal').remove();
    });*/


    /*关闭弹窗*/
    $('body').on('click','.myModal .close',function(){
        $(this).closest('.myModal').removeClass('show');
        $('html,body').removeClass('overflow');
    });

    /*点击搜索框的返回箭头*/
    $('.icon-search').on('click',function(){
        $('.searchbox').addClass('show');
        $('html,body').addClass('overflow');
    });
    /*点击搜索框的返回箭头*/
    $('.searchbox .iconclose').on('click',function(){
        $('.searchbox').removeClass('show');
        $('html,body').removeClass('overflow');
    });
});

function seedEmail(email){
    var emailModal = '<div class="myModal show" id="emailModal" onclick="">'+
                        '<i class="shadow"></i>'+
                        '<div class="mycontainer">'+
                            '<i class="close"></i>'+
                            '<div class="bodyer">'+
                                '<h3>获取更多资料详情，请留下您的邮箱地址：</h3>'+
                                '<span class="row-email">'+email+'</span>'+
                                '<span class="row-input"><input type="email"></span>'+
                                '<span class="row-btn"><button id="sureEmail" class="sureEmail">确认发送</button><button id="selectEmail" class="selectEmail" data-value="0">发送至其他邮箱</button></span>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    $('html,body').addClass('overflow');
    $('body').append(emailModal);
    $('#selectEmail').on('click',function(){
        var $bodyer = $('#emailModal .bodyer');
        var isActive = $bodyer.hasClass('active');
        $bodyer[isActive?'removeClass':'addClass']('active');
        var data_value = $(this).attr('data-value');
        if(data_value==0){
            $(this).text('取消');
            $(this).attr('data-value',1);
        }else{
            $(this).text('发送至其他邮箱');
            $(this).attr('data-value',0);
        }
    });
}