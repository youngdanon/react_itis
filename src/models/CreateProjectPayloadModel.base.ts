/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProjectModel, ProjectModelType } from "./ProjectModel"
import { ProjectModelSelector } from "./ProjectModel.base"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { UserErrorModelSelector } from "./UserErrorModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  project: ProjectModelType;
}

/**
 * CreateProjectPayloadBase
 * auto generated base class for the model CreateProjectPayloadModel.
 */
export const CreateProjectPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CreateProjectPayload')
  .props({
    __typename: types.optional(types.literal("CreateProjectPayload"), "CreateProjectPayload"),
    errors: types.union(types.undefined, types.array(types.late((): any => UserErrorModel))),
    project: types.union(types.undefined, MSTGQLRef(types.late((): any => ProjectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CreateProjectPayloadModelSelector extends QueryBuilder {
  errors(builder: string | UserErrorModelSelector | ((selector: UserErrorModelSelector) => UserErrorModelSelector) | undefined) { return this.__child(`errors`, UserErrorModelSelector, builder) }
  project(builder: string | ProjectModelSelector | ((selector: ProjectModelSelector) => ProjectModelSelector) | undefined) { return this.__child(`project`, ProjectModelSelector, builder) }
}
export function selectFromCreateProjectPayload() {
  return new CreateProjectPayloadModelSelector()
}

export const createProjectPayloadModelPrimitives = selectFromCreateProjectPayload()
