export const options = {
  scenarios: {
    spike_capacity: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 5 }, // ramp to 5 over 10 seconds
        { duration: '1m', target: 5 },
        { duration: '10s', target: 70 }, // spike to 70
        { duration: '3m', target: 70 }, // stay at 70 for 3 minutes
        { duration: '10s', target: 5 }, // scale down. Recovery stage.
        { duration: '2m', target: 5 },
        { duration: '10s', target: 0 },
      ],
      exec: 'sleep'
    }
  },
}

export { sleep } from '../functions.js'