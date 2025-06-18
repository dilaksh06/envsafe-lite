import { BaseValidator, BoolValidatorOptions } from "../core/types";

export function bool(options: BoolValidatorOptions = {}): BaseValidator<boolean> {
    return {
        _type: "bool",
        parse(key: string, value: string | undefined): boolean {
            if (value === undefined || value === null || value === "") {
                if (options.default !== undefined) return options.default;
                throw new Error(`Missing required environment variable: ${key}`);
            }

            const normalized = value.toLowerCase().trim();
            if (["true", "1", "yes"].includes(normalized)) return true;
            if (["false", "0", "no"].includes(normalized)) return false;

            throw new Error(`Invalid boolean for environment variable ${key}: "${value}"`);
        }
    };
}
