/* Textbook.js
Written by: athini Mbiko
Date: 27August 2020
Description: This is the Textbook model. It contains the code for the Payment class.
*/


const { createConnection } = require('../config/dbUtils');

async function createTable() {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to create a table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS textbook (
                textbook_id INT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                isbn INT NOT NULL,
                publish_year  DATE NOT NULL,
                price DECIMAL(10,2) NOT NULL,
                description VARCHAR(255) NOT NULL,
                condition VARCHAR(255) NOT NULL,
                FOREIGN KEY (catergory_id) REFERENCES catergory(catergory_id)
                
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
async function insertTextboook(textbook) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to insert a record into the table
        const insertQuery = `
            INSERT INTO textbook (
                textbook_id,
                title,
                author,
                isbn,
                publish_year,
                price
                description,
                condition,
                catergory_id

                
            ) VALUES (
                ${textbook.textbook_id},
                ${textbook.title},
                ${textbook.author},
                ${text.isbn},
                ${textbook.publish_year},
                ${textbook.price},
                ${textbook.description},
                ${textbook.condition},
                ${textbook.catergory_id},
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

async function readTextbook(textbook) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to read a record from the table
        const readQuery = `
            SELECT * FROM textbook
            WHERE textbook_id = ${textbook.textbook_id}
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

async function updateTextboo(textbook) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to update a record from the table
        const updateQuery = `
            UPDATE textbook
            SET title        = ${textbook.title},
                 author     =${textbook.author},
                isbn        =${text.isbn},
                publish_year =${textbook.publish_year},
                price        =${textbook.price},
                description   =${textbook.description},
                condition    =${textbook.condition},
                catergory_id =${textbook.catergory_id},
            WHERE texbook_id = ${textbook.textbook_id}
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

async function deleteTextbook(textbook) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to delete a record from the table
        const deleteQuery = `
            DELETE FROM textbook
            WHERE texbook_id = ${textbook.textbook_id}
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
