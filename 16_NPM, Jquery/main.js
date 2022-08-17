$(document).ready(function () {
    $('#next').on('click', function () {
        const $currentItem = $('.active');
        const $nextItem = $currentItem.next();

        if ($nextItem.length) {
            $currentItem.removeClass('active');
            $nextItem.addClass('active')
        }
    })

    $('#prev').on('click', function () {
        const $currentItem = $('.active');
        const $prevItem = $currentItem.prev();

        if ($prevItem.length) {
            $currentItem.removeClass('active');
            $prevItem.addClass('active')
        }
    })
})