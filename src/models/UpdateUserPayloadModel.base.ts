/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
}

/**
 * UpdateUserPayloadBase
 * auto generated base class for the model UpdateUserPayloadModel.
 */
export const UpdateUserPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateUserPayload')
  .props({
    __typename: types.optional(types.literal("UpdateUserPayload"), "UpdateUserPayload"),
    errors: types.union(types.undefined, types.array(types.late((): any => UserErrorModel))),
    user: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateUserPayloadModelSelector extends QueryBuilder {
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromUpdateUserPayload() {
  return new UpdateUserPayloadModelSelector()
}

export const updateUserPayloadModelPrimitives = selectFromUpdateUserPayload()
