import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model EOMStatus
 *
 */
export type EOMStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$EOMStatusPayload>;
export type AggregateEOMStatus = {
    _count: EOMStatusCountAggregateOutputType | null;
    _avg: EOMStatusAvgAggregateOutputType | null;
    _sum: EOMStatusSumAggregateOutputType | null;
    _min: EOMStatusMinAggregateOutputType | null;
    _max: EOMStatusMaxAggregateOutputType | null;
};
export type EOMStatusAvgAggregateOutputType = {
    id: number | null;
};
export type EOMStatusSumAggregateOutputType = {
    id: number | null;
};
export type EOMStatusMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type EOMStatusMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type EOMStatusCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type EOMStatusAvgAggregateInputType = {
    id?: true;
};
export type EOMStatusSumAggregateInputType = {
    id?: true;
};
export type EOMStatusMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type EOMStatusMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type EOMStatusCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type EOMStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EOMStatus to aggregate.
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMStatuses to fetch.
     */
    orderBy?: Prisma.EOMStatusOrderByWithRelationInput | Prisma.EOMStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EOMStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EOMStatuses
    **/
    _count?: true | EOMStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EOMStatusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EOMStatusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EOMStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EOMStatusMaxAggregateInputType;
};
export type GetEOMStatusAggregateType<T extends EOMStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateEOMStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEOMStatus[P]> : Prisma.GetScalarType<T[P], AggregateEOMStatus[P]>;
};
export type EOMStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EOMStatusWhereInput;
    orderBy?: Prisma.EOMStatusOrderByWithAggregationInput | Prisma.EOMStatusOrderByWithAggregationInput[];
    by: Prisma.EOMStatusScalarFieldEnum[] | Prisma.EOMStatusScalarFieldEnum;
    having?: Prisma.EOMStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EOMStatusCountAggregateInputType | true;
    _avg?: EOMStatusAvgAggregateInputType;
    _sum?: EOMStatusSumAggregateInputType;
    _min?: EOMStatusMinAggregateInputType;
    _max?: EOMStatusMaxAggregateInputType;
};
export type EOMStatusGroupByOutputType = {
    id: number;
    desc: string;
    _count: EOMStatusCountAggregateOutputType | null;
    _avg: EOMStatusAvgAggregateOutputType | null;
    _sum: EOMStatusSumAggregateOutputType | null;
    _min: EOMStatusMinAggregateOutputType | null;
    _max: EOMStatusMaxAggregateOutputType | null;
};
type GetEOMStatusGroupByPayload<T extends EOMStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EOMStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EOMStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EOMStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EOMStatusGroupByOutputType[P]>;
}>>;
export type EOMStatusWhereInput = {
    AND?: Prisma.EOMStatusWhereInput | Prisma.EOMStatusWhereInput[];
    OR?: Prisma.EOMStatusWhereInput[];
    NOT?: Prisma.EOMStatusWhereInput | Prisma.EOMStatusWhereInput[];
    id?: Prisma.IntFilter<"EOMStatus"> | number;
    desc?: Prisma.StringFilter<"EOMStatus"> | string;
    penilaianObj?: Prisma.EOMPenilaianListRelationFilter;
};
export type EOMStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    penilaianObj?: Prisma.EOMPenilaianOrderByRelationAggregateInput;
};
export type EOMStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EOMStatusWhereInput | Prisma.EOMStatusWhereInput[];
    OR?: Prisma.EOMStatusWhereInput[];
    NOT?: Prisma.EOMStatusWhereInput | Prisma.EOMStatusWhereInput[];
    desc?: Prisma.StringFilter<"EOMStatus"> | string;
    penilaianObj?: Prisma.EOMPenilaianListRelationFilter;
}, "id">;
export type EOMStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.EOMStatusCountOrderByAggregateInput;
    _avg?: Prisma.EOMStatusAvgOrderByAggregateInput;
    _max?: Prisma.EOMStatusMaxOrderByAggregateInput;
    _min?: Prisma.EOMStatusMinOrderByAggregateInput;
    _sum?: Prisma.EOMStatusSumOrderByAggregateInput;
};
export type EOMStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.EOMStatusScalarWhereWithAggregatesInput | Prisma.EOMStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.EOMStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EOMStatusScalarWhereWithAggregatesInput | Prisma.EOMStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EOMStatus"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"EOMStatus"> | string;
};
export type EOMStatusCreateInput = {
    desc: string;
    penilaianObj?: Prisma.EOMPenilaianCreateNestedManyWithoutStatusObjInput;
};
export type EOMStatusUncheckedCreateInput = {
    id?: number;
    desc: string;
    penilaianObj?: Prisma.EOMPenilaianUncheckedCreateNestedManyWithoutStatusObjInput;
};
export type EOMStatusUpdateInput = {
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianObj?: Prisma.EOMPenilaianUpdateManyWithoutStatusObjNestedInput;
};
export type EOMStatusUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    penilaianObj?: Prisma.EOMPenilaianUncheckedUpdateManyWithoutStatusObjNestedInput;
};
export type EOMStatusCreateManyInput = {
    id?: number;
    desc: string;
};
export type EOMStatusUpdateManyMutationInput = {
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMStatusUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMStatusScalarRelationFilter = {
    is?: Prisma.EOMStatusWhereInput;
    isNot?: Prisma.EOMStatusWhereInput;
};
export type EOMStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type EOMStatusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EOMStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type EOMStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type EOMStatusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EOMStatusCreateNestedOneWithoutPenilaianObjInput = {
    create?: Prisma.XOR<Prisma.EOMStatusCreateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedCreateWithoutPenilaianObjInput>;
    connectOrCreate?: Prisma.EOMStatusCreateOrConnectWithoutPenilaianObjInput;
    connect?: Prisma.EOMStatusWhereUniqueInput;
};
export type EOMStatusUpdateOneRequiredWithoutPenilaianObjNestedInput = {
    create?: Prisma.XOR<Prisma.EOMStatusCreateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedCreateWithoutPenilaianObjInput>;
    connectOrCreate?: Prisma.EOMStatusCreateOrConnectWithoutPenilaianObjInput;
    upsert?: Prisma.EOMStatusUpsertWithoutPenilaianObjInput;
    connect?: Prisma.EOMStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EOMStatusUpdateToOneWithWhereWithoutPenilaianObjInput, Prisma.EOMStatusUpdateWithoutPenilaianObjInput>, Prisma.EOMStatusUncheckedUpdateWithoutPenilaianObjInput>;
};
export type EOMStatusCreateWithoutPenilaianObjInput = {
    desc: string;
};
export type EOMStatusUncheckedCreateWithoutPenilaianObjInput = {
    id?: number;
    desc: string;
};
export type EOMStatusCreateOrConnectWithoutPenilaianObjInput = {
    where: Prisma.EOMStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.EOMStatusCreateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedCreateWithoutPenilaianObjInput>;
};
export type EOMStatusUpsertWithoutPenilaianObjInput = {
    update: Prisma.XOR<Prisma.EOMStatusUpdateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedUpdateWithoutPenilaianObjInput>;
    create: Prisma.XOR<Prisma.EOMStatusCreateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedCreateWithoutPenilaianObjInput>;
    where?: Prisma.EOMStatusWhereInput;
};
export type EOMStatusUpdateToOneWithWhereWithoutPenilaianObjInput = {
    where?: Prisma.EOMStatusWhereInput;
    data: Prisma.XOR<Prisma.EOMStatusUpdateWithoutPenilaianObjInput, Prisma.EOMStatusUncheckedUpdateWithoutPenilaianObjInput>;
};
export type EOMStatusUpdateWithoutPenilaianObjInput = {
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EOMStatusUncheckedUpdateWithoutPenilaianObjInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type EOMStatusCountOutputType
 */
export type EOMStatusCountOutputType = {
    penilaianObj: number;
};
export type EOMStatusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianObj?: boolean | EOMStatusCountOutputTypeCountPenilaianObjArgs;
};
/**
 * EOMStatusCountOutputType without action
 */
export type EOMStatusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatusCountOutputType
     */
    select?: Prisma.EOMStatusCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EOMStatusCountOutputType without action
 */
export type EOMStatusCountOutputTypeCountPenilaianObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EOMPenilaianWhereInput;
};
export type EOMStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    penilaianObj?: boolean | Prisma.EOMStatus$penilaianObjArgs<ExtArgs>;
    _count?: boolean | Prisma.EOMStatusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eOMStatus"]>;
