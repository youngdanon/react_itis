import { Instance } from "mobx-state-tree"
import { CreateProjectPayloadModelBase } from "./CreateProjectPayloadModel.base"

/* The TypeScript type of an instance of CreateProjectPayloadModel */
export interface CreateProjectPayloadModelType extends Instance<typeof CreateProjectPayloadModel.Type> {}

/* A graphql query fragment builders for CreateProjectPayloadModel */
export { selectFromCreateProjectPayload, createProjectPayloadModelPrimitives, CreateProjectPayloadModelSelector } from "./CreateProjectPayloadModel.base"

/**
 * CreateProjectPayloadModel
 */
export const CreateProjectPayloadModel = CreateProjectPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
