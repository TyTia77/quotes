var app = angular.module('quoteApp', []);

app.factory('api', ['$http', function($http){
    var api = {};

    api.getQuotes = function(){
        return $http.get('data/quotes.json');
    }

    return api;
}]);

app.controller('mainCtrl', ['$scope', 'api', '$timeout', function($scope, api, $timeout){

    var colors = ['#77B1A9', '#F39C12', '#E74C3C', '#BDBB99', '#472E32', '#9B59B6'];
    $scope.quoteText = '';
    $scope.color = '';

    var quotesArray = [];
    var currentQuote = '';
    var prev;

    api.getQuotes().then(function(data){
        quotesArray = data.data;
        setColor();
        getNewQuote();
    }).catch(handleErr);

    $scope.btnNextClick = function(){
        setClass();
    };

    $scope.btnTwitterClick = function(){
        window.open("https://twitter.com/intent/tweet?text=" +capitalize(currentQuote));
    }

    function handleErr(err){
        console.log(err);
    }

    function getNewQuote(){
        currentQuote = quotesArray[randomGen(quotesArray.length)];
        $scope.quoteText = currentQuote;
    }

    function setColor(){
        $scope.color = colors[randomGen(colors.length)];
    }

    function setClass(){


        var classNamesIn = ['fade-in',  'spin-in', 'scale-in'];
        var classNamesOut = ['fade-out', 'spin-out',  'scale-out'];

        var rand = function(){
            //keep calling rand till temp not equal to prev
            var temp = randomGen(classNamesIn.length);
            return temp = temp === prev ? rand() : prev = temp;
        };

        clearClassList();
        $('.quote-container').addClass(classNamesOut[rand()]);

        $timeout(function(){
            clearClassList();
            $('.quote-container').addClass(classNamesIn[rand()]);
            setColor();
            getNewQuote();
        }, 1000);
    }

    function clearClassList(){
        var classList = $('.quote-container').attr('class').split(' ');

        classList.forEach(function(item){
            if(item !== 'quote-container') $('.quote-container').removeClass(item);
        });
    }

    function randomGen(length){
        return Math.floor(Math.random() * length);
    }

    function capitalize(string){
        var temp = [];
        string.split(' ').forEach(index => temp.push(index[0].toUpperCase() +index.slice(1)));
        return temp.join(' ');
    }
}]);
