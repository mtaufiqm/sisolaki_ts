import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PenilaianCcAnswer
 *
 */
export type PenilaianCcAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$PenilaianCcAnswerPayload>;
export type AggregatePenilaianCcAnswer = {
    _count: PenilaianCcAnswerCountAggregateOutputType | null;
    _avg: PenilaianCcAnswerAvgAggregateOutputType | null;
    _sum: PenilaianCcAnswerSumAggregateOutputType | null;
    _min: PenilaianCcAnswerMinAggregateOutputType | null;
    _max: PenilaianCcAnswerMaxAggregateOutputType | null;
};
export type PenilaianCcAnswerAvgAggregateOutputType = {
    value: number | null;
};
export type PenilaianCcAnswerSumAggregateOutputType = {
    value: number | null;
};
export type PenilaianCcAnswerMinAggregateOutputType = {
    uuid: string | null;
    penilaicc: string | null;
    candidatecc: string | null;
    question: string | null;
    value: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type PenilaianCcAnswerMaxAggregateOutputType = {
    uuid: string | null;
    penilaicc: string | null;
    candidatecc: string | null;
    question: string | null;
    value: number | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type PenilaianCcAnswerCountAggregateOutputType = {
    uuid: number;
    penilaicc: number;
    candidatecc: number;
    question: number;
    value: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type PenilaianCcAnswerAvgAggregateInputType = {
    value?: true;
};
export type PenilaianCcAnswerSumAggregateInputType = {
    value?: true;
};
export type PenilaianCcAnswerMinAggregateInputType = {
    uuid?: true;
    penilaicc?: true;
    candidatecc?: true;
    question?: true;
    value?: true;
    created_at?: true;
    last_updated?: true;
};
export type PenilaianCcAnswerMaxAggregateInputType = {
    uuid?: true;
    penilaicc?: true;
    candidatecc?: true;
    question?: true;
    value?: true;
    created_at?: true;
    last_updated?: true;
};
export type PenilaianCcAnswerCountAggregateInputType = {
    uuid?: true;
    penilaicc?: true;
    candidatecc?: true;
    question?: true;
    value?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type PenilaianCcAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCcAnswer to aggregate.
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcAnswers to fetch.
     */
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithRelationInput | Prisma.PenilaianCcAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PenilaianCcAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PenilaianCcAnswers
    **/
    _count?: true | PenilaianCcAnswerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PenilaianCcAnswerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PenilaianCcAnswerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianCcAnswerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianCcAnswerMaxAggregateInputType;
};
export type GetPenilaianCcAnswerAggregateType<T extends PenilaianCcAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregatePenilaianCcAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePenilaianCcAnswer[P]> : Prisma.GetScalarType<T[P], AggregatePenilaianCcAnswer[P]>;
};
export type PenilaianCcAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCcAnswerWhereInput;
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithAggregationInput | Prisma.PenilaianCcAnswerOrderByWithAggregationInput[];
    by: Prisma.PenilaianCcAnswerScalarFieldEnum[] | Prisma.PenilaianCcAnswerScalarFieldEnum;
    having?: Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PenilaianCcAnswerCountAggregateInputType | true;
    _avg?: PenilaianCcAnswerAvgAggregateInputType;
    _sum?: PenilaianCcAnswerSumAggregateInputType;
    _min?: PenilaianCcAnswerMinAggregateInputType;
    _max?: PenilaianCcAnswerMaxAggregateInputType;
};
export type PenilaianCcAnswerGroupByOutputType = {
    uuid: string;
    penilaicc: string;
    candidatecc: string;
    question: string;
    value: number;
    created_at: Date;
    last_updated: Date;
    _count: PenilaianCcAnswerCountAggregateOutputType | null;
    _avg: PenilaianCcAnswerAvgAggregateOutputType | null;
    _sum: PenilaianCcAnswerSumAggregateOutputType | null;
    _min: PenilaianCcAnswerMinAggregateOutputType | null;
    _max: PenilaianCcAnswerMaxAggregateOutputType | null;
};
type GetPenilaianCcAnswerGroupByPayload<T extends PenilaianCcAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PenilaianCcAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PenilaianCcAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PenilaianCcAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PenilaianCcAnswerGroupByOutputType[P]>;
}>>;
export type PenilaianCcAnswerWhereInput = {
    AND?: Prisma.PenilaianCcAnswerWhereInput | Prisma.PenilaianCcAnswerWhereInput[];
    OR?: Prisma.PenilaianCcAnswerWhereInput[];
    NOT?: Prisma.PenilaianCcAnswerWhereInput | Prisma.PenilaianCcAnswerWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    penilaicc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    candidatecc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    question?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    value?: Prisma.IntFilter<"PenilaianCcAnswer"> | number;
    created_at?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
    penilaiObj?: Prisma.XOR<Prisma.PenilaiCCScalarRelationFilter, Prisma.PenilaiCCWhereInput>;
    candidateObj?: Prisma.XOR<Prisma.CandidateCCScalarRelationFilter, Prisma.CandidateCCWhereInput>;
    questionObj?: Prisma.XOR<Prisma.PenilaianCcQuestionsScalarRelationFilter, Prisma.PenilaianCcQuestionsWhereInput>;
};
export type PenilaianCcAnswerOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    penilaicc?: Prisma.SortOrder;
    candidatecc?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    penilaiObj?: Prisma.PenilaiCCOrderByWithRelationInput;
    candidateObj?: Prisma.CandidateCCOrderByWithRelationInput;
    questionObj?: Prisma.PenilaianCcQuestionsOrderByWithRelationInput;
};
export type PenilaianCcAnswerWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    penilaicc_candidatecc_question?: Prisma.PenilaianCcAnswerPenilaiccCandidateccQuestionCompoundUniqueInput;
    AND?: Prisma.PenilaianCcAnswerWhereInput | Prisma.PenilaianCcAnswerWhereInput[];
    OR?: Prisma.PenilaianCcAnswerWhereInput[];
    NOT?: Prisma.PenilaianCcAnswerWhereInput | Prisma.PenilaianCcAnswerWhereInput[];
    penilaicc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    candidatecc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    question?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    value?: Prisma.IntFilter<"PenilaianCcAnswer"> | number;
    created_at?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
    penilaiObj?: Prisma.XOR<Prisma.PenilaiCCScalarRelationFilter, Prisma.PenilaiCCWhereInput>;
    candidateObj?: Prisma.XOR<Prisma.CandidateCCScalarRelationFilter, Prisma.CandidateCCWhereInput>;
    questionObj?: Prisma.XOR<Prisma.PenilaianCcQuestionsScalarRelationFilter, Prisma.PenilaianCcQuestionsWhereInput>;
}, "uuid" | "penilaicc_candidatecc_question">;
export type PenilaianCcAnswerOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    penilaicc?: Prisma.SortOrder;
    candidatecc?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.PenilaianCcAnswerCountOrderByAggregateInput;
    _avg?: Prisma.PenilaianCcAnswerAvgOrderByAggregateInput;
    _max?: Prisma.PenilaianCcAnswerMaxOrderByAggregateInput;
    _min?: Prisma.PenilaianCcAnswerMinOrderByAggregateInput;
    _sum?: Prisma.PenilaianCcAnswerSumOrderByAggregateInput;
};
export type PenilaianCcAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput | Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput | Prisma.PenilaianCcAnswerScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"PenilaianCcAnswer"> | string;
    penilaicc?: Prisma.StringWithAggregatesFilter<"PenilaianCcAnswer"> | string;
    candidatecc?: Prisma.StringWithAggregatesFilter<"PenilaianCcAnswer"> | string;
    question?: Prisma.StringWithAggregatesFilter<"PenilaianCcAnswer"> | string;
    value?: Prisma.IntWithAggregatesFilter<"PenilaianCcAnswer"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PenilaianCcAnswer"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"PenilaianCcAnswer"> | Date | string;
};
export type PenilaianCcAnswerCreateInput = {
    uuid?: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaiObj: Prisma.PenilaiCCCreateNestedOneWithoutPenilaianAnswerObjInput;
    candidateObj: Prisma.CandidateCCCreateNestedOneWithoutPenilaianAnswerInput;
    questionObj: Prisma.PenilaianCcQuestionsCreateNestedOneWithoutAnswerObjInput;
};
export type PenilaianCcAnswerUncheckedCreateInput = {
    uuid?: string;
    penilaicc: string;
    candidatecc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaiObj?: Prisma.PenilaiCCUpdateOneRequiredWithoutPenilaianAnswerObjNestedInput;
    candidateObj?: Prisma.CandidateCCUpdateOneRequiredWithoutPenilaianAnswerNestedInput;
    questionObj?: Prisma.PenilaianCcQuestionsUpdateOneRequiredWithoutAnswerObjNestedInput;
};
export type PenilaianCcAnswerUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerCreateManyInput = {
    uuid?: string;
    penilaicc: string;
    candidatecc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerListRelationFilter = {
    every?: Prisma.PenilaianCcAnswerWhereInput;
    some?: Prisma.PenilaianCcAnswerWhereInput;
    none?: Prisma.PenilaianCcAnswerWhereInput;
};
export type PenilaianCcAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PenilaianCcAnswerPenilaiccCandidateccQuestionCompoundUniqueInput = {
    penilaicc: string;
    candidatecc: string;
    question: string;
};
export type PenilaianCcAnswerCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    penilaicc?: Prisma.SortOrder;
    candidatecc?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCcAnswerAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type PenilaianCcAnswerMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    penilaicc?: Prisma.SortOrder;
    candidatecc?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCcAnswerMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    penilaicc?: Prisma.SortOrder;
    candidatecc?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type PenilaianCcAnswerSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type PenilaianCcAnswerCreateNestedManyWithoutCandidateObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput> | Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyCandidateObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUncheckedCreateNestedManyWithoutCandidateObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput> | Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyCandidateObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUpdateManyWithoutCandidateObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput> | Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutCandidateObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyCandidateObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutCandidateObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutCandidateObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput> | Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutCandidateObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyCandidateObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutCandidateObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutCandidateObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutCandidateObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerCreateNestedManyWithoutPenilaiObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput> | Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyPenilaiObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUncheckedCreateNestedManyWithoutPenilaiObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput> | Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyPenilaiObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUpdateManyWithoutPenilaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput> | Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutPenilaiObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyPenilaiObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutPenilaiObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutPenilaiObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput> | Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutPenilaiObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyPenilaiObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutPenilaiObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutPenilaiObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutPenilaiObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerCreateNestedManyWithoutQuestionObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput> | Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyQuestionObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUncheckedCreateNestedManyWithoutQuestionObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput> | Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyQuestionObjInputEnvelope;
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
};
export type PenilaianCcAnswerUpdateManyWithoutQuestionObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput> | Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutQuestionObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyQuestionObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutQuestionObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutQuestionObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutQuestionObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput> | Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput[] | Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput[];
    connectOrCreate?: Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput | Prisma.PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput[];
    upsert?: Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpsertWithWhereUniqueWithoutQuestionObjInput[];
    createMany?: Prisma.PenilaianCcAnswerCreateManyQuestionObjInputEnvelope;
    set?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    disconnect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    delete?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    connect?: Prisma.PenilaianCcAnswerWhereUniqueInput | Prisma.PenilaianCcAnswerWhereUniqueInput[];
    update?: Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpdateWithWhereUniqueWithoutQuestionObjInput[];
    updateMany?: Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutQuestionObjInput | Prisma.PenilaianCcAnswerUpdateManyWithWhereWithoutQuestionObjInput[];
    deleteMany?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
};
export type PenilaianCcAnswerCreateWithoutCandidateObjInput = {
    uuid?: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaiObj: Prisma.PenilaiCCCreateNestedOneWithoutPenilaianAnswerObjInput;
    questionObj: Prisma.PenilaianCcQuestionsCreateNestedOneWithoutAnswerObjInput;
};
export type PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput = {
    uuid?: string;
    penilaicc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerCreateOrConnectWithoutCandidateObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput>;
};
export type PenilaianCcAnswerCreateManyCandidateObjInputEnvelope = {
    data: Prisma.PenilaianCcAnswerCreateManyCandidateObjInput | Prisma.PenilaianCcAnswerCreateManyCandidateObjInput[];
    skipDuplicates?: boolean;
};
export type PenilaianCcAnswerUpsertWithWhereUniqueWithoutCandidateObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutCandidateObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutCandidateObjInput>;
};
export type PenilaianCcAnswerUpdateWithWhereUniqueWithoutCandidateObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutCandidateObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutCandidateObjInput>;
};
export type PenilaianCcAnswerUpdateManyWithWhereWithoutCandidateObjInput = {
    where: Prisma.PenilaianCcAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateManyMutationInput, Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjInput>;
};
export type PenilaianCcAnswerScalarWhereInput = {
    AND?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
    OR?: Prisma.PenilaianCcAnswerScalarWhereInput[];
    NOT?: Prisma.PenilaianCcAnswerScalarWhereInput | Prisma.PenilaianCcAnswerScalarWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    penilaicc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    candidatecc?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    question?: Prisma.StringFilter<"PenilaianCcAnswer"> | string;
    value?: Prisma.IntFilter<"PenilaianCcAnswer"> | number;
    created_at?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"PenilaianCcAnswer"> | Date | string;
};
export type PenilaianCcAnswerCreateWithoutPenilaiObjInput = {
    uuid?: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    candidateObj: Prisma.CandidateCCCreateNestedOneWithoutPenilaianAnswerInput;
    questionObj: Prisma.PenilaianCcQuestionsCreateNestedOneWithoutAnswerObjInput;
};
export type PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput = {
    uuid?: string;
    candidatecc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerCreateOrConnectWithoutPenilaiObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput>;
};
export type PenilaianCcAnswerCreateManyPenilaiObjInputEnvelope = {
    data: Prisma.PenilaianCcAnswerCreateManyPenilaiObjInput | Prisma.PenilaianCcAnswerCreateManyPenilaiObjInput[];
    skipDuplicates?: boolean;
};
export type PenilaianCcAnswerUpsertWithWhereUniqueWithoutPenilaiObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutPenilaiObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutPenilaiObjInput>;
};
export type PenilaianCcAnswerUpdateWithWhereUniqueWithoutPenilaiObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutPenilaiObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutPenilaiObjInput>;
};
export type PenilaianCcAnswerUpdateManyWithWhereWithoutPenilaiObjInput = {
    where: Prisma.PenilaianCcAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateManyMutationInput, Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjInput>;
};
export type PenilaianCcAnswerCreateWithoutQuestionObjInput = {
    uuid?: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
    penilaiObj: Prisma.PenilaiCCCreateNestedOneWithoutPenilaianAnswerObjInput;
    candidateObj: Prisma.CandidateCCCreateNestedOneWithoutPenilaianAnswerInput;
};
export type PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput = {
    uuid?: string;
    penilaicc: string;
    candidatecc: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerCreateOrConnectWithoutQuestionObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput>;
};
export type PenilaianCcAnswerCreateManyQuestionObjInputEnvelope = {
    data: Prisma.PenilaianCcAnswerCreateManyQuestionObjInput | Prisma.PenilaianCcAnswerCreateManyQuestionObjInput[];
    skipDuplicates?: boolean;
};
export type PenilaianCcAnswerUpsertWithWhereUniqueWithoutQuestionObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutQuestionObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedCreateWithoutQuestionObjInput>;
};
export type PenilaianCcAnswerUpdateWithWhereUniqueWithoutQuestionObjInput = {
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateWithoutQuestionObjInput, Prisma.PenilaianCcAnswerUncheckedUpdateWithoutQuestionObjInput>;
};
export type PenilaianCcAnswerUpdateManyWithWhereWithoutQuestionObjInput = {
    where: Prisma.PenilaianCcAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateManyMutationInput, Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutQuestionObjInput>;
};
export type PenilaianCcAnswerCreateManyCandidateObjInput = {
    uuid?: string;
    penilaicc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerUpdateWithoutCandidateObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaiObj?: Prisma.PenilaiCCUpdateOneRequiredWithoutPenilaianAnswerObjNestedInput;
    questionObj?: Prisma.PenilaianCcQuestionsUpdateOneRequiredWithoutAnswerObjNestedInput;
};
export type PenilaianCcAnswerUncheckedUpdateWithoutCandidateObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutCandidateObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerCreateManyPenilaiObjInput = {
    uuid?: string;
    candidatecc: string;
    question: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerUpdateWithoutPenilaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateObj?: Prisma.CandidateCCUpdateOneRequiredWithoutPenilaianAnswerNestedInput;
    questionObj?: Prisma.PenilaianCcQuestionsUpdateOneRequiredWithoutAnswerObjNestedInput;
};
export type PenilaianCcAnswerUncheckedUpdateWithoutPenilaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutPenilaiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerCreateManyQuestionObjInput = {
    uuid?: string;
    penilaicc: string;
    candidatecc: string;
    value?: number;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type PenilaianCcAnswerUpdateWithoutQuestionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    penilaiObj?: Prisma.PenilaiCCUpdateOneRequiredWithoutPenilaianAnswerObjNestedInput;
    candidateObj?: Prisma.CandidateCCUpdateOneRequiredWithoutPenilaianAnswerNestedInput;
};
export type PenilaianCcAnswerUncheckedUpdateWithoutQuestionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerUncheckedUpdateManyWithoutQuestionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaicc?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatecc?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PenilaianCcAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    penilaicc?: boolean;
    candidatecc?: boolean;
    question?: boolean;
    value?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaianCcAnswer"]>;
