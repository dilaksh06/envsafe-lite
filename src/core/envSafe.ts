import { BaseValidator } from "./types";

export function envSafe<T extends Record<string, BaseValidator<any>>>(
    schema: T
): { [K in keyof T]: ReturnType<T[K]["parse"]> } {
    const config = {} as { [K in keyof T]: ReturnType<T[K]["parse"]> };

    for (const key in schema) {
        const validator = schema[key];
        const rawValue = process.env[key];

        try {
            config[key] = validator.parse(key, rawValue);
        } catch (err: any) {
            throw new Error(`[envsafe-lite] ${err.message}`);
        }
    }

    return config;
}
