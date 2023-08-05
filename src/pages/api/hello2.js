// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe', appEnv: process.env.APP_ENV, doppler: process.env.DOPPLER_TOKEN && process.env.DOPPLER_TOKEN.length, foo: process.env.FOO })
}
