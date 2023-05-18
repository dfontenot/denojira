// source: https://github.com/GoogleChromeLabs/jsbi/issues/30#issuecomment-521460510
export const serializeWithBigIntQuoted = (jsonObj: any) => JSON.stringify(jsonObj, (_key, val) => typeof val === 'bigint' ? val.toString() : val)
