const config = {
    host: '<database-instance-name>.<region>.rds.amazonaws.com',
    user: 'admin',
    password: '<password>',
    database: '<database-name>',
    waitForConnections: true,
    connectionLimit: 10,
};

module.exports = config;