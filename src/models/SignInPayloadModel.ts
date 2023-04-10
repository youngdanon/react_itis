import { Instance } from "mobx-state-tree"
import { SignInPayloadModelBase } from "./SignInPayloadModel.base"

/* The TypeScript type of an instance of SignInPayloadModel */
export interface SignInPayloadModelType extends Instance<typeof SignInPayloadModel.Type> {}

/* A graphql query fragment builders for SignInPayloadModel */
export { selectFromSignInPayload, signInPayloadModelPrimitives, SignInPayloadModelSelector } from "./SignInPayloadModel.base"

/**
 * SignInPayloadModel
 */
export const SignInPayloadModel = SignInPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
