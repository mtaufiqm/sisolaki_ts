import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model EOMPenilaian
 *
 */
export type EOMPenilaianModel = runtime.Types.Result.DefaultSelection<Prisma.$EOMPenilaianPayload>;
export type AggregateEOMPenilaian = {
    _count: EOMPenilaianCountAggregateOutputType | null;
    _avg: EOMPenilaianAvgAggregateOutputType | null;
    _sum: EOMPenilaianSumAggregateOutputType | null;
    _min: EOMPenilaianMinAggregateOutputType | null;
    _max: EOMPenilaianMaxAggregateOutputType | null;
};
export type EOMPenilaianAvgAggregateOutputType = {
    status: number | null;
};
export type EOMPenilaianSumAggregateOutputType = {
    status: number | null;
};
export type EOMPenilaianMinAggregateOutputType = {
    uuid: string | null;
    desc: string | null;
    periode: string | null;
    start_date: string | null;
    end_date: string | null;
    status: number | null;
    created_at: string | null;
    last_updated: string | null;
};
export type EOMPenilaianMaxAggregateOutputType = {
    uuid: string | null;
    desc: string | null;
    periode: string | null;
    start_date: string | null;
    end_date: string | null;
    status: number | null;
    created_at: string | null;
    last_updated: string | null;
};
export type EOMPenilaianCountAggregateOutputType = {
    uuid: number;
    desc: number;
    periode: number;
    start_date: number;
    end_date: number;
    status: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type EOMPenilaianAvgAggregateInputType = {
    status?: true;
};
export type EOMPenilaianSumAggregateInputType = {
    status?: true;
};
export type EOMPenilaianMinAggregateInputType = {
    uuid?: true;
    desc?: true;
    periode?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
};
export type EOMPenilaianMaxAggregateInputType = {
    uuid?: true;
    desc?: true;
    periode?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
};
export type EOMPenilaianCountAggregateInputType = {
    uuid?: true;
    desc?: true;
    periode?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type EOMPenilaianAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EOMPenilaian to aggregate.
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMPenilaians to fetch.
     */
    orderBy?: Prisma.EOMPenilaianOrderByWithRelationInput | Prisma.EOMPenilaianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EOMPenilaianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMPenilaians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMPenilaians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EOMPenilaians
    **/
    _count?: true | EOMPenilaianCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EOMPenilaianAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EOMPenilaianSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EOMPenilaianMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EOMPenilaianMaxAggregateInputType;
};
export type GetEOMPenilaianAggregateType<T extends EOMPenilaianAggregateArgs> = {
    [P in keyof T & keyof AggregateEOMPenilaian]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEOMPenilaian[P]> : Prisma.GetScalarType<T[P], AggregateEOMPenilaian[P]>;
};
export type EOMPenilaianGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EOMPenilaianWhereInput;
    orderBy?: Prisma.EOMPenilaianOrderByWithAggregationInput | Prisma.EOMPenilaianOrderByWithAggregationInput[];
    by: Prisma.EOMPenilaianScalarFieldEnum[] | Prisma.EOMPenilaianScalarFieldEnum;
    having?: Prisma.EOMPenilaianScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EOMPenilaianCountAggregateInputType | true;
    _avg?: EOMPenilaianAvgAggregateInputType;
    _sum?: EOMPenilaianSumAggregateInputType;
    _min?: EOMPenilaianMinAggregateInputType;
    _max?: EOMPenilaianMaxAggregateInputType;
};
export type EOMPenilaianGroupByOutputType = {
    uuid: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    status: number;
    created_at: string;
    last_updated: string;
    _count: EOMPenilaianCountAggregateOutputType | null;
    _avg: EOMPenilaianAvgAggregateOutputType | null;
    _sum: EOMPenilaianSumAggregateOutputType | null;
    _min: EOMPenilaianMinAggregateOutputType | null;
    _max: EOMPenilaianMaxAggregateOutputType | null;
};
type GetEOMPenilaianGroupByPayload<T extends EOMPenilaianGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EOMPenilaianGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EOMPenilaianGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EOMPenilaianGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EOMPenilaianGroupByOutputType[P]>;
}>>;
export type EOMPenilaianWhereInput = {
    AND?: Prisma.EOMPenilaianWhereInput | Prisma.EOMPenilaianWhereInput[];
    OR?: Prisma.EOMPenilaianWhereInput[];
    NOT?: Prisma.EOMPenilaianWhereInput | Prisma.EOMPenilaianWhereInput[];
    uuid?: Prisma.StringFilter<"EOMPenilaian"> | string;
    desc?: Prisma.StringFilter<"EOMPenilaian"> | string;
    periode?: Prisma.StringFilter<"EOMPenilaian"> | string;
    start_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    end_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    status?: Prisma.IntFilter<"EOMPenilaian"> | number;
    created_at?: Prisma.StringFilter<"EOMPenilaian"> | string;
    last_updated?: Prisma.StringFilter<"EOMPenilaian"> | string;
    statusObj?: Prisma.XOR<Prisma.EOMStatusScalarRelationFilter, Prisma.EOMStatusWhereInput>;
};
export type EOMPenilaianOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    statusObj?: Prisma.EOMStatusOrderByWithRelationInput;
};
export type EOMPenilaianWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.EOMPenilaianWhereInput | Prisma.EOMPenilaianWhereInput[];
    OR?: Prisma.EOMPenilaianWhereInput[];
    NOT?: Prisma.EOMPenilaianWhereInput | Prisma.EOMPenilaianWhereInput[];
    desc?: Prisma.StringFilter<"EOMPenilaian"> | string;
    periode?: Prisma.StringFilter<"EOMPenilaian"> | string;
    start_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    end_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    status?: Prisma.IntFilter<"EOMPenilaian"> | number;
    created_at?: Prisma.StringFilter<"EOMPenilaian"> | string;
    last_updated?: Prisma.StringFilter<"EOMPenilaian"> | string;
    statusObj?: Prisma.XOR<Prisma.EOMStatusScalarRelationFilter, Prisma.EOMStatusWhereInput>;
}, "uuid">;
export type EOMPenilaianOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.EOMPenilaianCountOrderByAggregateInput;
    _avg?: Prisma.EOMPenilaianAvgOrderByAggregateInput;
    _max?: Prisma.EOMPenilaianMaxOrderByAggregateInput;
    _min?: Prisma.EOMPenilaianMinOrderByAggregateInput;
    _sum?: Prisma.EOMPenilaianSumOrderByAggregateInput;
};
export type EOMPenilaianScalarWhereWithAggregatesInput = {
    AND?: Prisma.EOMPenilaianScalarWhereWithAggregatesInput | Prisma.EOMPenilaianScalarWhereWithAggregatesInput[];
    OR?: Prisma.EOMPenilaianScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EOMPenilaianScalarWhereWithAggregatesInput | Prisma.EOMPenilaianScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    desc?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    periode?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    start_date?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    end_date?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    status?: Prisma.IntWithAggregatesFilter<"EOMPenilaian"> | number;
    created_at?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
    last_updated?: Prisma.StringWithAggregatesFilter<"EOMPenilaian"> | string;
};
export type EOMPenilaianCreateInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    created_at: string;
    last_updated: string;
    statusObj: Prisma.EOMStatusCreateNestedOneWithoutPenilaianObjInput;
};
export type EOMPenilaianUncheckedCreateInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    status: number;
    created_at: string;
    last_updated: string;
};
export type EOMPenilaianUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    statusObj?: Prisma.EOMStatusUpdateOneRequiredWithoutPenilaianObjNestedInput;
};
export type EOMPenilaianUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianCreateManyInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    status: number;
    created_at: string;
    last_updated: string;
};
export type EOMPenilaianUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type EOMPenilaianAvgOrderByAggregateInput = {
    status?: Prisma.SortOrder;
};
export type EOMPenilaianMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type EOMPenilaianMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type EOMPenilaianSumOrderByAggregateInput = {
    status?: Prisma.SortOrder;
};
export type EOMPenilaianListRelationFilter = {
    every?: Prisma.EOMPenilaianWhereInput;
    some?: Prisma.EOMPenilaianWhereInput;
    none?: Prisma.EOMPenilaianWhereInput;
};
export type EOMPenilaianOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EOMPenilaianCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput> | Prisma.EOMPenilaianCreateWithoutStatusObjInput[] | Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput | Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.EOMPenilaianCreateManyStatusObjInputEnvelope;
    connect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
};
export type EOMPenilaianUncheckedCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput> | Prisma.EOMPenilaianCreateWithoutStatusObjInput[] | Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput | Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.EOMPenilaianCreateManyStatusObjInputEnvelope;
    connect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
};
export type EOMPenilaianUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput> | Prisma.EOMPenilaianCreateWithoutStatusObjInput[] | Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput | Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.EOMPenilaianUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.EOMPenilaianUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.EOMPenilaianCreateManyStatusObjInputEnvelope;
    set?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    disconnect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    delete?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    connect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    update?: Prisma.EOMPenilaianUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.EOMPenilaianUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.EOMPenilaianUpdateManyWithWhereWithoutStatusObjInput | Prisma.EOMPenilaianUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.EOMPenilaianScalarWhereInput | Prisma.EOMPenilaianScalarWhereInput[];
};
export type EOMPenilaianUncheckedUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput> | Prisma.EOMPenilaianCreateWithoutStatusObjInput[] | Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput | Prisma.EOMPenilaianCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.EOMPenilaianUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.EOMPenilaianUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.EOMPenilaianCreateManyStatusObjInputEnvelope;
    set?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    disconnect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    delete?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    connect?: Prisma.EOMPenilaianWhereUniqueInput | Prisma.EOMPenilaianWhereUniqueInput[];
    update?: Prisma.EOMPenilaianUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.EOMPenilaianUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.EOMPenilaianUpdateManyWithWhereWithoutStatusObjInput | Prisma.EOMPenilaianUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.EOMPenilaianScalarWhereInput | Prisma.EOMPenilaianScalarWhereInput[];
};
export type EOMPenilaianCreateWithoutStatusObjInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    created_at: string;
    last_updated: string;
};
export type EOMPenilaianUncheckedCreateWithoutStatusObjInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    created_at: string;
    last_updated: string;
};
export type EOMPenilaianCreateOrConnectWithoutStatusObjInput = {
    where: Prisma.EOMPenilaianWhereUniqueInput;
    create: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput>;
};
export type EOMPenilaianCreateManyStatusObjInputEnvelope = {
    data: Prisma.EOMPenilaianCreateManyStatusObjInput | Prisma.EOMPenilaianCreateManyStatusObjInput[];
    skipDuplicates?: boolean;
};
export type EOMPenilaianUpsertWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.EOMPenilaianWhereUniqueInput;
    update: Prisma.XOR<Prisma.EOMPenilaianUpdateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedUpdateWithoutStatusObjInput>;
    create: Prisma.XOR<Prisma.EOMPenilaianCreateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedCreateWithoutStatusObjInput>;
};
export type EOMPenilaianUpdateWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.EOMPenilaianWhereUniqueInput;
    data: Prisma.XOR<Prisma.EOMPenilaianUpdateWithoutStatusObjInput, Prisma.EOMPenilaianUncheckedUpdateWithoutStatusObjInput>;
};
export type EOMPenilaianUpdateManyWithWhereWithoutStatusObjInput = {
    where: Prisma.EOMPenilaianScalarWhereInput;
    data: Prisma.XOR<Prisma.EOMPenilaianUpdateManyMutationInput, Prisma.EOMPenilaianUncheckedUpdateManyWithoutStatusObjInput>;
};
export type EOMPenilaianScalarWhereInput = {
    AND?: Prisma.EOMPenilaianScalarWhereInput | Prisma.EOMPenilaianScalarWhereInput[];
    OR?: Prisma.EOMPenilaianScalarWhereInput[];
    NOT?: Prisma.EOMPenilaianScalarWhereInput | Prisma.EOMPenilaianScalarWhereInput[];
    uuid?: Prisma.StringFilter<"EOMPenilaian"> | string;
    desc?: Prisma.StringFilter<"EOMPenilaian"> | string;
    periode?: Prisma.StringFilter<"EOMPenilaian"> | string;
    start_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    end_date?: Prisma.StringFilter<"EOMPenilaian"> | string;
    status?: Prisma.IntFilter<"EOMPenilaian"> | number;
    created_at?: Prisma.StringFilter<"EOMPenilaian"> | string;
    last_updated?: Prisma.StringFilter<"EOMPenilaian"> | string;
};
export type EOMPenilaianCreateManyStatusObjInput = {
    uuid?: string;
    desc: string;
    periode: string;
    start_date: string;
    end_date: string;
    created_at: string;
    last_updated: string;
};
export type EOMPenilaianUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianUncheckedUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianUncheckedUpdateManyWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    periode?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.StringFieldUpdateOperationsInput | string;
    end_date?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMPenilaianSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    periode?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eOMPenilaian"]>;
