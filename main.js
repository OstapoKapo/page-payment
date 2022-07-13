function text (){
 
}
text()
rangeInput.oninput = function(){
    let a = rangeInput.value;
    rangeInputValue2.innerText = a;
    console.log(rangeInput.value)
}
let price = 7500 
rightPrice.innerText = price

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
        Nofull.onclick = function(){
             price = price - 2300
rightPrice.innerText = price
        }
        full.onclick = function(){
            price = price + 2300
rightPrice.innerText = price
       }
       time2.onclick = function(){
        price = price - 1200
rightPrice.innerText = price
   }
   time4.onclick = function(){
    price = price + 1200
rightPrice.innerText = price
}
alone.onclick = function(){
    price = price + 64
rightPrice.innerText = price
}
automatic.onclick = function(){
    price = price - 64
rightPrice.innerText = price
}
    });

    $('.select').on('click', '.select__item', function () {
        
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});