export const options = {
  scenarios: {
    spike_rps: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      maxVUs: 50,
      stages: [
        { duration: '10s', target: 50 }, // ramp to 50 over 10 seconds
        { duration: '1m', target: 50 },
        { duration: '10s', target: 600 }, // spike to 600
        { duration: '3m', target: 600 }, // stay at 600 for 3 minutes
        { duration: '10s', target: 30 }, // scale down.
        { duration: '2m', target: 30 },
        { duration: '10s', target: 0 },
      ],
      exec: 'cows'
    }
  },
}

export { cows } from '../functions.js'