/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProjectModel, ProjectModelType } from "./ProjectModel"
import { ProjectModelSelector } from "./ProjectModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  project: ProjectModelType;
}

/**
 * DestroyProjectPayloadBase
 * auto generated base class for the model DestroyProjectPayloadModel.
 */
export const DestroyProjectPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DestroyProjectPayload')
  .props({
    __typename: types.optional(types.literal("DestroyProjectPayload"), "DestroyProjectPayload"),
    project: types.union(types.undefined, MSTGQLRef(types.late((): any => ProjectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DestroyProjectPayloadModelSelector extends QueryBuilder {
  project(builder: string | ProjectModelSelector | ((selector: ProjectModelSelector) => ProjectModelSelector) | undefined) { return this.__child(`project`, ProjectModelSelector, builder) }
}
export function selectFromDestroyProjectPayload() {
  return new DestroyProjectPayloadModelSelector()
}

export const destroyProjectPayloadModelPrimitives = selectFromDestroyProjectPayload()
