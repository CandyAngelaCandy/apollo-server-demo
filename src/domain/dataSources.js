import { UserAPI } from './user/userAPI.js'

export const dataSources = () => ({
    userAPI: new UserAPI()
  });