const min_load = 20
const max_load = 40
const interval = "40s"
const ramp_interval = "10s"

export const options = {
  scenarios: {
    variable_cpu: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      maxVUs: 50,
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
      exec: 'bcrypt'
    }
  }
}

export { bcrypt } from '../functions.js'