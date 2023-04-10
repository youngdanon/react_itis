import { Instance } from "mobx-state-tree"
import { DestroyUserPayloadModelBase } from "./DestroyUserPayloadModel.base"

/* The TypeScript type of an instance of DestroyUserPayloadModel */
export interface DestroyUserPayloadModelType extends Instance<typeof DestroyUserPayloadModel.Type> {}

/* A graphql query fragment builders for DestroyUserPayloadModel */
export { selectFromDestroyUserPayload, destroyUserPayloadModelPrimitives, DestroyUserPayloadModelSelector } from "./DestroyUserPayloadModel.base"

/**
 * DestroyUserPayloadModel
 */
export const DestroyUserPayloadModel = DestroyUserPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
