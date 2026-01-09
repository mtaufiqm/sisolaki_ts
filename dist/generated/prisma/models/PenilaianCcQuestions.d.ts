import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PenilaianCcQuestions
 *
 */
export type PenilaianCcQuestionsModel = runtime.Types.Result.DefaultSelection<Prisma.$PenilaianCcQuestionsPayload>;
export type AggregatePenilaianCcQuestions = {
    _count: PenilaianCcQuestionsCountAggregateOutputType | null;
    _avg: PenilaianCcQuestionsAvgAggregateOutputType | null;
    _sum: PenilaianCcQuestionsSumAggregateOutputType | null;
    _min: PenilaianCcQuestionsMinAggregateOutputType | null;
    _max: PenilaianCcQuestionsMaxAggregateOutputType | null;
};
export type PenilaianCcQuestionsAvgAggregateOutputType = {
    order: number | null;
};
export type PenilaianCcQuestionsSumAggregateOutputType = {
    order: number | null;
};
export type PenilaianCcQuestionsMinAggregateOutputType = {
    uuid: string | null;
    title: string | null;
    desc: string | null;
    order: number | null;
    tag: string | null;
    is_active: boolean | null;
};
export type PenilaianCcQuestionsMaxAggregateOutputType = {
    uuid: string | null;
    title: string | null;
    desc: string | null;
    order: number | null;
    tag: string | null;
    is_active: boolean | null;
};
export type PenilaianCcQuestionsCountAggregateOutputType = {
    uuid: number;
    title: number;
    desc: number;
    order: number;
    tag: number;
    is_active: number;
    _all: number;
};
export type PenilaianCcQuestionsAvgAggregateInputType = {
    order?: true;
};
export type PenilaianCcQuestionsSumAggregateInputType = {
    order?: true;
};
export type PenilaianCcQuestionsMinAggregateInputType = {
    uuid?: true;
    title?: true;
    desc?: true;
    order?: true;
    tag?: true;
    is_active?: true;
};
export type PenilaianCcQuestionsMaxAggregateInputType = {
    uuid?: true;
    title?: true;
    desc?: true;
    order?: true;
    tag?: true;
    is_active?: true;
};
export type PenilaianCcQuestionsCountAggregateInputType = {
    uuid?: true;
    title?: true;
    desc?: true;
    order?: true;
    tag?: true;
    is_active?: true;
    _all?: true;
};
export type PenilaianCcQuestionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCcQuestions to aggregate.
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcQuestions to fetch.
     */
    orderBy?: Prisma.PenilaianCcQuestionsOrderByWithRelationInput | Prisma.PenilaianCcQuestionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PenilaianCcQuestions
    **/
    _count?: true | PenilaianCcQuestionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PenilaianCcQuestionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PenilaianCcQuestionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianCcQuestionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianCcQuestionsMaxAggregateInputType;
};
export type GetPenilaianCcQuestionsAggregateType<T extends PenilaianCcQuestionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePenilaianCcQuestions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePenilaianCcQuestions[P]> : Prisma.GetScalarType<T[P], AggregatePenilaianCcQuestions[P]>;
};
export type PenilaianCcQuestionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    orderBy?: Prisma.PenilaianCcQuestionsOrderByWithAggregationInput | Prisma.PenilaianCcQuestionsOrderByWithAggregationInput[];
    by: Prisma.PenilaianCcQuestionsScalarFieldEnum[] | Prisma.PenilaianCcQuestionsScalarFieldEnum;
    having?: Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PenilaianCcQuestionsCountAggregateInputType | true;
    _avg?: PenilaianCcQuestionsAvgAggregateInputType;
    _sum?: PenilaianCcQuestionsSumAggregateInputType;
    _min?: PenilaianCcQuestionsMinAggregateInputType;
    _max?: PenilaianCcQuestionsMaxAggregateInputType;
};
export type PenilaianCcQuestionsGroupByOutputType = {
    uuid: string;
    title: string;
    desc: string;
    order: number;
    tag: string | null;
    is_active: boolean;
    _count: PenilaianCcQuestionsCountAggregateOutputType | null;
    _avg: PenilaianCcQuestionsAvgAggregateOutputType | null;
    _sum: PenilaianCcQuestionsSumAggregateOutputType | null;
    _min: PenilaianCcQuestionsMinAggregateOutputType | null;
    _max: PenilaianCcQuestionsMaxAggregateOutputType | null;
};
type GetPenilaianCcQuestionsGroupByPayload<T extends PenilaianCcQuestionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PenilaianCcQuestionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PenilaianCcQuestionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PenilaianCcQuestionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PenilaianCcQuestionsGroupByOutputType[P]>;
}>>;
export type PenilaianCcQuestionsWhereInput = {
    AND?: Prisma.PenilaianCcQuestionsWhereInput | Prisma.PenilaianCcQuestionsWhereInput[];
    OR?: Prisma.PenilaianCcQuestionsWhereInput[];
    NOT?: Prisma.PenilaianCcQuestionsWhereInput | Prisma.PenilaianCcQuestionsWhereInput[];
    uuid?: Prisma.StringFilter<"PenilaianCcQuestions"> | string;
    title?: Prisma.StringFilter<"PenilaianCcQuestions"> | string;
    desc?: Prisma.StringFilter<"PenilaianCcQuestions"> | string;
    order?: Prisma.IntFilter<"PenilaianCcQuestions"> | number;
    tag?: Prisma.StringNullableFilter<"PenilaianCcQuestions"> | string | null;
    is_active?: Prisma.BoolFilter<"PenilaianCcQuestions"> | boolean;
    answerObj?: Prisma.PenilaianCcAnswerListRelationFilter;
};
export type PenilaianCcQuestionsOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    tag?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    answerObj?: Prisma.PenilaianCcAnswerOrderByRelationAggregateInput;
};
export type PenilaianCcQuestionsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.PenilaianCcQuestionsWhereInput | Prisma.PenilaianCcQuestionsWhereInput[];
    OR?: Prisma.PenilaianCcQuestionsWhereInput[];
    NOT?: Prisma.PenilaianCcQuestionsWhereInput | Prisma.PenilaianCcQuestionsWhereInput[];
    title?: Prisma.StringFilter<"PenilaianCcQuestions"> | string;
    desc?: Prisma.StringFilter<"PenilaianCcQuestions"> | string;
    order?: Prisma.IntFilter<"PenilaianCcQuestions"> | number;
    tag?: Prisma.StringNullableFilter<"PenilaianCcQuestions"> | string | null;
    is_active?: Prisma.BoolFilter<"PenilaianCcQuestions"> | boolean;
    answerObj?: Prisma.PenilaianCcAnswerListRelationFilter;
}, "uuid">;
export type PenilaianCcQuestionsOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    tag?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    _count?: Prisma.PenilaianCcQuestionsCountOrderByAggregateInput;
    _avg?: Prisma.PenilaianCcQuestionsAvgOrderByAggregateInput;
    _max?: Prisma.PenilaianCcQuestionsMaxOrderByAggregateInput;
    _min?: Prisma.PenilaianCcQuestionsMinOrderByAggregateInput;
    _sum?: Prisma.PenilaianCcQuestionsSumOrderByAggregateInput;
};
export type PenilaianCcQuestionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput | Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput | Prisma.PenilaianCcQuestionsScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"PenilaianCcQuestions"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PenilaianCcQuestions"> | string;
    desc?: Prisma.StringWithAggregatesFilter<"PenilaianCcQuestions"> | string;
    order?: Prisma.IntWithAggregatesFilter<"PenilaianCcQuestions"> | number;
    tag?: Prisma.StringNullableWithAggregatesFilter<"PenilaianCcQuestions"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"PenilaianCcQuestions"> | boolean;
};
export type PenilaianCcQuestionsCreateInput = {
    uuid?: string;
    title: string;
    desc: string;
    order: number;
    tag?: string | null;
    is_active: boolean;
    answerObj?: Prisma.PenilaianCcAnswerCreateNestedManyWithoutQuestionObjInput;
};
export type PenilaianCcQuestionsUncheckedCreateInput = {
    uuid?: string;
    title: string;
    desc: string;
    order: number;
    tag?: string | null;
    is_active: boolean;
    answerObj?: Prisma.PenilaianCcAnswerUncheckedCreateNestedManyWithoutQuestionObjInput;
};
export type PenilaianCcQuestionsUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answerObj?: Prisma.PenilaianCcAnswerUpdateManyWithoutQuestionObjNestedInput;
};
export type PenilaianCcQuestionsUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answerObj?: Prisma.PenilaianCcAnswerUncheckedUpdateManyWithoutQuestionObjNestedInput;
};
export type PenilaianCcQuestionsCreateManyInput = {
    uuid?: string;
    title: string;
    desc: string;
    order: number;
    tag?: string | null;
    is_active: boolean;
};
export type PenilaianCcQuestionsUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PenilaianCcQuestionsUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PenilaianCcQuestionsCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type PenilaianCcQuestionsAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PenilaianCcQuestionsMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type PenilaianCcQuestionsMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type PenilaianCcQuestionsSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PenilaianCcQuestionsScalarRelationFilter = {
    is?: Prisma.PenilaianCcQuestionsWhereInput;
    isNot?: Prisma.PenilaianCcQuestionsWhereInput;
};
export type PenilaianCcQuestionsCreateNestedOneWithoutAnswerObjInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedCreateWithoutAnswerObjInput>;
    connectOrCreate?: Prisma.PenilaianCcQuestionsCreateOrConnectWithoutAnswerObjInput;
    connect?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
};
export type PenilaianCcQuestionsUpdateOneRequiredWithoutAnswerObjNestedInput = {
    create?: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedCreateWithoutAnswerObjInput>;
    connectOrCreate?: Prisma.PenilaianCcQuestionsCreateOrConnectWithoutAnswerObjInput;
    upsert?: Prisma.PenilaianCcQuestionsUpsertWithoutAnswerObjInput;
    connect?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateToOneWithWhereWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUpdateWithoutAnswerObjInput>, Prisma.PenilaianCcQuestionsUncheckedUpdateWithoutAnswerObjInput>;
};
export type PenilaianCcQuestionsCreateWithoutAnswerObjInput = {
    uuid?: string;
    title: string;
    desc: string;
    order: number;
    tag?: string | null;
    is_active: boolean;
};
export type PenilaianCcQuestionsUncheckedCreateWithoutAnswerObjInput = {
    uuid?: string;
    title: string;
    desc: string;
    order: number;
    tag?: string | null;
    is_active: boolean;
};
export type PenilaianCcQuestionsCreateOrConnectWithoutAnswerObjInput = {
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedCreateWithoutAnswerObjInput>;
};
export type PenilaianCcQuestionsUpsertWithoutAnswerObjInput = {
    update: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedUpdateWithoutAnswerObjInput>;
    create: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedCreateWithoutAnswerObjInput>;
    where?: Prisma.PenilaianCcQuestionsWhereInput;
};
export type PenilaianCcQuestionsUpdateToOneWithWhereWithoutAnswerObjInput = {
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    data: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateWithoutAnswerObjInput, Prisma.PenilaianCcQuestionsUncheckedUpdateWithoutAnswerObjInput>;
};
export type PenilaianCcQuestionsUpdateWithoutAnswerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PenilaianCcQuestionsUncheckedUpdateWithoutAnswerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type PenilaianCcQuestionsCountOutputType
 */
