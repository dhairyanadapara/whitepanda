const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

let app = require('../app');
let Places = require('../models/model');

let places = [{
    _id: new ObjectID(),
    Name: "Gujarat",
    Details: {
        Price: 5000,
        Picture: "gj.jpg"
    },
    Quantity: 20
}, {
    _id: new ObjectID(),
    Name: "Sikkim",
    Details: {
        Price: 20000,
        Picture: "sk.jpg"
    },
    Quantity: 40
}];

beforeEach((done) => {
    Places.remove({}).then(() => {
        return Places.insertMany(places);
    }).then(() => done());
});


describe('GET /places', () => {
    it('should show all places', (done) => {
        request(app)
            .get('/places')
            .expect(200)
            .end(done);
    })
});

describe('POST /places', () => {
    it('should add new place', (done) => {
        var text = 'Dubai';

        request(app)
            .post('/places')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err) => {
                if (err) {
                    return done(err);
                }


                Places.find({ text }).then((places) => {
                    expect(places.length).toBe(1);
                    expect(places[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});