export const options = {
  scenarios: {
    ramp_capacity: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '3m', target: 70 }, // ramp to 70 over 2 minutes
      ],
      exec: 'sleep'
    }
  }
};

export { sleep } from '../functions.js'