var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_UNAME,,
    process.env.DB_UPASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
        dialect: 'postgres',
    }
);

module.exports = sequelize;
