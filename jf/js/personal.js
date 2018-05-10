/**
 * Created by kk on 2018/3/17.
 */

var _loopNum = 0;
var _tempLoop = 0;
var _temp_imgWidth = 0;
var _temp_imgHeight = 0;
var _temp_ok = false;

var _temp_img;
var _temp_img2;

var _w;
var _h;

var num = 0;

var isServer = true;

$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

    _w = _width / 1242.00;
    _h = _height / 2008.00;

    $('.content_header').css({
        width: _width
    });
    $('#personal_content').css({
        width: _width,
        height: _height
    });
    $('#personal_power1').css({
        width: _width,
        height: _height
    });
    $('#personal_power2').css({
        width: _width,
        height: _height
    });
    $('#personal_power3').css({
        width: _width
    });
    $('#personal_power4').css({
        width: _width
    });
    $('#personal_back').css({
        width: _width,
        height: _height
    });
    /*$('#personal_loading').css({
        width: _width,
        height: _height
    });*/

    // header 中的标志居中
    var headerImg = new Image();
    if(isServer){
        headerImg.src = "/images/IMG_0740@3x.png";
    }else{
        headerImg.src = "/outerproject/AudiPage/images/IMG_0740@3x.png";
    }

    bindEvent();

    headerImg.onload = function () {
        $('.content_header_m').append('<img src="images/IMG_0740@3x.png">');
        var _logoMarginLeft = $('.content_header_m').width() - $('.content_header_m').find('img').eq(0).width();
        $('.content_header_m').find('img').eq(0).css({
            'margin-left': _logoMarginLeft / 2
        });

        //内容偏移量
        var _nameEnd = 15;

        $('.personal_content_top').css({
            'display': 'block'
        });
        $('.personal_content_top_hr').css({
            'height': $('.content_header').height() + _nameEnd
        });


        // 左边距离
        $('.personal_content_name_hr').eq(0).css({
            'width': 56 *_w,
        });
        // 头像
        $('.personal_content_name').eq(0).css({
            'width': _width - 56 *_w,
            'height': 189 *_h,
        });
        $('.personal_content_name_img').eq(0).css({
            'width': 189 *_w,
            'height': 189 *_h,
        });
        $('.personal_content_name_img').eq(0).find('img').eq(0).css({
            'width': 189 *_w,
            'height': 189 *_w,
        });

        // 名称居中
        var _nameImgHeight = $('.personal_content_name_img').height();
        var _nameMarginTop = (_nameImgHeight - $('.personal_content_name_info').height()) / 2;
        $('.personal_content_name_info').css({
            'margin-top': _nameMarginTop,
            'font-size': 48 * _h,
            'margin-left':  55 * _w,
        });
        $('.personal_content_name_btn').css({
            'margin-top': _nameMarginTop + 5
        });


        // 计算 table 中 td 高度，以及table left
        $('.personal_content_table td').css({
            'height': 90*_h,
            'font-size': 40 * _h,
            'line-height': 60*_h + 'px'
        });
        $('.personal_content_table').css({
            // 'margin-left': $('.personal_content_name_hr').eq(0).width()
            'margin-left': 60 * _w
        });
        $('.personal_content_table .personal_content_table_hr td').css({
            // 'margin-left': $('.personal_content_name_hr').eq(0).width()
            'height': 60*_h
        });
        // 重置 personal_content_bottom 的高度
        var _bottomHeight = _height - $('.personal_content_name').eq(0).height() - $('.personal_content_table').eq(0).height() - $('.content_header').eq(0).height();

        $('.personal_content_bottom').eq(0).css({
            'height':_bottomHeight -6
        });

        //初始化数据
        num = 5000;
        initImage(_width, _height, num);
    };
});

