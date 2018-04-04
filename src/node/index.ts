import * as build from "./build"
import * as commands from "./commands"
import * as context from "./context"
import * as devService from "./dev-service"
import * as project from "./project/index"
import * as self from "./self"

export const pri = {
  /**
   * Operate cli commands
   */
  commands,
  /**
   * Build configs
   */
  build,
  /**
   * Project management
   */
  project,
  /**
   * Context operate
   */
  context,
  /**
   * Register dev service
   */
  devService,
  ...self
}

export * from "../utils/structor-config"
