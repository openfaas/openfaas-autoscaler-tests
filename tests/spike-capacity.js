const start_load = 5
const max_load = 70
const end_load = 5

export const options = {
  scenarios: {
    spike_capacity: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: start_load }, // ramp to 'start_load' over 10 seconds
        { duration: '1m', target: start_load  },
        { duration: '10s', target: max_load }, // spike to 'max_load'
        { duration: '3m', target: max_load }, // stay at 'max_load' for 3 minutes
        { duration: '10s', target: end_load }, // scale down to 'end_load' and stay there for 2 minutes
        { duration: '2m', target: end_load },
        { duration: '10s', target: 0 },
      ],
      exec: 'sleep'
    }
  },
}

export { sleep } from '../functions.js'