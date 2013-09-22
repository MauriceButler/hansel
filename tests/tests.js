var test = require('tape'),
    hansel = require('../hansel');

test('hansel Exists', function (t) {
    t.plan(2);
    t.ok(hansel, 'hansel Exists');
    t.equal(typeof hansel, 'object');
});