export type PenilaianCcQuestionsCountOutputType = {
    answerObj: number;
};
export type PenilaianCcQuestionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answerObj?: boolean | PenilaianCcQuestionsCountOutputTypeCountAnswerObjArgs;
};
/**
 * PenilaianCcQuestionsCountOutputType without action
 */
export type PenilaianCcQuestionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestionsCountOutputType
     */
    select?: Prisma.PenilaianCcQuestionsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PenilaianCcQuestionsCountOutputType without action
 */
export type PenilaianCcQuestionsCountOutputTypeCountAnswerObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenilaianCcAnswerWhereInput;
};
export type PenilaianCcQuestionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    desc?: boolean;
    order?: boolean;
    tag?: boolean;
    is_active?: boolean;
    answerObj?: boolean | Prisma.PenilaianCcQuestions$answerObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaianCcQuestionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penilaianCcQuestions"]>;
export type PenilaianCcQuestionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    desc?: boolean;
    order?: boolean;
    tag?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["penilaianCcQuestions"]>;
export type PenilaianCcQuestionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    desc?: boolean;
    order?: boolean;
    tag?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["penilaianCcQuestions"]>;
export type PenilaianCcQuestionsSelectScalar = {
    uuid?: boolean;
    title?: boolean;
    desc?: boolean;
    order?: boolean;
    tag?: boolean;
    is_active?: boolean;
};
export type PenilaianCcQuestionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "title" | "desc" | "order" | "tag" | "is_active", ExtArgs["result"]["penilaianCcQuestions"]>;
export type PenilaianCcQuestionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answerObj?: boolean | Prisma.PenilaianCcQuestions$answerObjArgs<ExtArgs>;
    _count?: boolean | Prisma.PenilaianCcQuestionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PenilaianCcQuestionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PenilaianCcQuestionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PenilaianCcQuestionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PenilaianCcQuestions";
    objects: {
        answerObj: Prisma.$PenilaianCcAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        title: string;
        desc: string;
        order: number;
        tag: string | null;
        is_active: boolean;
    }, ExtArgs["result"]["penilaianCcQuestions"]>;
    composites: {};
};
export type PenilaianCcQuestionsGetPayload<S extends boolean | null | undefined | PenilaianCcQuestionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload, S>;
export type PenilaianCcQuestionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PenilaianCcQuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PenilaianCcQuestionsCountAggregateInputType | true;
};
export interface PenilaianCcQuestionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PenilaianCcQuestions'];
        meta: {
            name: 'PenilaianCcQuestions';
        };
    };
    /**
     * Find zero or one PenilaianCcQuestions that matches the filter.
     * @param {PenilaianCcQuestionsFindUniqueArgs} args - Arguments to find a PenilaianCcQuestions
     * @example
     * // Get one PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaianCcQuestionsFindUniqueArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PenilaianCcQuestions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaianCcQuestionsFindUniqueOrThrowArgs} args - Arguments to find a PenilaianCcQuestions
     * @example
     * // Get one PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaianCcQuestionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCcQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsFindFirstArgs} args - Arguments to find a PenilaianCcQuestions
     * @example
     * // Get one PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaianCcQuestionsFindFirstArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PenilaianCcQuestions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsFindFirstOrThrowArgs} args - Arguments to find a PenilaianCcQuestions
     * @example
     * // Get one PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaianCcQuestionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PenilaianCcQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findMany()
     *
     * // Get first 10 PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const penilaianCcQuestionsWithUuidOnly = await prisma.penilaianCcQuestions.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends PenilaianCcQuestionsFindManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsCreateArgs} args - Arguments to create a PenilaianCcQuestions.
     * @example
     * // Create one PenilaianCcQuestions
     * const PenilaianCcQuestions = await prisma.penilaianCcQuestions.create({
     *   data: {
     *     // ... data to create a PenilaianCcQuestions
     *   }
     * })
     *
     */
    create<T extends PenilaianCcQuestionsCreateArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsCreateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsCreateManyArgs} args - Arguments to create many PenilaianCcQuestions.
     * @example
     * // Create many PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PenilaianCcQuestionsCreateManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PenilaianCcQuestions and returns the data saved in the database.
     * @param {PenilaianCcQuestionsCreateManyAndReturnArgs} args - Arguments to create many PenilaianCcQuestions.
     * @example
     * // Create many PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PenilaianCcQuestions and only return the `uuid`
     * const penilaianCcQuestionsWithUuidOnly = await prisma.penilaianCcQuestions.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PenilaianCcQuestionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsDeleteArgs} args - Arguments to delete one PenilaianCcQuestions.
     * @example
     * // Delete one PenilaianCcQuestions
     * const PenilaianCcQuestions = await prisma.penilaianCcQuestions.delete({
     *   where: {
     *     // ... filter to delete one PenilaianCcQuestions
     *   }
     * })
     *
     */
    delete<T extends PenilaianCcQuestionsDeleteArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsDeleteArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsUpdateArgs} args - Arguments to update one PenilaianCcQuestions.
     * @example
     * // Update one PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PenilaianCcQuestionsUpdateArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsUpdateArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsDeleteManyArgs} args - Arguments to filter PenilaianCcQuestions to delete.
     * @example
     * // Delete a few PenilaianCcQuestions
     * const { count } = await prisma.penilaianCcQuestions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PenilaianCcQuestionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PenilaianCcQuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCcQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PenilaianCcQuestionsUpdateManyArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PenilaianCcQuestions and returns the data updated in the database.
     * @param {PenilaianCcQuestionsUpdateManyAndReturnArgs} args - Arguments to update many PenilaianCcQuestions.
     * @example
     * // Update many PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PenilaianCcQuestions and only return the `uuid`
     * const penilaianCcQuestionsWithUuidOnly = await prisma.penilaianCcQuestions.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenilaianCcQuestionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PenilaianCcQuestions.
     * @param {PenilaianCcQuestionsUpsertArgs} args - Arguments to update or create a PenilaianCcQuestions.
     * @example
     * // Update or create a PenilaianCcQuestions
     * const penilaianCcQuestions = await prisma.penilaianCcQuestions.upsert({
     *   create: {
     *     // ... data to create a PenilaianCcQuestions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenilaianCcQuestions we want to update
     *   }
     * })
     */
    upsert<T extends PenilaianCcQuestionsUpsertArgs>(args: Prisma.SelectSubset<T, PenilaianCcQuestionsUpsertArgs<ExtArgs>>): Prisma.Prisma__PenilaianCcQuestionsClient<runtime.Types.Result.GetResult<Prisma.$PenilaianCcQuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PenilaianCcQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsCountArgs} args - Arguments to filter PenilaianCcQuestions to count.
     * @example
     * // Count the number of PenilaianCcQuestions
     * const count = await prisma.penilaianCcQuestions.count({
     *   where: {
     *     // ... the filter for the PenilaianCcQuestions we want to count
     *   }
     * })
    **/
    count<T extends PenilaianCcQuestionsCountArgs>(args?: Prisma.Subset<T, PenilaianCcQuestionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PenilaianCcQuestionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PenilaianCcQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaianCcQuestionsAggregateArgs>(args: Prisma.Subset<T, PenilaianCcQuestionsAggregateArgs>): Prisma.PrismaPromise<GetPenilaianCcQuestionsAggregateType<T>>;
    /**
     * Group by PenilaianCcQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCcQuestionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PenilaianCcQuestionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PenilaianCcQuestionsGroupByArgs['orderBy'];
    } : {
        orderBy?: PenilaianCcQuestionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PenilaianCcQuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianCcQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PenilaianCcQuestions model
     */
    readonly fields: PenilaianCcQuestionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PenilaianCcQuestions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PenilaianCcQuestionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    answerObj<T extends Prisma.PenilaianCcQuestions$answerObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenilaianCcQuestions$answerObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenilaianCcAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PenilaianCcQuestions model
 */
export interface PenilaianCcQuestionsFieldRefs {
    readonly uuid: Prisma.FieldRef<"PenilaianCcQuestions", 'String'>;
    readonly title: Prisma.FieldRef<"PenilaianCcQuestions", 'String'>;
    readonly desc: Prisma.FieldRef<"PenilaianCcQuestions", 'String'>;
    readonly order: Prisma.FieldRef<"PenilaianCcQuestions", 'Int'>;
    readonly tag: Prisma.FieldRef<"PenilaianCcQuestions", 'String'>;
    readonly is_active: Prisma.FieldRef<"PenilaianCcQuestions", 'Boolean'>;
}
/**
 * PenilaianCcQuestions findUnique
 */
export type PenilaianCcQuestionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCcQuestions to fetch.
     */
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
};
/**
 * PenilaianCcQuestions findUniqueOrThrow
 */
