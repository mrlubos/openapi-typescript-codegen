import type { StringCase } from '../../../types/config';
import type { Plugin } from '../../types';

export interface Config extends Plugin.Name<'@hey-api/typescript'> {
  /**
   * By default, enums are generated as TypeScript types. In addition to that,
   * you can choose to generate them as JavaScript objects, TypeScript enums,
   * or TypeScript enums contained within namespaces.
   *
   * @default false
   */
  enums?: 'javascript' | 'typescript' | 'typescript+namespace' | false;
  /**
   * **This feature works only with the experimental parser**
   *
   * Defines casing of the enum keys. By default, we use `SCREAMING_SNAKE_CASE`.
   * This option has effect only when `enums` is defined.
   *
   * @default 'SCREAMING_SNAKE_CASE'
   */
  enumsCase?: StringCase;
  /**
   * **This feature works only with the experimental parser**
   *
   * By default, inline enums (enums not defined as reusable components in
   * the input file) are generated as inlined union types. You can set
   * `exportInlineEnums` to `true` to treat inline enums as reusable components.
   * When `true`, the exported enums will follow the style defined in `enums`.
   *
   * @default false
   */
  exportInlineEnums?: boolean;
  /**
   * **This feature works only with the experimental parser**
   *
   * Defines casing of the identifiers. By default, we use `PascalCase`.
   *
   * @default 'PascalCase'
   */
  identifierCase?: Exclude<StringCase, 'SCREAMING_SNAKE_CASE'>;
  /**
   * Include only types matching regular expression.
   *
   * This option does not work with the experimental parser.
   *
   * @deprecated
   */
  include?: string;
  /**
   * Name of the generated file.
   * @default 'types'
   */
  output?: string;
  /**
   * **This feature works only with the legacy parser**
   *
   * Use your preferred naming pattern
   *
   * @default 'preserve'
   *
   * @deprecated
   */
  style?: 'PascalCase' | 'preserve';
  /**
   * **This feature works only with the legacy parser**
   *
   * Generate a tree of types containing all operations? It will be named
   * $OpenApiTs.
   *
   * @default false
   *
   * @deprecated
   */
  tree?: boolean;
}