export type EOMPenilaianSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    periode?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eOMPenilaian"]>;
export type EOMPenilaianSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    periode?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eOMPenilaian"]>;
export type EOMPenilaianSelectScalar = {
    uuid?: boolean;
    desc?: boolean;
    periode?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type EOMPenilaianOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "desc" | "periode" | "start_date" | "end_date" | "status" | "created_at" | "last_updated", ExtArgs["result"]["eOMPenilaian"]>;
export type EOMPenilaianInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
};
export type EOMPenilaianIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
};
export type EOMPenilaianIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statusObj?: boolean | Prisma.EOMStatusDefaultArgs<ExtArgs>;
};
export type $EOMPenilaianPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EOMPenilaian";
    objects: {
        statusObj: Prisma.$EOMStatusPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        desc: string;
        periode: string;
        start_date: string;
        end_date: string;
        status: number;
        created_at: string;
        last_updated: string;
    }, ExtArgs["result"]["eOMPenilaian"]>;
    composites: {};
};
export type EOMPenilaianGetPayload<S extends boolean | null | undefined | EOMPenilaianDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload, S>;
export type EOMPenilaianCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EOMPenilaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EOMPenilaianCountAggregateInputType | true;
};
export interface EOMPenilaianDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EOMPenilaian'];
        meta: {
            name: 'EOMPenilaian';
        };
    };
    /**
     * Find zero or one EOMPenilaian that matches the filter.
     * @param {EOMPenilaianFindUniqueArgs} args - Arguments to find a EOMPenilaian
     * @example
     * // Get one EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EOMPenilaianFindUniqueArgs>(args: Prisma.SelectSubset<T, EOMPenilaianFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EOMPenilaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EOMPenilaianFindUniqueOrThrowArgs} args - Arguments to find a EOMPenilaian
     * @example
     * // Get one EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EOMPenilaianFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EOMPenilaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EOMPenilaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianFindFirstArgs} args - Arguments to find a EOMPenilaian
     * @example
     * // Get one EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EOMPenilaianFindFirstArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianFindFirstArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EOMPenilaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianFindFirstOrThrowArgs} args - Arguments to find a EOMPenilaian
     * @example
     * // Get one EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EOMPenilaianFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EOMPenilaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EOMPenilaians
     * const eOMPenilaians = await prisma.eOMPenilaian.findMany()
     *
     * // Get first 10 EOMPenilaians
     * const eOMPenilaians = await prisma.eOMPenilaian.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const eOMPenilaianWithUuidOnly = await prisma.eOMPenilaian.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends EOMPenilaianFindManyArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EOMPenilaian.
     * @param {EOMPenilaianCreateArgs} args - Arguments to create a EOMPenilaian.
     * @example
     * // Create one EOMPenilaian
     * const EOMPenilaian = await prisma.eOMPenilaian.create({
     *   data: {
     *     // ... data to create a EOMPenilaian
     *   }
     * })
     *
     */
    create<T extends EOMPenilaianCreateArgs>(args: Prisma.SelectSubset<T, EOMPenilaianCreateArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EOMPenilaians.
     * @param {EOMPenilaianCreateManyArgs} args - Arguments to create many EOMPenilaians.
     * @example
     * // Create many EOMPenilaians
     * const eOMPenilaian = await prisma.eOMPenilaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EOMPenilaianCreateManyArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EOMPenilaians and returns the data saved in the database.
     * @param {EOMPenilaianCreateManyAndReturnArgs} args - Arguments to create many EOMPenilaians.
     * @example
     * // Create many EOMPenilaians
     * const eOMPenilaian = await prisma.eOMPenilaian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EOMPenilaians and only return the `uuid`
     * const eOMPenilaianWithUuidOnly = await prisma.eOMPenilaian.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EOMPenilaianCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EOMPenilaian.
     * @param {EOMPenilaianDeleteArgs} args - Arguments to delete one EOMPenilaian.
     * @example
     * // Delete one EOMPenilaian
     * const EOMPenilaian = await prisma.eOMPenilaian.delete({
     *   where: {
     *     // ... filter to delete one EOMPenilaian
     *   }
     * })
     *
     */
    delete<T extends EOMPenilaianDeleteArgs>(args: Prisma.SelectSubset<T, EOMPenilaianDeleteArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EOMPenilaian.
     * @param {EOMPenilaianUpdateArgs} args - Arguments to update one EOMPenilaian.
     * @example
     * // Update one EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EOMPenilaianUpdateArgs>(args: Prisma.SelectSubset<T, EOMPenilaianUpdateArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EOMPenilaians.
     * @param {EOMPenilaianDeleteManyArgs} args - Arguments to filter EOMPenilaians to delete.
     * @example
     * // Delete a few EOMPenilaians
     * const { count } = await prisma.eOMPenilaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EOMPenilaianDeleteManyArgs>(args?: Prisma.SelectSubset<T, EOMPenilaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EOMPenilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EOMPenilaians
     * const eOMPenilaian = await prisma.eOMPenilaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EOMPenilaianUpdateManyArgs>(args: Prisma.SelectSubset<T, EOMPenilaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EOMPenilaians and returns the data updated in the database.
     * @param {EOMPenilaianUpdateManyAndReturnArgs} args - Arguments to update many EOMPenilaians.
     * @example
     * // Update many EOMPenilaians
     * const eOMPenilaian = await prisma.eOMPenilaian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EOMPenilaians and only return the `uuid`
     * const eOMPenilaianWithUuidOnly = await prisma.eOMPenilaian.updateManyAndReturn({
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
    updateManyAndReturn<T extends EOMPenilaianUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EOMPenilaianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EOMPenilaian.
     * @param {EOMPenilaianUpsertArgs} args - Arguments to update or create a EOMPenilaian.
     * @example
     * // Update or create a EOMPenilaian
     * const eOMPenilaian = await prisma.eOMPenilaian.upsert({
     *   create: {
     *     // ... data to create a EOMPenilaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EOMPenilaian we want to update
     *   }
     * })
     */
    upsert<T extends EOMPenilaianUpsertArgs>(args: Prisma.SelectSubset<T, EOMPenilaianUpsertArgs<ExtArgs>>): Prisma.Prisma__EOMPenilaianClient<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EOMPenilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianCountArgs} args - Arguments to filter EOMPenilaians to count.
     * @example
     * // Count the number of EOMPenilaians
     * const count = await prisma.eOMPenilaian.count({
     *   where: {
     *     // ... the filter for the EOMPenilaians we want to count
     *   }
     * })
    **/
    count<T extends EOMPenilaianCountArgs>(args?: Prisma.Subset<T, EOMPenilaianCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EOMPenilaianCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EOMPenilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EOMPenilaianAggregateArgs>(args: Prisma.Subset<T, EOMPenilaianAggregateArgs>): Prisma.PrismaPromise<GetEOMPenilaianAggregateType<T>>;
    /**
     * Group by EOMPenilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMPenilaianGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EOMPenilaianGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EOMPenilaianGroupByArgs['orderBy'];
    } : {
        orderBy?: EOMPenilaianGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EOMPenilaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEOMPenilaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EOMPenilaian model
     */
    readonly fields: EOMPenilaianFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EOMPenilaian.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EOMPenilaianClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    statusObj<T extends Prisma.EOMStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EOMStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EOMPenilaian model
 */
export interface EOMPenilaianFieldRefs {
    readonly uuid: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly desc: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly periode: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly start_date: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly end_date: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly status: Prisma.FieldRef<"EOMPenilaian", 'Int'>;
    readonly created_at: Prisma.FieldRef<"EOMPenilaian", 'String'>;
    readonly last_updated: Prisma.FieldRef<"EOMPenilaian", 'String'>;
}
/**
 * EOMPenilaian findUnique
 */
export type EOMPenilaianFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter, which EOMPenilaian to fetch.
     */
    where: Prisma.EOMPenilaianWhereUniqueInput;
};
/**
 * EOMPenilaian findUniqueOrThrow
 */
export type EOMPenilaianFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter, which EOMPenilaian to fetch.
     */
    where: Prisma.EOMPenilaianWhereUniqueInput;
};
/**
 * EOMPenilaian findFirst
 */
export type EOMPenilaianFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter, which EOMPenilaian to fetch.
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMPenilaians to fetch.
     */
    orderBy?: Prisma.EOMPenilaianOrderByWithRelationInput | Prisma.EOMPenilaianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EOMPenilaians.
     */
    cursor?: Prisma.EOMPenilaianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMPenilaians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMPenilaians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EOMPenilaians.
     */
    distinct?: Prisma.EOMPenilaianScalarFieldEnum | Prisma.EOMPenilaianScalarFieldEnum[];
};
/**
 * EOMPenilaian findFirstOrThrow
 */
export type EOMPenilaianFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter, which EOMPenilaian to fetch.
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMPenilaians to fetch.
     */
    orderBy?: Prisma.EOMPenilaianOrderByWithRelationInput | Prisma.EOMPenilaianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EOMPenilaians.
     */
    cursor?: Prisma.EOMPenilaianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMPenilaians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMPenilaians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EOMPenilaians.
     */
    distinct?: Prisma.EOMPenilaianScalarFieldEnum | Prisma.EOMPenilaianScalarFieldEnum[];
};
/**
 * EOMPenilaian findMany
 */
export type EOMPenilaianFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter, which EOMPenilaians to fetch.
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMPenilaians to fetch.
     */
    orderBy?: Prisma.EOMPenilaianOrderByWithRelationInput | Prisma.EOMPenilaianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EOMPenilaians.
     */
    cursor?: Prisma.EOMPenilaianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMPenilaians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMPenilaians.
     */
    skip?: number;
    distinct?: Prisma.EOMPenilaianScalarFieldEnum | Prisma.EOMPenilaianScalarFieldEnum[];
};
/**
 * EOMPenilaian create
 */
export type EOMPenilaianCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * The data needed to create a EOMPenilaian.
     */
    data: Prisma.XOR<Prisma.EOMPenilaianCreateInput, Prisma.EOMPenilaianUncheckedCreateInput>;
};
/**
 * EOMPenilaian createMany
 */
