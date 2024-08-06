interface Config {
    name: string;
}

type IntegrationEvent = {}

type IntegrationAction<T = unknown, U = unknown> = {}

class IntegrationPlugin { }
class IntegrationFramework {
    //global events grouped by plugin
    globalEvents: Map<string, Record<string, IntegrationEvent>> = new Map();
    globalEventHandlers: any[] = [];
    // global actions grouped by plugin
    globalActions: Map<string, Record<string, IntegrationAction<any>>> = new Map();
    plugins: Map<string, IntegrationPlugin> = new Map();

}


export function createFramework(config: Config) {
    console.log('Hello from core')
    console.log(JSON.stringify(config, null, 2))

    const framework = new IntegrationFramework();

    return framework;
}