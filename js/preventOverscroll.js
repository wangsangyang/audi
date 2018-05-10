var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
        var top = el.scrollTop
            , totalScroll = el.scrollHeight
            , currentScroll = top + el.offsetHeight

        if(top === 0) {
            el.scrollTop = 1
        } else if(currentScroll === totalScroll) {
            el.scrollTop = top - 1
        }
    })

    el.addEventListener('touchmove', function(evt) {
        //if the content is actually scrollable, i.e. the content is long enough
        //that scrolling can occur
        if(el.offsetHeight < el.scrollHeight)
            evt._isScroller = true
    })
}

overscroll(document.querySelector('.scroll'));

document.body.addEventListener('touchmove', function(evt) {
    //In this case, the default behavior is scrolling the body, which
    //would result in an overflow.  Since we don't want that, we preventDefault.
    if(!evt._isScroller) {
        evt.preventDefault()
    }
});