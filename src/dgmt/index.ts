/**
 * @module dgmt
 * @description Modding Tools library
 */

import { amymod_base } from "./classes/amymod_base";
import { EditorMod } from "./classes/games/dance-game/EditorMod";
import { PlayMod } from "./classes/games/dance-game/PlayMod";
import { ModInfo, k, amymods_modstack } from "./pass";

/**
 * utilities for mod development
 * @exports amymod_base - Base class for mod creation
 * @exports EditorMod - Editor specific mod
 * @exports EditorMod - Playtime specific mod
 * @exports ModInfo - Type definition for mod information
 * @exports k - Utility constants and configurations
 * @exports amymods_modstack - array of all the initialized mods
 */
export { amymod_base, EditorMod, PlayMod, ModInfo, k, amymods_modstack };