export type PenilaianCcAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    penilaicc?: boolean;
    candidatecc?: boolean;
    question?: boolean;
    value?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaianCcAnswer"]>;
export type PenilaianCcAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    penilaicc?: boolean;
    candidatecc?: boolean;
    question?: boolean;
    value?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaianCcAnswer"]>;
export type PenilaianCcAnswerSelectScalar = {
    uuid?: boolean;
    penilaicc?: boolean;
    candidatecc?: boolean;
    question?: boolean;
    value?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type PenilaianCcAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "penilaicc" | "candidatecc" | "question" | "value" | "created_at" | "last_updated", ExtArgs["result"]["penilaianCcAnswer"]>;
export type PenilaianCcAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
};
export type PenilaianCcAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
};
export type PenilaianCcAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaiObj?: boolean | Prisma.PenilaiCCDefaultArgs<ExtArgs>;
    candidateObj?: boolean | Prisma.CandidateCCDefaultArgs<ExtArgs>;
    questionObj?: boolean | Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>;
};
export type $PenilaianCcAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PenilaianCcAnswer";
    objects: {
        penilaiObj: Prisma.$PenilaiCCPayload<ExtArgs>;
        candidateObj: Prisma.$CandidateCCPayload<ExtArgs>;
        questionObj: Prisma.$PenilaianCcQuestionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        penilaicc: string;
        candidatecc: string;
        question: string;
        value: number;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["penilaianCcAnswer"]>;
    composites: {};
};
export type PenilaianCcAnswerGetPayload<S extends boolean | null | undefined | PenilaianCcAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload, S>;
export type PenilaianCcAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PenilaianCcAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PenilaianCcAnswerCountAggregateInputType | true;
};
export interface PenilaianCcAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PenilaianCcAnswer'];
        meta: {
            name: 'PenilaianCcAnswer';
        };
    };
    /**
     * Find zero or one PenilaianCcAnswer that matches the filter.
     * @param {PenilaianCcAnswerFindUniqueArgs} args - Arguments to find a PenilaianCcAnswer
     * @example
     * // Get one PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaianCcAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PenilaianCcAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaianCcAnswerFindUniqueOrThrowArgs} args - Arguments to find a PenilaianCcAnswer
     * @example
     * // Get one PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaianCcAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCcAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerFindFirstArgs} args - Arguments to find a PenilaianCcAnswer
     * @example
     * // Get one PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaianCcAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCcAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerFindFirstOrThrowArgs} args - Arguments to find a PenilaianCcAnswer
     * @example
     * // Get one PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaianCcAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PenilaianCcAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenilaianCcAnswers
     * const penilaianCcAnswers = await prisma.penilaianCcAnswer.findMany()
     *
     * // Get first 10 PenilaianCcAnswers
     * const penilaianCcAnswers = await prisma.penilaianCcAnswer.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const penilaianCcAnswerWithUuidOnly = await prisma.penilaianCcAnswer.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends PenilaianCcAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PenilaianCcAnswer.
     * @param {PenilaianCcAnswerCreateArgs} args - Arguments to create a PenilaianCcAnswer.
     * @example
     * // Create one PenilaianCcAnswer
     * const PenilaianCcAnswer = await prisma.penilaianCcAnswer.create({
     *   data: {
     *     // ... data to create a PenilaianCcAnswer
     *   }
     * })
     *
     */
    create<T extends PenilaianCcAnswerCreateArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PenilaianCcAnswers.
     * @param {PenilaianCcAnswerCreateManyArgs} args - Arguments to create many PenilaianCcAnswers.
     * @example
     * // Create many PenilaianCcAnswers
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PenilaianCcAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PenilaianCcAnswers and returns the data saved in the database.
     * @param {PenilaianCcAnswerCreateManyAndReturnArgs} args - Arguments to create many PenilaianCcAnswers.
     * @example
     * // Create many PenilaianCcAnswers
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PenilaianCcAnswers and only return the `uuid`
     * const penilaianCcAnswerWithUuidOnly = await prisma.penilaianCcAnswer.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PenilaianCcAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PenilaianCcAnswer.
     * @param {PenilaianCcAnswerDeleteArgs} args - Arguments to delete one PenilaianCcAnswer.
     * @example
     * // Delete one PenilaianCcAnswer
     * const PenilaianCcAnswer = await prisma.penilaianCcAnswer.delete({
     *   where: {
     *     // ... filter to delete one PenilaianCcAnswer
     *   }
     * })
     *
     */
    delete<T extends PenilaianCcAnswerDeleteArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PenilaianCcAnswer.
     * @param {PenilaianCcAnswerUpdateArgs} args - Arguments to update one PenilaianCcAnswer.
     * @example
     * // Update one PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PenilaianCcAnswerUpdateArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PenilaianCcAnswers.
     * @param {PenilaianCcAnswerDeleteManyArgs} args - Arguments to filter PenilaianCcAnswers to delete.
     * @example
     * // Delete a few PenilaianCcAnswers
     * const { count } = await prisma.penilaianCcAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PenilaianCcAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCcAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenilaianCcAnswers
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PenilaianCcAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCcAnswers and returns the data updated in the database.
     * @param {PenilaianCcAnswerUpdateManyAndReturnArgs} args - Arguments to update many PenilaianCcAnswers.
     * @example
     * // Update many PenilaianCcAnswers
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PenilaianCcAnswers and only return the `uuid`
     * const penilaianCcAnswerWithUuidOnly = await prisma.penilaianCcAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenilaianCcAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PenilaianCcAnswer.
     * @param {PenilaianCcAnswerUpsertArgs} args - Arguments to update or create a PenilaianCcAnswer.
     * @example
     * // Update or create a PenilaianCcAnswer
     * const penilaianCcAnswer = await prisma.penilaianCcAnswer.upsert({
     *   create: {
     *     // ... data to create a PenilaianCcAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenilaianCcAnswer we want to update
     *   }
     * })
     */
    upsert<T extends PenilaianCcAnswerUpsertArgs>(args: Prisma.SelectSubset<T, PenilaianCcAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcAnswerClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PenilaianCcAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerCountArgs} args - Arguments to filter PenilaianCcAnswers to count.
     * @example
     * // Count the number of PenilaianCcAnswers
     * const count = await prisma.penilaianCcAnswer.count({
     *   where: {
     *     // ... the filter for the PenilaianCcAnswers we want to count
     *   }
     * })
    **/
    count<T extends PenilaianCcAnswerCountArgs>(args?: Prisma.Subset<T, PenilaianCcAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PenilaianCcAnswerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PenilaianCcAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaianCcAnswerAggregateArgs>(args: Prisma.Subset<T, PenilaianCcAnswerAggregateArgs>): Prisma.PrismaPromise<GetPenilaianCcAnswerAggregateType<T>>;
    /**
     * Group by PenilaianCcAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcAnswerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PenilaianCcAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PenilaianCcAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: PenilaianCcAnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PenilaianCcAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianCcAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PenilaianCcAnswer model
     */
    readonly fields: PenilaianCcAnswerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PenilaianCcAnswer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PenilaianCcAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    penilaiObj<T extends Prisma.PenilaiCCDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaiCCDefaultArgs<ExtArgs>>): Prisma.Prisma__PenilaiCCClient<runtime.Types.Result.GetResult<Prisma.$PenilaiCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    candidateObj<T extends Prisma.CandidateCCDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CandidateCCDefaultArgs<ExtArgs>>): Prisma.Prisma__CandidateCCClient<runtime.Types.Result.GetResult<Prisma.$CandidateCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    questionObj<T extends Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCcQuestionsDefaultArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PenilaianCcAnswer model
 */
