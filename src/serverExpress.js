'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;
app.use(bodyParser.json());

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'warehouseDB';

async function connect() {
    try {
        const client = new MongoClient(dbUrl);
        await client.connect();
        console.log('Pomyślnie połączono z bazą danych!');

        const db = client.db(dbName);
        const productsCollection = db.collection('products')

        app.get('/products', async (req, res) => {
            try {
                const { sortBy, sortOrder } = req.body;
                const sortOptions = {};
                if (sortBy) {
                    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
                }
                const products = await productsCollection.find().sort(sortOptions).toArray();
                res.json(products);
            } catch (err) {
                console.error(err);
            }
        });

        app.post('/products', async (req, res) => {
            try {
                const { name, price, description, quantity, unit } = req.body;
                const product = {
                    "name": 0,
                    "price": 0,
                    "description": 0,
                    "quantity": 0,
                    "unit": 0
                }
            
                if (
                    typeof name !== 'string' ||
                    typeof price !== 'number' ||
                    typeof description !== 'string' ||
                    typeof quantity !== 'number' || 
                    !Number.isInteger(quantity) ||
                    typeof unit !== 'string'
                ) {
                    res.json({ error: 'Błędne dane' });
                    return;
                }

                const result = await productsCollection.insertOne(product);
                res.json(result);

            } catch (err) {
                console.error(err);
                res.send('Wystąpił błąd serwera lub podałeś za mało bądź za dużo danych');
            }
        });

        app.listen(port, () => {
            console.log(`Serwer działa na porcie: ${port}`);
        });

    } catch (err) {
        console.error('Wystąpił błąd podczas łączenia z serwerem.', err);
    }
}

connect();