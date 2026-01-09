import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.2.0
 * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
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
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
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
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Roles: "Roles";
    readonly UserRoleBridge: "UserRoleBridge";
    readonly StatusPegawai: "StatusPegawai";
    readonly Jabatan: "Jabatan";
    readonly Pegawai: "Pegawai";
    readonly PenilaianCC: "PenilaianCC";
    readonly CandidateCC: "CandidateCC";
    readonly PenilaiCC: "PenilaiCC";
    readonly PenilaianCcQuestions: "PenilaianCcQuestions";
    readonly PenilaianCcAnswer: "PenilaianCcAnswer";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "roles" | "userRoleBridge" | "statusPegawai" | "jabatan" | "pegawai" | "penilaianCC" | "candidateCC" | "penilaiCC" | "penilaianCcQuestions" | "penilaianCcAnswer";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Roles: {
            payload: Prisma.$RolesPayload<ExtArgs>;
            fields: Prisma.RolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findFirst: {
                    args: Prisma.RolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findMany: {
                    args: Prisma.RolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                create: {
                    args: Prisma.RolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                createMany: {
                    args: Prisma.RolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                delete: {
                    args: Prisma.RolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                update: {
                    args: Prisma.RolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                deleteMany: {
                    args: Prisma.RolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                upsert: {
                    args: Prisma.RolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.RolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        UserRoleBridge: {
            payload: Prisma.$UserRoleBridgePayload<ExtArgs>;
            fields: Prisma.UserRoleBridgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleBridgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleBridgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleBridgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleBridgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findMany: {
                    args: Prisma.UserRoleBridgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                create: {
                    args: Prisma.UserRoleBridgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                createMany: {
                    args: Prisma.UserRoleBridgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserRoleBridgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                delete: {
                    args: Prisma.UserRoleBridgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                update: {
                    args: Prisma.UserRoleBridgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleBridgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleBridgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserRoleBridgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                upsert: {
                    args: Prisma.UserRoleBridgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleBridgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRoleBridge>;
                };
                groupBy: {
                    args: Prisma.UserRoleBridgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleBridgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeCountAggregateOutputType> | number;
                };
            };
        };
        StatusPegawai: {
            payload: Prisma.$StatusPegawaiPayload<ExtArgs>;
            fields: Prisma.StatusPegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatusPegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatusPegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.StatusPegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatusPegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findMany: {
                    args: Prisma.StatusPegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                create: {
                    args: Prisma.StatusPegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                createMany: {
                    args: Prisma.StatusPegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatusPegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                delete: {
                    args: Prisma.StatusPegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                update: {
                    args: Prisma.StatusPegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.StatusPegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatusPegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatusPegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.StatusPegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.StatusPegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatusPegawai>;
                };
                groupBy: {
                    args: Prisma.StatusPegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatusPegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiCountAggregateOutputType> | number;
                };
            };
        };
        Jabatan: {
            payload: Prisma.$JabatanPayload<ExtArgs>;
            fields: Prisma.JabatanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JabatanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JabatanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                findFirst: {
                    args: Prisma.JabatanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JabatanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                findMany: {
                    args: Prisma.JabatanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>[];
                };
                create: {
                    args: Prisma.JabatanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                createMany: {
                    args: Prisma.JabatanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JabatanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>[];
                };
                delete: {
                    args: Prisma.JabatanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                update: {
                    args: Prisma.JabatanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                deleteMany: {
                    args: Prisma.JabatanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JabatanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JabatanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>[];
                };
                upsert: {
                    args: Prisma.JabatanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JabatanPayload>;
                };
                aggregate: {
                    args: Prisma.JabatanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJabatan>;
                };
                groupBy: {
                    args: Prisma.JabatanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JabatanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JabatanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JabatanCountAggregateOutputType> | number;
                };
            };
        };
        Pegawai: {
            payload: Prisma.$PegawaiPayload<ExtArgs>;
            fields: Prisma.PegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.PegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findMany: {
                    args: Prisma.PegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                create: {
                    args: Prisma.PegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                createMany: {
                    args: Prisma.PegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                delete: {
                    args: Prisma.PegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                update: {
                    args: Prisma.PegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.PegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.PegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.PegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePegawai>;
                };
                groupBy: {
                    args: Prisma.PegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiCountAggregateOutputType> | number;
                };
            };
        };
        PenilaianCC: {
            payload: Prisma.$PenilaianCCPayload<ExtArgs>;
            fields: Prisma.PenilaianCCFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenilaianCCFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenilaianCCFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                findFirst: {
                    args: Prisma.PenilaianCCFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenilaianCCFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                findMany: {
                    args: Prisma.PenilaianCCFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>[];
                };
                create: {
                    args: Prisma.PenilaianCCCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                createMany: {
                    args: Prisma.PenilaianCCCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenilaianCCCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>[];
                };
                delete: {
                    args: Prisma.PenilaianCCDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                update: {
                    args: Prisma.PenilaianCCUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                deleteMany: {
                    args: Prisma.PenilaianCCDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenilaianCCUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenilaianCCUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>[];
                };
                upsert: {
                    args: Prisma.PenilaianCCUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCCPayload>;
                };
                aggregate: {
                    args: Prisma.PenilaianCCAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenilaianCC>;
                };
                groupBy: {
                    args: Prisma.PenilaianCCGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCCGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenilaianCCCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCCCountAggregateOutputType> | number;
                };
            };
        };
        CandidateCC: {
            payload: Prisma.$CandidateCCPayload<ExtArgs>;
            fields: Prisma.CandidateCCFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CandidateCCFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CandidateCCFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                findFirst: {
                    args: Prisma.CandidateCCFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CandidateCCFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                findMany: {
                    args: Prisma.CandidateCCFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>[];
                };
                create: {
                    args: Prisma.CandidateCCCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                createMany: {
                    args: Prisma.CandidateCCCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CandidateCCCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>[];
                };
                delete: {
                    args: Prisma.CandidateCCDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                update: {
                    args: Prisma.CandidateCCUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                deleteMany: {
                    args: Prisma.CandidateCCDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CandidateCCUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CandidateCCUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>[];
                };
                upsert: {
                    args: Prisma.CandidateCCUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandidateCCPayload>;
                };
                aggregate: {
                    args: Prisma.CandidateCCAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCandidateCC>;
                };
                groupBy: {
                    args: Prisma.CandidateCCGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CandidateCCGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CandidateCCCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CandidateCCCountAggregateOutputType> | number;
                };
            };
        };
        PenilaiCC: {
            payload: Prisma.$PenilaiCCPayload<ExtArgs>;
            fields: Prisma.PenilaiCCFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenilaiCCFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenilaiCCFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                findFirst: {
                    args: Prisma.PenilaiCCFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenilaiCCFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                findMany: {
                    args: Prisma.PenilaiCCFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>[];
                };
                create: {
                    args: Prisma.PenilaiCCCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                createMany: {
                    args: Prisma.PenilaiCCCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenilaiCCCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>[];
                };
                delete: {
                    args: Prisma.PenilaiCCDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                update: {
                    args: Prisma.PenilaiCCUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                deleteMany: {
                    args: Prisma.PenilaiCCDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenilaiCCUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenilaiCCUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>[];
                };
                upsert: {
                    args: Prisma.PenilaiCCUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaiCCPayload>;
                };
                aggregate: {
                    args: Prisma.PenilaiCCAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenilaiCC>;
                };
                groupBy: {
                    args: Prisma.PenilaiCCGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaiCCGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenilaiCCCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaiCCCountAggregateOutputType> | number;
                };
            };
        };
        PenilaianCcQuestions: {
            payload: Prisma.$PenilaianCcQuestionsPayload<ExtArgs>;
            fields: Prisma.PenilaianCcQuestionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenilaianCcQuestionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenilaianCcQuestionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                findFirst: {
                    args: Prisma.PenilaianCcQuestionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenilaianCcQuestionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                findMany: {
                    args: Prisma.PenilaianCcQuestionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>[];
                };
                create: {
                    args: Prisma.PenilaianCcQuestionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                createMany: {
                    args: Prisma.PenilaianCcQuestionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenilaianCcQuestionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>[];
                };
                delete: {
                    args: Prisma.PenilaianCcQuestionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                update: {
                    args: Prisma.PenilaianCcQuestionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                deleteMany: {
                    args: Prisma.PenilaianCcQuestionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenilaianCcQuestionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenilaianCcQuestionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>[];
                };
                upsert: {
                    args: Prisma.PenilaianCcQuestionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcQuestionsPayload>;
                };
                aggregate: {
                    args: Prisma.PenilaianCcQuestionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenilaianCcQuestions>;
                };
                groupBy: {
                    args: Prisma.PenilaianCcQuestionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCcQuestionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenilaianCcQuestionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCcQuestionsCountAggregateOutputType> | number;
                };
            };
        };
        PenilaianCcAnswer: {
            payload: Prisma.$PenilaianCcAnswerPayload<ExtArgs>;
            fields: Prisma.PenilaianCcAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenilaianCcAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenilaianCcAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.PenilaianCcAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenilaianCcAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                findMany: {
                    args: Prisma.PenilaianCcAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>[];
                };
                create: {
                    args: Prisma.PenilaianCcAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                createMany: {
                    args: Prisma.PenilaianCcAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenilaianCcAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>[];
                };
                delete: {
                    args: Prisma.PenilaianCcAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                update: {
                    args: Prisma.PenilaianCcAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.PenilaianCcAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenilaianCcAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenilaianCcAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.PenilaianCcAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenilaianCcAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.PenilaianCcAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenilaianCcAnswer>;
                };
                groupBy: {
                    args: Prisma.PenilaianCcAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCcAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenilaianCcAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenilaianCcAnswerCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly username: "username";
    readonly pwd: "pwd";
    readonly is_active: "is_active";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly description: "description";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const UserRoleBridgeScalarFieldEnum: {
    readonly description: "description";
    readonly username: "username";
};
export type UserRoleBridgeScalarFieldEnum = (typeof UserRoleBridgeScalarFieldEnum)[keyof typeof UserRoleBridgeScalarFieldEnum];
export declare const StatusPegawaiScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type StatusPegawaiScalarFieldEnum = (typeof StatusPegawaiScalarFieldEnum)[keyof typeof StatusPegawaiScalarFieldEnum];
export declare const JabatanScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type JabatanScalarFieldEnum = (typeof JabatanScalarFieldEnum)[keyof typeof JabatanScalarFieldEnum];
export declare const PegawaiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly fullname: "fullname";
    readonly fullname_with_title: "fullname_with_title";
    readonly nickname: "nickname";
    readonly nip: "nip";
    readonly old_nip: "old_nip";
    readonly phone_number: "phone_number";
    readonly username: "username";
    readonly status_pegawai: "status_pegawai";
    readonly jabatan: "jabatan";
};
export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum];
export declare const PenilaianCCScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly desc: "desc";
    readonly tahun: "tahun";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type PenilaianCCScalarFieldEnum = (typeof PenilaianCCScalarFieldEnum)[keyof typeof PenilaianCCScalarFieldEnum];
export declare const CandidateCCScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly pegawai: "pegawai";
    readonly penilaiancc: "penilaiancc";
    readonly score: "score";
    readonly kjk: "kjk";
    readonly skp: "skp";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type CandidateCCScalarFieldEnum = (typeof CandidateCCScalarFieldEnum)[keyof typeof CandidateCCScalarFieldEnum];
export declare const PenilaiCCScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly pegawai: "pegawai";
    readonly penilaiancc: "penilaiancc";
};
export type PenilaiCCScalarFieldEnum = (typeof PenilaiCCScalarFieldEnum)[keyof typeof PenilaiCCScalarFieldEnum];
export declare const PenilaianCcQuestionsScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly title: "title";
    readonly desc: "desc";
    readonly order: "order";
    readonly tag: "tag";
    readonly is_active: "is_active";
};
export type PenilaianCcQuestionsScalarFieldEnum = (typeof PenilaianCcQuestionsScalarFieldEnum)[keyof typeof PenilaianCcQuestionsScalarFieldEnum];
export declare const PenilaianCcAnswerScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly penilaicc: "penilaicc";
    readonly candidatecc: "candidatecc";
    readonly question: "question";
    readonly value: "value";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type PenilaianCcAnswerScalarFieldEnum = (typeof PenilaianCcAnswerScalarFieldEnum)[keyof typeof PenilaianCcAnswerScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
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
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    roles?: Prisma.RolesOmit;
    userRoleBridge?: Prisma.UserRoleBridgeOmit;
    statusPegawai?: Prisma.StatusPegawaiOmit;
    jabatan?: Prisma.JabatanOmit;
    pegawai?: Prisma.PegawaiOmit;
    penilaianCC?: Prisma.PenilaianCCOmit;
    candidateCC?: Prisma.CandidateCCOmit;
    penilaiCC?: Prisma.PenilaiCCOmit;
    penilaianCcQuestions?: Prisma.PenilaianCcQuestionsOmit;
    penilaianCcAnswer?: Prisma.PenilaianCcAnswerOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
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
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map