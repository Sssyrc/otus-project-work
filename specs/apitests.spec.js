import api from "../framework/services";

describe('api tests', () => {
    test('Find pet by status /GET 200', async () => {
      const params = new URLSearchParams(
        {
          status: 'sold',
        }
      );
      const response = await api().pets().get1(params); 
      expect(response.status).toEqual(200);
    });

    test('Find pet by ID /GET 200', async () => {
      const petId = 35994;
      const response = await api().pets().get2(petId); 
      expect(response.status).toEqual(200);
    });

    test('Find pet by ID /GET 404', async () => {
      const petId = 123132;
      const response = await api().pets().get2(petId); 
      expect(response.status).toEqual(404);
    });

    test.skip('Place an order for a pet /POST 200', async () => {
      const params = new URLSearchParams(
        {
          id: 1,
          petId: 0,
          quantity: 0,
          status: 'sold',
        }
      );
      const response = await api().pets().post1(params); 
      expect(response.status).toEqual(200);
    });
  });