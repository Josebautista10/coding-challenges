// Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters.
// The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks.
// If one of the values is a mismatch, return false, if everything is fine, return true.

const confirmReentryPlans = (speed, missionData, checks) => {
  const datas = Object.values(missionData).map((e) => e.length)
  const entries = Object.values(checks.dataEntries)

  if (speed > checks.minSpeed && speed < checks.maxSpeed) {
    for (let i = 0; i < datas.length; i++) {
      if (datas[i] != entries[i]) {
        return false
      }
      return true
    }
  } else {
    return false
  }
}
gs