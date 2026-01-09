import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PenilaianCC
 *
 */
export type PenilaianCCModel = runtime.Types.Result.DefaultSelection<Prisma.$PenilaianCCPayload>;
export type AggregatePenilaianCC = {
    _count: PenilaianCCCountAggregateOutputType | null;
    _avg: PenilaianCCAvgAggregateOutputType | null;
    _sum: PenilaianCCSumAggregateOutputType | null;
    _min: PenilaianCCMinAggregateOutputType | null;
    _max: PenilaianCCMaxAggregateOutputType | null;
};
export type PenilaianCCAvgAggregateOutputType = {
    tahun: number | null;
    status: number | null;
};
export type PenilaianCCSumAggregateOutputType = {
    tahun: number | null;
    status: number | null;
};
export type PenilaianCCMinAggregateOutputType = {
    uuid: string | null;
    desc: string | null;
    tahun: number | null;
    status: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type PenilaianCCMaxAggregateOutputType = {
    uuid: string | null;
    desc: string | null;
    tahun: number | null;
    status: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type PenilaianCCCountAggregateOutputType = {
    uuid: number;
    desc: number;
    tahun: number;
    status: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type PenilaianCCAvgAggregateInputType = {
    tahun?: true;
    status?: true;
};
export type PenilaianCCSumAggregateInputType = {
    tahun?: true;
    status?: true;
};
export type PenilaianCCMinAggregateInputType = {
    uuid?: true;
    desc?: true;
    tahun?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
};
export type PenilaianCCMaxAggregateInputType = {
    uuid?: true;
    desc?: true;
    tahun?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
};
export type PenilaianCCCountAggregateInputType = {
    uuid?: true;
    desc?: true;
    tahun?: true;
    status?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type PenilaianCCAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCC to aggregate.
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCCS to fetch.
     */
    orderBy?: Prisma.PenilaianCCOrderByWithRelationInput | Prisma.PenilaianCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PenilaianCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PenilaianCCS
    **/
    _count?: true | PenilaianCCCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PenilaianCCAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PenilaianCCSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianCCMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianCCMaxAggregateInputType;
};
export type GetPenilaianCCAggregateType<T extends PenilaianCCAggregateArgs> = {
    [P in keyof T & keyof AggregatePenilaianCC]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePenilaianCC[P]> : Prisma.GetScalarType<T[P], AggregatePenilaianCC[P]>;
};
export type PenilaianCCGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCCWhereInput;
    orderBy?: Prisma.PenilaianCCOrderByWithAggregationInput | Prisma.PenilaianCCOrderByWithAggregationInput[];
    by: Prisma.PenilaianCCScalarFieldEnum[] | Prisma.PenilaianCCScalarFieldEnum;
    having?: Prisma.PenilaianCCScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PenilaianCCCountAggregateInputType | true;
    _avg?: PenilaianCCAvgAggregateInputType;
    _sum?: PenilaianCCSumAggregateInputType;
    _min?: PenilaianCCMinAggregateInputType;
    _max?: PenilaianCCMaxAggregateInputType;
};
export type PenilaianCCGroupByOutputType = {
    uuid: string;
    desc: string;
    tahun: number;
    status: number;
    created_at: Date;
    last_updated: Date;
    _count: PenilaianCCCountAggregateOutputType | null;
    _avg: PenilaianCCAvgAggregateOutputType | null;
    _sum: PenilaianCCSumAggregateOutputType | null;
    _min: PenilaianCCMinAggregateOutputType | null;
    _max: PenilaianCCMaxAggregateOutputType | null;
};
type GetPenilaianCCGroupByPayload<T extends PenilaianCCGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PenilaianCCGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PenilaianCCGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PenilaianCCGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PenilaianCCGroupByOutputType[P]>;
}>>;
export type PenilaianCCWhereInput = {
    AND?: Prisma.PenilaianCCWhereInput | Prisma.PenilaianCCWhereInput[];
    OR?: Prisma.PenilaianCCWhereInput[];
    NOT?: Prisma.PenilaianCCWhereInput | Prisma.PenilaianCCWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaianCC"> | string;
    desc?: Prisma.StringFilter<"PenilaianCC"> | string;
    tahun?: Prisma.IntFilter<"PenilaianCC"> | number;
    status?: Prisma.IntFilter<"PenilaianCC"> | number;
    created_at?: Prisma.DateTimeFilter<"PenilaianCC"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"PenilaianCC"> | Date | string;
    candidateObj?: Prisma.CandidateCCListRelationFilter;
    penilaiObj?: Prisma.PenilaiCCListRelationFilter;
};
export type PenilaianCCOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    candidateObj?: Prisma.CandidateCCOrderByRelationAggregateInput;
    penilaiObj?: Prisma.PenilaiCCOrderByRelationAggregateInput;
};
export type PenilaianCCWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    tahun?: number;
    AND?: Prisma.PenilaianCCWhereInput | Prisma.PenilaianCCWhereInput[];
    OR?: Prisma.PenilaianCCWhereInput[];
    NOT?: Prisma.PenilaianCCWhereInput | Prisma.PenilaianCCWhereInput[];
    desc?: Prisma.StringFilter<"PenilaianCC"> | string;
    status?: Prisma.IntFilter<"PenilaianCC"> | number;
    created_at?: Prisma.DateTimeFilter<"PenilaianCC"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"PenilaianCC"> | Date | string;
    candidateObj?: Prisma.CandidateCCListRelationFilter;
    penilaiObj?: Prisma.PenilaiCCListRelationFilter;
}, "uuid" | "tahun">;
export type PenilaianCCOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.PenilaianCCCountOrderByAggregateInput;
    _avg?: Prisma.PenilaianCCAvgOrderByAggregateInput;
    _max?: Prisma.PenilaianCCMaxOrderByAggregateInput;
    _min?: Prisma.PenilaianCCMinOrderByAggregateInput;
    _sum?: Prisma.PenilaianCCSumOrderByAggregateInput;
};
export type PenilaianCCScalarWhereWithAggregatesInput = {
    AND?: Prisma.PenilaianCCScalarWhereWithAggregatesInput | Prisma.PenilaianCCScalarWhereWithAggregatesInput[];
    OR?: Prisma.PenilaianCCScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PenilaianCCScalarWhereWithAggregatesInput | Prisma.PenilaianCCScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"PenilaianCC"> | string;
    desc?: Prisma.StringWithAggregatesFilter<"PenilaianCC"> | string;
    tahun?: Prisma.IntWithAggregatesFilter<"PenilaianCC"> | number;
    status?: Prisma.IntWithAggregatesFilter<"PenilaianCC"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PenilaianCC"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"PenilaianCC"> | Date | string;
};
export type PenilaianCCCreateInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    candidateObj?: Prisma.CandidateCCCreateNestedManyWithoutPenilaianObjInput;
    penilaiObj?: Prisma.PenilaiCCCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCUncheckedCreateInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    candidateObj?: Prisma.CandidateCCUncheckedCreateNestedManyWithoutPenilaianObjInput;
    penilaiObj?: Prisma.PenilaiCCUncheckedCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateObj?: Prisma.CandidateCCUpdateManyWithoutPenilaianObjNestedInput;
    penilaiObj?: Prisma.PenilaiCCUpdateManyWithoutPenilaianObjNestedInput;
};
export type PenilaianCCUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateObj?: Prisma.CandidateCCUncheckedUpdateManyWithoutPenilaianObjNestedInput;
    penilaiObj?: Prisma.PenilaiCCUncheckedUpdateManyWithoutPenilaianObjNestedInput;
};
export type PenilaianCCCreateManyInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCCUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCCUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCCCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCCAvgOrderByAggregateInput = {
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type PenilaianCCMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCCMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCCSumOrderByAggregateInput = {
    tahun?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type PenilaianCCScalarRelationFilter = {
    is?: Prisma.PenilaianCCWhereInput;
    isNot?: Prisma.PenilaianCCWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type PenilaianCCCreateNestedOneWithoutCandidateObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCCCreateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedCreateWithoutCandidateObjInput>;
    connectOrCreate?: Prisma.PenilaianCCCreateOrConnectWithoutCandidateObjInput;
    connect?: Prisma.PenilaianCCWhereUniqueInput;
};
export type PenilaianCCUpdateOneRequiredWithoutCandidateObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCCCreateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedCreateWithoutCandidateObjInput>;
    connectOrCreate?: Prisma.PenilaianCCCreateOrConnectWithoutCandidateObjInput;
    upsert?: Prisma.PenilaianCCUpsertWithoutCandidateObjInput;
    connect?: Prisma.PenilaianCCWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PenilaianCCUpdateToOneWithWhereWithoutCandidateObjInput, Prisma.PenilaianCCUpdateWithoutCandidateObjInput>, Prisma.PenilaianCCUncheckedUpdateWithoutCandidateObjInput>;
};
export type PenilaianCCCreateNestedOneWithoutPenilaiObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCCCreateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedCreateWithoutPenilaiObjInput>;
    connectOrCreate?: Prisma.PenilaianCCCreateOrConnectWithoutPenilaiObjInput;
    connect?: Prisma.PenilaianCCWhereUniqueInput;
};
export type PenilaianCCUpdateOneRequiredWithoutPenilaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCCCreateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedCreateWithoutPenilaiObjInput>;
    connectOrCreate?: Prisma.PenilaianCCCreateOrConnectWithoutPenilaiObjInput;
    upsert?: Prisma.PenilaianCCUpsertWithoutPenilaiObjInput;
    connect?: Prisma.PenilaianCCWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PenilaianCCUpdateToOneWithWhereWithoutPenilaiObjInput, Prisma.PenilaianCCUpdateWithoutPenilaiObjInput>, Prisma.PenilaianCCUncheckedUpdateWithoutPenilaiObjInput>;
};
export type PenilaianCCCreateWithoutCandidateObjInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaiObj?: Prisma.PenilaiCCCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCUncheckedCreateWithoutCandidateObjInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaiObj?: Prisma.PenilaiCCUncheckedCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCCreateOrConnectWithoutCandidateObjInput = {
    where: Prisma.PenilaianCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCCCreateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedCreateWithoutCandidateObjInput>;
};
export type PenilaianCCUpsertWithoutCandidateObjInput = {
    update: Prisma.XOR<Prisma.PenilaianCCUpdateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedUpdateWithoutCandidateObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCCCreateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedCreateWithoutCandidateObjInput>;
    where?: Prisma.PenilaianCCWhereInput;
};
export type PenilaianCCUpdateToOneWithWhereWithoutCandidateObjInput = {
    where?: Prisma.PenilaianCCWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCCUpdateWithoutCandidateObjInput, Prisma.PenilaianCCUncheckedUpdateWithoutCandidateObjInput>;
};
export type PenilaianCCUpdateWithoutCandidateObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaiObj?: Prisma.PenilaiCCUpdateManyWithoutPenilaianObjNestedInput;
};
export type PenilaianCCUncheckedUpdateWithoutCandidateObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaiObj?: Prisma.PenilaiCCUncheckedUpdateManyWithoutPenilaianObjNestedInput;
};
export type PenilaianCCCreateWithoutPenilaiObjInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    candidateObj?: Prisma.CandidateCCCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCUncheckedCreateWithoutPenilaiObjInput = {
    uuid?: string;
    desc: string;
    tahun: number;
    status?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    candidateObj?: Prisma.CandidateCCUncheckedCreateNestedManyWithoutPenilaianObjInput;
};
export type PenilaianCCCreateOrConnectWithoutPenilaiObjInput = {
    where: Prisma.PenilaianCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCCCreateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedCreateWithoutPenilaiObjInput>;
};
export type PenilaianCCUpsertWithoutPenilaiObjInput = {
    update: Prisma.XOR<Prisma.PenilaianCCUpdateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedUpdateWithoutPenilaiObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCCCreateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedCreateWithoutPenilaiObjInput>;
    where?: Prisma.PenilaianCCWhereInput;
};
export type PenilaianCCUpdateToOneWithWhereWithoutPenilaiObjInput = {
    where?: Prisma.PenilaianCCWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCCUpdateWithoutPenilaiObjInput, Prisma.PenilaianCCUncheckedUpdateWithoutPenilaiObjInput>;
};
export type PenilaianCCUpdateWithoutPenilaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateObj?: Prisma.CandidateCCUpdateManyWithoutPenilaianObjNestedInput;
};
export type PenilaianCCUncheckedUpdateWithoutPenilaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateObj?: Prisma.CandidateCCUncheckedUpdateManyWithoutPenilaianObjNestedInput;
};
/**
 * Count Type PenilaianCCCountOutputType
 */
