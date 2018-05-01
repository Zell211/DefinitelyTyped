// Type definitions for require-dir 1.0.0
// Project: https://github.com/aseemk/requireDir
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function requireDir(
  directory: string, 
  options: {
    recurse: boolean,
    filter: Function,
    mapKey: Function,
    mapValue: Function,
    duplicates: boolean,
  }): { [path: string]: any };

export = requireDir;
