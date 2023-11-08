/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model content
 *
 */
export type content = $Result.DefaultSelection<Prisma.$contentPayload>;
/**
 * Model module
 *
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>;
/**
 * Model progress
 *
 */
export type progress = $Result.DefaultSelection<Prisma.$progressPayload>;
/**
 * Model quiz
 *
 */
export type quiz = $Result.DefaultSelection<Prisma.$quizPayload>;
/**
 * Model startup
 *
 */
export type startup = $Result.DefaultSelection<Prisma.$startupPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contents
 * const contents = await prisma.content.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **content** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   */
  get content(): Prisma.contentDelegate<ExtArgs>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Modules
   * const modules = await prisma.module.findMany()
   * ```
   */
  get module(): Prisma.moduleDelegate<ExtArgs>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **progress** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Progresses
   * const progresses = await prisma.progress.findMany()
   * ```
   */
  get progress(): Prisma.progressDelegate<ExtArgs>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **quiz** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Quizzes
   * const quizzes = await prisma.quiz.findMany()
   * ```
   */
  get quiz(): Prisma.quizDelegate<ExtArgs>;

  /**
   * `prisma.startup`: Exposes CRUD operations for the **startup** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Startups
   * const startups = await prisma.startup.findMany()
   * ```
   */
  get startup(): Prisma.startupDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    content: 'content';
    module: 'module';
    progress: 'progress';
    quiz: 'quiz';
    startup: 'startup';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'content' | 'module' | 'progress' | 'quiz' | 'startup' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      content: {
        payload: Prisma.$contentPayload<ExtArgs>;
        fields: Prisma.contentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findFirst: {
            args: Prisma.contentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findMany: {
            args: Prisma.contentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>[];
          };
          create: {
            args: Prisma.contentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          createMany: {
            args: Prisma.contentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          update: {
            args: Prisma.contentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          deleteMany: {
            args: Prisma.contentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContent>;
          };
          groupBy: {
            args: Prisma.contentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContentGroupByOutputType>[];
          };
          count: {
            args: Prisma.contentCountArgs<ExtArgs>;
            result: $Utils.Optional<ContentCountAggregateOutputType> | number;
          };
        };
      };
      module: {
        payload: Prisma.$modulePayload<ExtArgs>;
        fields: Prisma.moduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[];
          };
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$modulePayload>;
          };
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateModule>;
          };
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ModuleGroupByOutputType>[];
          };
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number;
          };
        };
      };
      progress: {
        payload: Prisma.$progressPayload<ExtArgs>;
        fields: Prisma.progressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.progressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.progressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          findFirst: {
            args: Prisma.progressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.progressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          findMany: {
            args: Prisma.progressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>[];
          };
          create: {
            args: Prisma.progressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          createMany: {
            args: Prisma.progressCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.progressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          update: {
            args: Prisma.progressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          deleteMany: {
            args: Prisma.progressDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.progressUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.progressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$progressPayload>;
          };
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProgress>;
          };
          groupBy: {
            args: Prisma.progressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProgressGroupByOutputType>[];
          };
          count: {
            args: Prisma.progressCountArgs<ExtArgs>;
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number;
          };
        };
      };
      quiz: {
        payload: Prisma.$quizPayload<ExtArgs>;
        fields: Prisma.quizFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.quizFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.quizFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          findFirst: {
            args: Prisma.quizFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.quizFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          findMany: {
            args: Prisma.quizFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>[];
          };
          create: {
            args: Prisma.quizCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          createMany: {
            args: Prisma.quizCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.quizDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          update: {
            args: Prisma.quizUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          deleteMany: {
            args: Prisma.quizDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.quizUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.quizUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$quizPayload>;
          };
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateQuiz>;
          };
          groupBy: {
            args: Prisma.quizGroupByArgs<ExtArgs>;
            result: $Utils.Optional<QuizGroupByOutputType>[];
          };
          count: {
            args: Prisma.quizCountArgs<ExtArgs>;
            result: $Utils.Optional<QuizCountAggregateOutputType> | number;
          };
        };
      };
      startup: {
        payload: Prisma.$startupPayload<ExtArgs>;
        fields: Prisma.startupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.startupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.startupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          findFirst: {
            args: Prisma.startupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.startupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          findMany: {
            args: Prisma.startupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>[];
          };
          create: {
            args: Prisma.startupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          createMany: {
            args: Prisma.startupCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.startupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          update: {
            args: Prisma.startupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          deleteMany: {
            args: Prisma.startupDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.startupUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.startupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          aggregate: {
            args: Prisma.StartupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStartup>;
          };
          groupBy: {
            args: Prisma.startupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StartupGroupByOutputType>[];
          };
          count: {
            args: Prisma.startupCountArgs<ExtArgs>;
            result: $Utils.Optional<StartupCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    module: number;
  };

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ContentCountOutputTypeCountModuleArgs;
  };

  // Custom InputTypes

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountModuleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: moduleWhereInput;
  };

  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    progress: number;
    quiz: number;
  };

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | ModuleCountOutputTypeCountProgressArgs;
    quiz?: boolean | ModuleCountOutputTypeCountQuizArgs;
  };

  // Custom InputTypes

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: progressWhereInput;
  };

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quizWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    content: number;
    progress: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | UserCountOutputTypeCountContentArgs;
    progress?: boolean | UserCountOutputTypeCountProgressArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: contentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: progressWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  export type ContentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    type: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    type: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentCountAggregateOutputType = {
    id: number;
    title: number;
    type: number;
    description: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ContentMinAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentMaxAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentCountAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content to aggregate.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contents
     **/
    _count?: true | ContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContentMaxAggregateInputType;
  };

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>;
  };

  export type contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contentWhereInput;
    orderBy?: contentOrderByWithAggregationInput | contentOrderByWithAggregationInput[];
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum;
    having?: contentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
  };

  export type ContentGroupByOutputType = {
    id: string;
    title: string;
    type: string;
    description: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  type GetContentGroupByPayload<T extends contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
          : GetScalarType<T[P], ContentGroupByOutputType[P]>;
      }
    >
  >;

  export type contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      type?: boolean;
      description?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      module?: boolean | content$moduleArgs<ExtArgs>;
      _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['content']
  >;

  export type contentSelectScalar = {
    id?: boolean;
    title?: boolean;
    type?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    module?: boolean | content$moduleArgs<ExtArgs>;
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'content';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      module: Prisma.$modulePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        type: string;
        description: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['content']
    >;
    composites: {};
  };

  type contentGetPayload<S extends boolean | null | undefined | contentDefaultArgs> = $Result.GetResult<
    Prisma.$contentPayload,
    S
  >;

  type contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ContentCountAggregateInputType | true;
  };

  export interface contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['content']; meta: { name: 'content' } };
    /**
     * Find zero or one Content that matches the filter.
     * @param {contentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contentFindUniqueArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Content that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     *
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Content.
     * @param {contentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     *
     **/
    create<T extends contentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contentCreateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contents.
     *     @param {contentCreateManyArgs} args - Arguments to create many Contents.
     *     @example
     *     // Create many Contents
     *     const content = await prisma.content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Content.
     * @param {contentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     *
     **/
    delete<T extends contentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contentDeleteArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Content.
     * @param {contentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contents.
     * @param {contentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Content.
     * @param {contentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     **/
    upsert<T extends contentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpsertArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
     **/
    count<T extends contentCountArgs>(
      args?: Subset<T, contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContentAggregateArgs>(
      args: Subset<T, ContentAggregateArgs>,
    ): Prisma.PrismaPromise<GetContentAggregateType<T>>;

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends contentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contentGroupByArgs['orderBy'] }
        : { orderBy?: contentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the content model
     */
    readonly fields: contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    module<T extends content$moduleArgs<ExtArgs> = {}>(
      args?: Subset<T, content$moduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the content model
   */
  interface contentFieldRefs {
    readonly id: FieldRef<'content', 'String'>;
    readonly title: FieldRef<'content', 'String'>;
    readonly type: FieldRef<'content', 'String'>;
    readonly description: FieldRef<'content', 'String'>;
    readonly user_id: FieldRef<'content', 'String'>;
    readonly created_at: FieldRef<'content', 'DateTime'>;
    readonly updated_at: FieldRef<'content', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * content findUnique
   */
  export type contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findUniqueOrThrow
   */
  export type contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findFirst
   */
  export type contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findFirstOrThrow
   */
  export type contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findMany
   */
  export type contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which contents to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content create
   */
  export type contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to create a content.
     */
    data: XOR<contentCreateInput, contentUncheckedCreateInput>;
  };

  /**
   * content createMany
   */
  export type contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contents.
     */
    data: contentCreateManyInput | contentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * content update
   */
  export type contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to update a content.
     */
    data: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
    /**
     * Choose, which content to update.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content updateMany
   */
  export type contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contents.
     */
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyInput>;
    /**
     * Filter which contents to update
     */
    where?: contentWhereInput;
  };

  /**
   * content upsert
   */
  export type contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The filter to search for the content to update in case it exists.
     */
    where: contentWhereUniqueInput;
    /**
     * In case the content found by the `where` argument doesn't exist, create a new content with this data.
     */
    create: XOR<contentCreateInput, contentUncheckedCreateInput>;
    /**
     * In case the content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
  };

  /**
   * content delete
   */
  export type contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter which content to delete.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content deleteMany
   */
  export type contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents to delete
     */
    where?: contentWhereInput;
  };

  /**
   * content.module
   */
  export type content$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    where?: moduleWhereInput;
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[];
    cursor?: moduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[];
  };

  /**
   * content without action
   */
  export type contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
  };

  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
  };

  export type ModuleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ModuleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ModuleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    content_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ModuleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ModuleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ModuleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned modules
     **/
    _count?: true | ModuleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ModuleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ModuleMaxAggregateInputType;
  };

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>;
  };

  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput;
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[];
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum;
    having?: moduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModuleCountAggregateInputType | true;
    _min?: ModuleMinAggregateInputType;
    _max?: ModuleMaxAggregateInputType;
  };

  export type ModuleGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    content_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ModuleCountAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
  };

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ModuleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
          : GetScalarType<T[P], ModuleGroupByOutputType[P]>;
      }
    >
  >;

  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      content_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content?: boolean | contentDefaultArgs<ExtArgs>;
      progress?: boolean | module$progressArgs<ExtArgs>;
      quiz?: boolean | module$quizArgs<ExtArgs>;
      _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['module']
  >;

  export type moduleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    content_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    progress?: boolean | module$progressArgs<ExtArgs>;
    quiz?: boolean | module$quizArgs<ExtArgs>;
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'module';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      progress: Prisma.$progressPayload<ExtArgs>[];
      quiz: Prisma.$quizPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        content_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['module']
    >;
    composites: {};
  };

  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<
    Prisma.$modulePayload,
    S
  >;

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    moduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ModuleCountAggregateInputType | true;
  };

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module']; meta: { name: 'module' } };
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends moduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Module that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends moduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     *
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends moduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     *
     **/
    create<T extends moduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, moduleCreateArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Modules.
     *     @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     *     @example
     *     // Create many Modules
     *     const module = await prisma.module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends moduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     *
     **/
    delete<T extends moduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends moduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends moduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends moduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     **/
    upsert<T extends moduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>,
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
     **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ModuleAggregateArgs>(
      args: Subset<T, ModuleAggregateArgs>,
    ): Prisma.PrismaPromise<GetModuleAggregateType<T>>;

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the module model
     */
    readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    progress<T extends module$progressArgs<ExtArgs> = {}>(
      args?: Subset<T, module$progressArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findMany'> | Null>;

    quiz<T extends module$quizArgs<ExtArgs> = {}>(
      args?: Subset<T, module$quizArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the module model
   */
  interface moduleFieldRefs {
    readonly id: FieldRef<'module', 'String'>;
    readonly name: FieldRef<'module', 'String'>;
    readonly description: FieldRef<'module', 'String'>;
    readonly content_id: FieldRef<'module', 'String'>;
    readonly created_at: FieldRef<'module', 'DateTime'>;
    readonly updated_at: FieldRef<'module', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput;
  };

  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput;
  };

  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[];
  };

  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[];
  };

  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` modules.
     */
    skip?: number;
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[];
  };

  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a module.
     */
    data: XOR<moduleCreateInput, moduleUncheckedCreateInput>;
  };

  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>;
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput;
  };

  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>;
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput;
  };

  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput;
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>;
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>;
  };

  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput;
  };

  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput;
  };

  /**
   * module.progress
   */
  export type module$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    where?: progressWhereInput;
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    cursor?: progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[];
  };

  /**
   * module.quiz
   */
  export type module$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    where?: quizWhereInput;
    orderBy?: quizOrderByWithRelationInput | quizOrderByWithRelationInput[];
    cursor?: quizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[];
  };

  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null;
  };

  /**
   * Model progress
   */

  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
  };

  export type ProgressAvgAggregateOutputType = {
    score: number | null;
  };

  export type ProgressSumAggregateOutputType = {
    score: number | null;
  };

  export type ProgressMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    module_id: string | null;
    status: string | null;
    score: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProgressMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    module_id: string | null;
    status: string | null;
    score: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProgressCountAggregateOutputType = {
    id: number;
    user_id: number;
    module_id: number;
    status: number;
    score: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProgressAvgAggregateInputType = {
    score?: true;
  };

  export type ProgressSumAggregateInputType = {
    score?: true;
  };

  export type ProgressMinAggregateInputType = {
    id?: true;
    user_id?: true;
    module_id?: true;
    status?: true;
    score?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProgressMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    module_id?: true;
    status?: true;
    score?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProgressCountAggregateInputType = {
    id?: true;
    user_id?: true;
    module_id?: true;
    status?: true;
    score?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progress to aggregate.
     */
    where?: progressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: progressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` progresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned progresses
     **/
    _count?: true | ProgressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProgressAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProgressSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProgressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProgressMaxAggregateInputType;
  };

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>;
  };

  export type progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressWhereInput;
    orderBy?: progressOrderByWithAggregationInput | progressOrderByWithAggregationInput[];
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum;
    having?: progressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressCountAggregateInputType | true;
    _avg?: ProgressAvgAggregateInputType;
    _sum?: ProgressSumAggregateInputType;
    _min?: ProgressMinAggregateInputType;
    _max?: ProgressMaxAggregateInputType;
  };

  export type ProgressGroupByOutputType = {
    id: string;
    user_id: string;
    module_id: string;
    status: string;
    score: number | null;
    created_at: Date;
    updated_at: Date;
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
  };

  type GetProgressGroupByPayload<T extends progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProgressGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
          : GetScalarType<T[P], ProgressGroupByOutputType[P]>;
      }
    >
  >;

  export type progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        module_id?: boolean;
        status?: boolean;
        score?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        module?: boolean | moduleDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['progress']
    >;

  export type progressSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    module_id?: boolean;
    status?: boolean;
    score?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'progress';
    objects: {
      module: Prisma.$modulePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        module_id: string;
        status: string;
        score: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['progress']
    >;
    composites: {};
  };

  type progressGetPayload<S extends boolean | null | undefined | progressDefaultArgs> = $Result.GetResult<
    Prisma.$progressPayload,
    S
  >;

  type progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    progressFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProgressCountAggregateInputType | true;
  };

  export interface progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progress']; meta: { name: 'progress' } };
    /**
     * Find zero or one Progress that matches the filter.
     * @param {progressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends progressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, progressFindUniqueArgs<ExtArgs>>,
    ): Prisma__progressClient<
      $Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Progress that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {progressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends progressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, progressFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__progressClient<
      $Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends progressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, progressFindFirstArgs<ExtArgs>>,
    ): Prisma__progressClient<
      $Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends progressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, progressFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__progressClient<
      $Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     *
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends progressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progressFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Progress.
     * @param {progressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     *
     **/
    create<T extends progressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, progressCreateArgs<ExtArgs>>,
    ): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Progresses.
     *     @param {progressCreateManyArgs} args - Arguments to create many Progresses.
     *     @example
     *     // Create many Progresses
     *     const progress = await prisma.progress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends progressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progressCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Progress.
     * @param {progressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     *
     **/
    delete<T extends progressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, progressDeleteArgs<ExtArgs>>,
    ): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Progress.
     * @param {progressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends progressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, progressUpdateArgs<ExtArgs>>,
    ): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Progresses.
     * @param {progressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends progressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progressDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends progressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, progressUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Progress.
     * @param {progressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
     **/
    upsert<T extends progressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, progressUpsertArgs<ExtArgs>>,
    ): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
     **/
    count<T extends progressCountArgs>(
      args?: Subset<T, progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProgressAggregateArgs>(
      args: Subset<T, ProgressAggregateArgs>,
    ): Prisma.PrismaPromise<GetProgressAggregateType<T>>;

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends progressGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progressGroupByArgs['orderBy'] }
        : { orderBy?: progressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, progressGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the progress model
     */
    readonly fields: progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    module<T extends moduleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, moduleDefaultArgs<ExtArgs>>,
    ): Prisma__moduleClient<
      $Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the progress model
   */
  interface progressFieldRefs {
    readonly id: FieldRef<'progress', 'String'>;
    readonly user_id: FieldRef<'progress', 'String'>;
    readonly module_id: FieldRef<'progress', 'String'>;
    readonly status: FieldRef<'progress', 'String'>;
    readonly score: FieldRef<'progress', 'Int'>;
    readonly created_at: FieldRef<'progress', 'DateTime'>;
    readonly updated_at: FieldRef<'progress', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * progress findUnique
   */
  export type progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter, which progress to fetch.
     */
    where: progressWhereUniqueInput;
  };

  /**
   * progress findUniqueOrThrow
   */
  export type progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter, which progress to fetch.
     */
    where: progressWhereUniqueInput;
  };

  /**
   * progress findFirst
   */
  export type progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter, which progress to fetch.
     */
    where?: progressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for progresses.
     */
    cursor?: progressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` progresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[];
  };

  /**
   * progress findFirstOrThrow
   */
  export type progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter, which progress to fetch.
     */
    where?: progressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for progresses.
     */
    cursor?: progressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` progresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[];
  };

  /**
   * progress findMany
   */
  export type progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter, which progresses to fetch.
     */
    where?: progressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing progresses.
     */
    cursor?: progressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` progresses.
     */
    skip?: number;
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[];
  };

  /**
   * progress create
   */
  export type progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * The data needed to create a progress.
     */
    data: XOR<progressCreateInput, progressUncheckedCreateInput>;
  };

  /**
   * progress createMany
   */
  export type progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progresses.
     */
    data: progressCreateManyInput | progressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * progress update
   */
  export type progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * The data needed to update a progress.
     */
    data: XOR<progressUpdateInput, progressUncheckedUpdateInput>;
    /**
     * Choose, which progress to update.
     */
    where: progressWhereUniqueInput;
  };

  /**
   * progress updateMany
   */
  export type progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progresses.
     */
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyInput>;
    /**
     * Filter which progresses to update
     */
    where?: progressWhereInput;
  };

  /**
   * progress upsert
   */
  export type progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * The filter to search for the progress to update in case it exists.
     */
    where: progressWhereUniqueInput;
    /**
     * In case the progress found by the `where` argument doesn't exist, create a new progress with this data.
     */
    create: XOR<progressCreateInput, progressUncheckedCreateInput>;
    /**
     * In case the progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progressUpdateInput, progressUncheckedUpdateInput>;
  };

  /**
   * progress delete
   */
  export type progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    /**
     * Filter which progress to delete.
     */
    where: progressWhereUniqueInput;
  };

  /**
   * progress deleteMany
   */
  export type progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progresses to delete
     */
    where?: progressWhereInput;
  };

  /**
   * progress without action
   */
  export type progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
  };

  /**
   * Model quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
  };

  export type QuizMinAggregateOutputType = {
    id: string | null;
    question: string | null;
    answer: string | null;
    module_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type QuizMaxAggregateOutputType = {
    id: string | null;
    question: string | null;
    answer: string | null;
    module_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type QuizCountAggregateOutputType = {
    id: number;
    question: number;
    answer: number;
    module_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type QuizMinAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    module_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type QuizMaxAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    module_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type QuizCountAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    module_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quiz to aggregate.
     */
    where?: quizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizOrderByWithRelationInput | quizOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: quizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` quizzes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned quizzes
     **/
    _count?: true | QuizCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuizMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuizMaxAggregateInputType;
  };

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>;
  };

  export type quizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quizWhereInput;
    orderBy?: quizOrderByWithAggregationInput | quizOrderByWithAggregationInput[];
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum;
    having?: quizScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizCountAggregateInputType | true;
    _min?: QuizMinAggregateInputType;
    _max?: QuizMaxAggregateInputType;
  };

  export type QuizGroupByOutputType = {
    id: string;
    question: string;
    answer: string;
    module_id: string;
    created_at: Date;
    updated_at: Date;
    _count: QuizCountAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
  };

  type GetQuizGroupByPayload<T extends quizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> & {
        [P in keyof T & keyof QuizGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
          : GetScalarType<T[P], QuizGroupByOutputType[P]>;
      }
    >
  >;

  export type quizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      question?: boolean;
      answer?: boolean;
      module_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      module?: boolean | moduleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['quiz']
  >;

  export type quizSelectScalar = {
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    module_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type quizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>;
  };

  export type $quizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'quiz';
    objects: {
      module: Prisma.$modulePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        question: string;
        answer: string;
        module_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['quiz']
    >;
    composites: {};
  };

  type quizGetPayload<S extends boolean | null | undefined | quizDefaultArgs> = $Result.GetResult<
    Prisma.$quizPayload,
    S
  >;

  type quizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    quizFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: QuizCountAggregateInputType | true;
  };

  export interface quizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quiz']; meta: { name: 'quiz' } };
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {quizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends quizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, quizFindUniqueArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Quiz that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {quizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends quizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quizFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends quizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, quizFindFirstArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends quizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quizFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     *
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends quizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Quiz.
     * @param {quizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     *
     **/
    create<T extends quizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, quizCreateArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Quizzes.
     *     @param {quizCreateManyArgs} args - Arguments to create many Quizzes.
     *     @example
     *     // Create many Quizzes
     *     const quiz = await prisma.quiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends quizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Quiz.
     * @param {quizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     *
     **/
    delete<T extends quizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, quizDeleteArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Quiz.
     * @param {quizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends quizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, quizUpdateArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Quizzes.
     * @param {quizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends quizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends quizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, quizUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Quiz.
     * @param {quizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     **/
    upsert<T extends quizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, quizUpsertArgs<ExtArgs>>,
    ): Prisma__quizClient<$Result.GetResult<Prisma.$quizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
     **/
    count<T extends quizCountArgs>(
      args?: Subset<T, quizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends QuizAggregateArgs>(
      args: Subset<T, QuizAggregateArgs>,
    ): Prisma.PrismaPromise<GetQuizAggregateType<T>>;

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends quizGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quizGroupByArgs['orderBy'] }
        : { orderBy?: quizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, quizGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the quiz model
     */
    readonly fields: quizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quizClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    module<T extends moduleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, moduleDefaultArgs<ExtArgs>>,
    ): Prisma__moduleClient<
      $Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the quiz model
   */
  interface quizFieldRefs {
    readonly id: FieldRef<'quiz', 'String'>;
    readonly question: FieldRef<'quiz', 'String'>;
    readonly answer: FieldRef<'quiz', 'String'>;
    readonly module_id: FieldRef<'quiz', 'String'>;
    readonly created_at: FieldRef<'quiz', 'DateTime'>;
    readonly updated_at: FieldRef<'quiz', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * quiz findUnique
   */
  export type quizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter, which quiz to fetch.
     */
    where: quizWhereUniqueInput;
  };

  /**
   * quiz findUniqueOrThrow
   */
  export type quizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter, which quiz to fetch.
     */
    where: quizWhereUniqueInput;
  };

  /**
   * quiz findFirst
   */
  export type quizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter, which quiz to fetch.
     */
    where?: quizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizOrderByWithRelationInput | quizOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for quizzes.
     */
    cursor?: quizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` quizzes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[];
  };

  /**
   * quiz findFirstOrThrow
   */
  export type quizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter, which quiz to fetch.
     */
    where?: quizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizOrderByWithRelationInput | quizOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for quizzes.
     */
    cursor?: quizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` quizzes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[];
  };

  /**
   * quiz findMany
   */
  export type quizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizOrderByWithRelationInput | quizOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing quizzes.
     */
    cursor?: quizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` quizzes.
     */
    skip?: number;
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[];
  };

  /**
   * quiz create
   */
  export type quizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * The data needed to create a quiz.
     */
    data: XOR<quizCreateInput, quizUncheckedCreateInput>;
  };

  /**
   * quiz createMany
   */
  export type quizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quizzes.
     */
    data: quizCreateManyInput | quizCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * quiz update
   */
  export type quizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * The data needed to update a quiz.
     */
    data: XOR<quizUpdateInput, quizUncheckedUpdateInput>;
    /**
     * Choose, which quiz to update.
     */
    where: quizWhereUniqueInput;
  };

  /**
   * quiz updateMany
   */
  export type quizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quizzes.
     */
    data: XOR<quizUpdateManyMutationInput, quizUncheckedUpdateManyInput>;
    /**
     * Filter which quizzes to update
     */
    where?: quizWhereInput;
  };

  /**
   * quiz upsert
   */
  export type quizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * The filter to search for the quiz to update in case it exists.
     */
    where: quizWhereUniqueInput;
    /**
     * In case the quiz found by the `where` argument doesn't exist, create a new quiz with this data.
     */
    create: XOR<quizCreateInput, quizUncheckedCreateInput>;
    /**
     * In case the quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quizUpdateInput, quizUncheckedUpdateInput>;
  };

  /**
   * quiz delete
   */
  export type quizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
    /**
     * Filter which quiz to delete.
     */
    where: quizWhereUniqueInput;
  };

  /**
   * quiz deleteMany
   */
  export type quizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quizzes to delete
     */
    where?: quizWhereInput;
  };

  /**
   * quiz without action
   */
  export type quizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz
     */
    select?: quizSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizInclude<ExtArgs> | null;
  };

  /**
   * Model startup
   */

  export type AggregateStartup = {
    _count: StartupCountAggregateOutputType | null;
    _min: StartupMinAggregateOutputType | null;
    _max: StartupMaxAggregateOutputType | null;
  };

  export type StartupMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type StartupMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type StartupCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type StartupMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type StartupMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type StartupCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type StartupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startup to aggregate.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned startups
     **/
    _count?: true | StartupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StartupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StartupMaxAggregateInputType;
  };

  export type GetStartupAggregateType<T extends StartupAggregateArgs> = {
    [P in keyof T & keyof AggregateStartup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartup[P]>
      : GetScalarType<T[P], AggregateStartup[P]>;
  };

  export type startupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: startupWhereInput;
    orderBy?: startupOrderByWithAggregationInput | startupOrderByWithAggregationInput[];
    by: StartupScalarFieldEnum[] | StartupScalarFieldEnum;
    having?: startupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StartupCountAggregateInputType | true;
    _min?: StartupMinAggregateInputType;
    _max?: StartupMaxAggregateInputType;
  };

  export type StartupGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: StartupCountAggregateOutputType | null;
    _min: StartupMinAggregateOutputType | null;
    _max: StartupMaxAggregateOutputType | null;
  };

  type GetStartupGroupByPayload<T extends startupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StartupGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StartupGroupByOutputType[P]>
          : GetScalarType<T[P], StartupGroupByOutputType[P]>;
      }
    >
  >;

  export type startupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
    },
    ExtArgs['result']['startup']
  >;

  export type startupSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type $startupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'startup';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['startup']
    >;
    composites: {};
  };

  type startupGetPayload<S extends boolean | null | undefined | startupDefaultArgs> = $Result.GetResult<
    Prisma.$startupPayload,
    S
  >;

  type startupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    startupFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StartupCountAggregateInputType | true;
  };

  export interface startupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['startup']; meta: { name: 'startup' } };
    /**
     * Find zero or one Startup that matches the filter.
     * @param {startupFindUniqueArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends startupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, startupFindUniqueArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Startup that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {startupFindUniqueOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends startupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__startupClient<
      $Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Startup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindFirstArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends startupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindFirstArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Startup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindFirstOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends startupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Startups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startups
     * const startups = await prisma.startup.findMany()
     *
     * // Get first 10 Startups
     * const startups = await prisma.startup.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const startupWithIdOnly = await prisma.startup.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends startupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Startup.
     * @param {startupCreateArgs} args - Arguments to create a Startup.
     * @example
     * // Create one Startup
     * const Startup = await prisma.startup.create({
     *   data: {
     *     // ... data to create a Startup
     *   }
     * })
     *
     **/
    create<T extends startupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, startupCreateArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Startups.
     *     @param {startupCreateManyArgs} args - Arguments to create many Startups.
     *     @example
     *     // Create many Startups
     *     const startup = await prisma.startup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends startupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Startup.
     * @param {startupDeleteArgs} args - Arguments to delete one Startup.
     * @example
     * // Delete one Startup
     * const Startup = await prisma.startup.delete({
     *   where: {
     *     // ... filter to delete one Startup
     *   }
     * })
     *
     **/
    delete<T extends startupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, startupDeleteArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Startup.
     * @param {startupUpdateArgs} args - Arguments to update one Startup.
     * @example
     * // Update one Startup
     * const startup = await prisma.startup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends startupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpdateArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Startups.
     * @param {startupDeleteManyArgs} args - Arguments to filter Startups to delete.
     * @example
     * // Delete a few Startups
     * const { count } = await prisma.startup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends startupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends startupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Startup.
     * @param {startupUpsertArgs} args - Arguments to update or create a Startup.
     * @example
     * // Update or create a Startup
     * const startup = await prisma.startup.upsert({
     *   create: {
     *     // ... data to create a Startup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startup we want to update
     *   }
     * })
     **/
    upsert<T extends startupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpsertArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupCountArgs} args - Arguments to filter Startups to count.
     * @example
     * // Count the number of Startups
     * const count = await prisma.startup.count({
     *   where: {
     *     // ... the filter for the Startups we want to count
     *   }
     * })
     **/
    count<T extends startupCountArgs>(
      args?: Subset<T, startupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StartupAggregateArgs>(
      args: Subset<T, StartupAggregateArgs>,
    ): Prisma.PrismaPromise<GetStartupAggregateType<T>>;

    /**
     * Group by Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends startupGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: startupGroupByArgs['orderBy'] }
        : { orderBy?: startupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, startupGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStartupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the startup model
     */
    readonly fields: startupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for startup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__startupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the startup model
   */
  interface startupFieldRefs {
    readonly id: FieldRef<'startup', 'String'>;
    readonly description: FieldRef<'startup', 'String'>;
    readonly name: FieldRef<'startup', 'String'>;
    readonly created_at: FieldRef<'startup', 'DateTime'>;
    readonly updated_at: FieldRef<'startup', 'DateTime'>;
    readonly tenant_id: FieldRef<'startup', 'String'>;
  }

  // Custom InputTypes

  /**
   * startup findUnique
   */
  export type startupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup findUniqueOrThrow
   */
  export type startupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup findFirst
   */
  export type startupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup findFirstOrThrow
   */
  export type startupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup findMany
   */
  export type startupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter, which startups to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup create
   */
  export type startupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * The data needed to create a startup.
     */
    data: XOR<startupCreateInput, startupUncheckedCreateInput>;
  };

  /**
   * startup createMany
   */
  export type startupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many startups.
     */
    data: startupCreateManyInput | startupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * startup update
   */
  export type startupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * The data needed to update a startup.
     */
    data: XOR<startupUpdateInput, startupUncheckedUpdateInput>;
    /**
     * Choose, which startup to update.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup updateMany
   */
  export type startupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update startups.
     */
    data: XOR<startupUpdateManyMutationInput, startupUncheckedUpdateManyInput>;
    /**
     * Filter which startups to update
     */
    where?: startupWhereInput;
  };

  /**
   * startup upsert
   */
  export type startupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * The filter to search for the startup to update in case it exists.
     */
    where: startupWhereUniqueInput;
    /**
     * In case the startup found by the `where` argument doesn't exist, create a new startup with this data.
     */
    create: XOR<startupCreateInput, startupUncheckedCreateInput>;
    /**
     * In case the startup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<startupUpdateInput, startupUncheckedUpdateInput>;
  };

  /**
   * startup delete
   */
  export type startupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Filter which startup to delete.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup deleteMany
   */
  export type startupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startups to delete
     */
    where?: startupWhereInput;
  };

  /**
   * startup without action
   */
  export type startupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content?: boolean | user$contentArgs<ExtArgs>;
      progress?: boolean | user$progressArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | user$contentArgs<ExtArgs>;
    progress?: boolean | user$progressArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>[];
      progress: Prisma.$progressPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends user$contentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    progress<T extends user$progressArgs<ExtArgs> = {}>(
      args?: Subset<T, user$progressArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.content
   */
  export type user$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    where?: contentWhereInput;
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    cursor?: contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * user.progress
   */
  export type user$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: progressInclude<ExtArgs> | null;
    where?: progressWhereInput;
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[];
    cursor?: progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ContentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    type: 'type';
    description: 'description';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];

  export const ModuleScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    content_id: 'content_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];

  export const ProgressScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    module_id: 'module_id';
    status: 'status';
    score: 'score';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum];

  export const QuizScalarFieldEnum: {
    id: 'id';
    question: 'question';
    answer: 'answer';
    module_id: 'module_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum];

  export const StartupScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type StartupScalarFieldEnum = (typeof StartupScalarFieldEnum)[keyof typeof StartupScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type contentWhereInput = {
    AND?: contentWhereInput | contentWhereInput[];
    OR?: contentWhereInput[];
    NOT?: contentWhereInput | contentWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    type?: StringFilter<'content'> | string;
    description?: StringNullableFilter<'content'> | string | null;
    user_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    module?: ModuleListRelationFilter;
  };

  export type contentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    type?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    module?: moduleOrderByRelationAggregateInput;
  };

  export type contentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contentWhereInput | contentWhereInput[];
      OR?: contentWhereInput[];
      NOT?: contentWhereInput | contentWhereInput[];
      title?: StringFilter<'content'> | string;
      type?: StringFilter<'content'> | string;
      description?: StringNullableFilter<'content'> | string | null;
      user_id?: UuidFilter<'content'> | string;
      created_at?: DateTimeFilter<'content'> | Date | string;
      updated_at?: DateTimeFilter<'content'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      module?: ModuleListRelationFilter;
    },
    'id'
  >;

  export type contentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    type?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: contentCountOrderByAggregateInput;
    _max?: contentMaxOrderByAggregateInput;
    _min?: contentMinOrderByAggregateInput;
  };

  export type contentScalarWhereWithAggregatesInput = {
    AND?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    OR?: contentScalarWhereWithAggregatesInput[];
    NOT?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'content'> | string;
    title?: StringWithAggregatesFilter<'content'> | string;
    type?: StringWithAggregatesFilter<'content'> | string;
    description?: StringNullableWithAggregatesFilter<'content'> | string | null;
    user_id?: UuidWithAggregatesFilter<'content'> | string;
    created_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
  };

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[];
    OR?: moduleWhereInput[];
    NOT?: moduleWhereInput | moduleWhereInput[];
    id?: UuidFilter<'module'> | string;
    name?: StringFilter<'module'> | string;
    description?: StringNullableFilter<'module'> | string | null;
    content_id?: UuidFilter<'module'> | string;
    created_at?: DateTimeFilter<'module'> | Date | string;
    updated_at?: DateTimeFilter<'module'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    progress?: ProgressListRelationFilter;
    quiz?: QuizListRelationFilter;
  };

  export type moduleOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    progress?: progressOrderByRelationAggregateInput;
    quiz?: quizOrderByRelationAggregateInput;
  };

  export type moduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: moduleWhereInput | moduleWhereInput[];
      OR?: moduleWhereInput[];
      NOT?: moduleWhereInput | moduleWhereInput[];
      name?: StringFilter<'module'> | string;
      description?: StringNullableFilter<'module'> | string | null;
      content_id?: UuidFilter<'module'> | string;
      created_at?: DateTimeFilter<'module'> | Date | string;
      updated_at?: DateTimeFilter<'module'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      progress?: ProgressListRelationFilter;
      quiz?: QuizListRelationFilter;
    },
    'id'
  >;

  export type moduleOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: moduleCountOrderByAggregateInput;
    _max?: moduleMaxOrderByAggregateInput;
    _min?: moduleMinOrderByAggregateInput;
  };

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[];
    OR?: moduleScalarWhereWithAggregatesInput[];
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'module'> | string;
    name?: StringWithAggregatesFilter<'module'> | string;
    description?: StringNullableWithAggregatesFilter<'module'> | string | null;
    content_id?: UuidWithAggregatesFilter<'module'> | string;
    created_at?: DateTimeWithAggregatesFilter<'module'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'module'> | Date | string;
  };

  export type progressWhereInput = {
    AND?: progressWhereInput | progressWhereInput[];
    OR?: progressWhereInput[];
    NOT?: progressWhereInput | progressWhereInput[];
    id?: UuidFilter<'progress'> | string;
    user_id?: UuidFilter<'progress'> | string;
    module_id?: UuidFilter<'progress'> | string;
    status?: StringFilter<'progress'> | string;
    score?: IntNullableFilter<'progress'> | number | null;
    created_at?: DateTimeFilter<'progress'> | Date | string;
    updated_at?: DateTimeFilter<'progress'> | Date | string;
    module?: XOR<ModuleRelationFilter, moduleWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type progressOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    module_id?: SortOrder;
    status?: SortOrder;
    score?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    module?: moduleOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type progressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: progressWhereInput | progressWhereInput[];
      OR?: progressWhereInput[];
      NOT?: progressWhereInput | progressWhereInput[];
      user_id?: UuidFilter<'progress'> | string;
      module_id?: UuidFilter<'progress'> | string;
      status?: StringFilter<'progress'> | string;
      score?: IntNullableFilter<'progress'> | number | null;
      created_at?: DateTimeFilter<'progress'> | Date | string;
      updated_at?: DateTimeFilter<'progress'> | Date | string;
      module?: XOR<ModuleRelationFilter, moduleWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type progressOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    module_id?: SortOrder;
    status?: SortOrder;
    score?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: progressCountOrderByAggregateInput;
    _avg?: progressAvgOrderByAggregateInput;
    _max?: progressMaxOrderByAggregateInput;
    _min?: progressMinOrderByAggregateInput;
    _sum?: progressSumOrderByAggregateInput;
  };

  export type progressScalarWhereWithAggregatesInput = {
    AND?: progressScalarWhereWithAggregatesInput | progressScalarWhereWithAggregatesInput[];
    OR?: progressScalarWhereWithAggregatesInput[];
    NOT?: progressScalarWhereWithAggregatesInput | progressScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'progress'> | string;
    user_id?: UuidWithAggregatesFilter<'progress'> | string;
    module_id?: UuidWithAggregatesFilter<'progress'> | string;
    status?: StringWithAggregatesFilter<'progress'> | string;
    score?: IntNullableWithAggregatesFilter<'progress'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'progress'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'progress'> | Date | string;
  };

  export type quizWhereInput = {
    AND?: quizWhereInput | quizWhereInput[];
    OR?: quizWhereInput[];
    NOT?: quizWhereInput | quizWhereInput[];
    id?: UuidFilter<'quiz'> | string;
    question?: StringFilter<'quiz'> | string;
    answer?: StringFilter<'quiz'> | string;
    module_id?: UuidFilter<'quiz'> | string;
    created_at?: DateTimeFilter<'quiz'> | Date | string;
    updated_at?: DateTimeFilter<'quiz'> | Date | string;
    module?: XOR<ModuleRelationFilter, moduleWhereInput>;
  };

  export type quizOrderByWithRelationInput = {
    id?: SortOrder;
    question?: SortOrder;
    answer?: SortOrder;
    module_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    module?: moduleOrderByWithRelationInput;
  };

  export type quizWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: quizWhereInput | quizWhereInput[];
      OR?: quizWhereInput[];
      NOT?: quizWhereInput | quizWhereInput[];
      question?: StringFilter<'quiz'> | string;
      answer?: StringFilter<'quiz'> | string;
      module_id?: UuidFilter<'quiz'> | string;
      created_at?: DateTimeFilter<'quiz'> | Date | string;
      updated_at?: DateTimeFilter<'quiz'> | Date | string;
      module?: XOR<ModuleRelationFilter, moduleWhereInput>;
    },
    'id'
  >;

  export type quizOrderByWithAggregationInput = {
    id?: SortOrder;
    question?: SortOrder;
    answer?: SortOrder;
    module_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: quizCountOrderByAggregateInput;
    _max?: quizMaxOrderByAggregateInput;
    _min?: quizMinOrderByAggregateInput;
  };

  export type quizScalarWhereWithAggregatesInput = {
    AND?: quizScalarWhereWithAggregatesInput | quizScalarWhereWithAggregatesInput[];
    OR?: quizScalarWhereWithAggregatesInput[];
    NOT?: quizScalarWhereWithAggregatesInput | quizScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'quiz'> | string;
    question?: StringWithAggregatesFilter<'quiz'> | string;
    answer?: StringWithAggregatesFilter<'quiz'> | string;
    module_id?: UuidWithAggregatesFilter<'quiz'> | string;
    created_at?: DateTimeWithAggregatesFilter<'quiz'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'quiz'> | Date | string;
  };

  export type startupWhereInput = {
    AND?: startupWhereInput | startupWhereInput[];
    OR?: startupWhereInput[];
    NOT?: startupWhereInput | startupWhereInput[];
    id?: UuidFilter<'startup'> | string;
    description?: StringNullableFilter<'startup'> | string | null;
    name?: StringFilter<'startup'> | string;
    created_at?: DateTimeFilter<'startup'> | Date | string;
    updated_at?: DateTimeFilter<'startup'> | Date | string;
    tenant_id?: StringFilter<'startup'> | string;
  };

  export type startupOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type startupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: startupWhereInput | startupWhereInput[];
      OR?: startupWhereInput[];
      NOT?: startupWhereInput | startupWhereInput[];
      description?: StringNullableFilter<'startup'> | string | null;
      name?: StringFilter<'startup'> | string;
      created_at?: DateTimeFilter<'startup'> | Date | string;
      updated_at?: DateTimeFilter<'startup'> | Date | string;
      tenant_id?: StringFilter<'startup'> | string;
    },
    'id'
  >;

  export type startupOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: startupCountOrderByAggregateInput;
    _max?: startupMaxOrderByAggregateInput;
    _min?: startupMinOrderByAggregateInput;
  };

  export type startupScalarWhereWithAggregatesInput = {
    AND?: startupScalarWhereWithAggregatesInput | startupScalarWhereWithAggregatesInput[];
    OR?: startupScalarWhereWithAggregatesInput[];
    NOT?: startupScalarWhereWithAggregatesInput | startupScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'startup'> | string;
    description?: StringNullableWithAggregatesFilter<'startup'> | string | null;
    name?: StringWithAggregatesFilter<'startup'> | string;
    created_at?: DateTimeWithAggregatesFilter<'startup'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'startup'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'startup'> | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    content?: ContentListRelationFilter;
    progress?: ProgressListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByRelationAggregateInput;
    progress?: progressOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      content?: ContentListRelationFilter;
      progress?: ProgressListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type contentCreateInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    module?: moduleCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    module?: moduleUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    module?: moduleUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentCreateManyInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type moduleCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutModuleInput;
    progress?: progressCreateNestedManyWithoutModuleInput;
    quiz?: quizCreateNestedManyWithoutModuleInput;
  };

  export type moduleUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressUncheckedCreateNestedManyWithoutModuleInput;
    quiz?: quizUncheckedCreateNestedManyWithoutModuleInput;
  };

  export type moduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutModuleNestedInput;
    progress?: progressUpdateManyWithoutModuleNestedInput;
    quiz?: quizUpdateManyWithoutModuleNestedInput;
  };

  export type moduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUncheckedUpdateManyWithoutModuleNestedInput;
    quiz?: quizUncheckedUpdateManyWithoutModuleNestedInput;
  };

  export type moduleCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type moduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type moduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressCreateInput = {
    id?: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    module: moduleCreateNestedOneWithoutProgressInput;
    user: userCreateNestedOneWithoutProgressInput;
  };

  export type progressUncheckedCreateInput = {
    id?: string;
    user_id: string;
    module_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUpdateOneRequiredWithoutProgressNestedInput;
    user?: userUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type progressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressCreateManyInput = {
    id?: string;
    user_id: string;
    module_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizCreateInput = {
    id?: string;
    question: string;
    answer: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    module: moduleCreateNestedOneWithoutQuizInput;
  };

  export type quizUncheckedCreateInput = {
    id?: string;
    question: string;
    answer: string;
    module_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type quizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUpdateOneRequiredWithoutQuizNestedInput;
  };

  export type quizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizCreateManyInput = {
    id?: string;
    question: string;
    answer: string;
    module_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type quizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type startupCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type startupUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type startupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type startupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type startupCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type startupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type startupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    progress?: progressCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    progress?: progressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    progress?: progressUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    progress?: progressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ModuleListRelationFilter = {
    every?: moduleWhereInput;
    some?: moduleWhereInput;
    none?: moduleWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type moduleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type contentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ContentRelationFilter = {
    is?: contentWhereInput;
    isNot?: contentWhereInput;
  };

  export type ProgressListRelationFilter = {
    every?: progressWhereInput;
    some?: progressWhereInput;
    none?: progressWhereInput;
  };

  export type QuizListRelationFilter = {
    every?: quizWhereInput;
    some?: quizWhereInput;
    none?: quizWhereInput;
  };

  export type progressOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type quizOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type moduleCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type moduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type moduleMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ModuleRelationFilter = {
    is?: moduleWhereInput;
    isNot?: moduleWhereInput;
  };

  export type progressCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    module_id?: SortOrder;
    status?: SortOrder;
    score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type progressAvgOrderByAggregateInput = {
    score?: SortOrder;
  };

  export type progressMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    module_id?: SortOrder;
    status?: SortOrder;
    score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type progressMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    module_id?: SortOrder;
    status?: SortOrder;
    score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type progressSumOrderByAggregateInput = {
    score?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type quizCountOrderByAggregateInput = {
    id?: SortOrder;
    question?: SortOrder;
    answer?: SortOrder;
    module_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type quizMaxOrderByAggregateInput = {
    id?: SortOrder;
    question?: SortOrder;
    answer?: SortOrder;
    module_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type quizMinOrderByAggregateInput = {
    id?: SortOrder;
    question?: SortOrder;
    answer?: SortOrder;
    module_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type startupCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type startupMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type startupMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type ContentListRelationFilter = {
    every?: contentWhereInput;
    some?: contentWhereInput;
    none?: contentWhereInput;
  };

  export type contentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutContentInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    connect?: userWhereUniqueInput;
  };

  export type moduleCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>
      | moduleCreateWithoutContentInput[]
      | moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?: moduleCreateOrConnectWithoutContentInput | moduleCreateOrConnectWithoutContentInput[];
    createMany?: moduleCreateManyContentInputEnvelope;
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
  };

  export type moduleUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>
      | moduleCreateWithoutContentInput[]
      | moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?: moduleCreateOrConnectWithoutContentInput | moduleCreateOrConnectWithoutContentInput[];
    createMany?: moduleCreateManyContentInputEnvelope;
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    upsert?: userUpsertWithoutContentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContentInput, userUpdateWithoutContentInput>,
      userUncheckedUpdateWithoutContentInput
    >;
  };

  export type moduleUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>
      | moduleCreateWithoutContentInput[]
      | moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?: moduleCreateOrConnectWithoutContentInput | moduleCreateOrConnectWithoutContentInput[];
    upsert?: moduleUpsertWithWhereUniqueWithoutContentInput | moduleUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: moduleCreateManyContentInputEnvelope;
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    update?: moduleUpdateWithWhereUniqueWithoutContentInput | moduleUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: moduleUpdateManyWithWhereWithoutContentInput | moduleUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[];
  };

  export type moduleUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>
      | moduleCreateWithoutContentInput[]
      | moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?: moduleCreateOrConnectWithoutContentInput | moduleCreateOrConnectWithoutContentInput[];
    upsert?: moduleUpsertWithWhereUniqueWithoutContentInput | moduleUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: moduleCreateManyContentInputEnvelope;
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[];
    update?: moduleUpdateWithWhereUniqueWithoutContentInput | moduleUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: moduleUpdateManyWithWhereWithoutContentInput | moduleUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[];
  };

  export type contentCreateNestedOneWithoutModuleInput = {
    create?: XOR<contentCreateWithoutModuleInput, contentUncheckedCreateWithoutModuleInput>;
    connectOrCreate?: contentCreateOrConnectWithoutModuleInput;
    connect?: contentWhereUniqueInput;
  };

  export type progressCreateNestedManyWithoutModuleInput = {
    create?:
      | XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>
      | progressCreateWithoutModuleInput[]
      | progressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: progressCreateOrConnectWithoutModuleInput | progressCreateOrConnectWithoutModuleInput[];
    createMany?: progressCreateManyModuleInputEnvelope;
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
  };

  export type quizCreateNestedManyWithoutModuleInput = {
    create?:
      | XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>
      | quizCreateWithoutModuleInput[]
      | quizUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: quizCreateOrConnectWithoutModuleInput | quizCreateOrConnectWithoutModuleInput[];
    createMany?: quizCreateManyModuleInputEnvelope;
    connect?: quizWhereUniqueInput | quizWhereUniqueInput[];
  };

  export type progressUncheckedCreateNestedManyWithoutModuleInput = {
    create?:
      | XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>
      | progressCreateWithoutModuleInput[]
      | progressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: progressCreateOrConnectWithoutModuleInput | progressCreateOrConnectWithoutModuleInput[];
    createMany?: progressCreateManyModuleInputEnvelope;
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
  };

  export type quizUncheckedCreateNestedManyWithoutModuleInput = {
    create?:
      | XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>
      | quizCreateWithoutModuleInput[]
      | quizUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: quizCreateOrConnectWithoutModuleInput | quizCreateOrConnectWithoutModuleInput[];
    createMany?: quizCreateManyModuleInputEnvelope;
    connect?: quizWhereUniqueInput | quizWhereUniqueInput[];
  };

  export type contentUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<contentCreateWithoutModuleInput, contentUncheckedCreateWithoutModuleInput>;
    connectOrCreate?: contentCreateOrConnectWithoutModuleInput;
    upsert?: contentUpsertWithoutModuleInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutModuleInput, contentUpdateWithoutModuleInput>,
      contentUncheckedUpdateWithoutModuleInput
    >;
  };

  export type progressUpdateManyWithoutModuleNestedInput = {
    create?:
      | XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>
      | progressCreateWithoutModuleInput[]
      | progressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: progressCreateOrConnectWithoutModuleInput | progressCreateOrConnectWithoutModuleInput[];
    upsert?: progressUpsertWithWhereUniqueWithoutModuleInput | progressUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: progressCreateManyModuleInputEnvelope;
    set?: progressWhereUniqueInput | progressWhereUniqueInput[];
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[];
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    update?: progressUpdateWithWhereUniqueWithoutModuleInput | progressUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: progressUpdateManyWithWhereWithoutModuleInput | progressUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[];
  };

  export type quizUpdateManyWithoutModuleNestedInput = {
    create?:
      | XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>
      | quizCreateWithoutModuleInput[]
      | quizUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: quizCreateOrConnectWithoutModuleInput | quizCreateOrConnectWithoutModuleInput[];
    upsert?: quizUpsertWithWhereUniqueWithoutModuleInput | quizUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: quizCreateManyModuleInputEnvelope;
    set?: quizWhereUniqueInput | quizWhereUniqueInput[];
    disconnect?: quizWhereUniqueInput | quizWhereUniqueInput[];
    delete?: quizWhereUniqueInput | quizWhereUniqueInput[];
    connect?: quizWhereUniqueInput | quizWhereUniqueInput[];
    update?: quizUpdateWithWhereUniqueWithoutModuleInput | quizUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: quizUpdateManyWithWhereWithoutModuleInput | quizUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: quizScalarWhereInput | quizScalarWhereInput[];
  };

  export type progressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?:
      | XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>
      | progressCreateWithoutModuleInput[]
      | progressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: progressCreateOrConnectWithoutModuleInput | progressCreateOrConnectWithoutModuleInput[];
    upsert?: progressUpsertWithWhereUniqueWithoutModuleInput | progressUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: progressCreateManyModuleInputEnvelope;
    set?: progressWhereUniqueInput | progressWhereUniqueInput[];
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[];
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    update?: progressUpdateWithWhereUniqueWithoutModuleInput | progressUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: progressUpdateManyWithWhereWithoutModuleInput | progressUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[];
  };

  export type quizUncheckedUpdateManyWithoutModuleNestedInput = {
    create?:
      | XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>
      | quizCreateWithoutModuleInput[]
      | quizUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: quizCreateOrConnectWithoutModuleInput | quizCreateOrConnectWithoutModuleInput[];
    upsert?: quizUpsertWithWhereUniqueWithoutModuleInput | quizUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: quizCreateManyModuleInputEnvelope;
    set?: quizWhereUniqueInput | quizWhereUniqueInput[];
    disconnect?: quizWhereUniqueInput | quizWhereUniqueInput[];
    delete?: quizWhereUniqueInput | quizWhereUniqueInput[];
    connect?: quizWhereUniqueInput | quizWhereUniqueInput[];
    update?: quizUpdateWithWhereUniqueWithoutModuleInput | quizUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: quizUpdateManyWithWhereWithoutModuleInput | quizUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: quizScalarWhereInput | quizScalarWhereInput[];
  };

  export type moduleCreateNestedOneWithoutProgressInput = {
    create?: XOR<moduleCreateWithoutProgressInput, moduleUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: moduleCreateOrConnectWithoutProgressInput;
    connect?: moduleWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutProgressInput = {
    create?: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: userCreateOrConnectWithoutProgressInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type moduleUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<moduleCreateWithoutProgressInput, moduleUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: moduleCreateOrConnectWithoutProgressInput;
    upsert?: moduleUpsertWithoutProgressInput;
    connect?: moduleWhereUniqueInput;
    update?: XOR<
      XOR<moduleUpdateToOneWithWhereWithoutProgressInput, moduleUpdateWithoutProgressInput>,
      moduleUncheckedUpdateWithoutProgressInput
    >;
  };

  export type userUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: userCreateOrConnectWithoutProgressInput;
    upsert?: userUpsertWithoutProgressInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProgressInput, userUpdateWithoutProgressInput>,
      userUncheckedUpdateWithoutProgressInput
    >;
  };

  export type moduleCreateNestedOneWithoutQuizInput = {
    create?: XOR<moduleCreateWithoutQuizInput, moduleUncheckedCreateWithoutQuizInput>;
    connectOrCreate?: moduleCreateOrConnectWithoutQuizInput;
    connect?: moduleWhereUniqueInput;
  };

  export type moduleUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<moduleCreateWithoutQuizInput, moduleUncheckedCreateWithoutQuizInput>;
    connectOrCreate?: moduleCreateOrConnectWithoutQuizInput;
    upsert?: moduleUpsertWithoutQuizInput;
    connect?: moduleWhereUniqueInput;
    update?: XOR<
      XOR<moduleUpdateToOneWithWhereWithoutQuizInput, moduleUpdateWithoutQuizInput>,
      moduleUncheckedUpdateWithoutQuizInput
    >;
  };

  export type contentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type progressCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
      | progressCreateWithoutUserInput[]
      | progressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[];
    createMany?: progressCreateManyUserInputEnvelope;
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
  };

  export type contentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type progressUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
      | progressCreateWithoutUserInput[]
      | progressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[];
    createMany?: progressCreateManyUserInputEnvelope;
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
  };

  export type contentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type progressUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
      | progressCreateWithoutUserInput[]
      | progressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[];
    upsert?: progressUpsertWithWhereUniqueWithoutUserInput | progressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: progressCreateManyUserInputEnvelope;
    set?: progressWhereUniqueInput | progressWhereUniqueInput[];
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[];
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    update?: progressUpdateWithWhereUniqueWithoutUserInput | progressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: progressUpdateManyWithWhereWithoutUserInput | progressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[];
  };

  export type contentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type progressUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
      | progressCreateWithoutUserInput[]
      | progressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[];
    upsert?: progressUpsertWithWhereUniqueWithoutUserInput | progressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: progressCreateManyUserInputEnvelope;
    set?: progressWhereUniqueInput | progressWhereUniqueInput[];
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[];
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[];
    update?: progressUpdateWithWhereUniqueWithoutUserInput | progressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: progressUpdateManyWithWhereWithoutUserInput | progressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutContentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
  };

  export type moduleCreateWithoutContentInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressCreateNestedManyWithoutModuleInput;
    quiz?: quizCreateNestedManyWithoutModuleInput;
  };

  export type moduleUncheckedCreateWithoutContentInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressUncheckedCreateNestedManyWithoutModuleInput;
    quiz?: quizUncheckedCreateNestedManyWithoutModuleInput;
  };

  export type moduleCreateOrConnectWithoutContentInput = {
    where: moduleWhereUniqueInput;
    create: XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>;
  };

  export type moduleCreateManyContentInputEnvelope = {
    data: moduleCreateManyContentInput | moduleCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutContentInput = {
    update: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
  };

  export type userUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type moduleUpsertWithWhereUniqueWithoutContentInput = {
    where: moduleWhereUniqueInput;
    update: XOR<moduleUpdateWithoutContentInput, moduleUncheckedUpdateWithoutContentInput>;
    create: XOR<moduleCreateWithoutContentInput, moduleUncheckedCreateWithoutContentInput>;
  };

  export type moduleUpdateWithWhereUniqueWithoutContentInput = {
    where: moduleWhereUniqueInput;
    data: XOR<moduleUpdateWithoutContentInput, moduleUncheckedUpdateWithoutContentInput>;
  };

  export type moduleUpdateManyWithWhereWithoutContentInput = {
    where: moduleScalarWhereInput;
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutContentInput>;
  };

  export type moduleScalarWhereInput = {
    AND?: moduleScalarWhereInput | moduleScalarWhereInput[];
    OR?: moduleScalarWhereInput[];
    NOT?: moduleScalarWhereInput | moduleScalarWhereInput[];
    id?: UuidFilter<'module'> | string;
    name?: StringFilter<'module'> | string;
    description?: StringNullableFilter<'module'> | string | null;
    content_id?: UuidFilter<'module'> | string;
    created_at?: DateTimeFilter<'module'> | Date | string;
    updated_at?: DateTimeFilter<'module'> | Date | string;
  };

  export type contentCreateWithoutModuleInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutModuleInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentCreateOrConnectWithoutModuleInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutModuleInput, contentUncheckedCreateWithoutModuleInput>;
  };

  export type progressCreateWithoutModuleInput = {
    id?: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProgressInput;
  };

  export type progressUncheckedCreateWithoutModuleInput = {
    id?: string;
    user_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressCreateOrConnectWithoutModuleInput = {
    where: progressWhereUniqueInput;
    create: XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>;
  };

  export type progressCreateManyModuleInputEnvelope = {
    data: progressCreateManyModuleInput | progressCreateManyModuleInput[];
    skipDuplicates?: boolean;
  };

  export type quizCreateWithoutModuleInput = {
    id?: string;
    question: string;
    answer: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type quizUncheckedCreateWithoutModuleInput = {
    id?: string;
    question: string;
    answer: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type quizCreateOrConnectWithoutModuleInput = {
    where: quizWhereUniqueInput;
    create: XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>;
  };

  export type quizCreateManyModuleInputEnvelope = {
    data: quizCreateManyModuleInput | quizCreateManyModuleInput[];
    skipDuplicates?: boolean;
  };

  export type contentUpsertWithoutModuleInput = {
    update: XOR<contentUpdateWithoutModuleInput, contentUncheckedUpdateWithoutModuleInput>;
    create: XOR<contentCreateWithoutModuleInput, contentUncheckedCreateWithoutModuleInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutModuleInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutModuleInput, contentUncheckedUpdateWithoutModuleInput>;
  };

  export type contentUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressUpsertWithWhereUniqueWithoutModuleInput = {
    where: progressWhereUniqueInput;
    update: XOR<progressUpdateWithoutModuleInput, progressUncheckedUpdateWithoutModuleInput>;
    create: XOR<progressCreateWithoutModuleInput, progressUncheckedCreateWithoutModuleInput>;
  };

  export type progressUpdateWithWhereUniqueWithoutModuleInput = {
    where: progressWhereUniqueInput;
    data: XOR<progressUpdateWithoutModuleInput, progressUncheckedUpdateWithoutModuleInput>;
  };

  export type progressUpdateManyWithWhereWithoutModuleInput = {
    where: progressScalarWhereInput;
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyWithoutModuleInput>;
  };

  export type progressScalarWhereInput = {
    AND?: progressScalarWhereInput | progressScalarWhereInput[];
    OR?: progressScalarWhereInput[];
    NOT?: progressScalarWhereInput | progressScalarWhereInput[];
    id?: UuidFilter<'progress'> | string;
    user_id?: UuidFilter<'progress'> | string;
    module_id?: UuidFilter<'progress'> | string;
    status?: StringFilter<'progress'> | string;
    score?: IntNullableFilter<'progress'> | number | null;
    created_at?: DateTimeFilter<'progress'> | Date | string;
    updated_at?: DateTimeFilter<'progress'> | Date | string;
  };

  export type quizUpsertWithWhereUniqueWithoutModuleInput = {
    where: quizWhereUniqueInput;
    update: XOR<quizUpdateWithoutModuleInput, quizUncheckedUpdateWithoutModuleInput>;
    create: XOR<quizCreateWithoutModuleInput, quizUncheckedCreateWithoutModuleInput>;
  };

  export type quizUpdateWithWhereUniqueWithoutModuleInput = {
    where: quizWhereUniqueInput;
    data: XOR<quizUpdateWithoutModuleInput, quizUncheckedUpdateWithoutModuleInput>;
  };

  export type quizUpdateManyWithWhereWithoutModuleInput = {
    where: quizScalarWhereInput;
    data: XOR<quizUpdateManyMutationInput, quizUncheckedUpdateManyWithoutModuleInput>;
  };

  export type quizScalarWhereInput = {
    AND?: quizScalarWhereInput | quizScalarWhereInput[];
    OR?: quizScalarWhereInput[];
    NOT?: quizScalarWhereInput | quizScalarWhereInput[];
    id?: UuidFilter<'quiz'> | string;
    question?: StringFilter<'quiz'> | string;
    answer?: StringFilter<'quiz'> | string;
    module_id?: UuidFilter<'quiz'> | string;
    created_at?: DateTimeFilter<'quiz'> | Date | string;
    updated_at?: DateTimeFilter<'quiz'> | Date | string;
  };

  export type moduleCreateWithoutProgressInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutModuleInput;
    quiz?: quizCreateNestedManyWithoutModuleInput;
  };

  export type moduleUncheckedCreateWithoutProgressInput = {
    id?: string;
    name: string;
    description?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    quiz?: quizUncheckedCreateNestedManyWithoutModuleInput;
  };

  export type moduleCreateOrConnectWithoutProgressInput = {
    where: moduleWhereUniqueInput;
    create: XOR<moduleCreateWithoutProgressInput, moduleUncheckedCreateWithoutProgressInput>;
  };

  export type userCreateWithoutProgressInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProgressInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProgressInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>;
  };

  export type moduleUpsertWithoutProgressInput = {
    update: XOR<moduleUpdateWithoutProgressInput, moduleUncheckedUpdateWithoutProgressInput>;
    create: XOR<moduleCreateWithoutProgressInput, moduleUncheckedCreateWithoutProgressInput>;
    where?: moduleWhereInput;
  };

  export type moduleUpdateToOneWithWhereWithoutProgressInput = {
    where?: moduleWhereInput;
    data: XOR<moduleUpdateWithoutProgressInput, moduleUncheckedUpdateWithoutProgressInput>;
  };

  export type moduleUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutModuleNestedInput;
    quiz?: quizUpdateManyWithoutModuleNestedInput;
  };

  export type moduleUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    quiz?: quizUncheckedUpdateManyWithoutModuleNestedInput;
  };

  export type userUpsertWithoutProgressInput = {
    update: XOR<userUpdateWithoutProgressInput, userUncheckedUpdateWithoutProgressInput>;
    create: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProgressInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProgressInput, userUncheckedUpdateWithoutProgressInput>;
  };

  export type userUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type moduleCreateWithoutQuizInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutModuleInput;
    progress?: progressCreateNestedManyWithoutModuleInput;
  };

  export type moduleUncheckedCreateWithoutQuizInput = {
    id?: string;
    name: string;
    description?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    progress?: progressUncheckedCreateNestedManyWithoutModuleInput;
  };

  export type moduleCreateOrConnectWithoutQuizInput = {
    where: moduleWhereUniqueInput;
    create: XOR<moduleCreateWithoutQuizInput, moduleUncheckedCreateWithoutQuizInput>;
  };

  export type moduleUpsertWithoutQuizInput = {
    update: XOR<moduleUpdateWithoutQuizInput, moduleUncheckedUpdateWithoutQuizInput>;
    create: XOR<moduleCreateWithoutQuizInput, moduleUncheckedCreateWithoutQuizInput>;
    where?: moduleWhereInput;
  };

  export type moduleUpdateToOneWithWhereWithoutQuizInput = {
    where?: moduleWhereInput;
    data: XOR<moduleUpdateWithoutQuizInput, moduleUncheckedUpdateWithoutQuizInput>;
  };

  export type moduleUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutModuleNestedInput;
    progress?: progressUpdateManyWithoutModuleNestedInput;
  };

  export type moduleUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUncheckedUpdateManyWithoutModuleNestedInput;
  };

  export type contentCreateWithoutUserInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    module?: moduleCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    module?: moduleUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutUserInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentCreateManyUserInputEnvelope = {
    data: contentCreateManyUserInput | contentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type progressCreateWithoutUserInput = {
    id?: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    module: moduleCreateNestedOneWithoutProgressInput;
  };

  export type progressUncheckedCreateWithoutUserInput = {
    id?: string;
    module_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressCreateOrConnectWithoutUserInput = {
    where: progressWhereUniqueInput;
    create: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>;
  };

  export type progressCreateManyUserInputEnvelope = {
    data: progressCreateManyUserInput | progressCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type contentUpsertWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    update: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentUpdateWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    data: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
  };

  export type contentUpdateManyWithWhereWithoutUserInput = {
    where: contentScalarWhereInput;
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyWithoutUserInput>;
  };

  export type contentScalarWhereInput = {
    AND?: contentScalarWhereInput | contentScalarWhereInput[];
    OR?: contentScalarWhereInput[];
    NOT?: contentScalarWhereInput | contentScalarWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    type?: StringFilter<'content'> | string;
    description?: StringNullableFilter<'content'> | string | null;
    user_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
  };

  export type progressUpsertWithWhereUniqueWithoutUserInput = {
    where: progressWhereUniqueInput;
    update: XOR<progressUpdateWithoutUserInput, progressUncheckedUpdateWithoutUserInput>;
    create: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>;
  };

  export type progressUpdateWithWhereUniqueWithoutUserInput = {
    where: progressWhereUniqueInput;
    data: XOR<progressUpdateWithoutUserInput, progressUncheckedUpdateWithoutUserInput>;
  };

  export type progressUpdateManyWithWhereWithoutUserInput = {
    where: progressScalarWhereInput;
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyWithoutUserInput>;
  };

  export type moduleCreateManyContentInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type moduleUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUpdateManyWithoutModuleNestedInput;
    quiz?: quizUpdateManyWithoutModuleNestedInput;
  };

  export type moduleUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: progressUncheckedUpdateManyWithoutModuleNestedInput;
    quiz?: quizUncheckedUpdateManyWithoutModuleNestedInput;
  };

  export type moduleUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressCreateManyModuleInput = {
    id?: string;
    user_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type quizCreateManyModuleInput = {
    id?: string;
    question: string;
    answer: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type progressUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type quizUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    question?: StringFieldUpdateOperationsInput | string;
    answer?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentCreateManyUserInput = {
    id?: string;
    title: string;
    type: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type progressCreateManyUserInput = {
    id?: string;
    module_id: string;
    status: string;
    score?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    module?: moduleUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type progressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type progressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    score?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ContentCountOutputTypeDefaultArgs instead
   */
  export type ContentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ContentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ModuleCountOutputTypeDefaultArgs instead
   */
  export type ModuleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ModuleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contentDefaultArgs instead
   */
  export type contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use moduleDefaultArgs instead
   */
  export type moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    moduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use progressDefaultArgs instead
   */
  export type progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    progressDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use quizDefaultArgs instead
   */
  export type quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = quizDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use startupDefaultArgs instead
   */
  export type startupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    startupDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
