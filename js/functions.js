var capitalize = string => {
    let temp = [];
    string.split(' ').forEach(index => temp.push(index[0].toUpperCase() +index.slice(1)));
    return temp.join(' ');
}

var randomGen = length => Math.floor(Math.random() * length);