export interface PenilaianCcAnswerFieldRefs {
    readonly uuid: Prisma.FieldRef<"PenilaianCcAnswer", 'String'>;
    readonly penilaicc: Prisma.FieldRef<"PenilaianCcAnswer", 'String'>;
    readonly candidatecc: Prisma.FieldRef<"PenilaianCcAnswer", 'String'>;
    readonly question: Prisma.FieldRef<"PenilaianCcAnswer", 'String'>;
    readonly value: Prisma.FieldRef<"PenilaianCcAnswer", 'Int'>;
    readonly created_at: Prisma.FieldRef<"PenilaianCcAnswer", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"PenilaianCcAnswer", 'DateTime'>;
}
/**
 * PenilaianCcAnswer findUnique
 */
export type PenilaianCcAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PenilaianCcAnswer to fetch.
     */
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
};
/**
 * PenilaianCcAnswer findUniqueOrThrow
 */
export type PenilaianCcAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PenilaianCcAnswer to fetch.
     */
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
};
/**
 * PenilaianCcAnswer findFirst
 */
export type PenilaianCcAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PenilaianCcAnswer to fetch.
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcAnswers to fetch.
     */
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithRelationInput | Prisma.PenilaianCcAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCcAnswers.
     */
    cursor?: Prisma.PenilaianCcAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCcAnswers.
     */
    distinct?: Prisma.PenilaianCcAnswerScalarFieldEnum | Prisma.PenilaianCcAnswerScalarFieldEnum[];
};
/**
 * PenilaianCcAnswer findFirstOrThrow
 */
