/**
 * Created by ykk on 2018/3/22.
 */
var _w;
var _h;

$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

    _w = _width / 1242.00;
    _h = _height / 2008.00;

    // 导航
    $('#nav').css({
        width: _width,
        height: _height,
        left: -_width
    });

    // 头部
    $('.nav_content_top_hr').eq(0).css({
        'height': 89 * _h
    });
    $('.nav_content_top').eq(0).css({
        'height': 90 * _h
    });
    $('.nav_content_top_img_hr').eq(0).css({
        'width': 90 * _w
    });

    // 内容
    $('.nav_content_mid_hr').eq(0).css({
        'height': 504 * _h
    });
    $('.nav_content_mid_c_h').eq(0).css({
        'width': 90 * _w
    });
    $('.nav_content_mid_c').eq(0).css({
        'width': _width - 90 * _w
    });
    <!--单个内容-->
    $('.nav_content_mid_item').css({
        'height': 70 * _h
    });
    $('.nav_content_mid_item_hr').css({
        'height': 65 * _h
    });
    $('.nav_content_mid_item_img').css({
        'width': 70 * _w
    });
    $('.nav_content_mid_item_img_hr').css({
        'width': 96 * _w
    });
    $('.nav_content_mid_item_img_word').css({
        'line-height': $('.nav_content_mid_item_img_word').height() + 'px',
        'font-size': 45 * _h
    });

    // 中间高度的调整
    $('.nav_content_mid').css({
        'height': $('.nav_content_mid_c').height()
    });

    // 底部
    $('.nav_content_bottom').css({
        'height': 100 * _h
    });
    $('.nav_content_bottom_content_img_hr').css({
        'width': 90 * _w
    });
    $('.nav_content_bottom_content_img').css({
        // 'width': $('.nav_content_bottom_content_img img').width()
        'width': 100* _w
    });
    $('.nav_content_bottom_content_word_hr').css({
        'width': 72 * _w
    });
    $('.nav_content_bottom_content_word').css({
        'width': 300 * _w,
        'line-height': 100 * _h + 'px',
        'font-size': 48 * _h
    });
    //居中底部
    var _b_hr_height = $('.nav_content').height() -
        $('.nav_content_top_hr').height()-
        $('.nav_content_top').height()-
        $('.nav_content_mid_hr').height()-
        $('.nav_content_mid').height()-
        $('.nav_content_bottom').height();

    $('.nav_content_bottom_hr').css({
        //'height': _b_hr_height/2
        'height': 160*_h
    });

    // logo 和 文字对齐
    var _tempObj = $('.nav_content_mid_item').eq(0);
    var _logoImgWidth = _tempObj.find('.nav_content_mid_item_img').width() + _tempObj.find('.nav_content_mid_item_img_hr').width() + _tempObj.find('.nav_content_mid_item_img_word').width();
    $('.nav_content_top').find('img').eq(0).css({
        'width': _logoImgWidth
    });



    bindNavEvent();
});

//nav中事件绑定
function bindNavEvent(){
    $('#nav').click(function(e){
        e.stopPropagation();
        var _width = $(window).width();
        nav_hide(_width);
    })
}

//导航移入
function nav_show(){
    $('#nav').animate({
        left:0
    },800,'swing')
}

function nav_hide(width){
    $('#nav').animate({
        left: -width
    },800,'swing')
}