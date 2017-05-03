$('.btn-next').on('click', () => insertQuoteDom(quotesArr.length));
$('.twitter-button').on('click', () =>
    window.open("https://twitter.com/intent/tweet?text=" +capitalize(currentQuote)));
