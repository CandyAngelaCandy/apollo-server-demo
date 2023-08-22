import { RESTDataSource } from "@apollo/datasource-rest";

export class TodoAPI extends RESTDataSource {
  //TODO: Configure the environment variable
  baseURL = "http://localhost:8080";

  async getTodos(token) {
    return this.get(`/api/todos`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  }

  async addTodo(token, content, time) {
    return this.post(`/api/todos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: {
        text: content,
        completed: false,
        editable: false,
        visible: true,
        time: time,
        taskItems: []
      },
    });
  }

  async deleteTodo(token, id) {
    return this.delete(`/api/todos/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  }
}