export type EOMPenilaianCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EOMPenilaians.
     */
    data: Prisma.EOMPenilaianCreateManyInput | Prisma.EOMPenilaianCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EOMPenilaian createManyAndReturn
 */
export type EOMPenilaianCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * The data used to create many EOMPenilaians.
     */
    data: Prisma.EOMPenilaianCreateManyInput | Prisma.EOMPenilaianCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EOMPenilaian update
 */
export type EOMPenilaianUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * The data needed to update a EOMPenilaian.
     */
    data: Prisma.XOR<Prisma.EOMPenilaianUpdateInput, Prisma.EOMPenilaianUncheckedUpdateInput>;
    /**
     * Choose, which EOMPenilaian to update.
     */
    where: Prisma.EOMPenilaianWhereUniqueInput;
};
/**
 * EOMPenilaian updateMany
 */
export type EOMPenilaianUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EOMPenilaians.
     */
    data: Prisma.XOR<Prisma.EOMPenilaianUpdateManyMutationInput, Prisma.EOMPenilaianUncheckedUpdateManyInput>;
    /**
     * Filter which EOMPenilaians to update
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * Limit how many EOMPenilaians to update.
     */
    limit?: number;
};
/**
 * EOMPenilaian updateManyAndReturn
 */
export type EOMPenilaianUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * The data used to update EOMPenilaians.
     */
    data: Prisma.XOR<Prisma.EOMPenilaianUpdateManyMutationInput, Prisma.EOMPenilaianUncheckedUpdateManyInput>;
    /**
     * Filter which EOMPenilaians to update
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * Limit how many EOMPenilaians to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EOMPenilaian upsert
 */
