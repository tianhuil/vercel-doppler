// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const https = require('https')

getSecrets = async () => {
  return new Promise(function(resolve, reject) {
    https.get(`https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`, (res) => {
      let secrets = ''
      res.on('data', (data) => secrets += data);
      res.on('end', () => resolve(JSON.parse(secrets)))
    }).on('error', (e) => reject(e))
  })
}

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe', appEnv: process.env.APP_ENV, secrets: await getSecrets() })
}
