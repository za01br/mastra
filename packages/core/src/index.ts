

type IntegrationEvent = {}

type IntegrationAction<T = unknown, U = unknown> = {}

class IntegrationPlugin {
    name: string
}

interface Config {
    name: string;
    plugins: IntegrationPlugin[]
    actions: IntegrationAction[]
    events: IntegrationEvent[]
}
class IntegrationFramework {
    //global events grouped by plugin
    globalEvents: Map<string, Record<string, IntegrationEvent>> = new Map();
    globalEventHandlers: any[] = [];
    // global actions grouped by plugin
    globalActions: Map<string, Record<string, IntegrationAction<any>>> = new Map();
    plugins: Map<string, IntegrationPlugin> = new Map();

    register(pluginDefinition: IntegrationPlugin) {
        const { name } = pluginDefinition;
        this.plugins.set(name, pluginDefinition);

        // pluginDefinition.defineEvents();

        // this.globalEvents.set(name, pluginDefinition.getEvents());

        // this.globalEventHandlers.push(
        //   ...pluginDefinition.getEventHandlers({
        //     makeAPI: this.makeAPI,
        //     makeWebhookURL: this.makeWebhookUrl,
        //   }),
        // );

        // this.globalActions.set(name, pluginDefinition.getActions({ makeAPI: this.makeAPI }));
    }

}


export function createFramework(config: Config) {
    console.log('Hello from core')
    console.log(JSON.stringify(config, null, 2))

    const framework = new IntegrationFramework();

    // Register plugins
    config.plugins.forEach((plugin) => {
        framework.register(plugin)
    })

    // Register actions

    // Register events
    

    return framework;
}