export const options = {
  scenarios: {
    ramp_cpu: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s', // Start `startRate` iterations per second
      preAllocatedVUs: 2,  // Preallocate 2 VUs before starting the test.
      maxVUs: 50,
      stages: [
        { duration: '4m', target: 120 },
      ],
      exec: 'bcrypt'
    }
  }
};

export { bcrypt } from '../functions.js'