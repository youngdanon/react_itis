import { Instance } from "mobx-state-tree"
import { SignUpPayloadModelBase } from "./SignUpPayloadModel.base"

/* The TypeScript type of an instance of SignUpPayloadModel */
export interface SignUpPayloadModelType extends Instance<typeof SignUpPayloadModel.Type> {}

/* A graphql query fragment builders for SignUpPayloadModel */
export { selectFromSignUpPayload, signUpPayloadModelPrimitives, SignUpPayloadModelSelector } from "./SignUpPayloadModel.base"

/**
 * SignUpPayloadModel
 */
export const SignUpPayloadModel = SignUpPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
