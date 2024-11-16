declare let amymods_modstack: any[];

export function runMods(...mods: any[]) {
  amymods_modstack.push(...mods);
}
