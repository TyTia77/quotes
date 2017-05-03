var quotesArr = [];
var html = $('main');
var currentQuote;
var prev;

 $.get('data/quotes.json', function(data){
    data.forEach(function(each){
        quotesArr.push(each);
    });
    insertQuoteDom(data.length, true);
});

$('.btn-next').on('click', function(ev){
    insertQuoteDom(quotesArr.length);
});

$('.twitter-button').on('click', function(ev){
    //opens same tab
    // window.location.href = "https://twitter.com/intent/tweet";

    // opens new tab
    window.open("https://twitter.com/intent/tweet?text=" +capitalize(currentQuote));
});

function insertQuoteDom(length, noclass){
    var quoteIcon = '<i class="fa fa-quote-left" aria-hidden="true" style="font-size: 40px;"></i>  ';
    var timer = noclass ? 0 : 1000;
    if (!noclass){
        setClass();
    }
    setColor();
    setTimeout(function(){
        html.html(
            quoteIcon
            +getQuote(length) +' ...'
        );
    }, timer);
}

function getQuote(length){
    currentQuote = quotesArr[randomGen(length)];
    return currentQuote;
}

function clearClassName(){
    var dom = $('.quote-container');
    var classList = dom.attr('class').split(' ');

    // remove every class except quote-container
    classList.forEach(function(c){
        if(c !== 'quote-container'){
            dom.removeClass(c);
        }
    });
}

function setClass(){
    var classNamesIn = ['fade-in',  'spin-in', 'scale-in'];
    var classNamesOut = ['fade-out', 'spin-out',  'scale-out'];
    var dom = $('.quote-container');
    var rand = function(){
        var temp = randomGen(classNamesIn.length);
        temp = temp === prev ? rand() : temp;
        prev = temp;
        return temp;
    };
    clearClassName();

    dom.addClass(classNamesOut[rand()]);
    setTimeout(function(){
        clearClassName();
        dom.addClass(classNamesIn[rand()]);
    }, 1000);
}

function capitalize(string){
    var temp = [];
    string.split(' ').forEach(function(index){
        temp.push(index[0].toUpperCase() +index.slice(1));
    });
    return temp.join(' ');
}


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
}
