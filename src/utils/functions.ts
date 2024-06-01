import moment from 'moment';

export async function execute(client) {
	client.log = function (message) {
		console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
	};
};