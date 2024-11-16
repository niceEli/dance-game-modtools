import { EditorMod } from "amyspark_dgmt";
import type { KAPLAYCtx } from "kaplay";

export class ExampleMod extends EditorMod {
  protected seconds = 0;

  override _ready(this: this, k: KAPLAYCtx<{}, null>): void {
    k.debug.log("Edit ./src/mods/example.ts to try out the mod tools!");
    k.debug.log(
      "This is running in the _ready function that executes after initialization."
    );
  }

  override _process(this: this, k: KAPLAYCtx<{}, never>, dt: number): void {
    if (this.seconds >= 1) {
      k.debug.log("This is running in the _process function every frame.");
    } else {
      this.seconds += dt;
    }
  }
}
