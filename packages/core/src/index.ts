interface Config {
    name: string;
}


export function createFramework(config: Config) {
    console.log('Hello from core')
    console.log(JSON.stringify(config, null, 2))
}