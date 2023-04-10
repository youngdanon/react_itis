import { Instance } from "mobx-state-tree"
import { DestroyProjectPayloadModelBase } from "./DestroyProjectPayloadModel.base"

/* The TypeScript type of an instance of DestroyProjectPayloadModel */
export interface DestroyProjectPayloadModelType extends Instance<typeof DestroyProjectPayloadModel.Type> {}

/* A graphql query fragment builders for DestroyProjectPayloadModel */
export { selectFromDestroyProjectPayload, destroyProjectPayloadModelPrimitives, DestroyProjectPayloadModelSelector } from "./DestroyProjectPayloadModel.base"

/**
 * DestroyProjectPayloadModel
 */
export const DestroyProjectPayloadModel = DestroyProjectPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
