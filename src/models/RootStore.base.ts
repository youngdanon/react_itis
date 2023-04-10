/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { CommentModel, CommentModelType } from "./CommentModel"
import { commentModelPrimitives, CommentModelSelector } from "./CommentModel.base"
import { CreateProjectPayloadModel, CreateProjectPayloadModelType } from "./CreateProjectPayloadModel"
import { createProjectPayloadModelPrimitives, CreateProjectPayloadModelSelector } from "./CreateProjectPayloadModel.base"
import { CreateTaskPayloadModel, CreateTaskPayloadModelType } from "./CreateTaskPayloadModel"
import { createTaskPayloadModelPrimitives, CreateTaskPayloadModelSelector } from "./CreateTaskPayloadModel.base"
import { CurrentUserModel, CurrentUserModelType } from "./CurrentUserModel"
import { currentUserModelPrimitives, CurrentUserModelSelector } from "./CurrentUserModel.base"
import { DestroyProjectPayloadModel, DestroyProjectPayloadModelType } from "./DestroyProjectPayloadModel"
import { destroyProjectPayloadModelPrimitives, DestroyProjectPayloadModelSelector } from "./DestroyProjectPayloadModel.base"
import { DestroyUserPayloadModel, DestroyUserPayloadModelType } from "./DestroyUserPayloadModel"
import { destroyUserPayloadModelPrimitives, DestroyUserPayloadModelSelector } from "./DestroyUserPayloadModel.base"
import { ProjectModel, ProjectModelType } from "./ProjectModel"
import { projectModelPrimitives, ProjectModelSelector } from "./ProjectModel.base"
import { SignInPayloadModel, SignInPayloadModelType } from "./SignInPayloadModel"
import { signInPayloadModelPrimitives, SignInPayloadModelSelector } from "./SignInPayloadModel.base"
import { SignUpPayloadModel, SignUpPayloadModelType } from "./SignUpPayloadModel"
import { signUpPayloadModelPrimitives, SignUpPayloadModelSelector } from "./SignUpPayloadModel.base"
import { TaskModel, TaskModelType } from "./TaskModel"
import { taskModelPrimitives, TaskModelSelector } from "./TaskModel.base"
import { UpdateCommentPayloadModel, UpdateCommentPayloadModelType } from "./UpdateCommentPayloadModel"
import { updateCommentPayloadModelPrimitives, UpdateCommentPayloadModelSelector } from "./UpdateCommentPayloadModel.base"
import { UpdateProjectPayloadModel, UpdateProjectPayloadModelType } from "./UpdateProjectPayloadModel"
import { updateProjectPayloadModelPrimitives, UpdateProjectPayloadModelSelector } from "./UpdateProjectPayloadModel.base"
import { UpdateTaskPayloadModel, UpdateTaskPayloadModelType } from "./UpdateTaskPayloadModel"
import { updateTaskPayloadModelPrimitives, UpdateTaskPayloadModelSelector } from "./UpdateTaskPayloadModel.base"
import { UpdateUserPayloadModel, UpdateUserPayloadModelType } from "./UpdateUserPayloadModel"
import { updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { UserErrorModel, UserErrorModelType } from "./UserErrorModel"
import { userErrorModelPrimitives, UserErrorModelSelector } from "./UserErrorModel.base"


import { UserRoleEnum } from "./UserRoleEnum"

export type CreateProjectInput = {
  name: string
  description?: (string | null)
}
export type CreateTaskInput = {
  projectId: number
  title: string
  description?: (string | null)
  deadlineAt: any
}
export type DestroyProjectInput = {
  id: string
}
export type SignInInput = {
  email: string
  password: string
}
export type SignUpInput = {
  email: string
  password: string
  firstName?: (string | null)
  lastName?: (string | null)
}
export type UpdateCommentInput = {
  commentId: string
  content: string
}
export type UpdateProjectInput = {
  id: string
  name?: (string | null)
  description?: (string | null)
}
export type UpdateTaskInput = {
  taskId: string
  title?: (string | null)
  description?: (string | null)
}
export type UpdateUserInput = {
  firstName?: (string | null)
  lastName?: (string | null)
  email?: (string | null)
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  comments: ObservableMap<string, CommentModelType>,
  projects: ObservableMap<string, ProjectModelType>,
  tasks: ObservableMap<string, TaskModelType>,
  users: ObservableMap<string, UserModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryProject="queryProject",
queryProjects="queryProjects",
queryTask="queryTask",
queryTasks="queryTasks"
}
export enum RootStoreBaseMutations {
mutateCreateProject="mutateCreateProject",
mutateCreateTask="mutateCreateTask",
mutateDestroyProject="mutateDestroyProject",
mutateDestroyUser="mutateDestroyUser",
mutateSignIn="mutateSignIn",
mutateSignUp="mutateSignUp",
mutateUpdateComment="mutateUpdateComment",
mutateUpdateProject="mutateUpdateProject",
mutateUpdateTask="mutateUpdateTask",
mutateUpdateUser="mutateUpdateUser"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Comment', () => CommentModel], ['CreateProjectPayload', () => CreateProjectPayloadModel], ['CreateTaskPayload', () => CreateTaskPayloadModel], ['CurrentUser', () => CurrentUserModel], ['DestroyProjectPayload', () => DestroyProjectPayloadModel], ['DestroyUserPayload', () => DestroyUserPayloadModel], ['Project', () => ProjectModel], ['SignInPayload', () => SignInPayloadModel], ['SignUpPayload', () => SignUpPayloadModel], ['Task', () => TaskModel], ['UpdateCommentPayload', () => UpdateCommentPayloadModel], ['UpdateProjectPayload', () => UpdateProjectPayloadModel], ['UpdateTaskPayload', () => UpdateTaskPayloadModel], ['UpdateUserPayload', () => UpdateUserPayloadModel], ['User', () => UserModel], ['UserError', () => UserErrorModel]], ['Comment', 'Project', 'Task', 'User'], "js"))
  .props({
    comments: types.optional(types.map(types.late((): any => CommentModel)), {}),
    projects: types.optional(types.map(types.late((): any => ProjectModel)), {}),
    tasks: types.optional(types.map(types.late((): any => TaskModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {})
  })
  .actions(self => ({
    queryProject(variables: { id: string }, resultSelector: string | ((qb: ProjectModelSelector) => ProjectModelSelector) = projectModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ project: ProjectModelType}>(`query project($id: ID!) { project(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProjects(variables?: {  }, resultSelector: string | ((qb: ProjectModelSelector) => ProjectModelSelector) = projectModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ projects: ProjectModelType[]}>(`query projects { projects {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTask(variables: { id: string }, resultSelector: string | ((qb: TaskModelSelector) => TaskModelSelector) = taskModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ task: TaskModelType}>(`query task($id: ID!) { task(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TaskModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTasks(variables?: {  }, resultSelector: string | ((qb: TaskModelSelector) => TaskModelSelector) = taskModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ tasks: TaskModelType[]}>(`query tasks { tasks {
        ${typeof resultSelector === "function" ? resultSelector(new TaskModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateProject(variables: { input: CreateProjectInput }, resultSelector: string | ((qb: CreateProjectPayloadModelSelector) => CreateProjectPayloadModelSelector) = createProjectPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProject: CreateProjectPayloadModelType}>(`mutation createProject($input: CreateProjectInput!) { createProject(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateProjectPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateTask(variables: { input: CreateTaskInput }, resultSelector: string | ((qb: CreateTaskPayloadModelSelector) => CreateTaskPayloadModelSelector) = createTaskPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createTask: CreateTaskPayloadModelType}>(`mutation createTask($input: CreateTaskInput!) { createTask(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateTaskPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDestroyProject(variables: { input: DestroyProjectInput }, resultSelector: string | ((qb: DestroyProjectPayloadModelSelector) => DestroyProjectPayloadModelSelector) = destroyProjectPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ destroyProject: DestroyProjectPayloadModelType}>(`mutation destroyProject($input: DestroyProjectInput!) { destroyProject(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DestroyProjectPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDestroyUser(variables?: {  }, resultSelector: string | ((qb: DestroyUserPayloadModelSelector) => DestroyUserPayloadModelSelector) = destroyUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ destroyUser: DestroyUserPayloadModelType}>(`mutation destroyUser { destroyUser {
        ${typeof resultSelector === "function" ? resultSelector(new DestroyUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSignIn(variables: { input: SignInInput }, resultSelector: string | ((qb: SignInPayloadModelSelector) => SignInPayloadModelSelector) = signInPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signIn: SignInPayloadModelType}>(`mutation signIn($input: SignInInput!) { signIn(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SignInPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSignUp(variables: { input: SignUpInput }, resultSelector: string | ((qb: SignUpPayloadModelSelector) => SignUpPayloadModelSelector) = signUpPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signUp: SignUpPayloadModelType}>(`mutation signUp($input: SignUpInput!) { signUp(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SignUpPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateComment(variables: { input: UpdateCommentInput }, resultSelector: string | ((qb: UpdateCommentPayloadModelSelector) => UpdateCommentPayloadModelSelector) = updateCommentPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateComment: UpdateCommentPayloadModelType}>(`mutation updateComment($input: UpdateCommentInput!) { updateComment(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateCommentPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProject(variables: { input: UpdateProjectInput }, resultSelector: string | ((qb: UpdateProjectPayloadModelSelector) => UpdateProjectPayloadModelSelector) = updateProjectPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProject: UpdateProjectPayloadModelType}>(`mutation updateProject($input: UpdateProjectInput!) { updateProject(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateProjectPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateTask(variables: { input: UpdateTaskInput }, resultSelector: string | ((qb: UpdateTaskPayloadModelSelector) => UpdateTaskPayloadModelSelector) = updateTaskPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateTask: UpdateTaskPayloadModelType}>(`mutation updateTask($input: UpdateTaskInput!) { updateTask(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateTaskPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { input: UpdateUserInput }, resultSelector: string | ((qb: UpdateUserPayloadModelSelector) => UpdateUserPayloadModelSelector) = updateUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UpdateUserPayloadModelType}>(`mutation updateUser($input: UpdateUserInput!) { updateUser(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
