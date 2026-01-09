import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PenilaiCC
 *
 */
export type PenilaiCCModel = runtime.Types.Result.DefaultSelection<Prisma.$PenilaiCCPayload>;
export type AggregatePenilaiCC = {
    _count: PenilaiCCCountAggregateOutputType | null;
    _min: PenilaiCCMinAggregateOutputType | null;
    _max: PenilaiCCMaxAggregateOutputType | null;
};
export type PenilaiCCMinAggregateOutputType = {
    uuid: string | null;
    pegawai: string | null;
    penilaiancc: string | null;
};
export type PenilaiCCMaxAggregateOutputType = {
    uuid: string | null;
    pegawai: string | null;
    penilaiancc: string | null;
};
export type PenilaiCCCountAggregateOutputType = {
    uuid: number;
    pegawai: number;
    penilaiancc: number;
    _all: number;
};
export type PenilaiCCMinAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
};
export type PenilaiCCMaxAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
};
export type PenilaiCCCountAggregateInputType = {
    uuid?: true;
    pegawai?: true;
    penilaiancc?: true;
    _all?: true;
};
export type PenilaiCCAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaiCC to aggregate.
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaiCCS to fetch.
     */
    orderBy?: Prisma.PenilaiCCOrderByWithRelationInput | Prisma.PenilaiCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PenilaiCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaiCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaiCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PenilaiCCS
    **/
    _count?: true | PenilaiCCCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PenilaiCCMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PenilaiCCMaxAggregateInputType;
};
export type GetPenilaiCCAggregateType<T extends PenilaiCCAggregateArgs> = {
    [P in keyof T & keyof AggregatePenilaiCC]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePenilaiCC[P]> : Prisma.GetScalarType<T[P], AggregatePenilaiCC[P]>;
};
export type PenilaiCCGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaiCCWhereInput;
    orderBy?: Prisma.PenilaiCCOrderByWithAggregationInput | Prisma.PenilaiCCOrderByWithAggregationInput[];
    by: Prisma.PenilaiCCScalarFieldEnum[] | Prisma.PenilaiCCScalarFieldEnum;
    having?: Prisma.PenilaiCCScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PenilaiCCCountAggregateInputType | true;
    _min?: PenilaiCCMinAggregateInputType;
    _max?: PenilaiCCMaxAggregateInputType;
};
export type PenilaiCCGroupByOutputType = {
    uuid: string;
    pegawai: string;
    penilaiancc: string;
    _count: PenilaiCCCountAggregateOutputType | null;
    _min: PenilaiCCMinAggregateOutputType | null;
    _max: PenilaiCCMaxAggregateOutputType | null;
};
type GetPenilaiCCGroupByPayload<T extends PenilaiCCGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PenilaiCCGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PenilaiCCGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PenilaiCCGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PenilaiCCGroupByOutputType[P]>;
}>>;
export type PenilaiCCWhereInput = {
    AND?: Prisma.PenilaiCCWhereInput | Prisma.PenilaiCCWhereInput[];
    OR?: Prisma.PenilaiCCWhereInput[];
    NOT?: Prisma.PenilaiCCWhereInput | Prisma.PenilaiCCWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaiCC"> | string;
    pegawai?: Prisma.StringFilter<"PenilaiCC"> | string;
    penilaiancc?: Prisma.StringFilter<"PenilaiCC"> | string;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiScalarRelationFilter, Prisma.PegawaiWhereInput>;
    penilaianObj?: Prisma.XOR<Prisma.PenilaianCCScalarRelationFilter, Prisma.PenilaianCCWhereInput>;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerListRelationFilter;
};
export type PenilaiCCOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    pegawaiObj?: Prisma.PegawaiOrderByWithRelationInput;
    penilaianObj?: Prisma.PenilaianCCOrderByWithRelationInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerOrderByRelationAggregateInput;
};
export type PenilaiCCWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.PenilaiCCWhereInput | Prisma.PenilaiCCWhereInput[];
    OR?: Prisma.PenilaiCCWhereInput[];
    NOT?: Prisma.PenilaiCCWhereInput | Prisma.PenilaiCCWhereInput[];
    pegawai?: Prisma.StringFilter<"PenilaiCC"> | string;
    penilaiancc?: Prisma.StringFilter<"PenilaiCC"> | string;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiScalarRelationFilter, Prisma.PegawaiWhereInput>;
    penilaianObj?: Prisma.XOR<Prisma.PenilaianCCScalarRelationFilter, Prisma.PenilaianCCWhereInput>;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerListRelationFilter;
}, "uuid">;
export type PenilaiCCOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
    _count?: Prisma.PenilaiCCCountOrderByAggregateInput;
    _max?: Prisma.PenilaiCCMaxOrderByAggregateInput;
    _min?: Prisma.PenilaiCCMinOrderByAggregateInput;
};
export type PenilaiCCScalarWhereWithAggregatesInput = {
    AND?: Prisma.PenilaiCCScalarWhereWithAggregatesInput | Prisma.PenilaiCCScalarWhereWithAggregatesInput[];
    OR?: Prisma.PenilaiCCScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PenilaiCCScalarWhereWithAggregatesInput | Prisma.PenilaiCCScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"PenilaiCC"> | string;
    pegawai?: Prisma.StringWithAggregatesFilter<"PenilaiCC"> | string;
    penilaiancc?: Prisma.StringWithAggregatesFilter<"PenilaiCC"> | string;
};
export type PenilaiCCCreateInput = {
    uuid?: string;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutPenilaiObjInput;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutPenilaiObjInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCUncheckedCreateInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutPenilaiObjNestedInput;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutPenilaiObjNestedInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCCreateManyInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
};
export type PenilaiCCUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PenilaiCCUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PenilaiCCListRelationFilter = {
    every?: Prisma.PenilaiCCWhereInput;
    some?: Prisma.PenilaiCCWhereInput;
    none?: Prisma.PenilaiCCWhereInput;
};
export type PenilaiCCOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PenilaiCCCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
};
export type PenilaiCCMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
};
export type PenilaiCCMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    pegawai?: Prisma.SortOrder;
    penilaiancc?: Prisma.SortOrder;
};
export type PenilaiCCScalarRelationFilter = {
    is?: Prisma.PenilaiCCWhereInput;
    isNot?: Prisma.PenilaiCCWhereInput;
};
export type PenilaiCCCreateNestedManyWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.PenilaiCCCreateWithoutPegawaiObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPegawaiObjInputEnvelope;
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
};
export type PenilaiCCUncheckedCreateNestedManyWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.PenilaiCCCreateWithoutPegawaiObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPegawaiObjInputEnvelope;
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
};
export type PenilaiCCUpdateManyWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.PenilaiCCCreateWithoutPegawaiObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput[];
    upsert?: Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPegawaiObjInput | Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPegawaiObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPegawaiObjInputEnvelope;
    set?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    disconnect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    delete?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    update?: Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPegawaiObjInput | Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPegawaiObjInput[];
    updateMany?: Prisma.PenilaiCCUpdateManyWithWhereWithoutPegawaiObjInput | Prisma.PenilaiCCUpdateManyWithWhereWithoutPegawaiObjInput[];
    deleteMany?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
};
export type PenilaiCCUncheckedUpdateManyWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput> | Prisma.PenilaiCCCreateWithoutPegawaiObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPegawaiObjInput[];
    upsert?: Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPegawaiObjInput | Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPegawaiObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPegawaiObjInputEnvelope;
    set?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    disconnect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    delete?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    update?: Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPegawaiObjInput | Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPegawaiObjInput[];
    updateMany?: Prisma.PenilaiCCUpdateManyWithWhereWithoutPegawaiObjInput | Prisma.PenilaiCCUpdateManyWithWhereWithoutPegawaiObjInput[];
    deleteMany?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
};
export type PenilaiCCCreateNestedManyWithoutPenilaianObjInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.PenilaiCCCreateWithoutPenilaianObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPenilaianObjInputEnvelope;
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
};
export type PenilaiCCUncheckedCreateNestedManyWithoutPenilaianObjInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.PenilaiCCCreateWithoutPenilaianObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPenilaianObjInputEnvelope;
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
};
export type PenilaiCCUpdateManyWithoutPenilaianObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.PenilaiCCCreateWithoutPenilaianObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput[];
    upsert?: Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPenilaianObjInput | Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPenilaianObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPenilaianObjInputEnvelope;
    set?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    disconnect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    delete?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    update?: Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPenilaianObjInput | Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPenilaianObjInput[];
    updateMany?: Prisma.PenilaiCCUpdateManyWithWhereWithoutPenilaianObjInput | Prisma.PenilaiCCUpdateManyWithWhereWithoutPenilaianObjInput[];
    deleteMany?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
};
export type PenilaiCCUncheckedUpdateManyWithoutPenilaianObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput> | Prisma.PenilaiCCCreateWithoutPenilaianObjInput[] | Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput[];
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput | Prisma.PenilaiCCCreateOrConnectWithoutPenilaianObjInput[];
    upsert?: Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPenilaianObjInput | Prisma.PenilaiCCUpsertWithWhereUniqueWithoutPenilaianObjInput[];
    createMany?: Prisma.PenilaiCCCreateManyPenilaianObjInputEnvelope;
    set?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    disconnect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    delete?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    connect?: Prisma.PenilaiCCWhereUniqueInput | Prisma.PenilaiCCWhereUniqueInput[];
    update?: Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPenilaianObjInput | Prisma.PenilaiCCUpdateWithWhereUniqueWithoutPenilaianObjInput[];
    updateMany?: Prisma.PenilaiCCUpdateManyWithWhereWithoutPenilaianObjInput | Prisma.PenilaiCCUpdateManyWithWhereWithoutPenilaianObjInput[];
    deleteMany?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
};
export type PenilaiCCCreateNestedOneWithoutPenilaianAnswerObjInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianAnswerObjInput>;
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianAnswerObjInput;
    connect?: Prisma.PenilaiCCWhereUniqueInput;
};
export type PenilaiCCUpdateOneRequiredWithoutPenilaianAnswerObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianAnswerObjInput>;
    connectOrCreate?: Prisma.PenilaiCCCreateOrConnectWithoutPenilaianAnswerObjInput;
    upsert?: Prisma.PenilaiCCUpsertWithoutPenilaianAnswerObjInput;
    connect?: Prisma.PenilaiCCWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PenilaiCCUpdateToOneWithWhereWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUpdateWithoutPenilaianAnswerObjInput>, Prisma.PenilaiCCUncheckedUpdateWithoutPenilaianAnswerObjInput>;
};
export type PenilaiCCCreateWithoutPegawaiObjInput = {
    uuid?: string;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutPenilaiObjInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCUncheckedCreateWithoutPegawaiObjInput = {
    uuid?: string;
    penilaiancc: string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCCreateOrConnectWithoutPegawaiObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput>;
};
export type PenilaiCCCreateManyPegawaiObjInputEnvelope = {
    data: Prisma.PenilaiCCCreateManyPegawaiObjInput | Prisma.PenilaiCCCreateManyPegawaiObjInput[];
    skipDuplicates?: boolean;
};
export type PenilaiCCUpsertWithWhereUniqueWithoutPegawaiObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPegawaiObjInput>;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPegawaiObjInput>;
};
export type PenilaiCCUpdateWithWhereUniqueWithoutPegawaiObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPegawaiObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPegawaiObjInput>;
};
export type PenilaiCCUpdateManyWithWhereWithoutPegawaiObjInput = {
    where: Prisma.PenilaiCCScalarWhereInput;
    data: Prisma.XOR<Prisma.PenilaiCCUpdateManyMutationInput, Prisma.PenilaiCCUncheckedUpdateManyWithoutPegawaiObjInput>;
};
export type PenilaiCCScalarWhereInput = {
    AND?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
    OR?: Prisma.PenilaiCCScalarWhereInput[];
    NOT?: Prisma.PenilaiCCScalarWhereInput | Prisma.PenilaiCCScalarWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaiCC"> | string;
    pegawai?: Prisma.StringFilter<"PenilaiCC"> | string;
    penilaiancc?: Prisma.StringFilter<"PenilaiCC"> | string;
};
export type PenilaiCCCreateWithoutPenilaianObjInput = {
    uuid?: string;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutPenilaiObjInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCUncheckedCreateWithoutPenilaianObjInput = {
    uuid?: string;
    pegawai: string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutPenilaiObjInput;
};
export type PenilaiCCCreateOrConnectWithoutPenilaianObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput>;
};
export type PenilaiCCCreateManyPenilaianObjInputEnvelope = {
    data: Prisma.PenilaiCCCreateManyPenilaianObjInput | Prisma.PenilaiCCCreateManyPenilaianObjInput[];
    skipDuplicates?: boolean;
};
export type PenilaiCCUpsertWithWhereUniqueWithoutPenilaianObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPenilaianObjInput>;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianObjInput>;
};
export type PenilaiCCUpdateWithWhereUniqueWithoutPenilaianObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPenilaianObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPenilaianObjInput>;
};
export type PenilaiCCUpdateManyWithWhereWithoutPenilaianObjInput = {
    where: Prisma.PenilaiCCScalarWhereInput;
    data: Prisma.XOR<Prisma.PenilaiCCUpdateManyMutationInput, Prisma.PenilaiCCUncheckedUpdateManyWithoutPenilaianObjInput>;
};
export type PenilaiCCCreateWithoutPenilaianAnswerObjInput = {
    uuid?: string;
    pegawaiObj: Prisma.PegawaiCreateNestedOneWithoutPenilaiObjInput;
    penilaianObj: Prisma.PenilaianCCCreateNestedOneWithoutPenilaiObjInput;
};
export type PenilaiCCUncheckedCreateWithoutPenilaianAnswerObjInput = {
    uuid?: string;
    pegawai: string;
    penilaiancc: string;
};
export type PenilaiCCCreateOrConnectWithoutPenilaianAnswerObjInput = {
    where: Prisma.PenilaiCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianAnswerObjInput>;
};
export type PenilaiCCUpsertWithoutPenilaianAnswerObjInput = {
    update: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPenilaianAnswerObjInput>;
    create: Prisma.XOR<Prisma.PenilaiCCCreateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedCreateWithoutPenilaianAnswerObjInput>;
    where?: Prisma.PenilaiCCWhereInput;
};
export type PenilaiCCUpdateToOneWithWhereWithoutPenilaianAnswerObjInput = {
    where?: Prisma.PenilaiCCWhereInput;
    data: Prisma.XOR<Prisma.PenilaiCCUpdateWithoutPenilaianAnswerObjInput, Prisma.PenilaiCCUncheckedUpdateWithoutPenilaianAnswerObjInput>;
};
export type PenilaiCCUpdateWithoutPenilaianAnswerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutPenilaiObjNestedInput;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateWithoutPenilaianAnswerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PenilaiCCCreateManyPegawaiObjInput = {
    uuid?: string;
    penilaiancc: string;
};
export type PenilaiCCUpdateWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianObj?: Prisma.PenilaianCCUpdateOneRequiredWithoutPenilaiObjNestedInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateManyWithoutPegawaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaiancc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PenilaiCCCreateManyPenilaianObjInput = {
    uuid?: string;
    pegawai: string;
};
export type PenilaiCCUpdateWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawaiObj?: Prisma.PegawaiUpdateOneRequiredWithoutPenilaiObjNestedInput;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianAnswerObj?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjNestedInput;
};
export type PenilaiCCUncheckedUpdateManyWithoutPenilaianObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type PenilaiCCCountOutputType
 */
