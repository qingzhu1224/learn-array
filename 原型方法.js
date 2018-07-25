String.prototype.repeatStr = function(num) {
    if(num === 0) return null;
    var self = this;
    console.log('this', this);
    var _str = '';
    for(var i = 0; i < num; i++) {
        _str += self;
    }
    return _str;
}