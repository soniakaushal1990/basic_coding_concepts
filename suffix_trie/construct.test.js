// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

const word1 = 'test';
const test1 = new program.SuffixTrie(word1);
const trie1 = {
  t: {
    '*': true,
    e: {s: {t: {'*': true}}},
  },
  s: {t: {'*': true}},
  e: {s: {t: {'*': true}}},
};

const word2 = 'invisible';
const test2 = new program.SuffixTrie(word2);
const trie2 = {
  e: {'*': true},
  l: {e: {'*': true}},
  b: {l: {e: {'*': true}}},
  i: {
    b: {l: {e: {'*': true}}},
    s: {i: {b: {l: {e: {'*': true}}}}},
    n: {v: {i: {s: {i: {b: {l: {e: {'*': true}}}}}}}},
  },
  s: {i: {b: {l: {e: {'*': true}}}}},
  v: {i: {s: {i: {b: {l: {e: {'*': true}}}}}}},
  n: {v: {i: {s: {i: {b: {l: {e: {'*': true}}}}}}}},
};

const word3 = '1234556789';
const test3 = new program.SuffixTrie(word3);
const trie3 = {
  '9': {'*': true},
  '8': {'9': {'*': true}},
  '7': {'8': {'9': {'*': true}}},
  '6': {'7': {'8': {'9': {'*': true}}}},
  '5': {
    '6': {'7': {'8': {'9': {'*': true}}}},
    '5': {'6': {'7': {'8': {'9': {'*': true}}}}},
  },
  '4': {'5': {'5': {'6': {'7': {'8': {'9': {'*': true}}}}}}},
  '3': {
    '4': {'5': {'5': {'6': {'7': {'8': {'9': {'*': true}}}}}}},
  },
  '2': {
    '3': {
      '4': {'5': {'5': {'6': {'7': {'8': {'9': {'*': true}}}}}}},
    },
  },
  '1': {
    '2': {
      '3': {
        '4': {'5': {'5': {'6': {'7': {'8': {'9': {'*': true}}}}}}},
      },
    },
  },
};

const word4 = 'testtest';
const test4 = new program.SuffixTrie(word4);
const trie4 = {
  e: {
    s: {
      t: {
        '*': true,
        t: {e: {s: {t: {'*': true}}}},
      },
    },
  },
  t: {
    '*': true,
    e: {
      s: {
        t: {
          '*': true,
          t: {e: {s: {t: {'*': true}}}},
        },
      },
    },
    t: {e: {s: {t: {'*': true}}}},
  },
  s: {
    t: {
      '*': true,
      t: {e: {s: {t: {'*': true}}}},
    },
  },
};

const word5 = 'ttttttttt';
const test5 = new program.SuffixTrie(word5);
const trie5 = {
  t: {
    '*': true,
    t: {
      '*': true,
      t: {
        '*': true,
        t: {
          '*': true,
          t: {
            '*': true,
            t: {
              '*': true,
              t: {
                '*': true,
                t: {
                  '*': true,
                  t: {'*': true},
                },
              },
            },
          },
        },
      },
    },
  },
};

const word6 = 'babc';
const test6 = new program.SuffixTrie(word6);
const trie6 = {
  c: {'*': true},
  b: {
    c: {'*': true},
    a: {b: {c: {'*': true}}},
  },
  a: {b: {c: {'*': true}}},
};

it('Test Case #1', function() {
  for (let i = word1.length - 1; i >= 0; i--) {
    const substring = word1.slice(i);
    chai.expect(test1.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #2', function() {
  for (let i = word2.length - 1; i >= 0; i--) {
    const substring = word2.slice(i);
    chai.expect(test2.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #3', function() {
  for (let i = word3.length - 1; i >= 0; i--) {
    const substring = word3.slice(i);
    chai.expect(test3.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #4', function() {
  for (let i = word4.length - 1; i >= 0; i--) {
    const substring = word4.slice(i);
    chai.expect(test4.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #5', function() {
  for (let i = word5.length - 1; i >= 0; i--) {
    const substring = word5.slice(i);
    chai.expect(test5.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #6', function() {
  for (let i = word6.length - 1; i >= 0; i--) {
    const substring = word6.slice(i);
    chai.expect(test6.contains(substring)).to.deep.equal(true);
  }
});

it('Test Case #7', function() {
  chai.expect(test1.root).to.deep.equal(trie1);
});

it('Test Case #8', function() {
  chai.expect(test2.root).to.deep.equal(trie2);
});

it('Test Case #9', function() {
  chai.expect(test3.root).to.deep.equal(trie3);
});

it('Test Case #10', function() {
  chai.expect(test4.root).to.deep.equal(trie4);
});

it('Test Case #11', function() {
  chai.expect(test5.root).to.deep.equal(trie5);
});

it('Test Case #12', function() {
  chai.expect(test6.root).to.deep.equal(trie6);
});

it('Test Case #13', function() {
  chai.expect(test1.contains('tes')).to.deep.equal(false);
});

it('Test Case #14', function() {
  chai.expect(test2.contains('nvisibl')).to.deep.equal(false);
});

it('Test Case #15', function() {
  chai.expect(test3.contains('45567')).to.deep.equal(false);
});

it('Test Case #16', function() {
  chai.expect(test4.contains('tt')).to.deep.equal(false);
});

it('Test Case #17', function() {
  chai.expect(test5.contains('vvv')).to.deep.equal(false);
});

it('Test Case #18', function() {
  chai.expect(test6.contains('bab')).to.deep.equal(false);
});