export type PenilaianCcQuestionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCcQuestions to fetch.
     */
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
};
/**
 * PenilaianCcQuestions findFirst
 */
export type PenilaianCcQuestionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCcQuestions to fetch.
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcQuestions to fetch.
     */
    orderBy?: Prisma.PenilaianCcQuestionsOrderByWithRelationInput | Prisma.PenilaianCcQuestionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCcQuestions.
     */
    cursor?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCcQuestions.
     */
    distinct?: Prisma.PenilaianCcQuestionsScalarFieldEnum | Prisma.PenilaianCcQuestionsScalarFieldEnum[];
};
/**
 * PenilaianCcQuestions findFirstOrThrow
 */
export type PenilaianCcQuestionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCcQuestions to fetch.
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcQuestions to fetch.
     */
    orderBy?: Prisma.PenilaianCcQuestionsOrderByWithRelationInput | Prisma.PenilaianCcQuestionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PenilaianCcQuestions.
     */
    cursor?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PenilaianCcQuestions.
     */
    distinct?: Prisma.PenilaianCcQuestionsScalarFieldEnum | Prisma.PenilaianCcQuestionsScalarFieldEnum[];
};
/**
 * PenilaianCcQuestions findMany
 */
export type PenilaianCcQuestionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter, which PenilaianCcQuestions to fetch.
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PenilaianCcQuestions to fetch.
     */
    orderBy?: Prisma.PenilaianCcQuestionsOrderByWithRelationInput | Prisma.PenilaianCcQuestionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PenilaianCcQuestions.
     */
    cursor?: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PenilaianCcQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PenilaianCcQuestions.
     */
    skip?: number;
    distinct?: Prisma.PenilaianCcQuestionsScalarFieldEnum | Prisma.PenilaianCcQuestionsScalarFieldEnum[];
};
/**
 * PenilaianCcQuestions create
 */
