/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserRoleEnumType } from "./UserRoleEnum"
import { RootStoreType } from "./index"


/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    email: types.union(types.undefined, types.null, types.string),
    firstName: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    lastName: types.union(types.undefined, types.null, types.string),
    role: types.union(types.undefined, types.null, UserRoleEnumType),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get id() { return this.__attr(`id`) }
  get lastName() { return this.__attr(`lastName`) }
  get role() { return this.__attr(`role`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().createdAt.email.firstName.lastName.role.updatedAt
