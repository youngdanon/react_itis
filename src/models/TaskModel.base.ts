/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { ProjectModel, ProjectModelType } from "./ProjectModel"
import { ProjectModelSelector } from "./ProjectModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  comments: IObservableArray<CommentModelType>;
  project: ProjectModelType;
}

/**
 * TaskBase
 * auto generated base class for the model TaskModel.
 */
export const TaskModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Task')
  .props({
    __typename: types.optional(types.literal("Task"), "Task"),
    comments: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CommentModel)))),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    deadlineAt: types.union(types.undefined, types.null, types.frozen()),
    description: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    project: types.union(types.undefined, MSTGQLRef(types.late((): any => ProjectModel))),
    state: types.union(types.undefined, types.null, types.string),
    title: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class TaskModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get deadlineAt() { return this.__attr(`deadlineAt`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get state() { return this.__attr(`state`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  comments(builder: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector) | undefined) { return this.__child(`comments`, CommentModelSelector, builder) }
  project(builder: string | ProjectModelSelector | ((selector: ProjectModelSelector) => ProjectModelSelector) | undefined) { return this.__child(`project`, ProjectModelSelector, builder) }
}
export function selectFromTask() {
  return new TaskModelSelector()
}

export const taskModelPrimitives = selectFromTask().createdAt.deadlineAt.description.state.title.updatedAt
