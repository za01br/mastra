import { IntegrationPlugin } from "./plugin"
import { IntegrationAction, IntegrationEvent } from "./types"

interface Config {
  name: string
  plugins: IntegrationPlugin[]
  coreActions: Omit<IntegrationAction, "pluginName">[]
  coreEvents: IntegrationEvent[]
}

class IntegrationFramework {
  //global events grouped by plugin
  globalEvents: Map<string, Record<string, IntegrationEvent>> = new Map()
  // global event handlers
  globalEventHandlers: any[] = []
  // global actions grouped by plugin
  globalActions: Map<string, Record<string, IntegrationAction<any>>> = new Map()
  plugins: Map<string, IntegrationPlugin> = new Map()

  registerPlugin(pluginDefinition: IntegrationPlugin) {
    const { name } = pluginDefinition
    this.plugins.set(name, pluginDefinition)

    pluginDefinition.defineEvents()

    this.globalEvents.set(name, pluginDefinition.getEvents())

    this.globalEventHandlers.push(...pluginDefinition.getEventHandlers())

    this.globalActions.set(name, pluginDefinition.getActions())
  }
}

export function createFramework(config: Config) {
  console.log("Hello from core")
  console.log(JSON.stringify(config, null, 2))

  const framework = new IntegrationFramework()

  // Register plugins
  config.plugins.forEach((plugin) => {
    framework.registerPlugin(plugin)
  })

  // Register core actions
  config.coreActions.forEach((action) => {
    this.globalActions.set("CORE", { [action.type]: action })
  })

  // Register core events
  config.coreEvents.forEach((event) => {
    this.globalEvents.set("CORE", { [event.key]: event })
  })

  return framework
}
