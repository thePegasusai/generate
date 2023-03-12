User input generate response:

// Get user input from HTML input field
const userInput = document.getElementById('user-input').value;

// Tokenize user input
const inputIds = tokenizer.encode(userInput);

// Generate response using pre-trained model
let responseIds;
if (persona === 1) {
  responseIds = await model1.predict(tf.tensor2d(inputIds, [1, inputIds.length]));
} else if (persona === 2) {
  responseIds = await model2.predict(tf.tensor2d(inputIds, [1, inputIds.length]));
}

// Decode response into natural language
const response = tokenizer.decode(Array.from(responseIds.dataSync()));

//Next, we need to capture user input and generate a response using the pre-trained models. We can do this by tokenizing the user input and passing it through the model to generate a sequence of tokens, which can then be decoded into natural language