function initImage(width,height,num){
    // 图片
    _temp_img = new Image();
    if(isServer){
        _temp_img.src = "/images/personal/wheel2.png";
    }else{
        _temp_img.src = "/outerproject/AudiPage/images/personal/wheel2.png";
    }

    _temp_img.onload = function () {

        _temp_img2 = new Image();
        if(isServer){
            _temp_img2.src = "/images/personal/wheel1.png";
        }else{
            _temp_img2.src = "/outerproject/AudiPage/images/personal/wheel1.png";
        }

        _temp_img2.onload = function () {

            // 显示
            $('.personal_content_bottom_inner').css({
                'display': 'block'
            });

            // 加载 img
            var fImg = $('.personal_content_bottom').find('img');
            fImg.get(0).src = 'images/personal/wheel1.png';


            // 空图父类高度的确定
            $('.personal_content_bottom_img').eq(0).css({
                'height': $('.personal_content_bottom_img').eq(0).find('img').height()
            });

            // 空 img 居中
            var _fImgMarginLeft = width - fImg.eq(0).width();
            fImg.eq(0).css({
                'margin-left': _fImgMarginLeft/2
            });

            // 齿轮内部的数据显示,以及位置
            var _ffImg = $('.personal_content_bottom').find('img').eq(0);
            var _imgWidth = _ffImg.width();
            var _imgHeight = _ffImg.height();

            // outer 字体的设置
            $('.personal_content_bottom_out').eq(0).css({
                'margin-top': -_imgHeight * 0.9,
                'height': _imgHeight,
                'display':'block'
            });

            // 中间横线的居中, 以及位置的计算
            var _fFontMarginLeft = width - $('.personal_content_bottom_out_3').eq(0).width();
            // 前2行的高度
            $('.personal_content_bottom_out_3').eq(0).css({
                'margin-left': _fFontMarginLeft/2
            });

            _loopNum = num;
            _temp_imgWidth = _imgWidth;
            _temp_imgHeight = _imgHeight;

            // 设置内容
            $('.personal_content_bottom_out_2').eq(0).text(num);

            $('.personal_content_bottom_out_hr_1').eq(0).css({
                'height': 120 * _h
            });
            $('.personal_content_bottom_out').eq(0).css({
                'font-size': 36 * _h
            });
            $('.personal_content_bottom_out_hr_2').eq(0).css({
                'height': 30 * _h
            });
            $('.personal_content_bottom_out_2').eq(0).css({
                'font-size': 88 * _h
            });
            // 设置横线的位置
            $('.personal_content_bottom_out_hr_3').eq(0).css({
                'height': 95 * _h
            });


            //最下面 字体 和 行距的处理
            $('.personal_content_bottom_1_hr').eq(0).css({
                'height': 50 * _h
            });
            $('.personal_content_bottom_2_hr').eq(0).css({
                'height':10 * _h
            });

            // 设置下面部分整体的高度
            var _hrHeight = $('.personal_content_bottom').eq(0).height() - $('.personal_content_bottom_inner').eq(0).height();
            $('.personal_content_bottom_inner_hr').eq(0).css({
                'height': _hrHeight / 2
            });

            //进度条的位置
            $('.personal_content_bottom_canvas').eq(0).css({
                'margin-top': -$('.personal_content_bottom_img').eq(0).height() - 4,
                'margin-left':  _fImgMarginLeft/2
            });

            // 绘制进度条
            draw(_imgWidth,_imgHeight,num);


            // 加载 loading
            /*var _temp_loading = new Image();
            _temp_loading.src = "/outerproject/AudiPage/images/cart2/loading.gif";
            // _temp_loading.src = "/images/cart2/loading.gif";

            var _loadingImg_height = 200 * _h;
            var _loadingImg_width = 247 / 164 * _loadingImg_height;
            var _loadingImg_top = $('.personal_content_bottom_img').position().top + $('.personal_content_bottom_img').height() / 2 - _loadingImg_height/2;
            $('.personal_content_bottom_img_loading').eq(0).css({
                'height': _loadingImg_height,
                'top':_loadingImg_top,
                'left': $(window).width()/2 - _loadingImg_width/2
            });
            $('.personal_content_bottom_img_loading').eq(0).find('img').get(0).src = _temp_loading.src;
            $('.personal_content_bottom_img_loading').eq(0).find('img').eq(0).css({
                'width': _loadingImg_width
            });*/


        };
    };
}

// 绘制
function draw(width, height,num) {
    var _canvas = document.getElementById("mycanvas");

    _canvas.width = width;
    _canvas.height = height;
    var _context = _canvas.getContext("2d");
    getPoint(width, height, _context,num);
    _context.drawImage(_temp_img, 0, 0, width, height);
}

