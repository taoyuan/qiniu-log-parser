const assert = require('chai').assert;
const fs = require('fs');
const path = require('path');
const parser = require('..');

const log = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'log.txt'));
const expected = require('./fixtures/log.json');

describe('parser', () => {
  it('should parse qiniu cdn raw log content', () => {
    const items = parser.parse(log);
    // console.log(items);
    assert.deepEqual(items, expected);
  });
});
