const min_load = 10
const max_load = 20
const interval = "2m"
const ramp_interval = "15s"

export const options = {
  scenarios: {
    variable_capacity: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: ramp_interval, target: max_load },
        { duration: interval, target: max_load },
        { duration: ramp_interval, target: min_load },
        { duration: interval, target: min_load },
        { duration: ramp_interval, target: max_load },
        { duration: interval, target: max_load },
        { duration: ramp_interval, target: min_load },
        { duration: interval, target: min_load },
        { duration: ramp_interval, target: max_load },
        { duration: interval, target: max_load },
        { duration: ramp_interval, target: min_load },
        { duration: interval , target: min_load },
      ],
      exec: 'sleep'
    }
  },
}

export { sleep } from '../functions.js'