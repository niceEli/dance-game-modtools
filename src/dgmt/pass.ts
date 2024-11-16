/**
 * @module pass
 * @description Module for handling game mod information and context
 */

import type { KAPLAYCtx } from "kaplay";

export interface ModInfo {
  game: string;
  state: string;
}

//@ts-ignore
declare const ModInfo: ModInfo;
//@ts-ignore
declare const k: KAPLAYCtx<{}, never>;
//@ts-ignore
declare let amymods_modstack: any[];

//@ts-ignore
export { ModInfo, k, amymods_modstack };