export type PenilaianCCCountOutputType = {
    candidateObj: number;
    penilaiObj: number;
};
export type PenilaianCCCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    candidateObj?: boolean | PenilaianCCCountOutputTypeCountCandidateObjArgs;
    penilaiObj?: boolean | PenilaianCCCountOutputTypeCountPenilaiObjArgs;
};
/**
 * PenilaianCCCountOutputType without action
 */
export type PenilaianCCCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCCCountOutputType
     */
    select?: Prisma.PenilaianCCCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PenilaianCCCountOutputType without action
 */
export type PenilaianCCCountOutputTypeCountCandidateObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CandidateCCWhereInput;
};
/**
 * PenilaianCCCountOutputType without action
 */
export type PenilaianCCCountOutputTypeCountPenilaiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaiCCWhereInput;
};
export type PenilaianCCSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    tahun?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    candidateObj?: boolean | Prisma.PenilaianCC$candidateObjArgs<ExtArgs>;
    penilaiObj?: boolean | Prisma.PenilaianCC$penilaiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaianCCCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaianCC"]>;
export type PenilaianCCSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    tahun?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
}, ExtArgs["result"]["penilaianCC"]>;
export type PenilaianCCSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    desc?: boolean;
    tahun?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
}, ExtArgs["result"]["penilaianCC"]>;
export type PenilaianCCSelectScalar = {
    uuid?: boolean;
    desc?: boolean;
    tahun?: boolean;
    status?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type PenilaianCCOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "desc" | "tahun" | "status" | "created_at" | "last_updated", ExtArgs["result"]["penilaianCC"]>;
export type PenilaianCCInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    candidateObj?: boolean | Prisma.PenilaianCC$candidateObjArgs<ExtArgs>;
    penilaiObj?: boolean | Prisma.PenilaianCC$penilaiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaianCCCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PenilaianCCIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PenilaianCCIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PenilaianCCPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PenilaianCC";
    objects: {
        candidateObj: Prisma.$CandidateCCPayload<ExtArgs>[];
        penilaiObj: Prisma.$PenilaiCCPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        desc: string;
        tahun: number;
        status: number;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["penilaianCC"]>;
    composites: {};
};
export type PenilaianCCGetPayload<S extends boolean | null | undefined | PenilaianCCDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload, S>;
export type PenilaianCCCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PenilaianCCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PenilaianCCCountAggregateInputType | true;
};
export interface PenilaianCCDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PenilaianCC'];
        meta: {
            name: 'PenilaianCC';
        };
    };
    /**
     * Find zero or one PenilaianCC that matches the filter.
     * @param {PenilaianCCFindUniqueArgs} args - Arguments to find a PenilaianCC
     * @example
     * // Get one PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaianCCFindUniqueArgs>(args: Prisma.SelectSubset<T, PenilaianCCFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PenilaianCC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaianCCFindUniqueOrThrowArgs} args - Arguments to find a PenilaianCC
     * @example
     * // Get one PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaianCCFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PenilaianCCFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCFindFirstArgs} args - Arguments to find a PenilaianCC
     * @example
     * // Get one PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaianCCFindFirstArgs>(args?: Prisma.SelectSubset<T, PenilaianCCFindFirstArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCFindFirstOrThrowArgs} args - Arguments to find a PenilaianCC
     * @example
     * // Get one PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaianCCFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PenilaianCCFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PenilaianCCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenilaianCCS
     * const penilaianCCS = await prisma.penilaianCC.findMany()
     *
     * // Get first 10 PenilaianCCS
     * const penilaianCCS = await prisma.penilaianCC.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const penilaianCCWithUuidOnly = await prisma.penilaianCC.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends PenilaianCCFindManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PenilaianCC.
     * @param {PenilaianCCCreateArgs} args - Arguments to create a PenilaianCC.
     * @example
     * // Create one PenilaianCC
     * const PenilaianCC = await prisma.penilaianCC.create({
     *   data: {
     *     // ... data to create a PenilaianCC
     *   }
     * })
     *
     */
    create<T extends PenilaianCCCreateArgs>(args: Prisma.SelectSubset<T, PenilaianCCCreateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PenilaianCCS.
     * @param {PenilaianCCCreateManyArgs} args - Arguments to create many PenilaianCCS.
     * @example
     * // Create many PenilaianCCS
     * const penilaianCC = await prisma.penilaianCC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PenilaianCCCreateManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PenilaianCCS and returns the data saved in the database.
     * @param {PenilaianCCCreateManyAndReturnArgs} args - Arguments to create many PenilaianCCS.
     * @example
     * // Create many PenilaianCCS
     * const penilaianCC = await prisma.penilaianCC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PenilaianCCS and only return the `uuid`
     * const penilaianCCWithUuidOnly = await prisma.penilaianCC.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PenilaianCCCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PenilaianCCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PenilaianCC.
     * @param {PenilaianCCDeleteArgs} args - Arguments to delete one PenilaianCC.
     * @example
     * // Delete one PenilaianCC
     * const PenilaianCC = await prisma.penilaianCC.delete({
     *   where: {
     *     // ... filter to delete one PenilaianCC
     *   }
     * })
     *
     */
    delete<T extends PenilaianCCDeleteArgs>(args: Prisma.SelectSubset<T, PenilaianCCDeleteArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PenilaianCC.
     * @param {PenilaianCCUpdateArgs} args - Arguments to update one PenilaianCC.
     * @example
     * // Update one PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PenilaianCCUpdateArgs>(args: Prisma.SelectSubset<T, PenilaianCCUpdateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PenilaianCCS.
     * @param {PenilaianCCDeleteManyArgs} args - Arguments to filter PenilaianCCS to delete.
     * @example
     * // Delete a few PenilaianCCS
     * const { count } = await prisma.penilaianCC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PenilaianCCDeleteManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenilaianCCS
     * const penilaianCC = await prisma.penilaianCC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PenilaianCCUpdateManyArgs>(args: Prisma.SelectSubset<T, PenilaianCCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCCS and returns the data updated in the database.
     * @param {PenilaianCCUpdateManyAndReturnArgs} args - Arguments to update many PenilaianCCS.
     * @example
     * // Update many PenilaianCCS
     * const penilaianCC = await prisma.penilaianCC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PenilaianCCS and only return the `uuid`
     * const penilaianCCWithUuidOnly = await prisma.penilaianCC.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenilaianCCUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PenilaianCCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PenilaianCC.
     * @param {PenilaianCCUpsertArgs} args - Arguments to update or create a PenilaianCC.
     * @example
     * // Update or create a PenilaianCC
     * const penilaianCC = await prisma.penilaianCC.upsert({
     *   create: {
     *     // ... data to create a PenilaianCC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenilaianCC we want to update
     *   }
     * })
     */
    upsert<T extends PenilaianCCUpsertArgs>(args: Prisma.SelectSubset<T, PenilaianCCUpsertArgs<ExtArgs>>): Prisma.Prisma__PenilaianCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PenilaianCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCCountArgs} args - Arguments to filter PenilaianCCS to count.
     * @example
     * // Count the number of PenilaianCCS
     * const count = await prisma.penilaianCC.count({
     *   where: {
     *     // ... the filter for the PenilaianCCS we want to count
     *   }
     * })
    **/
    count<T extends PenilaianCCCountArgs>(args?: Prisma.Subset<T, PenilaianCCCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PenilaianCCCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PenilaianCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaianCCAggregateArgs>(args: Prisma.Subset<T, PenilaianCCAggregateArgs>): Prisma.PrismaPromise<GetPenilaianCCAggregateType<T>>;
    /**
     * Group by PenilaianCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCCGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PenilaianCCGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PenilaianCCGroupByArgs['orderBy'];
    } : {
        orderBy?: PenilaianCCGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PenilaianCCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianCCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PenilaianCC model
     */
    readonly fields: PenilaianCCFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PenilaianCC.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PenilaianCCClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    candidateObj<T extends Prisma.PenilaianCC$candidateObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCC$candidateObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    penilaiObj<T extends Prisma.PenilaianCC$penilaiObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCC$penilaiObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PenilaianCC model
 */
export interface PenilaianCCFieldRefs {
    readonly uuid: Prisma.FieldRef<"PenilaianCC", 'String'>;
    readonly desc: Prisma.FieldRef<"PenilaianCC", 'String'>;
    readonly tahun: Prisma.FieldRef<"PenilaianCC", 'Int'>;
    readonly status: Prisma.FieldRef<"PenilaianCC", 'Int'>;
    readonly created_at: Prisma.FieldRef<"PenilaianCC", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"PenilaianCC", 'DateTime'>;
}
/**
 * PenilaianCC findUnique
 */
export type PenilaianCCFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCC to fetch.
     */
    where: Prisma.PenilaianCCWhereUniqueInput;
};
/**
 * PenilaianCC findUniqueOrThrow
 */
export type PenilaianCCFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCC to fetch.
     */
    where: Prisma.PenilaianCCWhereUniqueInput;
};
/**
 * PenilaianCC findFirst
 */
export type PenilaianCCFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCC to fetch.
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCCS to fetch.
     */
    orderBy?: Prisma.PenilaianCCOrderByWithRelationInput | Prisma.PenilaianCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCCS.
     */
    cursor?: Prisma.PenilaianCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCCS.
     */
    distinct?: Prisma.PenilaianCCScalarFieldEnum | Prisma.PenilaianCCScalarFieldEnum[];
};
/**
 * PenilaianCC findFirstOrThrow
 */