export type PenilaianCcQuestionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a PenilaianCcQuestions.
     */
    data: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateInput, Prisma.PenilaianCcQuestionsUncheckedCreateInput>;
};
/**
 * PenilaianCcQuestions createMany
 */
export type PenilaianCcQuestionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PenilaianCcQuestions.
     */
    data: Prisma.PenilaianCcQuestionsCreateManyInput | Prisma.PenilaianCcQuestionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaianCcQuestions createManyAndReturn
 */
export type PenilaianCcQuestionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * The data used to create many PenilaianCcQuestions.
     */
    data: Prisma.PenilaianCcQuestionsCreateManyInput | Prisma.PenilaianCcQuestionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PenilaianCcQuestions update
 */
export type PenilaianCcQuestionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a PenilaianCcQuestions.
     */
    data: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateInput, Prisma.PenilaianCcQuestionsUncheckedUpdateInput>;
    /**
     * Choose, which PenilaianCcQuestions to update.
     */
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
};
/**
 * PenilaianCcQuestions updateMany
 */
export type PenilaianCcQuestionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PenilaianCcQuestions.
     */
    data: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateManyMutationInput, Prisma.PenilaianCcQuestionsUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCcQuestions to update
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * Limit how many PenilaianCcQuestions to update.
     */
    limit?: number;
};
/**
 * PenilaianCcQuestions updateManyAndReturn
 */
