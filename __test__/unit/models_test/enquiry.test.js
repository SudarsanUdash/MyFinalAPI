const Enquiries = require('../../../models/Enquiry');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_mydb';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    // await mongoose.connection.dropCollection('heros');
     await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('EnquirySchema', () => {
    it('Should be able post a enquiry', () => {
        let enquiry = {
            'name': 'Price',
            'yourenquiry': 'Price',
            'desc': 'Price'
        };
        // const hero_1 = await Heroes.create(hero);
        return Enquiries.create(enquiry)
            .then((enquiry_1) => {
                expect(enquiry_1.name).toEqual('Price');
            });
    });
    it('Should be able to update enquiry', async ()=> {
        let enquiry = await Enquiries.findOne({'name': 'Price'});
        enquiry.desc = 'Cost';
        let updated_enquiry = await enquiry.save();
        expect(updated_enquiry.desc).toEqual('Cost');
    });

    it('should be able to remove all enquiry', async () => {
        const status = await Enquiries.deleteMany();
        expect(status.ok).toBe(1);
    });
})