declare function named(name: string | number | symbol): <T>(target: import("./decorator_utils.d.ts").DecoratorTarget<unknown>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<T> | undefined) => void;
export { named };
