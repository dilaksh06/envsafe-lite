export interface BaseValidator<T> {
    _type: string;
    parse: (key: string, value: string | undefined) => T;
}

export interface StringValidatorOptions {
    default?: string;
}
export interface NumberValidatorOptions {
    default?: number;
}

export interface BoolValidatorOptions {
    default?: boolean;
}
