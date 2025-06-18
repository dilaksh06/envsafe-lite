import { BaseValidator, StringValidatorOptions } from "../core/types";

export function string(options: StringValidatorOptions = {}): BaseValidator<string> {
    return {
        _type: "string",
        parse(key: string, value: string | undefined): string {
            if (value === undefined || value === null || value === "") {
                if (options.default !== undefined) return options.default;
                throw new Error(`Missing required environment variable: ${key}`);
            }
            return value;
        }
    };
}
