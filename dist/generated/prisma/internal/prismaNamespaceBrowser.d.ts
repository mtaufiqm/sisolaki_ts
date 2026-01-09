import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map