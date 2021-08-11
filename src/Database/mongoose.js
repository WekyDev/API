const { model, Schema } = require('mongoose');

module.exports.users = model('users', new Schema({
	id: { type: String, required: true },
	key: { type: String, required: true },
	// ratelimit: {
	// 	max: { type: Number, default: 100 },
	// 	used: { type: Number, default: 0 },
	// },
	// need to figure out how tmr
	requests: { type: Number, default: 0 },
}),
);

module.exports.stats = model('stats', new Schema({
	requests: { type: Number, default: 0 },
}),
);