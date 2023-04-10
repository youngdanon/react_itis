/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserRoleEnum {
  MEMBER="MEMBER",
ADMIN="ADMIN",
SUPERADMIN="SUPERADMIN"
}

/**
* UserRoleEnum
*/
export const UserRoleEnumType = types.enumeration("UserRoleEnum", [
        "MEMBER", // Member
  "ADMIN", // Admin
  "SUPERADMIN", // Superadmin
      ])
