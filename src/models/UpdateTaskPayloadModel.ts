import { Instance } from "mobx-state-tree"
import { UpdateTaskPayloadModelBase } from "./UpdateTaskPayloadModel.base"

/* The TypeScript type of an instance of UpdateTaskPayloadModel */
export interface UpdateTaskPayloadModelType extends Instance<typeof UpdateTaskPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateTaskPayloadModel */
export { selectFromUpdateTaskPayload, updateTaskPayloadModelPrimitives, UpdateTaskPayloadModelSelector } from "./UpdateTaskPayloadModel.base"

/**
 * UpdateTaskPayloadModel
 */
export const UpdateTaskPayloadModel = UpdateTaskPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
