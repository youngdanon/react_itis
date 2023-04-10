import { Instance } from "mobx-state-tree"
import { UpdateCommentPayloadModelBase } from "./UpdateCommentPayloadModel.base"

/* The TypeScript type of an instance of UpdateCommentPayloadModel */
export interface UpdateCommentPayloadModelType extends Instance<typeof UpdateCommentPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateCommentPayloadModel */
export { selectFromUpdateCommentPayload, updateCommentPayloadModelPrimitives, UpdateCommentPayloadModelSelector } from "./UpdateCommentPayloadModel.base"

/**
 * UpdateCommentPayloadModel
 */
export const UpdateCommentPayloadModel = UpdateCommentPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
