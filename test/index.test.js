var {getDays, isOdd} = require('./index');

//1

describe ('getDays', function() {
    it ('should be defined', function() {
        expect(getDays).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getDays).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getDays()).toBe('Error');
    });
    it ('should return 30', function() {
        expect(getDays(2021, 4)).toBe(30);
    });
    it ('should return 30', function() {
        expect(getDays(2021, 'April')).toBe(30);
    });
});


//2

describe ('isOdd', function() {
    it ('should be defined', function() {
        expect(isOdd).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof isOdd).toBe('function');
    });
    it ('should return false', function() {
        expect(even.isOdd()).toBe(false);
    });
    it ('should return true', function() {
        expect(odd.isOdd()).toBe(true);
    });
});


//3

