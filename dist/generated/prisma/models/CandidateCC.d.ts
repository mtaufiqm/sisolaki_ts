import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model CandidateCC
 *
 */
export type CandidateCCModel = runtime.Types.Result.DefaultSelection<Prisma.$CandidateCCPayload>;
export type AggregateCandidateCC = {
    _count: CandidateCCCountAggregateOutputType | null;
    _avg: CandidateCCAvgAggregateOutputType | null;
    _sum: CandidateCCSumAggregateOutputType | null;
    _min: CandidateCCMinAggregateOutputType | null;
    _max: CandidateCCMaxAggregateOutputType | null;
};
export type CandidateCCAvgAggregateOutputType = {
    score: number | null;
    kjk: number | null;
    skp: number | null;
};
export type CandidateCCSumAggregateOutputType = {
    score: number | null;
    kjk: number | null;
    skp: number | null;
};
export type CandidateCCMinAggregateOutputType = {
    uuid: string | null;
    pegawai: string | null;
    penilaiancc: string | null;
    score: number | null;
    kjk: number | null;
    skp: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type CandidateCCMaxAggregateOutputType = {
    uuid: string | null;
    pegawai: string | null;
    penilaiancc: string | null;
    score: number | null;
    kjk: number | null;
    skp: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type CandidateCCCountAggregateOutputType = {
    uuid: number;
    pegawai: number;
    penilaiancc: number;
    score: number;
    kjk: number;
    skp: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type CandidateCCAvgAggregateInputType = {
    score?: true;
    kjk?: true;
    skp?: true;
};
export type CandidateCCSumAggregateInputType = {
    score?: true;
    kjk?: true;
    skp?: true;
};
export type CandidateCCMinAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
    score?: true;
    kjk?: true;
    skp?: true;
    created_at?: true;
    last_updated?: true;
};
export type CandidateCCMaxAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
    score?: true;
    kjk?: true;
    skp?: true;
    created_at?: true;
    last_updated?: true;
};
export type CandidateCCCountAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
    score?: true;
    kjk?: true;
    skp?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type CandidateCCAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateCC to aggregate.
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CandidateCCS to fetch.
     */
    orderBy?: Prisma.CandidateCCOrderByWithRelationInput | Prisma.CandidateCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CandidateCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CandidateCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CandidateCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CandidateCCS
    **/
    _count?: true | CandidateCCCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CandidateCCAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CandidateCCSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CandidateCCMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CandidateCCMaxAggregateInputType;
};
export type GetCandidateCCAggregateType<T extends CandidateCCAggregateArgs> = {
    [P in keyof T & keyof AggregateCandidateCC]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCandidateCC[P]> : Prisma.GetScalarType<T[P], AggregateCandidateCC[P]>;
};
export type CandidateCCGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CandidateCCWhereInput;
    orderBy?: Prisma.CandidateCCOrderByWithAggregationInput | Prisma.CandidateCCOrderByWithAggregationInput[];
    by: Prisma.CandidateCCScalarFieldEnum[] | Prisma.CandidateCCScalarFieldEnum;
    having?: Prisma.CandidateCCScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CandidateCCCountAggregateInputType | true;
    _avg?: CandidateCCAvgAggregateInputType;
    _sum?: CandidateCCSumAggregateInputType;
    _min?: CandidateCCMinAggregateInputType;
    _max?: CandidateCCMaxAggregateInputType;
};
export type CandidateCCGroupByOutputType = {
    uuid: string;
    pegawai: string;
    penilaiancc: string;
    score: number;
    kjk: number;
    skp: number;
    created_at: Date;
    last_updated: Date;
    _count: CandidateCCCountAggregateOutputType | null;
    _avg: CandidateCCAvgAggregateOutputType | null;
    _sum: CandidateCCSumAggregateOutputType | null;
    _min: CandidateCCMinAggregateOutputType | null;
    _max: CandidateCCMaxAggregateOutputType | null;
};
type GetCandidateCCGroupByPayload<T extends CandidateCCGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CandidateCCGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CandidateCCGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CandidateCCGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CandidateCCGroupByOutputType[P]>;
}>>;
export type CandidateCCWhereInput = {
    AND?: Prisma.CandidateCCWhereInput | Prisma.CandidateCCWhereInput[];
    OR?: Prisma.CandidateCCWhereInput[];
    NOT?: Prisma.CandidateCCWhereInput | Prisma.CandidateCCWhereInput[];
    uuid?: Prisma.StringFilter<"CandidateCC"> | string;
    pegawai?: Prisma.StringFilter<"CandidateCC"> | string;
    penilaiancc?: Prisma.StringFilter<"CandidateCC"> | string;
    score?: Prisma.FloatFilter<"CandidateCC"> | number;
    kjk?: Prisma.FloatFilter<"CandidateCC"> | number;
    skp?: Prisma.FloatFilter<"CandidateCC"> | number;
    created_at?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
    penilaianObj?: Prisma.XOR<Prisma.PenilaianCCScalarRelationFilter, Prisma.PenilaianCCWhereInput>;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiScalarRelationFilter, Prisma.PegawaiWhereInput>;
    penilaianAnswer?: Prisma.PenilaianCcAnswerListRelationFilter;
};
export type CandidateCCOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    penilaianObj?: Prisma.PenilaianCCOrderByWithRelationInput;
    pegawaiObj?: Prisma.PegawaiOrderByWithRelationInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerOrderByRelationAggregateInput;
};
export type CandidateCCWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.CandidateCCWhereInput | Prisma.CandidateCCWhereInput[];
    OR?: Prisma.CandidateCCWhereInput[];
    NOT?: Prisma.CandidateCCWhereInput | Prisma.CandidateCCWhereInput[];
    pegawai?: Prisma.StringFilter<"CandidateCC"> | string;
    penilaiancc?: Prisma.StringFilter<"CandidateCC"> | string;
    score?: Prisma.FloatFilter<"CandidateCC"> | number;
    kjk?: Prisma.FloatFilter<"CandidateCC"> | number;
    skp?: Prisma.FloatFilter<"CandidateCC"> | number;
    created_at?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
    penilaianObj?: Prisma.XOR<Prisma.PenilaianCCScalarRelationFilter, Prisma.PenilaianCCWhereInput>;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiScalarRelationFilter, Prisma.PegawaiWhereInput>;
    penilaianAnswer?: Prisma.PenilaianCcAnswerListRelationFilter;
}, "uuid">;
export type CandidateCCOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.CandidateCCCountOrderByAggregateInput;
    _avg?: Prisma.CandidateCCAvgOrderByAggregateInput;
    _max?: Prisma.CandidateCCMaxOrderByAggregateInput;
    _min?: Prisma.CandidateCCMinOrderByAggregateInput;
    _sum?: Prisma.CandidateCCSumOrderByAggregateInput;
};
export type CandidateCCScalarWhereWithAggregatesInput = {
    AND?: Prisma.CandidateCCScalarWhereWithAggregatesInput | Prisma.CandidateCCScalarWhereWithAggregatesInput[];
    OR?: Prisma.CandidateCCScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CandidateCCScalarWhereWithAggregatesInput | Prisma.CandidateCCScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"CandidateCC"> | string;
    pegawai?: Prisma.StringWithAggregatesFilter<"CandidateCC"> | string;
    penilaiancc?: Prisma.StringWithAggregatesFilter<"CandidateCC"> | string;
    score?: Prisma.FloatWithAggregatesFilter<"CandidateCC"> | number;
    kjk?: Prisma.FloatWithAggregatesFilter<"CandidateCC"> | number;
    skp?: Prisma.FloatWithAggregatesFilter<"CandidateCC"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CandidateCC"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"CandidateCC"> | Date | string;
};
export type CandidateCCCreateInput = {
    uuid?: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutCandidateObjInput;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutCandidateObjInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCUncheckedCreateInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutCandidateObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutCandidateObjNestedInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCCreateManyInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type CandidateCCUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CandidateCCUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CandidateCCListRelationFilter = {
    every?: Prisma.CandidateCCWhereInput;
    some?: Prisma.CandidateCCWhereInput;
    none?: Prisma.CandidateCCWhereInput;
};
export type CandidateCCOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CandidateCCCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type CandidateCCAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
};
export type CandidateCCMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type CandidateCCMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type CandidateCCSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    kjk?: Prisma.SortOrder;
    skp?: Prisma.SortOrder;
};
export type CandidateCCScalarRelationFilter = {
    is?: Prisma.CandidateCCWhereInput;
    isNot?: Prisma.CandidateCCWhereInput;
};
export type CandidateCCCreateNestedManyWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.CandidateCCCreateWithoutPegawaiObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput | Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPegawaiObjInputEnvelope;
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
};
export type CandidateCCUncheckedCreateNestedManyWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.CandidateCCCreateWithoutPegawaiObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput | Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPegawaiObjInputEnvelope;
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
};
export type CandidateCCUpdateManyWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.CandidateCCCreateWithoutPegawaiObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput | Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput[];
    upsert?: Prisma.CandidateCCUpsertWithWhereUniqueWithoutPegawaiObjInput | Prisma.CandidateCCUpsertWithWhereUniqueWithoutPegawaiObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPegawaiObjInputEnvelope;
    set?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    disconnect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    delete?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    update?: Prisma.CandidateCCUpdateWithWhereUniqueWithoutPegawaiObjInput | Prisma.CandidateCCUpdateWithWhereUniqueWithoutPegawaiObjInput[];
    updateMany?: Prisma.CandidateCCUpdateManyWithWhereWithoutPegawaiObjInput | Prisma.CandidateCCUpdateManyWithWhereWithoutPegawaiObjInput[];
    deleteMany?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
};
export type CandidateCCUncheckedUpdateManyWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.CandidateCCCreateWithoutPegawaiObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput | Prisma.CandidateCCCreateOrConnectWithoutPegawaiObjInput[];
    upsert?: Prisma.CandidateCCUpsertWithWhereUniqueWithoutPegawaiObjInput | Prisma.CandidateCCUpsertWithWhereUniqueWithoutPegawaiObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPegawaiObjInputEnvelope;
    set?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    disconnect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    delete?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    update?: Prisma.CandidateCCUpdateWithWhereUniqueWithoutPegawaiObjInput | Prisma.CandidateCCUpdateWithWhereUniqueWithoutPegawaiObjInput[];
    updateMany?: Prisma.CandidateCCUpdateManyWithWhereWithoutPegawaiObjInput | Prisma.CandidateCCUpdateManyWithWhereWithoutPegawaiObjInput[];
    deleteMany?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
};
export type CandidateCCCreateNestedManyWithoutPenilaianObjInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.CandidateCCCreateWithoutPenilaianObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput | Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPenilaianObjInputEnvelope;
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
};
export type CandidateCCUncheckedCreateNestedManyWithoutPenilaianObjInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.CandidateCCCreateWithoutPenilaianObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput | Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPenilaianObjInputEnvelope;
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
};
export type CandidateCCUpdateManyWithoutPenilaianObjNestedInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.CandidateCCCreateWithoutPenilaianObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput | Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput[];
    upsert?: Prisma.CandidateCCUpsertWithWhereUniqueWithoutPenilaianObjInput | Prisma.CandidateCCUpsertWithWhereUniqueWithoutPenilaianObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPenilaianObjInputEnvelope;
    set?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    disconnect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    delete?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    update?: Prisma.CandidateCCUpdateWithWhereUniqueWithoutPenilaianObjInput | Prisma.CandidateCCUpdateWithWhereUniqueWithoutPenilaianObjInput[];
    updateMany?: Prisma.CandidateCCUpdateManyWithWhereWithoutPenilaianObjInput | Prisma.CandidateCCUpdateManyWithWhereWithoutPenilaianObjInput[];
    deleteMany?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
};
export type CandidateCCUncheckedUpdateManyWithoutPenilaianObjNestedInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.CandidateCCCreateWithoutPenilaianObjInput[] | Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput | Prisma.CandidateCCCreateOrConnectWithoutPenilaianObjInput[];
    upsert?: Prisma.CandidateCCUpsertWithWhereUniqueWithoutPenilaianObjInput | Prisma.CandidateCCUpsertWithWhereUniqueWithoutPenilaianObjInput[];
    createMany?: Prisma.CandidateCCCreateManyPenilaianObjInputEnvelope;
    set?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    disconnect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    delete?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    connect?: Prisma.CandidateCCWhereUniqueInput | Prisma.CandidateCCWhereUniqueInput[];
    update?: Prisma.CandidateCCUpdateWithWhereUniqueWithoutPenilaianObjInput | Prisma.CandidateCCUpdateWithWhereUniqueWithoutPenilaianObjInput[];
    updateMany?: Prisma.CandidateCCUpdateManyWithWhereWithoutPenilaianObjInput | Prisma.CandidateCCUpdateManyWithWhereWithoutPenilaianObjInput[];
    deleteMany?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CandidateCCCreateNestedOneWithoutPenilaianAnswerInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianAnswerInput>;
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianAnswerInput;
    connect?: Prisma.CandidateCCWhereUniqueInput;
};
export type CandidateCCUpdateOneRequiredWithoutPenilaianAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianAnswerInput>;
    connectOrCreate?: Prisma.CandidateCCCreateOrConnectWithoutPenilaianAnswerInput;
    upsert?: Prisma.CandidateCCUpsertWithoutPenilaianAnswerInput;
    connect?: Prisma.CandidateCCWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CandidateCCUpdateToOneWithWhereWithoutPenilaianAnswerInput, Prisma.CandidateCCUpdateWithoutPenilaianAnswerInput>, Prisma.CandidateCCUncheckedUpdateWithoutPenilaianAnswerInput>;
};
export type CandidateCCCreateWithoutPegawaiObjInput = {
    uuid?: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutCandidateObjInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCUncheckedCreateWithoutPegawaiObjInput = {
    uuid?: string;
    penilaiancc: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCCreateOrConnectWithoutPegawaiObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput>;
};
export type CandidateCCCreateManyPegawaiObjInputEnvelope = {
    data: Prisma.CandidateCCCreateManyPegawaiObjInput | Prisma.CandidateCCCreateManyPegawaiObjInput[];
    skipDuplicates?: boolean;
};
export type CandidateCCUpsertWithWhereUniqueWithoutPegawaiObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedUpdateWithoutPegawaiObjInput>;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedCreateWithoutPegawaiObjInput>;
};
export type CandidateCCUpdateWithWhereUniqueWithoutPegawaiObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPegawaiObjInput, Prisma.CandidateCCUncheckedUpdateWithoutPegawaiObjInput>;
};
export type CandidateCCUpdateManyWithWhereWithoutPegawaiObjInput = {
    where: Prisma.CandidateCCScalarWhereInput;
    data: Prisma.XOR<Prisma.CandidateCCUpdateManyMutationInput, Prisma.CandidateCCUncheckedUpdateManyWithoutPegawaiObjInput>;
};
export type CandidateCCScalarWhereInput = {
    AND?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
    OR?: Prisma.CandidateCCScalarWhereInput[];
    NOT?: Prisma.CandidateCCScalarWhereInput | Prisma.CandidateCCScalarWhereInput[];
    uuid?: Prisma.StringFilter<"CandidateCC"> | string;
    pegawai?: Prisma.StringFilter<"CandidateCC"> | string;
    penilaiancc?: Prisma.StringFilter<"CandidateCC"> | string;
    score?: Prisma.FloatFilter<"CandidateCC"> | number;
    kjk?: Prisma.FloatFilter<"CandidateCC"> | number;
    skp?: Prisma.FloatFilter<"CandidateCC"> | number;
    created_at?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"CandidateCC"> | Date | string;
};
export type CandidateCCCreateWithoutPenilaianObjInput = {
    uuid?: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutCandidateObjInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCUncheckedCreateWithoutPenilaianObjInput = {
    uuid?: string;
    pegawai: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutCandidateObjInput;
};
export type CandidateCCCreateOrConnectWithoutPenilaianObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput>;
};
export type CandidateCCCreateManyPenilaianObjInputEnvelope = {
    data: Prisma.CandidateCCCreateManyPenilaianObjInput | Prisma.CandidateCCCreateManyPenilaianObjInput[];
    skipDuplicates?: boolean;
};
export type CandidateCCUpsertWithWhereUniqueWithoutPenilaianObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedUpdateWithoutPenilaianObjInput>;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianObjInput>;
};
export type CandidateCCUpdateWithWhereUniqueWithoutPenilaianObjInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPenilaianObjInput, Prisma.CandidateCCUncheckedUpdateWithoutPenilaianObjInput>;
};
export type CandidateCCUpdateManyWithWhereWithoutPenilaianObjInput = {
    where: Prisma.CandidateCCScalarWhereInput;
    data: Prisma.XOR<Prisma.CandidateCCUpdateManyMutationInput, Prisma.CandidateCCUncheckedUpdateManyWithoutPenilaianObjInput>;
};
export type CandidateCCCreateWithoutPenilaianAnswerInput = {
    uuid?: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutCandidateObjInput;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutCandidateObjInput;
};
export type CandidateCCUncheckedCreateWithoutPenilaianAnswerInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type CandidateCCCreateOrConnectWithoutPenilaianAnswerInput = {
    where: Prisma.CandidateCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianAnswerInput>;
};
export type CandidateCCUpsertWithoutPenilaianAnswerInput = {
    update: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedUpdateWithoutPenilaianAnswerInput>;
    create: Prisma.XOR<Prisma.CandidateCCCreateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedCreateWithoutPenilaianAnswerInput>;
    where?: Prisma.CandidateCCWhereInput;
};
export type CandidateCCUpdateToOneWithWhereWithoutPenilaianAnswerInput = {
    where?: Prisma.CandidateCCWhereInput;
    data: Prisma.XOR<Prisma.CandidateCCUpdateWithoutPenilaianAnswerInput, Prisma.CandidateCCUncheckedUpdateWithoutPenilaianAnswerInput>;
};
export type CandidateCCUpdateWithoutPenilaianAnswerInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutCandidateObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateWithoutPenilaianAnswerInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CandidateCCCreateManyPegawaiObjInput = {
    uuid?: string;
    penilaiancc: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type CandidateCCUpdateWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutCandidateObjNestedInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateManyWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CandidateCCCreateManyPenilaianObjInput = {
    uuid?: string;
    pegawai: string;
    score?: number;
    kjk?: number;
    skp?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type CandidateCCUpdateWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutCandidateObjNestedInput;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaianAnswer?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjNestedInput;
};
export type CandidateCCUncheckedUpdateManyWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    kjk?: Prisma.FloatFieldUpdateOperationsInput | number;
    skp?: Prisma.FloatFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CandidateCCCountOutputType
 */
export type CandidateCCCountOutputType = {
    penilaianAnswer: number;
};
export type CandidateCCCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianAnswer?: boolean | CandidateCCCountOutputTypeCountPenilaianAnswerArgs;
};
/**
 * CandidateCCCountOutputType without action
 */
