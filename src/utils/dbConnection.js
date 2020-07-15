const mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;
const devDbUrl = process.env.MONGO_DB_URL || 'mongodb://localhost:27017';

function dbConnection() {
	mongoose.connect(devDbUrl, {
		useNewUrlParser: true,
		poolSize: 5,
	});

	mongoose.connection.on('connected', () => {
		console.log(`Mongoose default connection is opent to ${devDbUrl}`);
	});

	mongoose.connection.on('error', (err) => {
		console.log(`${err}`);
		throw new Error(`unable to connect to the mongo db client ${devDbUrl}`);
	});

	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose default connection is disconnected');
	});
	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log('Mongoose default connection is disconnected due to application termination');
			process.exit(0);
		});
	});
}

module.exports = dbConnection;
