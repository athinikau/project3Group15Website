/* PaymentMethod.js
Written by: Mdumisi Kelvin Letsie
Date: 20 August 2020
Description: This is the PaymentMethod model. It contains the code for the PaymentMethod class.
*/

// Import the createConnection function from the dbUtils.js file
const { createConnection } = require('../config/dbUtils'); // Relative path to the dbUtils.js file

async function createTable() {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to create a table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS payment_method (
                payment_method_id INT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL
            )
        `;

        // Execute the create table query
        connection.query(createTableQuery, (err, results) => {
            if (err) {
                console.error('Error creating table:', err);
            } else {
                console.log('Table created successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

async function insertPaymentMethod(paymentMethod) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to insert a record into the table
        const insertQuery = `
            INSERT INTO payment_method (
                payment_method_id,
                name,
                description
            ) VALUES (
                ${paymentMethod.paymentMethodId},
                '${paymentMethod.name}',
                '${paymentMethod.description}'
            )
        `;

        // Execute the insert query
        connection.query(insertQuery, (err, results) => {
            if (err) {
                console.error('Error inserting record:', err);
            } else {
                console.log('Record inserted successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

async function readPaymentMethods() {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to get all records from the table
        const selectQuery = `
            SELECT * FROM payment_method
        `;

        // Execute the select query
        connection.query(selectQuery, (err, results) => {
            if (err) {
                console.error('Error selecting records:', err);
            } else {
                console.log('Records selected successfully');
                console.log(results);
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

async function readPaymentMethod(paymentMethodId) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to get a record from the table
        const selectQuery = `
            SELECT * FROM payment_method WHERE payment_method_id = ${paymentMethodId}
        `;

        // Execute the select query
        connection.query(selectQuery, (err, results) => {
            if (err) {
                console.error('Error selecting record:', err);
            } else {
                console.log('Record selected successfully');
                console.log(results);
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

async function updatePaymentMethod(paymentMethod) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to update a record from the table
        const updateQuery = `
            UPDATE payment_method
            SET name = '${paymentMethod.name}',
                description = '${paymentMethod.description}'
            WHERE payment_method_id = ${paymentMethod.paymentMethodId}
        `;

        // Execute the update query
        connection.query(updateQuery, (err, results) => {
            if (err) {
                console.error('Error updating record:', err);
            } else {
                console.log('Record updated successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

// deletePaymentMethod() function
async function deletePaymentMethod(paymentMethodId) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to delete a record from the table
        const deleteQuery = `
            DELETE FROM payment_method WHERE payment_method_id = ${paymentMethodId}
        `;

        // Execute the delete query
        connection.query(deleteQuery, (err, results) => {
            if (err) {
                console.error('Error deleting record:', err);
            } else {
                console.log('Record deleted successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}

createTable();

// Export the functions as methods of an object
// Will use this later for when I want the website to be able to make use of these functions in the PaymentMethod model
// module.exports = {
//     createTable,
//     insertPaymentMethod,
//     readPaymentMethods,
//     readPaymentMethod,
//     updatePaymentMethod,
//     deletePaymentMethod
// }