export type PenilaianCCFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCC to fetch.
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCCS to fetch.
     */
    orderBy?: Prisma.PenilaianCCOrderByWithRelationInput | Prisma.PenilaianCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCCS.
     */
    cursor?: Prisma.PenilaianCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCCS.
     */
    distinct?: Prisma.PenilaianCCScalarFieldEnum | Prisma.PenilaianCCScalarFieldEnum[];
};
/**
 * PenilaianCC findMany
 */
export type PenilaianCCFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCCS to fetch.
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCCS to fetch.
     */
    orderBy?: Prisma.PenilaianCCOrderByWithRelationInput | Prisma.PenilaianCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PenilaianCCS.
     */
    cursor?: Prisma.PenilaianCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCCS.
     */
    skip?: number;
    distinct?: Prisma.PenilaianCCScalarFieldEnum | Prisma.PenilaianCCScalarFieldEnum[];
};
/**
 * PenilaianCC create
 */
export type PenilaianCCCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * The data needed to create a PenilaianCC.
     */
    data: Prisma.XOR<Prisma.PenilaianCCCreateInput, Prisma.PenilaianCCUncheckedCreateInput>;
};
/**
 * PenilaianCC createMany
 */
export type PenilaianCCCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PenilaianCCS.
     */
    data: Prisma.PenilaianCCCreateManyInput | Prisma.PenilaianCCCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaianCC createManyAndReturn
 */