export type PenilaianCcQuestionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * The data used to update PenilaianCcQuestions.
     */
    data: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateManyMutationInput, Prisma.PenilaianCcQuestionsUncheckedUpdateManyInput>;
    /**
     * Filter which PenilaianCcQuestions to update
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * Limit how many PenilaianCcQuestions to update.
     */
    limit?: number;
};
/**
 * PenilaianCcQuestions upsert
 */
export type PenilaianCcQuestionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the PenilaianCcQuestions to update in case it exists.
     */
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
    /**
     * In case the PenilaianCcQuestions found by the `where` argument doesn't exist, create a new PenilaianCcQuestions with this data.
     */
    create: Prisma.XOR<Prisma.PenilaianCcQuestionsCreateInput, Prisma.PenilaianCcQuestionsUncheckedCreateInput>;
    /**
     * In case the PenilaianCcQuestions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PenilaianCcQuestionsUpdateInput, Prisma.PenilaianCcQuestionsUncheckedUpdateInput>;
};
/**
 * PenilaianCcQuestions delete
 */
export type PenilaianCcQuestionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
    /**
     * Filter which PenilaianCcQuestions to delete.
     */
    where: Prisma.PenilaianCcQuestionsWhereUniqueInput;
};
/**
 * PenilaianCcQuestions deleteMany
 */
export type PenilaianCcQuestionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PenilaianCcQuestions to delete
     */
    where?: Prisma.PenilaianCcQuestionsWhereInput;
    /**
     * Limit how many PenilaianCcQuestions to delete.
     */
    limit?: number;
};
/**
 * PenilaianCcQuestions.answerObj
 */
export type PenilaianCcQuestions$answerObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * PenilaianCcQuestions without action
 */
export type PenilaianCcQuestionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenilaianCcQuestions
     */
    select?: Prisma.PenilaianCcQuestionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PenilaianCcQuestions
     */
    omit?: Prisma.PenilaianCcQuestionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PenilaianCcQuestionsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PenilaianCcQuestions.d.ts.map