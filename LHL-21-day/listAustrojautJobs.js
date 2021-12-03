// Your task is to create a function that will take in an array representing the roster of astronauts, 
// and return an array containing the jobs of each astronaut as a string.


const listAstronautJobs = (roster) => {
  return roster.map(e => e.job)
}
