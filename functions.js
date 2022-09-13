import http from 'k6/http';

const openfaasURL = __ENV.OPENFAAS_URL || 'http://127.0.0.1:8080'

export function sleep() {
  http.get(`${openfaasURL}/function/sleep`), {
    tags: { openfaas_function: 'sleep' }
  }
}

export function cows() {
  http.get(`${openfaasURL}/function/cows`), {
    tags: { openfaas_function: 'cows' }
  }
}

export function bcrypt() {
  const payloadText =  'test'

  http.post(`${openfaasURL}/function/bcrypt`, payloadText), {
    tags: { openfaas_function: 'bcrypt' }
  }
}
