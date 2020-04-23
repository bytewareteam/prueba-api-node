import {GrupoDitechApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {GrupoDitechApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new GrupoDitechApplication(Object.assign(options, {rest: {port: process.env.PORT}}));
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
