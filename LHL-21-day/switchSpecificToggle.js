// Your task is to write a function that will take in an array of toggle objects and a specific toggle name. 
// The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.


const switchSpecificToggle = (toggleList, specificToggle) => {
  toggleList.forEach(e => {
    if (e.name === specificToggle) {
      e.isOn = !e.isOn
    }
  })
  return toggleList
}