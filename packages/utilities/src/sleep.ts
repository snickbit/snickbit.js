/**
 * sleep for a given time
 * @category Parsing
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
