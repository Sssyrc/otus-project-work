import api from "../framework/services";
import BuildUser from "../framework/helpers/newuser"

describe('Tests about pets', () => {
    test('Find pet by status /GET 200', async () => {
      const params = new URLSearchParams(
        {
          status: 'available',
        }
      );
      const response = await api().pets().getPet1(params); 
      expect(response.status).toEqual(200);
    });
    test('Find pet by ID /GET 200', async () => {
      const petId = 1;
      const response = await api().pets().getPet2(petId); 
      expect(response.status).toEqual(200);
    });
    test('Add a new pet to the store /POST 200', async () => {
      const params = {
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      };
      const response = await api().pets().postPet1(params);
      expect(response.status).toEqual(200);
    });
    test('Update an existing pet /PUT 200', async () => {
      const params = {
        "id": 9223372016900010000,
        "category": {
          "id": 123123123,
          "name": "qwerty"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      };
      const response = await api().pets().putPet(params); 
      expect(response.status).toEqual(200);
    });
  });

  describe('Access to Petstore orders', () => {
    test('Place an order for a pet /POST 200', async () => {
      const params = {
        "id": 1,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2022-06-25T19:04:51.720Z",
        "status": "placed",
        "complete": true
      };
      const response = await api().store().postStore(params); 
      expect(response.status).toEqual(200);
    });
    test('Find purchase order by ID /GET 200', async () => {
      const params = 1; //For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
      const response = await api().store().getStore1(params); 
      expect(response.status).toEqual(200);
    });

    test('Delete purchase order by ID /DELETE 200', async () => {
      const params = 1; 
      const response = await api().store().deleteStore(params); 
      expect(response.status).toEqual(200);
    });

    test('Returns pet inventories by status /GET 200', async () => {
      const response = await api().store().getStore2(); 
      expect(response.status).toEqual(200);
    });
  });
  
  describe('Tests about user', () => {
    test('Create user /POST 200', async () => {
      const params = new BuildUser().addid().addusername().addfirstName().addlastName();
      const response = await api().user().postUser1(params); 
      expect(response.status).toEqual(200);
    });

    test('Login user /GET 200', async () => {
      const params = new URLSearchParams (
        {
        "username": "aaa",
        "password": "111",
        });
      const response = await api().user().getUserlogin(params); 
      expect(response.status).toEqual(200);
    });

    test('Logout user /GET 200', async () => {
      const response = await api().user().getUserLogout(); 
      expect(response.status).toEqual(200);
    });
    test('Update user /PUT 200', async () => {
      const username = "aaa";
      const params = {
        "id": 0,
        "username": "aaa",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "111",
        "phone": "265665",
        "userStatus": 0
      };
      const response = await api().user().putUser(params, username); 
      expect(response.status).toEqual(200);
    });
  });