export type CandidateCCCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCCCountOutputType
     */
    select?: Prisma.CandidateCCCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CandidateCCCountOutputType without action
 */
export type CandidateCCCountOutputTypeCountPenilaianAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCcAnswerWhereInput;
};
export type CandidateCCSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    score?: boolean;
    kjk?: boolean;
    skp?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianAnswer?: boolean | Prisma.CandidateCC$penilaianAnswerArgs<ExtArgs>;
    _count?: boolean | Prisma.CandidateCCCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["candidateCC"]>;
export type CandidateCCSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    score?: boolean;
    kjk?: boolean;
    skp?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["candidateCC"]>;
export type CandidateCCSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    score?: boolean;
    kjk?: boolean;
    skp?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["candidateCC"]>;
export type CandidateCCSelectScalar = {
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    score?: boolean;
    kjk?: boolean;
    skp?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type CandidateCCOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "pegawai" | "penilaiancc" | "score" | "kjk" | "skp" | "created_at" | "last_updated", ExtArgs["result"]["candidateCC"]>;
export type CandidateCCInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianAnswer?: boolean | Prisma.CandidateCC$penilaianAnswerArgs<ExtArgs>;
    _count?: boolean | Prisma.CandidateCCCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CandidateCCIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
};
export type CandidateCCIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
};
export type $CandidateCCPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CandidateCC";
    objects: {
        penilaianObj: Prisma.$PenilaianCCPayload<ExtArgs>;
        pegawaiObj: Prisma.$PegawaiPayload<ExtArgs>;
        penilaianAnswer: Prisma.$PenilaianCcAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        pegawai: string;
        penilaiancc: string;
        score: number;
        kjk: number;
        skp: number;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["candidateCC"]>;
    composites: {};
};
export type CandidateCCGetPayload<S extends boolean | null | undefined | CandidateCCDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload, S>;
export type CandidateCCCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CandidateCCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CandidateCCCountAggregateInputType | true;
};
export interface CandidateCCDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CandidateCC'];
        meta: {
            name: 'CandidateCC';
        };
    };
    /**
     * Find zero or one CandidateCC that matches the filter.
     * @param {CandidateCCFindUniqueArgs} args - Arguments to find a CandidateCC
     * @example
     * // Get one CandidateCC
     * const candidateCC = await prisma.candidateCC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateCCFindUniqueArgs>(args: Prisma.SelectSubset<T, CandidateCCFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CandidateCC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateCCFindUniqueOrThrowArgs} args - Arguments to find a CandidateCC
     * @example
     * // Get one CandidateCC
     * const candidateCC = await prisma.candidateCC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateCCFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CandidateCCFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CandidateCC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCFindFirstArgs} args - Arguments to find a CandidateCC
     * @example
     * // Get one CandidateCC
     * const candidateCC = await prisma.candidateCC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateCCFindFirstArgs>(args?: Prisma.SelectSubset<T, CandidateCCFindFirstArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CandidateCC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCFindFirstOrThrowArgs} args - Arguments to find a CandidateCC
     * @example
     * // Get one CandidateCC
     * const candidateCC = await prisma.candidateCC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateCCFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CandidateCCFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CandidateCCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateCCS
     * const candidateCCS = await prisma.candidateCC.findMany()
     *
     * // Get first 10 CandidateCCS
     * const candidateCCS = await prisma.candidateCC.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const candidateCCWithUuidOnly = await prisma.candidateCC.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends CandidateCCFindManyArgs>(args?: Prisma.SelectSubset<T, CandidateCCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CandidateCC.
     * @param {CandidateCCCreateArgs} args - Arguments to create a CandidateCC.
     * @example
     * // Create one CandidateCC
     * const CandidateCC = await prisma.candidateCC.create({
     *   data: {
     *     // ... data to create a CandidateCC
     *   }
     * })
     *
     */
    create<T extends CandidateCCCreateArgs>(args: Prisma.SelectSubset<T, CandidateCCCreateArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CandidateCCS.
     * @param {CandidateCCCreateManyArgs} args - Arguments to create many CandidateCCS.
     * @example
     * // Create many CandidateCCS
     * const candidateCC = await prisma.candidateCC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CandidateCCCreateManyArgs>(args?: Prisma.SelectSubset<T, CandidateCCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CandidateCCS and returns the data saved in the database.
     * @param {CandidateCCCreateManyAndReturnArgs} args - Arguments to create many CandidateCCS.
     * @example
     * // Create many CandidateCCS
     * const candidateCC = await prisma.candidateCC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CandidateCCS and only return the `uuid`
     * const candidateCCWithUuidOnly = await prisma.candidateCC.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CandidateCCCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CandidateCCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CandidateCC.
     * @param {CandidateCCDeleteArgs} args - Arguments to delete one CandidateCC.
     * @example
     * // Delete one CandidateCC
     * const CandidateCC = await prisma.candidateCC.delete({
     *   where: {
     *     // ... filter to delete one CandidateCC
     *   }
     * })
     *
     */
    delete<T extends CandidateCCDeleteArgs>(args: Prisma.SelectSubset<T, CandidateCCDeleteArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CandidateCC.
     * @param {CandidateCCUpdateArgs} args - Arguments to update one CandidateCC.
     * @example
     * // Update one CandidateCC
     * const candidateCC = await prisma.candidateCC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CandidateCCUpdateArgs>(args: Prisma.SelectSubset<T, CandidateCCUpdateArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CandidateCCS.
     * @param {CandidateCCDeleteManyArgs} args - Arguments to filter CandidateCCS to delete.
     * @example
     * // Delete a few CandidateCCS
     * const { count } = await prisma.candidateCC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CandidateCCDeleteManyArgs>(args?: Prisma.SelectSubset<T, CandidateCCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CandidateCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateCCS
     * const candidateCC = await prisma.candidateCC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CandidateCCUpdateManyArgs>(args: Prisma.SelectSubset<T, CandidateCCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CandidateCCS and returns the data updated in the database.
     * @param {CandidateCCUpdateManyAndReturnArgs} args - Arguments to update many CandidateCCS.
     * @example
     * // Update many CandidateCCS
     * const candidateCC = await prisma.candidateCC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CandidateCCS and only return the `uuid`
     * const candidateCCWithUuidOnly = await prisma.candidateCC.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CandidateCCUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CandidateCCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CandidateCC.
     * @param {CandidateCCUpsertArgs} args - Arguments to update or create a CandidateCC.
     * @example
     * // Update or create a CandidateCC
     * const candidateCC = await prisma.candidateCC.upsert({
     *   create: {
     *     // ... data to create a CandidateCC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateCC we want to update
     *   }
     * })
     */
    upsert<T extends CandidateCCUpsertArgs>(args: Prisma.SelectSubset<T, CandidateCCUpsertArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CandidateCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCCountArgs} args - Arguments to filter CandidateCCS to count.
     * @example
     * // Count the number of CandidateCCS
     * const count = await prisma.candidateCC.count({
     *   where: {
     *     // ... the filter for the CandidateCCS we want to count
     *   }
     * })
    **/
    count<T extends CandidateCCCountArgs>(args?: Prisma.Subset<T, CandidateCCCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CandidateCCCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CandidateCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateCCAggregateArgs>(args: Prisma.Subset<T, CandidateCCAggregateArgs>): Prisma.PrismaPromise<GetCandidateCCAggregateType<T>>;
    /**
     * Group by CandidateCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCCGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CandidateCCGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CandidateCCGroupByArgs['orderBy'];
    } : {
        orderBy?: CandidateCCGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CandidateCCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateCCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CandidateCC model
     */
    readonly fields: CandidateCCFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CandidateCC.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CandidateCCClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    penilaianObj<T extends Prisma.PenilaianCCDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCCDefaultArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pegawaiObj<T extends Prisma.PegawaiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PegawaiDefaultArgs<ExtArgs>>): Prisma.Prisma__PegawaiClient<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    penilaianAnswer<T extends Prisma.CandidateCC$penilaianAnswerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CandidateCC$penilaianAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CandidateCC model
 */
export interface CandidateCCFieldRefs {
    readonly uuid: Prisma.FieldRef<"CandidateCC", 'String'>;
    readonly pegawai: Prisma.FieldRef<"CandidateCC", 'String'>;
    readonly penilaiancc: Prisma.FieldRef<"CandidateCC", 'String'>;
    readonly score: Prisma.FieldRef<"CandidateCC", 'Float'>;
    readonly kjk: Prisma.FieldRef<"CandidateCC", 'Float'>;
    readonly skp: Prisma.FieldRef<"CandidateCC", 'Float'>;
    readonly created_at: Prisma.FieldRef<"CandidateCC", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"CandidateCC", 'DateTime'>;
}
/**
 * CandidateCC findUnique
 */
export type CandidateCCFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter, which CandidateCC to fetch.
     */
    where: Prisma.CandidateCCWhereUniqueInput;
};
/**
 * CandidateCC findUniqueOrThrow
 */
export type CandidateCCFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter, which CandidateCC to fetch.
     */
    where: Prisma.CandidateCCWhereUniqueInput;
};
/**
 * CandidateCC findFirst
 */
export type CandidateCCFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter, which CandidateCC to fetch.
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CandidateCCS to fetch.
     */
    orderBy?: Prisma.CandidateCCOrderByWithRelationInput | Prisma.CandidateCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CandidateCCS.
     */
    cursor?: Prisma.CandidateCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CandidateCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CandidateCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CandidateCCS.
     */
    distinct?: Prisma.CandidateCCScalarFieldEnum | Prisma.CandidateCCScalarFieldEnum[];
};
/**
 * CandidateCC findFirstOrThrow
 */
export type CandidateCCFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter, which CandidateCC to fetch.
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CandidateCCS to fetch.
     */
    orderBy?: Prisma.CandidateCCOrderByWithRelationInput | Prisma.CandidateCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CandidateCCS.
     */
    cursor?: Prisma.CandidateCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CandidateCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CandidateCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CandidateCCS.
     */
    distinct?: Prisma.CandidateCCScalarFieldEnum | Prisma.CandidateCCScalarFieldEnum[];
};
/**
 * CandidateCC findMany
 */
export type CandidateCCFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter, which CandidateCCS to fetch.
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CandidateCCS to fetch.
     */
    orderBy?: Prisma.CandidateCCOrderByWithRelationInput | Prisma.CandidateCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CandidateCCS.
     */
    cursor?: Prisma.CandidateCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CandidateCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CandidateCCS.
     */
    skip?: number;
    distinct?: Prisma.CandidateCCScalarFieldEnum | Prisma.CandidateCCScalarFieldEnum[];
};
/**
 * CandidateCC create
 */
export type CandidateCCCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * The data needed to create a CandidateCC.
     */
    data: Prisma.XOR<Prisma.CandidateCCCreateInput, Prisma.CandidateCCUncheckedCreateInput>;
};
/**
 * CandidateCC createMany
 */
