export const options = {
  scenarios: {
    ramp_rps: {
      executor: 'ramping-arrival-rate',
      startRate: 30,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      // It is allowed to spin up to 50 maximum VUs in order to sustain the defined
      // constant arrival rate.
      maxVUs: 50,
      stages: [
        { target: 30, duration: '30s' }, // Start at 30 iterations per second for the first 30 seconds.
        { target: 600, duration: '3m' }, // Ramp up to 600 iterations per second over the following 3 minutes.
      ],
      exec: 'cows'
    },
  }
}

export { cows } from '../functions.js'