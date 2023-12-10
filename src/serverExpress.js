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
                return res.send(err);
            }
        });

        app.post('/products', async (req, res) => {
            try {
                const { name, price, description, quantity, unit } = req.body;

                const existingProduct = await productsCollection.findOne({ "name": name });
                if (existingProduct) {
                    return res.json({ error: 'Produkt o tej nazwie już istnieje w bazie danych.' });
                }

                const product = {
                    "name": name,
                    "price": price,
                    "description": description,
                    "quantity": quantity,
                    "unit": unit
                };
            
                if (
                    typeof name !== 'string' ||
                    typeof price !== 'number' ||
                    typeof description !== 'string' ||
                    typeof quantity !== 'number' || 
                    !Number.isInteger(quantity) ||
                    typeof unit !== 'string'
                ) {
                    return res.json({ error: 'Błędne dane.' });
                }

                const result = await productsCollection.insertOne(product);
                if (result.acknowledged === true) {
                    return res.json({ success: 'Dodano produkt.' });
                } else {
                    return res.json({ error: 'Błąd. Nie udało się dodać produktu.' });
                }

            } catch (err) {
                res.send(err);
                console.error(err);
            }
        });

        app.put('/products/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const { newName, newPrice, newDescription, newQuantity, newUnit } = req.body;

                const existingProduct = await productsCollection.findOne({ "_id": new ObjectId(id) });
                if (!(existingProduct)) {
                    res.json({ error: 'Brak produktu o takim id w bazie danych.' });
                    return;
                }

                const updateData = {};
                if (newName !== "") updateData.name = newName; else updateData.name = existingProduct.name;
                if (newPrice !== "") updateData.price = newPrice; else updateData.price = existingProduct.price;
                if (newDescription !== "") updateData.description = newDescription; else updateData.description = existingProduct.description;
                if (newQuantity !== "") updateData.quantity = newQuantity; else updateData.quantity = existingProduct.quantity;
                if (newUnit !== "") updateData.unit = newUnit; else updateData.unit = existingProduct.unit;

                const result = await productsCollection.updateOne(
                    { "_id":  new ObjectId(id) },
                    {
                        $set: updateData
                    }
                );

                if (result.modifiedCount === 1) {
                    return res.json({ success: 'Produkt został zaktualizowany.' });
                } else {
                    return res.json({ error: 'Nie udało się zaktualizować produktu.' });
                }

            } catch (err) {
                res.send(err);
                console.error(err);
            }
        });

        app.delete('/products/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const product = await productsCollection.findOne({ "_id": new ObjectId(id) });
                if (!(product)) {
                    res.json({ error: 'Brak produktu o takim id w bazie danych.' });
                    return;
                }

                const result = await productsCollection.deleteOne(
                    { "_id": new ObjectId(id) }
                );

                if (result.deletedCount === 1) {
                    return res.json({ success: 'Usunięto produkt.' });
                } else {
                    return res.json({ error: 'Nie udało się usunąć produktu.' });
                }

            } catch (err) {
                console.error(err);
                return res.send(err);
            }
        });

        app.get('/report', async (req, res) => {
            try {
                const products = await productsCollection.find().toArray();
        
                const report = products.map(product => {
                    return {
                        name: product.name,
                        quantity: product.quantity.toString() + ' ' + product.unit,
                        totalValue: (product.quantity * product.price).toFixed(2)
                    };
                });
        
                res.json(report);
            } catch (err) {
                console.error(err);
                res.send(err);
            }
        });

        app.listen(port, () => {
            console.log(`Serwer działa na porcie: ${port}`);
        });

    } catch (err) {
        console.error('Wystąpił błąd podczas łączenia z bazą.', err);
    }
}

connect();