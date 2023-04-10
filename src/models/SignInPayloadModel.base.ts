/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { RootStoreType } from "./index"


/**
 * SignInPayloadBase
 * auto generated base class for the model SignInPayloadModel.
 */
export const SignInPayloadModelBase = ModelBase
  .named('SignInPayload')
  .props({
    __typename: types.optional(types.literal("SignInPayload"), "SignInPayload"),
    accessToken: types.union(types.undefined, types.null, types.string),
    errors: types.union(types.undefined, types.null, types.array(types.late((): any => UserErrorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SignInPayloadModelSelector extends QueryBuilder {
  get accessToken() { return this.__attr(`accessToken`) }
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
}
export function selectFromSignInPayload() {
  return new SignInPayloadModelSelector()
}

export const signInPayloadModelPrimitives = selectFromSignInPayload().accessToken