export type PenilaianCCCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * The data used to create many PenilaianCCS.
     */
    data: Prisma.PenilaianCCCreateManyInput | Prisma.PenilaianCCCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaianCC update
 */
export type PenilaianCCUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * The data needed to update a PenilaianCC.
     */
    data: Prisma.XOR<Prisma.PenilaianCCUpdateInput, Prisma.PenilaianCCUncheckedUpdateInput>;
    /**
     * Choose, which PenilaianCC to update.
     */
    where: Prisma.PenilaianCCWhereUniqueInput;
};
/**
 * PenilaianCC updateMany
 */
export type PenilaianCCUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PenilaianCCS.
     */
    data: Prisma.XOR<Prisma.PenilaianCCUpdateManyMutationInput, Prisma.PenilaianCCUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCCS to update
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * Limit how many PenilaianCCS to update.
     */
    limit?: number;
};
/**
 * PenilaianCC updateManyAndReturn
 */
export type PenilaianCCUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * The data used to update PenilaianCCS.
     */
    data: Prisma.XOR<Prisma.PenilaianCCUpdateManyMutationInput, Prisma.PenilaianCCUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCCS to update
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * Limit how many PenilaianCCS to update.
     */
    limit?: number;
};
/**
 * PenilaianCC upsert
 */