export type PenilaianCcAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PenilaianCcAnswer to fetch.
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcAnswers to fetch.
     */
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithRelationInput | Prisma.PenilaianCcAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCcAnswers.
     */
    cursor?: Prisma.PenilaianCcAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCcAnswers.
     */
    distinct?: Prisma.PenilaianCcAnswerScalarFieldEnum | Prisma.PenilaianCcAnswerScalarFieldEnum[];
};
/**
 * PenilaianCcAnswer findMany
 */
export type PenilaianCcAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PenilaianCcAnswers to fetch.
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcAnswers to fetch.
     */
    orderBy?: Prisma.PenilaianCcAnswerOrderByWithRelationInput | Prisma.PenilaianCcAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PenilaianCcAnswers.
     */
    cursor?: Prisma.PenilaianCcAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcAnswers.
     */
    skip?: number;
    distinct?: Prisma.PenilaianCcAnswerScalarFieldEnum | Prisma.PenilaianCcAnswerScalarFieldEnum[];
};
/**
 * PenilaianCcAnswer create
 */
export type PenilaianCcAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PenilaianCcAnswer.
     */
    data: Prisma.XOR<Prisma.PenilaianCcAnswerCreateInput, Prisma.PenilaianCcAnswerUncheckedCreateInput>;
};
/**
 * PenilaianCcAnswer createMany
 */
