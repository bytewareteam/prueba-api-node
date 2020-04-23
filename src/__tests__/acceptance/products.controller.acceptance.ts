import {GrupoDitechApplication} from '../..';
import {Client, expect} from '@loopback/testlab';
import {setupApplication} from './test-helper';

describe('El usuario puede obtener, crear, listar, actualizar productos con éxito.', () => {
  let app: GrupoDitechApplication;
  let client: Client;
  let createdProductID: string;
  const product = {
    'name': 'Samsung Galaxy A30s 128gb 4g',
    'description': `120 GB Memoria interna`,
    'price': 689000,
    'stock': 1,
    id: null,
  };

  before('SetupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('Creating product', () => {
    it('should create a product.', async () => {
      const createdRes = await client.post('/products').send(product)
        .expect(201);
      expect(createdRes.body).to.Object();
      createdProductID = createdRes.body.id;
    });
  });

  describe('Getting an existing product', () => {
    it('should get exiting product.', async () => {
      const res = await client.get(`/products/${createdProductID}`)
        .expect(200);
      expect(res.body).to.be.Object();
      expect(res.body.id).to.be.exactly(createdProductID);
    });
  });

  describe('Updating an existing product', () => {
    it('should update exiting product', async () => {
      const data =  {...product, name: 'updated from test', id: createdProductID};
      delete data.id;
      await client.put(`/products/${createdProductID}`).send(data)
        .expect(204);
    });
  });

  describe('deleting an existing product', () => {
    it('should remove an existing product', async () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      await client.del(`/products/${createdProductID}`)
        .expect(204);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      await client.get(`/products/${createdProductID}`)
        .expect(404);
    });
  });
});