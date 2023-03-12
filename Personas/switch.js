//Finally, we need to switch personas based on user input or a predetermined trigger. We can do this by loading a different pre-trained model and using it to generate responses instead of the original model.I'm


// Switch to alternate persona if user input contains a trigger word
if (userInput.includes('switch persona')) {
  if (persona === 1) {
    persona = 2;
    model = model2;
  } else if (persona === 2) {
    persona = 1;
    model = model1;
  }
}
