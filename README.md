# OpenFaaS autoscaler tests
A collection of [K6.io](https://k6.io/) tests to verify autoscaling behaviour.

## Running tests
Deploy the required functions to run these tests. They are intended to run with this [stack of testing functions](https://github.com/alexellis/autoscaling-functions).

Test capacity based scaling with a load spike.
```bash
export OPENFAAS_URL=""

k6 run tests/spike-capacity.js
```

## Collect test result in prometheus
K6 supports sending test result metrics to a Prometheus remote write endpoint. This can be useful to compare test results with the collected OpenFaaS metrics.

> See [the docs](https://k6.io/docs/results-visualization/prometheus/) for more info.

Writing test results to prometheus requires you to build the k6 binary with the [xk6-output-prometheus-remote extension.](https://github.com/grafana/xk6-output-prometheus-remote).

```sh
# Install xk6
go install go.k6.io/xk6/cmd/xk6@latest

# Build the k6 binary
xk6 build --with github.com/grafana/xk6-output-prometheus-remote
```

### Enable remote write receiver for OpenFaaS prometheus
Currently there is no option in the OpenFaaS chart to add extra arguments to the prometheus command.

Edit the OpenFaaS prometheus deployment and add `--web.enable-remote-write-receiver` to the command in the container spec.

```sh
kubectl edit -n openfaas deploy/prometheus
```

```yaml
spec:
  containers:
  - command:
    - prometheus
    - --config.file=/etc/prometheus/prometheus.yml
    - --web.enable-remote-write-receiver
    image: prom/prometheus:v2.38.0
```

### Run tests
```bash
export K6_PROMETHEUS_REMOTE_URL="http://127.0.0.1:9090/api/v1/write"
export OPENFAAS_URL="http://127.0.0.1:8080"

./k6 run tests/spike-capacity.js -o output-prometheus-remote
```