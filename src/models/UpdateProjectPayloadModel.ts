import { Instance } from "mobx-state-tree"
import { UpdateProjectPayloadModelBase } from "./UpdateProjectPayloadModel.base"

/* The TypeScript type of an instance of UpdateProjectPayloadModel */
export interface UpdateProjectPayloadModelType extends Instance<typeof UpdateProjectPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateProjectPayloadModel */
export { selectFromUpdateProjectPayload, updateProjectPayloadModelPrimitives, UpdateProjectPayloadModelSelector } from "./UpdateProjectPayloadModel.base"

/**
 * UpdateProjectPayloadModel
 */
export const UpdateProjectPayloadModel = UpdateProjectPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