export type EOMStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["eOMStatus"]>;
export type EOMStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["eOMStatus"]>;
export type EOMStatusSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type EOMStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["eOMStatus"]>;
export type EOMStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penilaianObj?: boolean | Prisma.EOMStatus$penilaianObjArgs<ExtArgs>;
    _count?: boolean | Prisma.EOMStatusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EOMStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EOMStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EOMStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EOMStatus";
    objects: {
        penilaianObj: Prisma.$EOMPenilaianPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["eOMStatus"]>;
    composites: {};
};
export type EOMStatusGetPayload<S extends boolean | null | undefined | EOMStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload, S>;
export type EOMStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EOMStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EOMStatusCountAggregateInputType | true;
};
export interface EOMStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EOMStatus'];
        meta: {
            name: 'EOMStatus';
        };
    };
    /**
     * Find zero or one EOMStatus that matches the filter.
     * @param {EOMStatusFindUniqueArgs} args - Arguments to find a EOMStatus
     * @example
     * // Get one EOMStatus
     * const eOMStatus = await prisma.eOMStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EOMStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, EOMStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EOMStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EOMStatusFindUniqueOrThrowArgs} args - Arguments to find a EOMStatus
     * @example
     * // Get one EOMStatus
     * const eOMStatus = await prisma.eOMStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EOMStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EOMStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EOMStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusFindFirstArgs} args - Arguments to find a EOMStatus
     * @example
     * // Get one EOMStatus
     * const eOMStatus = await prisma.eOMStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EOMStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, EOMStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EOMStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusFindFirstOrThrowArgs} args - Arguments to find a EOMStatus
     * @example
     * // Get one EOMStatus
     * const eOMStatus = await prisma.eOMStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EOMStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EOMStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EOMStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EOMStatuses
     * const eOMStatuses = await prisma.eOMStatus.findMany()
     *
     * // Get first 10 EOMStatuses
     * const eOMStatuses = await prisma.eOMStatus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eOMStatusWithIdOnly = await prisma.eOMStatus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EOMStatusFindManyArgs>(args?: Prisma.SelectSubset<T, EOMStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EOMStatus.
     * @param {EOMStatusCreateArgs} args - Arguments to create a EOMStatus.
     * @example
     * // Create one EOMStatus
     * const EOMStatus = await prisma.eOMStatus.create({
     *   data: {
     *     // ... data to create a EOMStatus
     *   }
     * })
     *
     */
    create<T extends EOMStatusCreateArgs>(args: Prisma.SelectSubset<T, EOMStatusCreateArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EOMStatuses.
     * @param {EOMStatusCreateManyArgs} args - Arguments to create many EOMStatuses.
     * @example
     * // Create many EOMStatuses
     * const eOMStatus = await prisma.eOMStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EOMStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, EOMStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EOMStatuses and returns the data saved in the database.
     * @param {EOMStatusCreateManyAndReturnArgs} args - Arguments to create many EOMStatuses.
     * @example
     * // Create many EOMStatuses
     * const eOMStatus = await prisma.eOMStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EOMStatuses and only return the `id`
     * const eOMStatusWithIdOnly = await prisma.eOMStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EOMStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EOMStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EOMStatus.
     * @param {EOMStatusDeleteArgs} args - Arguments to delete one EOMStatus.
     * @example
     * // Delete one EOMStatus
     * const EOMStatus = await prisma.eOMStatus.delete({
     *   where: {
     *     // ... filter to delete one EOMStatus
     *   }
     * })
     *
     */
    delete<T extends EOMStatusDeleteArgs>(args: Prisma.SelectSubset<T, EOMStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EOMStatus.
     * @param {EOMStatusUpdateArgs} args - Arguments to update one EOMStatus.
     * @example
     * // Update one EOMStatus
     * const eOMStatus = await prisma.eOMStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EOMStatusUpdateArgs>(args: Prisma.SelectSubset<T, EOMStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EOMStatuses.
     * @param {EOMStatusDeleteManyArgs} args - Arguments to filter EOMStatuses to delete.
     * @example
     * // Delete a few EOMStatuses
     * const { count } = await prisma.eOMStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EOMStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, EOMStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EOMStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EOMStatuses
     * const eOMStatus = await prisma.eOMStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EOMStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, EOMStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EOMStatuses and returns the data updated in the database.
     * @param {EOMStatusUpdateManyAndReturnArgs} args - Arguments to update many EOMStatuses.
     * @example
     * // Update many EOMStatuses
     * const eOMStatus = await prisma.eOMStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EOMStatuses and only return the `id`
     * const eOMStatusWithIdOnly = await prisma.eOMStatus.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends EOMStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EOMStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EOMStatus.
     * @param {EOMStatusUpsertArgs} args - Arguments to update or create a EOMStatus.
     * @example
     * // Update or create a EOMStatus
     * const eOMStatus = await prisma.eOMStatus.upsert({
     *   create: {
     *     // ... data to create a EOMStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EOMStatus we want to update
     *   }
     * })
     */
    upsert<T extends EOMStatusUpsertArgs>(args: Prisma.SelectSubset<T, EOMStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__EOMStatusClient<runtime.Types.Result.GetResult<Prisma.$EOMStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EOMStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusCountArgs} args - Arguments to filter EOMStatuses to count.
     * @example
     * // Count the number of EOMStatuses
     * const count = await prisma.eOMStatus.count({
     *   where: {
     *     // ... the filter for the EOMStatuses we want to count
     *   }
     * })
    **/
    count<T extends EOMStatusCountArgs>(args?: Prisma.Subset<T, EOMStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EOMStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EOMStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EOMStatusAggregateArgs>(args: Prisma.Subset<T, EOMStatusAggregateArgs>): Prisma.PrismaPromise<GetEOMStatusAggregateType<T>>;
    /**
     * Group by EOMStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EOMStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EOMStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EOMStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: EOMStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EOMStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEOMStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EOMStatus model
     */
    readonly fields: EOMStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EOMStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EOMStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    penilaianObj<T extends Prisma.EOMStatus$penilaianObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EOMStatus$penilaianObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EOMPenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EOMStatus model
 */
export interface EOMStatusFieldRefs {
    readonly id: Prisma.FieldRef<"EOMStatus", 'Int'>;
    readonly desc: Prisma.FieldRef<"EOMStatus", 'String'>;
}
/**
 * EOMStatus findUnique
 */
export type EOMStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter, which EOMStatus to fetch.
     */
    where: Prisma.EOMStatusWhereUniqueInput;
};
/**
 * EOMStatus findUniqueOrThrow
 */
export type EOMStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter, which EOMStatus to fetch.
     */
    where: Prisma.EOMStatusWhereUniqueInput;
};
/**
 * EOMStatus findFirst
 */
export type EOMStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter, which EOMStatus to fetch.
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMStatuses to fetch.
     */
    orderBy?: Prisma.EOMStatusOrderByWithRelationInput | Prisma.EOMStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EOMStatuses.
     */
    cursor?: Prisma.EOMStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EOMStatuses.
     */
    distinct?: Prisma.EOMStatusScalarFieldEnum | Prisma.EOMStatusScalarFieldEnum[];
};
/**
 * EOMStatus findFirstOrThrow
 */
export type EOMStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter, which EOMStatus to fetch.
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMStatuses to fetch.
     */
    orderBy?: Prisma.EOMStatusOrderByWithRelationInput | Prisma.EOMStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EOMStatuses.
     */
    cursor?: Prisma.EOMStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EOMStatuses.
     */
    distinct?: Prisma.EOMStatusScalarFieldEnum | Prisma.EOMStatusScalarFieldEnum[];
};
/**
 * EOMStatus findMany
 */
