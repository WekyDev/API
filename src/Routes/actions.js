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

	return res.status(200).send({ error: false, result: result });
});

route.get('/headbang', async (req, res) => {
	const result = await search('anime-headbang');

	return res.status(200).send({ error: false, result: result });
});

route.get('/punch', async (req, res) => {
	const result = await search('anime-punch');

	return res.status(200).send({ error: false, result: result });
});

route.get('/kill', async (req, res) => {
	const result = await search('anime-kill');

	return res.status(200).send({ error: false, result: result });
});

route.get('/yay', async (req, res) => {
	const result = await search('anime-yay');

	return res.status(200).send({ error: false, result: result });
});

route.get('/yes', async (req, res) => {
	const result = await search('anime-yes');

	return res.status(200).send({ error: false, result: result });
});

route.get('/no', async (req, res) => {
	const result = await search('anime-no');

	return res.status(200).send({ error: false, result: result });
});

route.get('/poke', async (req, res) => {
	const result = await search('anime-poke');

	return res.status(200).send({ error: false, result: result });
});

route.get('/bite', async (req, res) => {
	const result = await search('anime-bite');

	return res.status(200).send({ error: false, result: result });
});

route.get('/cuddle', async (req, res) => {
	const result = await search('anime-cuddle');

	return res.status(200).send({ error: false, result: result });
});

route.get('/dance', async (req, res) => {
	const result = await search('anime-dance');

	return res.status(200).send({ error: false, result: result });
});

route.get('/smack', async (req, res) => {
	const result = await search('anime-smack');

	return res.status(200).send({ error: false, result: result });
});

route.get('/sleep', async (req, res) => {
	const result = await search('anime-laugh');

	return res.status(200).send({ error: false, result: result });
});

route.get('/kiss', async (req, res) => {
	const result = await search('anime-kiss');

	return res.status(200).send({ error: false, result: result });
});

route.get('/run', async (req, res) => {
	const result = await search('anime-run');

	return res.status(200).send({ error: false, result: result });
});

route.get('/laugh', async (req, res) => {
	const result = await search('anime-laugh');

	return res.status(200).send({ error: false, result: result });
});

route.get('/cry', async (req, res) => {
	const result = await search('anime-cry');

	return res.status(200).send({ error: false, result: result });
});

route.get('/smug', async (req, res) => {
	const result = await search('anime-smug');

	return res.status(200).send({ error: false, result: result });
});

route.get('/sorry', async (req, res) => {
	const result = await search('anime-sorry');

	return res.status(200).send({ error: false, result: result });
});

route.get('/stare', async (req, res) => {
	const result = await search('anime-stare');

	return res.status(200).send({ error: false, result: result });
});

route.get('/lick', async (req, res) => {
	const result = await search('anime-lick');

	return res.status(200).send({ error: false, result: result });
});

route.get('/clap', async (req, res) => {
	const result = await search('anime-clap');

	return res.status(200).send({ error: false, result: result });
});

route.get('/happy', async (req, res) => {
	const result = await search('anime-happy');

	return res.status(200).send({ error: false, result: result });
});

route.get('/hello', async (req, res) => {
	const result = await search('anime-hello');

	return res.status(200).send({ error: false, result: result });
});

route.get('/bye', async (req, res) => {
	const result = await search('anime-bye');

	return res.status(200).send({ error: false, result: result });
});

route.get('/confused', async (req, res) => {
	const result = await search('anime-confused');

	return res.status(200).send({ error: false, result: result });
});

route.get('/blush', async (req, res) => {
	const result = await search('anime-blush');

	return res.status(200).send({ error: false, result: result });
});

route.get('/wink', async (req, res) => {
	const result = await search('anime-wink');

	return res.status(200).send({ error: false, result: result });
});

route.get('/shy', async (req, res) => {
	const result = await search('anime-shy');

	return res.status(200).send({ error: false, result: result });
});

route.get('/dizzy', async (req, res) => {
	const result = await search('anime-dizzy');

	return res.status(200).send({ error: false, result: result });
});

route.get('/vomit', async (req, res) => {
	const result = await search('anime-vomit');

	return res.status(200).send({ error: false, result: result });
});

route.get('/bored', async (req, res) => {
	const result = await search('anime-bored');

	return res.status(200).send({ error: false, result: result });
});

route.get('/tired', async (req, res) => {
	const result = await search('anime-tired');

	return res.status(200).send({ error: false, result: result });
});

route.get('/neutral', async (req, res) => {
	const result = await search('anime-neutral');

	return res.status(200).send({ error: false, result: result });
});

route.get('/thinking', async (req, res) => {
	const result = await search('anime-thinking');

	return res.status(200).send({ error: false, result: result });
});

route.get('/angry', async (req, res) => {
	const result = await search('anime-angry');

	return res.status(200).send({ error: false, result: result });
});

route.get('/surprised', async (req, res) => {
	const result = await search('anime-surprised');

	return res.status(200).send({ error: false, result: result });
});

module.exports = {
	endpoint: '/actions',
	router: route,
};