/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TaskModel, TaskModelType } from "./TaskModel"
import { TaskModelSelector } from "./TaskModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  task: TaskModelType;
}

/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 */
export const CommentModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Comment')
  .props({
    __typename: types.optional(types.literal("Comment"), "Comment"),
    content: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    id: types.identifier,
    task: types.union(types.undefined, MSTGQLRef(types.late((): any => TaskModel))),
    taskId: types.union(types.undefined, types.integer),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CommentModelSelector extends QueryBuilder {
  get content() { return this.__attr(`content`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get taskId() { return this.__attr(`taskId`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get userId() { return this.__attr(`userId`) }
  task(builder: string | TaskModelSelector | ((selector: TaskModelSelector) => TaskModelSelector) | undefined) { return this.__child(`task`, TaskModelSelector, builder) }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment().content.createdAt.taskId.updatedAt.userId