export type EOMStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter, which EOMStatuses to fetch.
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EOMStatuses to fetch.
     */
    orderBy?: Prisma.EOMStatusOrderByWithRelationInput | Prisma.EOMStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EOMStatuses.
     */
    cursor?: Prisma.EOMStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EOMStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EOMStatuses.
     */
    skip?: number;
    distinct?: Prisma.EOMStatusScalarFieldEnum | Prisma.EOMStatusScalarFieldEnum[];
};
/**
 * EOMStatus create
 */
export type EOMStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * The data needed to create a EOMStatus.
     */
    data: Prisma.XOR<Prisma.EOMStatusCreateInput, Prisma.EOMStatusUncheckedCreateInput>;
};
/**
 * EOMStatus createMany
 */
export type EOMStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EOMStatuses.
     */
    data: Prisma.EOMStatusCreateManyInput | Prisma.EOMStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EOMStatus createManyAndReturn
 */
export type EOMStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many EOMStatuses.
     */
    data: Prisma.EOMStatusCreateManyInput | Prisma.EOMStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EOMStatus update
 */
export type EOMStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * The data needed to update a EOMStatus.
     */
    data: Prisma.XOR<Prisma.EOMStatusUpdateInput, Prisma.EOMStatusUncheckedUpdateInput>;
    /**
     * Choose, which EOMStatus to update.
     */
    where: Prisma.EOMStatusWhereUniqueInput;
};
/**
 * EOMStatus updateMany
 */