export type PenilaiCCCountOutputType = {
    penilaianAnswerObj: number;
};
export type PenilaiCCCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianAnswerObj?: boolean | PenilaiCCCountOutputTypeCountPenilaianAnswerObjArgs;
};
/**
 * PenilaiCCCountOutputType without action
 */
export type PenilaiCCCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCCCountOutputType
     */
    select?: Prisma.PenilaiCCCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PenilaiCCCountOutputType without action
 */
export type PenilaiCCCountOutputTypeCountPenilaianAnswerObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCcAnswerWhereInput;
};
export type PenilaiCCSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    penilaianAnswerObj?: boolean | Prisma.PenilaiCC$penilaianAnswerObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaiCCCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaiCC"]>;
export type PenilaiCCSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaiCC"]>;
export type PenilaiCCSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaiCC"]>;
export type PenilaiCCSelectScalar = {
    uuid?: boolean;
    pegawai?: boolean;
    penilaiancc?: boolean;
};
export type PenilaiCCOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "pegawai" | "penilaiancc", ExtArgs["result"]["penilaiCC"]>;
export type PenilaiCCInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
    penilaianAnswerObj?: boolean | Prisma.PenilaiCC$penilaianAnswerObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaiCCCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PenilaiCCIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
};
export type PenilaiCCIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawaiObj?: boolean | Prisma.PegawaiDefaultArgs<ExtArgs>;
    penilaianObj?: boolean | Prisma.PenilaianCCDefaultArgs<ExtArgs>;
};
export type $PenilaiCCPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PenilaiCC";
    objects: {
        pegawaiObj: Prisma.$PegawaiPayload<ExtArgs>;
        penilaianObj: Prisma.$PenilaianCCPayload<ExtArgs>;
        penilaianAnswerObj: Prisma.$PenilaianCcAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        pegawai: string;
        penilaiancc: string;
    }, ExtArgs["result"]["penilaiCC"]>;
    composites: {};
};
export type PenilaiCCGetPayload<S extends boolean | null | undefined | PenilaiCCDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload, S>;
export type PenilaiCCCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PenilaiCCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PenilaiCCCountAggregateInputType | true;
};
export interface PenilaiCCDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PenilaiCC'];
        meta: {
            name: 'PenilaiCC';
        };
    };
    /**
     * Find zero or one PenilaiCC that matches the filter.
     * @param {PenilaiCCFindUniqueArgs} args - Arguments to find a PenilaiCC
     * @example
     * // Get one PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaiCCFindUniqueArgs>(args: Prisma.SelectSubset<T, PenilaiCCFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PenilaiCC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaiCCFindUniqueOrThrowArgs} args - Arguments to find a PenilaiCC
     * @example
     * // Get one PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaiCCFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PenilaiCCFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaiCC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCFindFirstArgs} args - Arguments to find a PenilaiCC
     * @example
     * // Get one PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaiCCFindFirstArgs>(args?: Prisma.SelectSubset<T, PenilaiCCFindFirstArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaiCC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCFindFirstOrThrowArgs} args - Arguments to find a PenilaiCC
     * @example
     * // Get one PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaiCCFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PenilaiCCFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PenilaiCCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenilaiCCS
     * const penilaiCCS = await prisma.penilaiCC.findMany()
     *
     * // Get first 10 PenilaiCCS
     * const penilaiCCS = await prisma.penilaiCC.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const penilaiCCWithUuidOnly = await prisma.penilaiCC.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends PenilaiCCFindManyArgs>(args?: Prisma.SelectSubset<T, PenilaiCCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PenilaiCC.
     * @param {PenilaiCCCreateArgs} args - Arguments to create a PenilaiCC.
     * @example
     * // Create one PenilaiCC
     * const PenilaiCC = await prisma.penilaiCC.create({
     *   data: {
     *     // ... data to create a PenilaiCC
     *   }
     * })
     *
     */
    create<T extends PenilaiCCCreateArgs>(args: Prisma.SelectSubset<T, PenilaiCCCreateArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PenilaiCCS.
     * @param {PenilaiCCCreateManyArgs} args - Arguments to create many PenilaiCCS.
     * @example
     * // Create many PenilaiCCS
     * const penilaiCC = await prisma.penilaiCC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PenilaiCCCreateManyArgs>(args?: Prisma.SelectSubset<T, PenilaiCCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PenilaiCCS and returns the data saved in the database.
     * @param {PenilaiCCCreateManyAndReturnArgs} args - Arguments to create many PenilaiCCS.
     * @example
     * // Create many PenilaiCCS
     * const penilaiCC = await prisma.penilaiCC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PenilaiCCS and only return the `uuid`
     * const penilaiCCWithUuidOnly = await prisma.penilaiCC.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PenilaiCCCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PenilaiCCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PenilaiCC.
     * @param {PenilaiCCDeleteArgs} args - Arguments to delete one PenilaiCC.
     * @example
     * // Delete one PenilaiCC
     * const PenilaiCC = await prisma.penilaiCC.delete({
     *   where: {
     *     // ... filter to delete one PenilaiCC
     *   }
     * })
     *
     */
    delete<T extends PenilaiCCDeleteArgs>(args: Prisma.SelectSubset<T, PenilaiCCDeleteArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PenilaiCC.
     * @param {PenilaiCCUpdateArgs} args - Arguments to update one PenilaiCC.
     * @example
     * // Update one PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PenilaiCCUpdateArgs>(args: Prisma.SelectSubset<T, PenilaiCCUpdateArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PenilaiCCS.
     * @param {PenilaiCCDeleteManyArgs} args - Arguments to filter PenilaiCCS to delete.
     * @example
     * // Delete a few PenilaiCCS
     * const { count } = await prisma.penilaiCC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PenilaiCCDeleteManyArgs>(args?: Prisma.SelectSubset<T, PenilaiCCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaiCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenilaiCCS
     * const penilaiCC = await prisma.penilaiCC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PenilaiCCUpdateManyArgs>(args: Prisma.SelectSubset<T, PenilaiCCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaiCCS and returns the data updated in the database.
     * @param {PenilaiCCUpdateManyAndReturnArgs} args - Arguments to update many PenilaiCCS.
     * @example
     * // Update many PenilaiCCS
     * const penilaiCC = await prisma.penilaiCC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PenilaiCCS and only return the `uuid`
     * const penilaiCCWithUuidOnly = await prisma.penilaiCC.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenilaiCCUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PenilaiCCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PenilaiCC.
     * @param {PenilaiCCUpsertArgs} args - Arguments to update or create a PenilaiCC.
     * @example
     * // Update or create a PenilaiCC
     * const penilaiCC = await prisma.penilaiCC.upsert({
     *   create: {
     *     // ... data to create a PenilaiCC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenilaiCC we want to update
     *   }
     * })
     */
    upsert<T extends PenilaiCCUpsertArgs>(args: Prisma.SelectSubset<T, PenilaiCCUpsertArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PenilaiCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCCountArgs} args - Arguments to filter PenilaiCCS to count.
     * @example
     * // Count the number of PenilaiCCS
     * const count = await prisma.penilaiCC.count({
     *   where: {
     *     // ... the filter for the PenilaiCCS we want to count
     *   }
     * })
    **/
    count<T extends PenilaiCCCountArgs>(args?: Prisma.Subset<T, PenilaiCCCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PenilaiCCCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PenilaiCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaiCCAggregateArgs>(args: Prisma.Subset<T, PenilaiCCAggregateArgs>): Prisma.PrismaPromise<GetPenilaiCCAggregateType<T>>;
    /**
     * Group by PenilaiCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaiCCGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PenilaiCCGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PenilaiCCGroupByArgs['orderBy'];
    } : {
        orderBy?: PenilaiCCGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PenilaiCCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaiCCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PenilaiCC model
     */
    readonly fields: PenilaiCCFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PenilaiCC.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PenilaiCCClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pegawaiObj<T extends Prisma.PegawaiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PegawaiDefaultArgs<ExtArgs>>): Prisma.Prisma__PegawaiClient<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    penilaianObj<T extends Prisma.PenilaianCCDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCCDefaultArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    penilaianAnswerObj<T extends Prisma.PenilaiCC$penilaianAnswerObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaiCC$penilaianAnswerObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PenilaiCC model
 */
export interface PenilaiCCFieldRefs {
    readonly uuid: Prisma.FieldRef<"PenilaiCC", 'String'>;
    readonly pegawai: Prisma.FieldRef<"PenilaiCC", 'String'>;
    readonly penilaiancc: Prisma.FieldRef<"PenilaiCC", 'String'>;
}
/**
 * PenilaiCC findUnique
 */
export type PenilaiCCFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaiCC to fetch.
     */
    where: Prisma.PenilaiCCWhereUniqueInput;
};
/**
 * PenilaiCC findUniqueOrThrow
 */
export type PenilaiCCFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaiCC to fetch.
     */
    where: Prisma.PenilaiCCWhereUniqueInput;
};
/**
 * PenilaiCC findFirst
 */
export type PenilaiCCFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaiCC to fetch.
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaiCCS to fetch.
     */
    orderBy?: Prisma.PenilaiCCOrderByWithRelationInput | Prisma.PenilaiCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaiCCS.
     */
    cursor?: Prisma.PenilaiCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaiCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaiCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaiCCS.
     */
    distinct?: Prisma.PenilaiCCScalarFieldEnum | Prisma.PenilaiCCScalarFieldEnum[];
};
/**
 * PenilaiCC findFirstOrThrow
 */
export type PenilaiCCFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaiCC to fetch.
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaiCCS to fetch.
     */
    orderBy?: Prisma.PenilaiCCOrderByWithRelationInput | Prisma.PenilaiCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaiCCS.
     */
    cursor?: Prisma.PenilaiCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaiCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaiCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaiCCS.
     */
    distinct?: Prisma.PenilaiCCScalarFieldEnum | Prisma.PenilaiCCScalarFieldEnum[];
};
/**
 * PenilaiCC findMany
 */
export type PenilaiCCFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaiCCS to fetch.
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaiCCS to fetch.
     */
    orderBy?: Prisma.PenilaiCCOrderByWithRelationInput | Prisma.PenilaiCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PenilaiCCS.
     */
    cursor?: Prisma.PenilaiCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaiCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaiCCS.
     */
    skip?: number;
    distinct?: Prisma.PenilaiCCScalarFieldEnum | Prisma.PenilaiCCScalarFieldEnum[];
};
/**
 * PenilaiCC create
 */
