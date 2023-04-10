import { Instance } from "mobx-state-tree"
import { UpdateUserPayloadModelBase } from "./UpdateUserPayloadModel.base"

/* The TypeScript type of an instance of UpdateUserPayloadModel */
export interface UpdateUserPayloadModelType extends Instance<typeof UpdateUserPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateUserPayloadModel */
export { selectFromUpdateUserPayload, updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"

/**
 * UpdateUserPayloadModel
 */
export const UpdateUserPayloadModel = UpdateUserPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