export type EOMStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EOMStatuses.
     */
    data: Prisma.XOR<Prisma.EOMStatusUpdateManyMutationInput, Prisma.EOMStatusUncheckedUpdateManyInput>;
    /**
     * Filter which EOMStatuses to update
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * Limit how many EOMStatuses to update.
     */
    limit?: number;
};
/**
 * EOMStatus updateManyAndReturn
 */
export type EOMStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * The data used to update EOMStatuses.
     */
    data: Prisma.XOR<Prisma.EOMStatusUpdateManyMutationInput, Prisma.EOMStatusUncheckedUpdateManyInput>;
    /**
     * Filter which EOMStatuses to update
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * Limit how many EOMStatuses to update.
     */
    limit?: number;
};
/**
 * EOMStatus upsert
 */
export type EOMStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * The filter to search for the EOMStatus to update in case it exists.
     */
    where: Prisma.EOMStatusWhereUniqueInput;
    /**
     * In case the EOMStatus found by the `where` argument doesn't exist, create a new EOMStatus with this data.
     */
    create: Prisma.XOR<Prisma.EOMStatusCreateInput, Prisma.EOMStatusUncheckedCreateInput>;
    /**
     * In case the EOMStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EOMStatusUpdateInput, Prisma.EOMStatusUncheckedUpdateInput>;
};
/**
 * EOMStatus delete
 */
export type EOMStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
    /**
     * Filter which EOMStatus to delete.
     */
    where: Prisma.EOMStatusWhereUniqueInput;
};
/**
 * EOMStatus deleteMany
 */
export type EOMStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EOMStatuses to delete
     */
    where?: Prisma.EOMStatusWhereInput;
    /**
     * Limit how many EOMStatuses to delete.
     */
    limit?: number;
};
/**
 * EOMStatus.penilaianObj
 */
export type EOMStatus$penilaianObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EOMPenilaianWhereInput;
    orderBy?: Prisma.EOMPenilaianOrderByWithRelationInput | Prisma.EOMPenilaianOrderByWithRelationInput[];
    cursor?: Prisma.EOMPenilaianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EOMPenilaianScalarFieldEnum | Prisma.EOMPenilaianScalarFieldEnum[];
};
/**
 * EOMStatus without action
 */
export type EOMStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EOMStatus
     */
    select?: Prisma.EOMStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EOMStatus
     */
    omit?: Prisma.EOMStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EOMStatusInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EOMStatus.d.ts.map