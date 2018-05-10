/**
 * Created by kk on 2018/3/17.
 */
var _w;
var _h;
$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

    _w = _width / 1242.00;
    _h = _height / 2008.00;

/*    $('#details_content').css({
        width: _width,
        height: _height
    });*/
    $('#details_back').css({
        width: _width,
        height: _height
    });
/*    $('#details_btn').css({
        width: _width
    });*/
    $('.content_header').css({
        width: _width
    });

    // header 中的标志居中
    var headerImg = new Image();
    // headerImg.src = "/outerproject/AudiPage/images/IMG_0740@3x.png";
    headerImg.src = "/images/IMG_0740@3x.png";

    headerImg.onload = function () {
        $('.content_header_m').append('<img src="images/IMG_0740@3x.png">');
        var _logoMarginLeft = $('.content_header_m').width() - $('.content_header_m').find('img').eq(0).width();
        $('.content_header_m').find('img').eq(0).css({
            'margin-left': _logoMarginLeft / 2
        });
    };

    // 内容部分需要滚动
/*    $('.details_content_end').eq(0).css({
        'height': $('#details_btn').height()
    });*/

    $('.details_top').eq(0).css({
        'height': 190 * _h
    });
    $('.details_img_di').eq(0).css({
        'width': 1144 * _w,
        'height': 742 * _h,
        'margin-left': (_width - (1144 * _w))/2
    });

    $('.details_img_di_img').eq(0).css({
        /*'width': 1122 * _w,*/
        'height': 664 * _h,
        /*'margin-left': ((1144 -1122) * _w)/2,*/
    });

    $('.details_img_di_word').eq(0).css({
        'width': 1122 * _w,
        'height': 63 * _h,
        'margin-left':((1144 -1122) * _w)/2,
        'font-size': 28 * _h,
        'line-height': 63 * _h + 'px'
    });

    // 中间文字
    $('.details_center1').eq(0).css({
        'margin-left':(35 * _w),
        'font-size': 48 * _h,
        'margin-top':(38 * _h),
        'padding-bottom': 20 * _h
    });
    $('.details_center_jifen').eq(0).css({
        'font-size': 32 * _h,
        'margin-top':(20+20) * _h
    });
    $('.details_center_info1').eq(0).css({
        'margin-left':(35 * _w),
        'font-size': 36 * _h,
        'margin-top':53 * _h
    });
    $('.details_center_info11').eq(0).css({
        'margin-top':10 * _h
    });
    $('.details_center_info2').eq(0).css({
        'margin-left':(35 * _w),
        'font-size': 36 * _h,
        'margin-top':84 * _h,
        'height':62 * _h,
        'line-height': 62 * _h + 'px'
    });


    // 按钮在最下方
    var _endBub = 2;
    var _heightAll = (87 + 111) * _h;
    $('#details_btn').css({
/*        'height': _heightAll + _endBub,*/
        'font-size': 46*_h + 'px'
    });
    var _subMarginTop = _height - _heightAll;
/*    $('#details_btn').css({
        'margin-top': _subMarginTop
    });*/

    $('.details_btn1').css({
        'width': 453 * _w,
        'height': 111 * _h,
        'margin-left': 72*_w,
        'line-height': 111 * _h + 'px'
    });
    $('.details_btn2').css({
        'width': 453 * _w,
        'height': 111 * _h,
        'margin-right': 72*_w,
        'line-height': 111 * _h + 'px'
    });


    bindEvent();
});

function  bindEvent(){

    // 导航点击事件
    $('.content_header').on('click','.content_header_left',function(e){
        e.stopPropagation();
        nav_show();
    })
}