export type PenilaiCCCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * The data needed to create a PenilaiCC.
     */
    data: Prisma.XOR<Prisma.PenilaiCCCreateInput, Prisma.PenilaiCCUncheckedCreateInput>;
};
/**
 * PenilaiCC createMany
 */
export type PenilaiCCCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PenilaiCCS.
     */
    data: Prisma.PenilaiCCCreateManyInput | Prisma.PenilaiCCCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaiCC createManyAndReturn
 */
export type PenilaiCCCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * The data used to create many PenilaiCCS.
     */
    data: Prisma.PenilaiCCCreateManyInput | Prisma.PenilaiCCCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PenilaiCC update
 */
export type PenilaiCCUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * The data needed to update a PenilaiCC.
     */
    data: Prisma.XOR<Prisma.PenilaiCCUpdateInput, Prisma.PenilaiCCUncheckedUpdateInput>;
    /**
     * Choose, which PenilaiCC to update.
     */
    where: Prisma.PenilaiCCWhereUniqueInput;
};
/**
 * PenilaiCC updateMany
 */
export type PenilaiCCUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PenilaiCCS.
     */
    data: Prisma.XOR<Prisma.PenilaiCCUpdateManyMutationInput, Prisma.PenilaiCCUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaiCCS to update
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * Limit how many PenilaiCCS to update.
     */
    limit?: number;
};
/**
 * PenilaiCC updateManyAndReturn
 */