export type PenilaianCcAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PenilaianCcAnswers.
     */
    data: Prisma.PenilaianCcAnswerCreateManyInput | Prisma.PenilaianCcAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaianCcAnswer createManyAndReturn
 */
export type PenilaianCcAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcAnswer
     */
    select?: Prisma.PenilaianCcAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcAnswer
     */
    omit?: Prisma.PenilaianCcAnswerOmit<ExtArgs> | null;
    /**
     * The data used to create many PenilaianCcAnswers.
     */
    data: Prisma.PenilaianCcAnswerCreateManyInput | Prisma.PenilaianCcAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PenilaianCcAnswer update
 */
export type PenilaianCcAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PenilaianCcAnswer.
     */
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateInput, Prisma.PenilaianCcAnswerUncheckedUpdateInput>;
    /**
     * Choose, which PenilaianCcAnswer to update.
     */
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
};
/**
 * PenilaianCcAnswer updateMany
 */
export type PenilaianCcAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PenilaianCcAnswers.
     */
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateManyMutationInput, Prisma.PenilaianCcAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCcAnswers to update
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * Limit how many PenilaianCcAnswers to update.
     */
    limit?: number;
};
/**
 * PenilaianCcAnswer updateManyAndReturn
 */
export type PenilaianCcAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcAnswer
     */
    select?: Prisma.PenilaianCcAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcAnswer
     */
    omit?: Prisma.PenilaianCcAnswerOmit<ExtArgs> | null;
    /**
     * The data used to update PenilaianCcAnswers.
     */
    data: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateManyMutationInput, Prisma.PenilaianCcAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCcAnswers to update
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * Limit how many PenilaianCcAnswers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PenilaianCcAnswer upsert
 */
export type PenilaianCcAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PenilaianCcAnswer to update in case it exists.
     */
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
    /**
     * In case the PenilaianCcAnswer found by the `where` argument doesn't exist, create a new PenilaianCcAnswer with this data.
     */
    create: Prisma.XOR<Prisma.PenilaianCcAnswerCreateInput, Prisma.PenilaianCcAnswerUncheckedCreateInput>;
    /**
     * In case the PenilaianCcAnswer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PenilaianCcAnswerUpdateInput, Prisma.PenilaianCcAnswerUncheckedUpdateInput>;
};
/**
 * PenilaianCcAnswer delete
 */
export type PenilaianCcAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PenilaianCcAnswer to delete.
     */
    where: Prisma.PenilaianCcAnswerWhereUniqueInput;
};
/**
 * PenilaianCcAnswer deleteMany
 */
export type PenilaianCcAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCcAnswers to delete
     */
    where?: Prisma.PenilaianCcAnswerWhereInput;
    /**
     * Limit how many PenilaianCcAnswers to delete.
     */
    limit?: number;
};
/**
 * PenilaianCcAnswer without action
 */
export type PenilaianCcAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=PenilaianCcAnswer.d.ts.map