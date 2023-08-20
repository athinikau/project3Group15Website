/* Payment.js
Written by: Mdumisi Kelvin Letsie
Date: 20 August 2020
Description: This is the Payment model. It contains the code for the Payment class.
*/

// Import the createConnection function from the dbUtils.js file
const { createConnection } = require('../config/dbUtils'); // Relative path to the dbUtils.js file

async function createTable() {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to create a table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS payment (
                payment_id INT PRIMARY KEY,
                amount_paid DECIMAL(10,2) NOT NULL,
                amount_due DECIMAL(10,2) NOT NULL,
                payment_date DATE NOT NULL,
                payment_status VARCHAR(255) NOT NULL,
                order_id INT NOT NULL,
                payment_method_id INT NOT NULL,
                FOREIGN KEY (order_id) REFERENCES orders(order_id),
                FOREIGN KEY (payment_method_id) REFERENCES payment_method(payment_method_id)
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

async function insertPayment(payment) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to insert a record into the table
        const insertQuery = `
            INSERT INTO payment (
                payment_id,
                amount_paid,
                amount_due,
                payment_date,
                payment_status,
                order_id,
                payment_method_id
            ) VALUES (
                ${payment.payment_id},
                ${payment.amount_paid},
                ${payment.amount_due},
                '${payment.payment_date}',
                '${payment.payment_status}',
                ${payment.order_id},
                ${payment.payment_method_id}
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

async function readPayment(payment) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to read a record from the table
        const readQuery = `
            SELECT * FROM payment
            WHERE payment_id = ${payment.payment_id}
        `;

        // Execute the read query
        connection.query(readQuery, (err, results) => {
            if (err) {
                console.error('Error reading record:', err);
            } else {
                console.log('Record read successfully');
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

async function updatePayment(payment) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to update a record from the table
        const updateQuery = `
            UPDATE payment
            SET amount_paid = ${payment.amount_paid},
                amount_due = ${payment.amount_due},
                payment_date = '${payment.payment_date}'
            WHERE payment_id = ${payment.payment_id}
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


async function deletePayment(payment) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to delete a record from the table
        const deleteQuery = `
            DELETE FROM payment
            WHERE payment_id = ${payment.payment_id}
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

// Export the functions as modules
// Will use this later for when I want the website to be able to make use of these functions in the PaymentMethod model
// module.exports = {
//     createTable,
//     insertPayment,
//     readPayment,
//     updatePayment,
//     deletePayment
// }