// 根据比例获取点的信息
function getPoint(width, height, context, num) {
    var total = 9999.0;
    // 计算半径
    var r = width / 2;

    // 计算圆心
    var radina = Math.acos((width / 2 - (width - height)) / (width / 2));

    var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度

    // 总弧长
    var all = Math.PI * width;
    // 当前的度数
    var currentRadian = num;
    var a1 = (currentRadian / total) * 2 * Math.PI;
    var angle1 = Math.floor(180 / (Math.PI / a1));//将弧度转换成角度

    // 绘制弧度
    // 计算圆心
    var x = width / 2;
    var y = width / 2;


    context.lineWidth = 5;
    context.strokeStyle = "green";

    /*    var startRadian = 2 * Math.PI - (Math.PI / 2 - radina);
     var endRadian = Math.PI;*/



    var startRadian = getRads(-90);
    //var endRadian = getRads(408);  // + 48

    var totalRadian = 276;
    var _end1 = totalRadian * currentRadian / total;
    var _start1 = 132;
    var endRadian = getRads(_start1 + _end1);

    context.arc(x, y, x + 60, -startRadian, endRadian);
    context.stroke();
    context.lineTo(x, y);

    context.clip();
    context.save();
}
// 角度换成 弧度
function getRads(degrees) {
    return (Math.PI * degrees) / 180;
}
// 弧度换成角度
function getDegrees(rads) {
    return (rads * 180) / Math.PI;
}
function  bindEvent(){

    // 导航点击事件
    $('.content_header').on('click', '.content_header_left', function (e) {
        e.stopPropagation();
        nav_show();
    });

    // 释放动力
    $('#personal_content').on('click', '.personal_content_bottom_out_4', function (e) {
        e.preventDefault();

        // 计算次数,确定透明的程度
        var _numOld = num;//记录原始值
        var _end = num / 4;  // 下降的节点
        var _factor = -100;
        var _factor_1 = 200;

        // 不同阶段，设置不同的急加速效果
        if(num > 3000 && num <= 5000){
            _factor = -200;
            _factor_1 = 250;
        }else if(num > 5000){
            _factor = -250;
            _factor_1 = 350;
        }

        var _jasu = 0.02;  //新增时加速因子
        var _temp1 = num / Math.abs(_factor);
        var _factor1 = 1 / _temp1;

        var _subFactor = 1;
        var _addFactor = 0;

        var _turn = false;// 渐变方向改变，false表示减少
        var _isEnd = false; // 动画是否结束

        var t = window.setInterval(function(){
            num += _factor;
            if(!_isEnd){
                if(!_turn){
                    // 递减
                    if(num >= _end ){
                        // 最后一次进行 因子的调整
                        if( (num +_factor) < _end){
                            _factor = _end - num;
                        }

                    }
                }else{
                    // 递增
                    if(num <= _numOld){
                        // 最后一次进行 因子的调整
                        _factor += _factor * _jasu;
                        _jasu+=0.01; // 加速效果
                        if( (num +_factor) > _numOld){
                            _factor = _numOld - num
                        }

                        _subFactor -= _factor1;
                        _addFactor += _factor1;
                    }
                }


                $('.personal_content_bottom_img').eq(0).css({
                    'opacity': _subFactor
                });

                /*$('.personal_content_bottom_img_loading').eq(0).css({
                 'opacity': _addFactor
                 });*/

                /*$('#personal_loading').eq(0).css({
                    'opacity': _addFactor
                });*/

                $('.personal_content_bottom_out_2').text(parseInt(num));
                var _canvas = document.getElementById("mycanvas");
                _canvas.width = _temp_imgWidth;
                var _context = _canvas.getContext("2d");

                getPoint(_temp_imgWidth, _temp_imgHeight, _context,num);
                _context.drawImage(_temp_img, 0, 0, _temp_imgWidth, _temp_imgHeight);


                if(num == _end){
                    // 转换
                    _factor = _factor_1;
                    _turn = true;
                }
                if(num == _numOld){
                    //结束
                    _isEnd = true;
                }
            }else{
                window.clearInterval(t);

                // 对 隐藏等的完成
                $('.personal_content_bottom_img').eq(0).animate({
                    'opacity': 0
                },700,function(){
                    window.location = '/pointlist.html';
                });
            }
        },50);
    });
}