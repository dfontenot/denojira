import type { Element } from '../../interfaces.d.ts';
export default class ClassParser {
    index: number;
    separator: string;
    variants: string[];
    classNames?: string;
    constructor(classNames?: string, separator?: string, variants?: string[]);
    private _handle_group;
    parse(removeDuplicated?: boolean): Element[];
}
