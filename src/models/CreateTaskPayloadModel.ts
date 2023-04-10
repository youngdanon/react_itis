import { Instance } from "mobx-state-tree"
import { CreateTaskPayloadModelBase } from "./CreateTaskPayloadModel.base"

/* The TypeScript type of an instance of CreateTaskPayloadModel */
export interface CreateTaskPayloadModelType extends Instance<typeof CreateTaskPayloadModel.Type> {}

/* A graphql query fragment builders for CreateTaskPayloadModel */
export { selectFromCreateTaskPayload, createTaskPayloadModelPrimitives, CreateTaskPayloadModelSelector } from "./CreateTaskPayloadModel.base"

/**
 * CreateTaskPayloadModel
 */
export const CreateTaskPayloadModel = CreateTaskPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
