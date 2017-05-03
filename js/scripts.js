var quotesArr = [];
var html = $('main');
var currentQuote;

 $.get('data/quotes.json', data => {
    data.forEach(each => quotesArr.push(each));
    insertQuoteDom(data.length, true);
});

var insertQuoteDom = (length, noclass) => {
    let quoteIcon = '<i class="fa fa-quote-left" aria-hidden="true" style="font-size: 40px;"></i>  ';
    let timer = noclass ? 0 : 1000;
    if (!noclass) setClass();
    setColor();
    setTimeout(() => html.html(quoteIcon+getQuote(length) +' ...'), timer);
}

var getQuote = length => currentQuote = quotesArr[randomGen(length)];
