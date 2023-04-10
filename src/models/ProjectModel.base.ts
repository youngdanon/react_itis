/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TaskModel, TaskModelType } from "./TaskModel"
import { TaskModelSelector } from "./TaskModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  tasks: IObservableArray<TaskModelType>;
}

/**
 * ProjectBase
 * auto generated base class for the model ProjectModel.
 */
export const ProjectModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Project')
  .props({
    __typename: types.optional(types.literal("Project"), "Project"),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    description: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    tasks: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => TaskModel)))),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProjectModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  tasks(builder: string | TaskModelSelector | ((selector: TaskModelSelector) => TaskModelSelector) | undefined) { return this.__child(`tasks`, TaskModelSelector, builder) }
}
export function selectFromProject() {
  return new ProjectModelSelector()
}

export const projectModelPrimitives = selectFromProject().createdAt.description.name.updatedAt
