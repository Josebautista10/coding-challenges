// Create a function that takes in a toggle object and will change the value of the property isOn between true and false and 
// return the updated object. Using the function twice should revert the toggle back to its original value.




const switchToggle = (toggle) => {
  // Code here!
  toggle.isOn = !toggle.isOn
  return toggle
}
