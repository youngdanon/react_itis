/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CurrentUserModel, CurrentUserModelType } from "./CurrentUserModel"
import { CurrentUserModelSelector } from "./CurrentUserModel.base"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { RootStoreType } from "./index"


/**
 * SignUpPayloadBase
 * auto generated base class for the model SignUpPayloadModel.
 */
export const SignUpPayloadModelBase = ModelBase
  .named('SignUpPayload')
  .props({
    __typename: types.optional(types.literal("SignUpPayload"), "SignUpPayload"),
    currentUser: types.union(types.undefined, types.late((): any => CurrentUserModel)),
    errors: types.union(types.undefined, types.null, types.array(types.late((): any => UserErrorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SignUpPayloadModelSelector extends QueryBuilder {
  currentUser(builder: string | CurrentUserModelSelector | ((selector: CurrentUserModelSelector) => CurrentUserModelSelector) | undefined) { return this.__child(`currentUser`, CurrentUserModelSelector, builder) }
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
}
export function selectFromSignUpPayload() {
  return new SignUpPayloadModelSelector()
}

export const signUpPayloadModelPrimitives = selectFromSignUpPayload()
