/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
}

/**
 * DestroyUserPayloadBase
 * auto generated base class for the model DestroyUserPayloadModel.
 */
export const DestroyUserPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DestroyUserPayload')
  .props({
    __typename: types.optional(types.literal("DestroyUserPayload"), "DestroyUserPayload"),
    user: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DestroyUserPayloadModelSelector extends QueryBuilder {
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromDestroyUserPayload() {
  return new DestroyUserPayloadModelSelector()
}

export const destroyUserPayloadModelPrimitives = selectFromDestroyUserPayload()
