/**
 * Created by kk on 2018/3/18.
 */
var _w;
var _h;
$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

    _w = _width / 1242.00;
    _h = _height / 2008.00;

    $('body').css({
        width: _width,
        height: _height
    });
    $('#cart2_content').css({
        width: _width,
        height: _height
    });
    $('#cart2_back').css({
        width: _width,
        height: _height
    });
    $('#cart2_back_info_w').css({
        width: _width,
        height: _height
    });
    $('#cart2_back_1').css({
        width: _width,
        height: _height
    });


    var backImg = new Image();
    // backImg.src = "/outerproject/AudiPage/images/cart2/back.png";
    backImg.src = "/images/cart2/back.png";
    backImg.onload = function () {

        // loading 居中
        var loadingImg = new Image();
        // loadingImg.src = "/outerproject/AudiPage/images/cart2/loading.gif";
        loadingImg.src = "/images/cart2/loading.gif";

        loadingImg.onload = function () {
            $('#cart2_content').find('img').eq(0).attr('src','images/cart2/back.png');
            $('.cart2_back_info').append('<img src="images/cart2/loading.gif">');

            var _imgMarginTop = _height - $('.cart2_back_info').eq(0).height();
            var _imgMarginLeft = _width - $('.cart2_back_info').find('img').eq(0).width();

            $('.cart2_back_info').eq(0).css({
                'margin-top': _imgMarginTop / 2
            });

            //设置文字的大小
            $('.cart2_back_info_w_1').eq(0).css({
                'font-size': 60 * _h
            });
            $('.cart2_back_info_w_2').eq(0).css({
                'font-size': 25 * _h
            });
            // 设置文字的起点
            var imgObj = $('.cart2_back_info').find('img').eq(0);
            $('.cart2_back_info_w_c').eq(0).css({
                'margin-top': _imgMarginTop / 2 + imgObj.height() - $('.cart2_back_info_w_c').height()
            });

            // 设置整体的居中
            var _leftWord = 20 * _w;
            var _allWidth = imgObj.width() + _leftWord + $('.cart2_back_info_w_c').eq(0).width();

            $('.cart2_back_info').find('img').eq(0).css({
                'margin-left': (_width - _allWidth) / 2
            });
            $('.cart2_back_info_w_c').eq(0).css({
                'margin-left': (_width - _allWidth) / 2 + imgObj.width() + _leftWord
            });
            $('.cart2_back_info_w_2').eq(0).css({
                'margin-left': -15*_w
            });

            // 文字动画
            var _wordTopMax = _imgMarginTop / 2 ;
            $('.cart2_back_info_w_c').eq(0).animate({
                'opacity': 1,
                'margin-top': _wordTopMax
            }, 1500, 'swing', function () {
                window.setTimeout(function () {
                    $('#cart2_back').css({
                        'display': 'none'
                    });
                    $('.cart2_back_info_w').css({
                        'display': 'none'
                    });
                }, 1500)
            })


        };
    }

});