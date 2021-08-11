const { Router } = require('express');
const fetch = require('node-fetch');
const route = Router();

async function search(gif) {
	const fetched = await (await (fetch(`${process.env.url}${gif}${process.env.key}`))).json();
	const url = fetched.results[Math.floor(Math.random() * fetched.results.length)].url;
	return url;
}

route.get('/hug', async (req, res) => {
	const result = await search('anime-hug');

	res.status(200).send({ error: false, result: result });
});

route.get('/kiss', async (req, res) => {
	const result = await search('anime-kiss');

	res.status(200).send({ error: false, result: result });
});

route.get('/run', async (req, res) => {
	const result = await search('anime-run');

	res.status(200).send({ error: false, result: result });
});

route.get('/laugh', async (req, res) => {
	const result = await search('anime-laugh');

	res.status(200).send({ error: false, result: result });
});

route.get('/cry', async (req, res) => {
	const result = await search('anime-cry');

	res.status(200).send({ error: false, result: result });
});

route.get('/happy', async (req, res) => {
	const result = await search('anime-happy');

	res.status(200).send({ error: false, result: result });
});

route.get('/hello', async (req, res) => {
	const result = await search('anime-hello');

	res.status(200).send({ error: false, result: result });
});

route.get('/bye', async (req, res) => {
	const result = await search('anime-bye');

	res.status(200).send({ error: false, result: result });
});

route.get('/confused', async (req, res) => {
	const result = await search('anime-confused');

	res.status(200).send({ error: false, result: result });
});

route.get('/blush', async (req, res) => {
	const result = await search('anime-blush');

	res.status(200).send({ error: false, result: result });
});

route.get('/wink', async (req, res) => {
	const result = await search('anime-wink');

	res.status(200).send({ error: false, result: result });
});

route.get('/shy', async (req, res) => {
	const result = await search('anime-shy');

	res.status(200).send({ error: false, result: result });
});

route.get('/dizzy', async (req, res) => {
	const result = await search('anime-dizzy');

	res.status(200).send({ error: false, result: result });
});

route.get('/vomit', async (req, res) => {
	const result = await search('anime-vomit');

	res.status(200).send({ error: false, result: result });
});

route.get('/bored', async (req, res) => {
	const result = await search('anime-bored');

	res.status(200).send({ error: false, result: result });
});

route.get('/tired', async (req, res) => {
	const result = await search('anime-tired');

	res.status(200).send({ error: false, result: result });
});

route.get('/neutral', async (req, res) => {
	const result = await search('anime-neutral');

	res.status(200).send({ error: false, result: result });
});

route.get('/thinking', async (req, res) => {
	const result = await search('anime-thinking');

	res.status(200).send({ error: false, result: result });
});

route.get('/angry', async (req, res) => {
	const result = await search('anime-angry');

	res.status(200).send({ error: false, result: result });
});

route.get('/surprised', async (req, res) => {
	const result = await search('anime-surprised');

	res.status(200).send({ error: false, result: result });
});

module.exports = {
	endpoint: '/actions',
	router: route,
};