'use strict';
const app = require('../routes');
const test = require('tape');
const request = require('supertest');

/* GROOT TEST POINTS */

test('groot endpoint without message', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
          "error": "I am Groot!"
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('groot endpoint with message', (t) => {
  const message = 'testing';
  request(app)
    .get(`/groot?message=${message}`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
          "received": message,
          "translated": "I am Groot!"
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});
/* ARROW TEST POINTS */

test('arrow endpoint with time and distance', (t) => {
  request(app)
    .get(`/yondu?distance=100&time=10`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
          "distance": 100,
          "time": 10,
          "speed": 10
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('arrow endpoint without time and distance', (t) => {
  request(app)
    .get(`/yondu`)
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
          "err": "no data",
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('arrow endpoint with zero time', (t) => {
  request(app)
    .get(`/yondu?distance=100&time=0`)
    .expect('Content-type', /json/)
    .expect(401)
    .end((err, res) => {
      const expected = {
          "err": 'divide by zero is impossible',
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

/* CARGO TEST POINTS */

test('cargo endpoint with 40% amount', (t) => {
  request(app)
    .get(`/rocket/fill?caliber=.50&amount=5000`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "received": ".50",
        "amount": 5000,
        "shipstatus": "40%",
        "ready": false
      }
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('cargo endpoint with zero amount', (t) => {
  request(app)
    .get(`/rocket/fill?caliber=.50&amount=0`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "received": ".50",
        "amount": 0,
        "shipstatus": "empty",
        "ready": false
      }
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('cargo endpoint without amount', (t) => {
  request(app)
    .get(`/rocket/fill?caliber=.50`)
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
        "err": 'not enough data',
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('cargo endpoint with full amount', (t) => {
  request(app)
    .get(`/rocket/fill?caliber=.50&amount=12500`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "received": ".50",
        "amount": 12500,
        "shipstatus": "full",
        "ready": true
      }
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('cargo endpoint with overloaded amount', (t) => {
  request(app)
    .get(`/rocket/fill?caliber=.50&amount=13500`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "received": ".50",
        "amount": 13500,
        "shipstatus": "overloaded",
        "ready": false
      }
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});


/* DRAX TESTS */

// test('drex insert new element', (t) => {
//   request(app)
//     .post(`/drex`)
//     .send({'name': 'orangen', 'calorie': 88, 'amount': 3})
//     .expect('Content-type', /json/)
//     .expect(200)
//     .end((err, res) => {
//       const expected = {
//         "answer": 1
//       }
//       const actual = res.body;

//       t.error(err, 'No error');
//       t.same(actual, expected, 'Received expected answer');
//       t.end();
//     });
// });