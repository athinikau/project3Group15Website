const { createConnection } = require('../config/dbUtils'); // Relative path to the dbUtils.js file

async function createTable() {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to create a table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS catergory (
                catergory_id INT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                
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

async function insertCatergory(catergory) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to insert a record into the table
        const insertQuery = `
            INSERT INTO catergory (
                catergory_id,
                name,
                description,
                
            ) VALUES (
                ${catergory.catergory_id},
                ${catergory.name},
                ${catergory.description}
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

async function readCategory(catergory) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to read a record from the table
        const readQuery = `
            SELECT * FROM catergory
            WHERE catergory_id = ${catergory.catergory_id}
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

async function updatePayment(catergory) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to update a record from the table
        const updateQuery = `
            UPDATE catergory
            SET name = ${catergory.name},
                description = ${catergory.description},
            WHERE catergory_id = ${catergory.catergory_id}
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


async function deleteCategory(catergory) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to delete a record from the table
        const deleteQuery = `
            DELETE FROM catergory
            WHERE catergory_id = ${catergory.catergory_id}
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