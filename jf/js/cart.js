/**
 * Created by kk on 2018/3/18.
 */
$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

/*    $('body').css({
        width: _width,
        height: _height
    });*/
/*    $('#cart_content').css({
        width: _width,
        height: _height
    });*/
/*    $('#cart_back1').css({
        width: _width,
        height: _height
    });*/
/*    $('#cart_back2').css({
        width: _width
    });*/
    $('#cart_sub').css({
        width: _width
    });
    $('.content_header').css({
        width: _width
    });

    // header 中的标志居中
    var headerImg = new Image();
     //headerImg.src = "/outerproject/AudiPage/images/IMG_0740@3x.png";
    headerImg.src = "/images/IMG_0740@3x.png";

    headerImg.onload = function () {
        $('.content_header_m').append('<img src="images/IMG_0740@3x.png">');
        var _logoMarginLeft = $('.content_header_m').width() - $('.content_header_m').find('img').eq(0).width();
        $('.content_header_m').find('img').eq(0).css({
            'margin-left': _logoMarginLeft / 2
        });
    };

    var _circleWidth = $('.cart_item_left_circle').width();
    if(_circleWidth > 25){
        _circleWidth = 25;
    }
    var _marginTop = $('.cart_item_left_circle').eq(0).parent().height() - _circleWidth;
    var _marginLeft = $('.cart_item_left_circle').eq(0).parent().width() - _circleWidth;
    // 动态修改选择圆圈的高度
    $('.cart_item_left_circle').css({
        'width': _circleWidth,
        'height':_circleWidth,
        //'border-radius':_circleWidth,
        'margin-top': _marginTop/2,
        'margin-left': _marginLeft/2
    });

    // 图片保证正方形 且居中
    var _imgHeight = $('.cart_item_middle_img').height();
    var _imgMarginTop = $('.cart_item_middle').eq(0).height() - $('.cart_item_middle_img').eq(0).height();
    $('.cart_item_middle_img').css({
        'width': _imgHeight,
        'margin-top': _imgMarginTop/2
    });

    // 右侧数字文字居中
    var _wordHeight = $('.cart_item_right_num').height();

    $('.cart_item_right_num').css({
        'line-height': _wordHeight + 'px'
    });


    var _back2_img = new Image();
     //_back2_img.src = "/outerproject/AudiPage/images/cart/audi.png";
    _back2_img.src = "/images/cart/audi.png";
    _back2_img.onload = function () {

        $('#cart_back2').find('img').get(0).src = 'images/cart/audi.png';

        // 底图2的居中
        var _back2Width = $('#cart_back2').find('img').eq(0).width();
        $('#cart_back2').find('img').eq(0).css({
            'margin-left': ( _width - _back2Width) / 2
        });

    };

    // 按钮在最下方
    var _endBub = 2;
    var _subMarginTop = _height - $('#cart_sub').height() + _endBub;
    $('#cart_sub').css({
        'margin-top': _subMarginTop
    });
    //保证在最下边
/*    $('.cart_sub_c').css({
        'height': $('#cart_sub').height() - _endBub
    });*/

    // 按钮的文字居中
    var _subWordHeight = $('.cart_sub_info').height();

    $('.cart_sub_info').css({
        'line-height': (_subWordHeight - _endBub) + 'px'
    });

    var _subBtnMarginTop = $('.cart_sub_c').height() - $('.cart_sub_btn').height();
    $('.cart_sub_btn').css({
        'line-height': $('.cart_sub_btn').height() + 'px',
        'margin-top': _subBtnMarginTop/2
    });


    bindEvent();

    setTotal();
});

//事件绑定
function bindEvent(){

    //点击新增
    $('#cart_content').on('click', '.cart_item_right_add', function (e) {
        e.stopPropagation();
        var _obj = $(this).parent().find('.cart_item_right_num');
        var _num = parseInt(_obj.text());
        _num++;
        _obj.text(_num);

        setTotal();
    });

    // 点击减少
    $('#cart_content').on('click', '.cart_item_right_sub', function (e) {
        e.stopPropagation();
        var _obj = $(this).parent().find('.cart_item_right_num');
        var _num = parseInt(_obj.text());
        _num--;
        if(_num < 0){
            _num = 0;
        }
        _obj.text(_num);

        setTotal();
    });

    // 选中按钮的事件
    $('#cart_content').on('click', '.cart_item_left_circle', function (e) {
        e.stopPropagation();
        var _select = 'images/cart/xuanzhong.png';
        var _unselect = 'images/cart/weixuanzhong.png';

        var _isShow = parseInt($(this).attr('data-s'));
        if(_isShow == 1){
            $(this).find('img').attr('src', _unselect);
            $(this).attr('data-s', 0);
        }else{
            $(this).find('img').attr('src', _select);
            $(this).attr('data-s', 1);
        }
        setTotal();
    });

    $('#cart_content').on('click', '.cart_item_middle', function (e) {
        e.stopPropagation();
        var _select = 'images/cart/xuanzhong.png';
        var _unselect = 'images/cart/weixuanzhong.png';

        var _obj = $(this).parent().find('.cart_item_left_circle').eq(0);
        var _isShow = parseInt(_obj.attr('data-s'));
        if(_isShow == 1){
            _obj.find('img').attr('src', _unselect);
            _obj.attr('data-s', 0);
        }else{
            _obj.find('img').attr('src', _select);
            _obj.attr('data-s', 1);
        }
        setTotal();
    });

    // 导航点击事件
    $('.content_header').on('click','.content_header_left',function(e){
        e.stopPropagation();
        nav_show();
    })

}

// 计算总价格
function setTotal(){
    var total = 0;
    var sum = $('#cart_content').find('.cart_item').length;
    for (var i = 0; i < sum; i++) {
        (function(index){
            var _tmpObj = $('#cart_content').find('.cart_item').eq(index);
            if(parseInt(_tmpObj.find('.cart_item_left_circle').eq(0).attr('data-s')) == 1){
                var _price = _tmpObj.find('.cart_item_middle_info_jifen').eq(0).attr('data-v');

                total += parseInt(_price) * parseInt(_tmpObj.find('.cart_item_right_num').eq(0).text());
                console.info(total);
            }
        })(i)
    }

    var info = '总计:' + total.toLocaleString() + '积分';
    $('#cart_sub').find('.cart_sub_info').eq(0).text(info);
}