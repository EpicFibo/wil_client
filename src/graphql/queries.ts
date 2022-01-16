/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        product_list
        product_count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApproved = /* GraphQL */ `
  query GetApproved($id: ID!) {
    getApproved(id: $id) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const listApproveds = /* GraphQL */ `
  query ListApproveds(
    $filter: ModelApprovedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApproveds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        product_list
        product_count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