export type PenilaiCCUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * The data used to update PenilaiCCS.
     */
    data: Prisma.XOR<Prisma.PenilaiCCUpdateManyMutationInput, Prisma.PenilaiCCUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaiCCS to update
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * Limit how many PenilaiCCS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PenilaiCC upsert
 */
export type PenilaiCCUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * The filter to search for the PenilaiCC to update in case it exists.
     */
    where: Prisma.PenilaiCCWhereUniqueInput;
    /**
     * In case the PenilaiCC found by the `where` argument doesn't exist, create a new PenilaiCC with this data.
     */
    create: Prisma.XOR<Prisma.PenilaiCCCreateInput, Prisma.PenilaiCCUncheckedCreateInput>;
    /**
     * In case the PenilaiCC was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PenilaiCCUpdateInput, Prisma.PenilaiCCUncheckedUpdateInput>;
};
/**
 * PenilaiCC delete
 */
export type PenilaiCCDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
    /**
     * Filter which PenilaiCC to delete.
     */
    where: Prisma.PenilaiCCWhereUniqueInput;
};
/**
 * PenilaiCC deleteMany
 */
export type PenilaiCCDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaiCCS to delete
     */
    where?: Prisma.PenilaiCCWhereInput;
    /**
     * Limit how many PenilaiCCS to delete.
     */
    limit?: number;
};
/**
 * PenilaiCC.penilaianAnswerObj
 */
export type PenilaiCC$penilaianAnswerObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * PenilaiCC without action
 */
export type PenilaiCCDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaiCC
     */
    select?: Prisma.PenilaiCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaiCC
     */
    omit?: Prisma.PenilaiCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaiCCInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PenilaiCC.d.ts.map