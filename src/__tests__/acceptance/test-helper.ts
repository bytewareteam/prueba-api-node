import {GrupoDitechApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';
import * as dotenv from 'dotenv';

export async function setupApplication(): Promise<AppWithClient> {
  dotenv.config();
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    port: Number(process.env.PORT),
  });

  const app = new GrupoDitechApplication({
    rest: restConfig,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: GrupoDitechApplication;
  client: Client;
}