export type CandidateCCCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateCCS.
     */
    data: Prisma.CandidateCCCreateManyInput | Prisma.CandidateCCCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CandidateCC createManyAndReturn
 */
export type CandidateCCCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * The data used to create many CandidateCCS.
     */
    data: Prisma.CandidateCCCreateManyInput | Prisma.CandidateCCCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CandidateCC update
 */
export type CandidateCCUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * The data needed to update a CandidateCC.
     */
    data: Prisma.XOR<Prisma.CandidateCCUpdateInput, Prisma.CandidateCCUncheckedUpdateInput>;
    /**
     * Choose, which CandidateCC to update.
     */
    where: Prisma.CandidateCCWhereUniqueInput;
};
/**
 * CandidateCC updateMany
 */
export type CandidateCCUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateCCS.
     */
    data: Prisma.XOR<Prisma.CandidateCCUpdateManyMutationInput, Prisma.CandidateCCUncheckedUpdateManyInput>;
    /**
     * Filter which CandidateCCS to update
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * Limit how many CandidateCCS to update.
     */
    limit?: number;
};
/**
 * CandidateCC updateManyAndReturn
 */
export type CandidateCCUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * The data used to update CandidateCCS.
     */
    data: Prisma.XOR<Prisma.CandidateCCUpdateManyMutationInput, Prisma.CandidateCCUncheckedUpdateManyInput>;
    /**
     * Filter which CandidateCCS to update
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * Limit how many CandidateCCS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CandidateCC upsert
 */
