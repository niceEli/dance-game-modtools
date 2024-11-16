import { amymod_base } from "../../amymod_base";

/**
 * Class representing an editor mod for the dance game.
 * @extends amymod_base
 */
export class EditorMod extends amymod_base {
  /** @override */
  readonly expectedGame: string | null = "dance-game";
  /** @override */
  readonly runModOn: string | null = "editor";
}
