/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  product_list: Array< string | null >,
  product_count?: Array< number | null > | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  product_list?: ModelStringInput | null,
  product_count?: ModelIntInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  product_list: Array< string | null >,
  product_count?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  product_list?: Array< string | null > | null,
  product_count?: Array< number | null > | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateApprovedInput = {
  id?: string | null,
  name: string,
  product_list: Array< string | null >,
  product_count?: Array< number | null > | null,
};

export type ModelApprovedConditionInput = {
  name?: ModelStringInput | null,
  product_list?: ModelStringInput | null,
  product_count?: ModelIntInput | null,
  and?: Array< ModelApprovedConditionInput | null > | null,
  or?: Array< ModelApprovedConditionInput | null > | null,
  not?: ModelApprovedConditionInput | null,
};

export type Approved = {
  __typename: "Approved",
  id: string,
  name: string,
  product_list: Array< string | null >,
  product_count?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApprovedInput = {
  id: string,
  name?: string | null,
  product_list?: Array< string | null > | null,
  product_count?: Array< number | null > | null,
};

export type DeleteApprovedInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  product_list?: ModelStringInput | null,
  product_count?: ModelIntInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelApprovedFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  product_list?: ModelStringInput | null,
  product_count?: ModelIntInput | null,
  and?: Array< ModelApprovedFilterInput | null > | null,
  or?: Array< ModelApprovedFilterInput | null > | null,
  not?: ModelApprovedFilterInput | null,
};

export type ModelApprovedConnection = {
  __typename: "ModelApprovedConnection",
  items:  Array<Approved | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApprovedMutationVariables = {
  input: CreateApprovedInput,
  condition?: ModelApprovedConditionInput | null,
};

export type CreateApprovedMutation = {
  createApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApprovedMutationVariables = {
  input: UpdateApprovedInput,
  condition?: ModelApprovedConditionInput | null,
};

export type UpdateApprovedMutation = {
  updateApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApprovedMutationVariables = {
  input: DeleteApprovedInput,
  condition?: ModelApprovedConditionInput | null,
};

export type DeleteApprovedMutation = {
  deleteApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      product_list: Array< string | null >,
      product_count?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApprovedQueryVariables = {
  id: string,
};

export type GetApprovedQuery = {
  getApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApprovedsQueryVariables = {
  filter?: ModelApprovedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApprovedsQuery = {
  listApproveds?:  {
    __typename: "ModelApprovedConnection",
    items:  Array< {
      __typename: "Approved",
      id: string,
      name: string,
      product_list: Array< string | null >,
      product_count?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApprovedSubscription = {
  onCreateApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApprovedSubscription = {
  onUpdateApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApprovedSubscription = {
  onDeleteApproved?:  {
    __typename: "Approved",
    id: string,
    name: string,
    product_list: Array< string | null >,
    product_count?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