export type CandidateCCUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * The filter to search for the CandidateCC to update in case it exists.
     */
    where: Prisma.CandidateCCWhereUniqueInput;
    /**
     * In case the CandidateCC found by the `where` argument doesn't exist, create a new CandidateCC with this data.
     */
    create: Prisma.XOR<Prisma.CandidateCCCreateInput, Prisma.CandidateCCUncheckedCreateInput>;
    /**
     * In case the CandidateCC was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CandidateCCUpdateInput, Prisma.CandidateCCUncheckedUpdateInput>;
};
/**
 * CandidateCC delete
 */
export type CandidateCCDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
    /**
     * Filter which CandidateCC to delete.
     */
    where: Prisma.CandidateCCWhereUniqueInput;
};
/**
 * CandidateCC deleteMany
 */
export type CandidateCCDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateCCS to delete
     */
    where?: Prisma.CandidateCCWhereInput;
    /**
     * Limit how many CandidateCCS to delete.
     */
    limit?: number;
};
/**
 * CandidateCC.penilaianAnswer
 */
export type CandidateCC$penilaianAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcAnswer
     */
    select?: Prisma.PenilaianCcAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcAnswer
     */
    omit?: Prisma.PenilaianCcAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcAnswerInclude<ExtArgs> | null;
    where?: Prisma.PenilaianCcAnswerWhereInput;
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithRelationInput | Prisma.PenilaianCcAnswerOrderByWithRelationInput[];
    cursor?: Prisma.PenilaianCcAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PenilaianCcAnswerScalarFieldEnum | Prisma.PenilaianCcAnswerScalarFieldEnum[];
};
/**
 * CandidateCC without action
 */
export type CandidateCCDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCC
     */
    select?: Prisma.CandidateCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CandidateCC
     */
    omit?: Prisma.CandidateCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CandidateCCInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CandidateCC.d.ts.map