export type PenilaianCCUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * The filter to search for the PenilaianCC to update in case it exists.
     */
    where: Prisma.PenilaianCCWhereUniqueInput;
    /**
     * In case the PenilaianCC found by the `where` argument doesn't exist, create a new PenilaianCC with this data.
     */
    create: Prisma.XOR<Prisma.PenilaianCCCreateInput, Prisma.PenilaianCCUncheckedCreateInput>;
    /**
     * In case the PenilaianCC was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PenilaianCCUpdateInput, Prisma.PenilaianCCUncheckedUpdateInput>;
};
/**
 * PenilaianCC delete
 */
export type PenilaianCCDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
    /**
     * Filter which PenilaianCC to delete.
     */
    where: Prisma.PenilaianCCWhereUniqueInput;
};
/**
 * PenilaianCC deleteMany
 */
export type PenilaianCCDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCCS to delete
     */
    where?: Prisma.PenilaianCCWhereInput;
    /**
     * Limit how many PenilaianCCS to delete.
     */
    limit?: number;
};
/**
 * PenilaianCC.candidateObj
 */
export type PenilaianCC$candidateObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CandidateCCWhereInput;
    orderBy?: Prisma.CandidateCCOrderByWithRelationInput | Prisma.CandidateCCOrderByWithRelationInput[];
    cursor?: Prisma.CandidateCCWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CandidateCCScalarFieldEnum | Prisma.CandidateCCScalarFieldEnum[];
};
/**
 * PenilaianCC.penilaiObj
 */
export type PenilaianCC$penilaiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PenilaiCCWhereInput;
    orderBy?: Prisma.PenilaiCCOrderByWithRelationInput | Prisma.PenilaiCCOrderByWithRelationInput[];
    cursor?: Prisma.PenilaiCCWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PenilaiCCScalarFieldEnum | Prisma.PenilaiCCScalarFieldEnum[];
};
/**
 * PenilaianCC without action
 */
export type PenilaianCCDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCC
     */
    select?: Prisma.PenilaianCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCC
     */
    omit?: Prisma.PenilaianCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCCInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PenilaianCC.d.ts.map