import type { Comparer, IdSelector, EntityAdapter } from './models.d.ts';
/**
 *
 * @param options
 *
 * @public
 */
export declare function createEntityAdapter<T>(options?: {
    selectId?: IdSelector<T>;
    sortComparer?: false | Comparer<T>;
}): EntityAdapter<T>;
