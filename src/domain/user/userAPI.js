import { RESTDataSource } from '@apollo/datasource-rest'

export class UserAPI extends RESTDataSource {
    //TODO: Configure the environment variable
    baseURL =  'http://localhost:8080'

    async registerUser(username, password) {
        return this.post(
            `/api/users`,
            {
                body: {
                    name: username,
                    password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            },
          );
    }

    async loginUser(username, password) {
        return this.post(
            `/api/login`,
            {
                body: {
                    name: username,
                    password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            },
          );
    }
}