var generateRandomUsername = function() {
    var result = Math.floor(Math.random() * 10);

    for(var i = 0; i < 3; i++){
        result = result.toString() + Math.floor(Math.random() * 10);
    }

    return 'User' + result;
};

module.exports.generateRandomUsername = generateRandomUsername;