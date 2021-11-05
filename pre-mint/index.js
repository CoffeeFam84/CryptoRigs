const mergeImages = require('merge-images-v2');
const fs = require('fs');
const Canvas = require('canvas');
const { MakeMinty } = require('./minty');
const {traits} = require('./consts');
const axios = require('axios');

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

async function generateRandomImages() {

	const randomTraits = traits.map(rait => ({
		type: rait.type,
		ids: shuffle(rait.data.reduce((total, cur, idx) => {
			for (let step = 0; step < cur.amount; step++) {
				total.val[total.len++] = idx;
			}
			return total;
		}, {val: [], len: 0}).val)
	}));

	let minty = await MakeMinty();
	for (let i = 0; i < 10; i++) {
		const prefix = '../images/';
		const selectTrait = randomTraits.map((trait, idx) => ({
			trait_type: trait.type,
			value: traits[idx].data[trait.ids[i]].name
		}));

		let imgs2merge = selectTrait.map(trait => (prefix + trait.trait_type + '/' + trait.value + '.png'));
		
		let imagePath = __dirname + `/nft/${i+1}.png`;
		await mergeImages(imgs2merge, {
			Canvas: Canvas
		}).then(img => {
			var base64Data = img.replace(/^data:image\/png;base64,/, "");
			const buf = new Buffer(base64Data, 'base64').toString('binary');
			fs.writeFileSync(imagePath, buf, 'binary');
			console.log(`${i+1}.png created`);
		});
		const metaData = {
			tokenId: i+1,
			name: `CryptoRig #${i+1}`,
			description: 'CryptoRigs are randomly generated images that display a digital computer with various properties. Become the owner of the legendary Ultra components!',
			// path: imagePath,
			attributes: selectTrait
		}
		// const nft = await minty.createNFTFromAssetFile(imagePath, metaData);
		const metafile = __dirname + `/metadata/${i+1}`;
		fs.writeFileSync(metafile, JSON.stringify(metaData), 'utf-8');
		// console.log(nft);
	}
	// const meta = await minty.createMetaDataIPFS(__dirname+'/metadata');
	// console.log(meta);
	console.log('file creating finished');
}

generateRandomImages();