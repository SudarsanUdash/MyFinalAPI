const Items = require('../../../models/Item');
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

describe('ItemSchema', () => {
    it('Should be able create a item', () => {
        let item = {
            'name': 'Furniture',
            'desc': 'Furniture',
            'price': '1000'
        };
        // const hero_1 = await Heroes.create(hero);
        return Items.create(item)
            .then((item_1) => {
                expect(item_1.name).toEqual('Furniture');
            });
    });
    it('Should be able to update item', async ()=> {
        let item = await Items.findOne({'name': 'Furniture'});
        item.desc = 'Fur';
        let updated_item = await item.save();
        expect(updated_item.desc).toEqual('Fur');
    });

    it('should be able to remove all items', async () => {
        const status = await Items.deleteMany();
        expect(status.ok).toBe(1);
    });
})