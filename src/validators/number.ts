import { BaseValidator, NumberValidatorOptions } from "../core/types";

export function number(options: NumberValidatorOptions = {}): BaseValidator<number> {
    return {
        _type: "number",
        parse(key: string, value: string | undefined): number {
            if (value === undefined || value === null || value === "") {
                if (options.default !== undefined) return options.default;
                throw new Error(`Missing required environment variable: ${key}`);
            }

            const parsed = Number(value);
            if (isNaN(parsed)) {
                throw new Error(`Invalid number for environment variable ${key}: "${value}"`);
            }
            return parsed;
        }
    };
}
