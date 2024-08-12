const isNull = <T>(value: T | null | undefined): boolean => value === null

const isUndefined = <T>(value: T | null | undefined): value is undefined => typeof value === 'undefined'

const isNullable = (arg: unknown): arg is undefined | null => typeof arg === 'undefined' || arg === null

export { isNull, isNullable, isUndefined }
