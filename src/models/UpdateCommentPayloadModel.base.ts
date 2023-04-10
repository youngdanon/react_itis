/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  comment: CommentModelType;
}

/**
 * UpdateCommentPayloadBase
 * auto generated base class for the model UpdateCommentPayloadModel.
 */
export const UpdateCommentPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateCommentPayload')
  .props({
    __typename: types.optional(types.literal("UpdateCommentPayload"), "UpdateCommentPayload"),
    comment: types.union(types.undefined, MSTGQLRef(types.late((): any => CommentModel))),
    errors: types.union(types.undefined, types.array(types.late((): any => UserErrorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateCommentPayloadModelSelector extends QueryBuilder {
  comment(builder: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector) | undefined) { return this.__child(`comment`, CommentModelSelector, builder) }
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
}
export function selectFromUpdateCommentPayload() {
  return new UpdateCommentPayloadModelSelector()
}

export const updateCommentPayloadModelPrimitives = selectFromUpdateCommentPayload()
