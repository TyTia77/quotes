var colors = ['#77B1A9', '#F39C12', '#E74C3C', '#BDBB99', '#472E32', '#9B59B6'];

var getColor = () => colors[randomGen(colors.length)];

var setColor = () => {
    let color = getColor();
    $('body').css({'background-color' : color});
    $('main').css({'color': color});
    $('.btn-next').css({'background-color': color});
}
