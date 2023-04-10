/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserErrorBase
 * auto generated base class for the model UserErrorModel.
 *
 * A user-readable error
 */
export const UserErrorModelBase = ModelBase
  .named('UserError')
  .props({
    __typename: types.optional(types.literal("UserError"), "UserError"),
    /** A description of the error */
    message: types.union(types.undefined, types.string),
    /** Which input value this error came from */
    path: types.union(types.undefined, types.null, types.array(types.string)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserErrorModelSelector extends QueryBuilder {
  get message() { return this.__attr(`message`) }
  get path() { return this.__attr(`path`) }
}
export function selectFromUserError() {
  return new UserErrorModelSelector()
}

export const userErrorModelPrimitives = selectFromUserError().message.path