export type EOMPenilaianUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * The filter to search for the EOMPenilaian to update in case it exists.
     */
    where: Prisma.EOMPenilaianWhereUniqueInput;
    /**
     * In case the EOMPenilaian found by the `where` argument doesn't exist, create a new EOMPenilaian with this data.
     */
    create: Prisma.XOR<Prisma.EOMPenilaianCreateInput, Prisma.EOMPenilaianUncheckedCreateInput>;
    /**
     * In case the EOMPenilaian was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EOMPenilaianUpdateInput, Prisma.EOMPenilaianUncheckedUpdateInput>;
};
/**
 * EOMPenilaian delete
 */
export type EOMPenilaianDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
    /**
     * Filter which EOMPenilaian to delete.
     */
    where: Prisma.EOMPenilaianWhereUniqueInput;
};
/**
 * EOMPenilaian deleteMany
 */
export type EOMPenilaianDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EOMPenilaians to delete
     */
    where?: Prisma.EOMPenilaianWhereInput;
    /**
     * Limit how many EOMPenilaians to delete.
     */
    limit?: number;
};
/**
 * EOMPenilaian without action
 */
export type EOMPenilaianDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMPenilaian
     */
    select?: Prisma.EOMPenilaianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMPenilaian
     */
    omit?: Prisma.EOMPenilaianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMPenilaianInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EOMPenilaian.d.ts.map