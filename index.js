var rating;

$('#submit-btn').click(function () {
    if(!rating) {
        alert("Nothing is selected!");
        return;
    }
    $('.review').css('display', 'none');
    $('.thanks').css('display', 'block');
    $('.res').text(rating);
});

function clickButton() {
    const active = $('active');
    if (active[0]) {
        active[0].className = "";
    }
    $(this).addClass('active');
    rating = $(this).text();
    toDefault(rating);
}

function toDefault(except) {
    for(let i = 1; i <= 5; i++) {
        if (i != except) {
            $('.r' + i).removeClass('active');
        }
    }
}

for(let i = 1; i <= 5; i++) {
    $('.r' + i).on("click", clickButton);
}
