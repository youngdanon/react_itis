/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TaskModel, TaskModelType } from "./TaskModel"
import { TaskModelSelector } from "./TaskModel.base"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  task: TaskModelType;
}

/**
 * CreateTaskPayloadBase
 * auto generated base class for the model CreateTaskPayloadModel.
 */
export const CreateTaskPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CreateTaskPayload')
  .props({
    __typename: types.optional(types.literal("CreateTaskPayload"), "CreateTaskPayload"),
    errors: types.union(types.undefined, types.array(types.late((): any => UserErrorModel))),
    task: types.union(types.undefined, MSTGQLRef(types.late((): any => TaskModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CreateTaskPayloadModelSelector extends QueryBuilder {
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
  task(builder: string | TaskModelSelector | ((selector: TaskModelSelector) => TaskModelSelector) | undefined) { return this.__child(`task`, TaskModelSelector, builder) }
}
export function selectFromCreateTaskPayload() {
  return new CreateTaskPayloadModelSelector()
}

export const createTaskPayloadModelPrimitives = selectFromCreateTaskPayload()
