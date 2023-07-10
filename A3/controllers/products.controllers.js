const mysql = require('mysql');
const dbConfig = require("../config/db.config");
const pool = mysql.createPool(dbConfig);

const storeProducts = (req, res) => {
    const { products } = req.body;

    // Insert the product into the database
    pool.query('INSERT INTO products (name, price, availability) VALUES (?, ?, ?);', [products[0].name, products[0].price, products[0].availability], (error, results) => {
        if (error) {
            console.error('Error storing product:', error);
            res.status(500).json({ error: 'Failed to store product' });
        } else {
            res.status(200).json({ message: 'Success.' });
        }
    });
}

const listProducts = (req, res) => {
    pool.query('SELECT * FROM products', (error, results) => {
        if (error) {
            console.error('Error retrieving products:', error);
            res.status(500).json({ error: 'Failed to retrieve products' });
        } else {
            const products = results.map((product) => ({
                name: product.name,
                price: product.price,
                availability: Boolean(product.availability)
            }));

            res.status(200).json({ products });
        }
    });
}

module.exports = { storeProducts, listProducts }