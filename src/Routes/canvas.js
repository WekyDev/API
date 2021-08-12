const { Router } = require('express');
const { loadImage, createCanvas } = require('canvas');

const route = Router();

route.get('/gun', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/gun.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(550, 550);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 0, 0, 550, 550);
	ctx.drawImage(bg, -70, 190, 350, 350);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/mask', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/mask.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(1080, 960);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 64, 571, 269, 269);
	ctx.drawImage(bg, 0, 0, 1080, 960);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/whodidthis', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/whodidthis.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(512, 512);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 0, 109, 512, 295);
	ctx.drawImage(bg, 0, 0, 512, 512);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/pray', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/pray.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(396, 275);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 214, 10, 143, 136);
	ctx.drawImage(bg, 0, 0, 396, 275);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/rifleshoot', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/rifleshoot.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(318, 299);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 55, 28, 118, 118);
	ctx.drawImage(bg, 0, 0, 318, 299);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/pressplay', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/pressplay.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(474, 474);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 218, 208, 228, 228);
	ctx.drawImage(bg, 0, 0, 474, 474);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/vr', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/vr.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(780, 768);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 46, 409, 305, 305);
	ctx.drawImage(bg, 0, 0, 780, 768);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/bestmeme', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/bestmeme.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(966, 1145);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 693, 970, 127, 127);
	ctx.drawImage(img, 114, 734, 239, 239);
	ctx.drawImage(bg, 0, 0, 966, 1145);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/robert', async (req, res) => {
	
	// credits to Fafa#6969 

	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/robert.png');
	const glasses = await loadImage(__dirname + '/../Assets/glasses.png');
	const img = await loadImage(req.query.image);
	const canvas = createCanvas(295, 406);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 50, 115, 53, 53);
	ctx.drawImage(img, 218, 115, 53, 53);
	ctx.drawImage(glasses, 62, 130, 36, 19);
	ctx.drawImage(bg, 0, 0, 295, 406);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

route.get('/saveonlyone', async (req, res) => {
	if (!req.query.image) return res.status(400).send({ error: true, message: 'API: Missing image parameter.' });
	if (!req.query.image2) return res.status(400).send({ error: true, message: 'API: Missing image2 parameter.' });
	if (!req.query.image3) return res.status(400).send({ error: true, message: 'API: Missing image3 parameter.' });

	const bg = await loadImage(__dirname + '/../Assets/saveonlyone.png');
	const img = await loadImage(req.query.image);
	const img2 = await loadImage(req.query.image2);
	const img3 = await loadImage(req.query.image3);
	const canvas = createCanvas(910, 799);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(img, 465, 135, 158, 158);
	ctx.drawImage(img2, 729, 107, 158, 158);
	ctx.drawImage(img3, 170, 478, 104, 104);
	ctx.drawImage(bg, 0, 0, 910, 799);

	res.set({ 'Content-Type': 'image/png' });
	return res.status(200).send(canvas.toBuffer());
});

module.exports = {
	endpoint: '/canvas',
	router: route,
};