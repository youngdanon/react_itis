import { Instance } from "mobx-state-tree"
import { ProjectModelBase } from "./ProjectModel.base"

/* The TypeScript type of an instance of ProjectModel */
export interface ProjectModelType extends Instance<typeof ProjectModel.Type> {}

/* A graphql query fragment builders for ProjectModel */
export { selectFromProject, projectModelPrimitives, ProjectModelSelector } from "./ProjectModel.base"

/**
 * ProjectModel
 */
export const ProjectModel = ProjectModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
