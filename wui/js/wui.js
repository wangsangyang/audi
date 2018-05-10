;(function (window) {
    window.wui = {
        loading: function (number) {
            var number = number||1;
            var loading = '<div class="loading-set">'+
                    '<dl class="box">'+
                        '<dt class="icon"></dt>'+
                        '<dd class="text">'+
                            '<span class="s1">+</span>'+
                            '<span class="s2">'+number+'</span>'+
                            '<span class="s3">传动值</span>'+
                        '</dd>'+
                    '</dl>'+
                '</div>';
            var div = document.createElement("div");
            div.innerHTML = loading;
            document.querySelector('body').appendChild(div);
            setTimeout(function () {
                document.querySelector('.loading-set').remove();
            },3000)
        }
    }
})(window);