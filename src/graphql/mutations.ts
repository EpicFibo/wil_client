/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const createApproved = /* GraphQL */ `
  mutation CreateApproved(
    $input: CreateApprovedInput!
    $condition: ModelApprovedConditionInput
  ) {
    createApproved(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const updateApproved = /* GraphQL */ `
  mutation UpdateApproved(
    $input: UpdateApprovedInput!
    $condition: ModelApprovedConditionInput
  ) {
    updateApproved(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
export const deleteApproved = /* GraphQL */ `
  mutation DeleteApproved(
    $input: DeleteApprovedInput!
    $condition: ModelApprovedConditionInput
  ) {
    deleteApproved(input: $input, condition: $condition) {
      id
      name
      product_list
      product_count
      createdAt
      updatedAt
    }
  }
`;
