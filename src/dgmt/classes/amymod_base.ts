declare const ModInfo: {
  game: string;
  state: string;
};
declare const k: KAPLAYCtx<{}, never>;
import type { KAPLAYCtx } from "kaplay";

/**
 * Base class for AmyMod.
 */
/**
 * The `amymod_base` class serves as a base class for creating mods in the dance game mod tools.
 * It provides lifecycle methods for initialization, frame updates, and physics updates, both synchronous and asynchronous.
 *
 * @remarks
 * This class is designed to be extended by other mod classes to implement specific mod functionality.
 *
 * @example
 * ```typescript
 * class MyMod extends amymod_base {
 *   public _ready() {
 *     console.log("Mod is ready!");
 *   }
 *
 *   public _process(dt: number) {
 *     console.log(`Frame update with delta time: ${dt}`);
 *   }
 *
 *   public _physicsProcess(dt: number) {
 *     console.log(`Physics update with delta time: ${dt}`);
 *   }
 * }
 *
 * const myMod = new MyMod();
 * ```
 *
 * @public
 * @class
 */
export class amymod_base {
  /**
   * KAPLAY CTX.
   * @type {KAPLAYCtx<{}, never>}
   */
  protected k: KAPLAYCtx<{}, never> = k;
  /**
   * Called when the mod is finished initializing.
   */
  public _ready(this: this, k: KAPLAYCtx<{}, never>) {}

  /**
   * Called every frame.
   */
  public _process(this: this, k: KAPLAYCtx<{}, never>, dt: number) {}

  /**
   * Called every tick.
   */
  public _physicsProcess(this: this, k: KAPLAYCtx<{}, never>, dt: number) {}

  /**
   * Asynchronous version of _process.
   */
  public async _processAsync(this: this, k: KAPLAYCtx<{}, never>, dt: number) {}

  /**
   * Asynchronous version of _physicsProcess.
   */
  public async _physicsProcessAsync(
    this: this,
    k: KAPLAYCtx<{}, never>,
    dt: number
  ) {}

  /**
   * The expected game for the mod.
   * @type {string | null}
   */
  public readonly expectedGame: string | null = null;

  /**
   * The state of the game on which to run the mod.
   * @type {string | null}
   */
  public readonly runModOn: string | null = null;

  /**
   * Creates an instance of The Mod.
   */
  constructor() {
    if (ModInfo.game == this.expectedGame && ModInfo.state == this.runModOn) {
      this._ready(this.k);

      this.k.onUpdate(() => {
        this._process(this.k, this.k.dt());
      });
      this.k.onUpdate(() => {
        this._processAsync(this.k, this.k.dt());
      });
      this.k.onFixedUpdate(() => {
        this._physicsProcess(this.k, this.k.fixedDt());
      });
      this.k.onFixedUpdate(() => {
        this._physicsProcessAsync(this.k, this.k.fixedDt());
      });
    }
  }
}
