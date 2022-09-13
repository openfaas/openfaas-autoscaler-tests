# OpenFaaS autoscaler tests
A collection of [K6.io](https://k6.io/) tests to verify autoscaling behaviour.

## Running tests
Deploy the required functions to run these tests. They are intended to run with this [stack of testing functions](https://github.com/alexellis/autoscaling-functions).

Test capacity based scaling with a load spike.
```bash
export OPENFAAS_URL=""

k6 run tests/spike-capacity.js
```