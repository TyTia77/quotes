var dom = $('.quote-container');
var prev;

var clearClassName = () =>{
    let classList = dom.attr('class').split(' ');

    // remove every class except quote-container
    classList.forEach(c => { if(c !== 'quote-container') dom.removeClass(c) });
}

var setClass = () =>{
    let classNamesIn = ['fade-in',  'spin-in', 'scale-in'];
    let classNamesOut = ['fade-out', 'spin-out',  'scale-out'];
    let rand = () => {
        //keep calling rand till temp not equal to prev
        let temp = randomGen(classNamesIn.length);
        return temp = temp === prev ? rand() : prev = temp;
    };

    clearClassName();
    dom.addClass(classNamesOut[rand()]);
    setTimeout(() => {
        clearClassName();
        dom.addClass(classNamesIn[rand()]);
    }, 1000);
}
