var quotesArr = [];
var html = $('main');
var quoteIcon = '<i class="fa fa-quote-left" aria-hidden="true" style="font-size: 40px;"></i>  ';


 $.get('data/quotes.json', function(data){
     setColor();
    data.forEach(function(each){
        quotesArr.push(each);
    });

    html.html(
        quoteIcon
        +quotesArr[randomGen(data.length)] +' ...'
        // +' ...  <i class="fa fa-quote-right" aria-hidden="true"></i>'

    );
});

setInterval(function(){
    setColor();
    html.html(
        quoteIcon
        +quotesArr[randomGen(quotesArr.length)] +' ...'
        // +' ...  <i class="fa fa-quote-right" aria-hidden="true"></i>'
    );

    window.setTimeOut(function(){
        $('main').addClass('out1');
    }, 7000);

}, 8000);


function randomGen(length){
    return Math.floor(Math.random() * length);
}

function getColor(){
    var colors = [
        '#77B1A9',
        '#F39C12',
        '#E74C3C',
        '#BDBB99',
        '#472E32',
        '#9B59B6'
    ];

    return colors[randomGen(colors.length)];
}

function setColor(){
    var color = getColor();
    $('body').css({'background-color' : color});
    $('main').css({'color': color});
    $('.btn-next').css({'background-color': color});
    // $('.twitter-icon').css({'color': color});
}
