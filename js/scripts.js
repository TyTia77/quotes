var quotesArr = [];
var html = $('#test');
 $.get('data/quotes.json', function(data){
    data.forEach(function(each){
        quotesArr.push(each);
    });

    html.html(quotesArr[randomGen(data.length)]);
});

setInterval(function(){
    html.html(quotesArr[randomGen(quotesArr.length)]);
}, 5000);



function randomGen(length){
    return Math.floor(Math.random() * length);
}
