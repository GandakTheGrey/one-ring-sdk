type Config = {
    apiKey: string;
    prefix?: string;
}

export abstract class Base {
    private apiKey: string;
    private prefix: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.prefix = config.prefix || "https://the-one-api.dev/v2";
    }

    protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.prefix}${endpoint}`;

        const headers = {
            "Content-type": "application/json",
            "Authorization": "Bearer " + this.apiKey
        };

        const config = {
            ...options,
            headers
        };

        return await fetch(url, config).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
    }
}