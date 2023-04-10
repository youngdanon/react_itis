/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CurrentUserBase
 * auto generated base class for the model CurrentUserModel.
 */
export const CurrentUserModelBase = ModelBase
  .named('CurrentUser')
  .props({
    __typename: types.optional(types.literal("CurrentUser"), "CurrentUser"),
    email: types.union(types.undefined, types.string),
    firstName: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CurrentUserModelSelector extends QueryBuilder {
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get lastName() { return this.__attr(`lastName`) }
}
export function selectFromCurrentUser() {
  return new CurrentUserModelSelector()
}

export const currentUserModelPrimitives = selectFromCurrentUser().email.firstName.lastName
