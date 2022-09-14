export const options = {
  scenarios: {
    spike_cpu: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      maxVUs: 50,
      stages: [
        { duration: '10s', target: 20 }, // ramp to 20 over 10 seconds
        { duration: '1m', target: 20 },
        { duration: '10s', target: 120 }, // spike to 120
        { duration: '3m', target: 120 }, // stay at 120 for 3 minutes
        { duration: '10s', target: 20 }, // scale down.
        { duration: '2m', target: 20 },
        { duration: '10s', target: 0 },
      ],
      exec: 'bcrypt'
    }
  }
};

export { bcrypt } from '../functions.js'