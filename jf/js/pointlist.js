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

/*    $('#pointlist_content').css({
        width: _width,
        height: _height
    });*/
    $('.pointlist_back').css({
        width: _width,
        height: _height
    });

    $('.content_header').css({
        width: _width
    });

    // header 中的标志居中
    var headerImg = new Image();
    // headerImg.src = "/outerproject/AudiPage/images/IMG_0740.png";
    headerImg.src = "images/IMG_0740.png";

    headerImg.onload = function () {
        $('.content_header_m').append('<img src="images/IMG_0740.png">');
        var _logoMarginLeft = $('.content_header_m').width() - $('.content_header_m').find('img').eq(0).width();
        $('.content_header_m').find('img').eq(0).css({
            'margin-left': _logoMarginLeft / 2
        });

        //背景图片的处理
        $('.personal_back_hr').css({
            'height': $('.content_header').height()
        });

/*        $('.pointlist_front_c').css({
            'width': _width - (43 * _w * 2)
        });*/

        // 左右的处理
        var _leftWidth = ($('.pointlist_front_c').width() - (44 * _w)) / 2;
/*        $('.pointlist_left').css({
            'width':_leftWidth
        })
        $('.pointlist_right').css({
            'width': _leftWidth
        });*/

        // 左侧首部
        $('.pointlist_left .point').eq(0).css({
            'margin-top': 277 * _h + $('.content_header').height()
        });

        $('.pointlist_left .point_img2').css({
            'width': _leftWidth - (25 * _h * 2)
        });

        // 右侧首部
        $('.pointlist_right .point').eq(0).css({
            'margin-top': 110 * _h + $('.content_header').height()
        })
        $('.pointlist_right .point_img2').css({
            'width': _leftWidth - (25 * _h * 2)
        });

        // 总体字体
        $('.point_info_title').css({
            'font-size': 48 * _h,
            'margin-top':(32 * _h),
            'padding-bottom': 10 * _h
        });

        $('.point_info_jifen').css({
            'font-size': 32 * _h,
            'margin-top':(15) * _h
        });
    };

    bindEvent();
});


function  bindEvent(){

    // 导航点击事件
    $('.content_header').on('click','.content_header_left',function(e){
        e.stopPropagation();
        nav_show();
    })
}