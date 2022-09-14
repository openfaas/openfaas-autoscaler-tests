export const options = {
  scenarios: {
    ramp_rps: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      // It is allowed to spin up to 50 maximum VUs in order to sustain the defined
      // constant arrival rate.
      maxVUs: 50,
      stages: [
        { duration: '4m', target: 600, }, // Ramp up to 600 iterations per second over the following 4 minutes.
      ],
      exec: 'cows'
    },
  }
}

export { cows } from '../functions.js'