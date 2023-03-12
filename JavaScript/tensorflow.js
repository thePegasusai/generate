const tf = require('@tensorflow/tfjs');
const tfHub = require('@tensorflow/tfjs-experimental/hub');

// Load the initial model (Persona 1)
const modelUrl1 = 'https://tfhub.dev/google/tfjs-model/gpt2/medium/1';
const model1 = await tfHub.load(modelUrl1);

// Load the alternate model (Persona 2)
const modelUrl2 = 'https://tfhub.dev/google/tfjs-model/gpt2/small/1';
const model2 = await tfHub.load(modelUrl2);
