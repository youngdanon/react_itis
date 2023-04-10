import { Instance } from "mobx-state-tree"
import { CurrentUserModelBase } from "./CurrentUserModel.base"

/* The TypeScript type of an instance of CurrentUserModel */
export interface CurrentUserModelType extends Instance<typeof CurrentUserModel.Type> {}

/* A graphql query fragment builders for CurrentUserModel */
export { selectFromCurrentUser, currentUserModelPrimitives, CurrentUserModelSelector } from "./CurrentUserModel.base"

/**
 * CurrentUserModel
 */
export const CurrentUserModel = CurrentUserModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
