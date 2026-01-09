import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Jabatan
 *
 */
export type JabatanModel = runtime.Types.Result.DefaultSelection<Prisma.$JabatanPayload>;
export type AggregateJabatan = {
    _count: JabatanCountAggregateOutputType | null;
    _avg: JabatanAvgAggregateOutputType | null;
    _sum: JabatanSumAggregateOutputType | null;
    _min: JabatanMinAggregateOutputType | null;
    _max: JabatanMaxAggregateOutputType | null;
};
export type JabatanAvgAggregateOutputType = {
    id: number | null;
};
export type JabatanSumAggregateOutputType = {
    id: number | null;
};
export type JabatanMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type JabatanMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type JabatanCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type JabatanAvgAggregateInputType = {
    id?: true;
};
export type JabatanSumAggregateInputType = {
    id?: true;
};
export type JabatanMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type JabatanMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type JabatanCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type JabatanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatan to aggregate.
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: Prisma.JabatanOrderByWithRelationInput | Prisma.JabatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JabatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jabatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jabatans
    **/
    _count?: true | JabatanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JabatanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JabatanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JabatanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JabatanMaxAggregateInputType;
};
export type GetJabatanAggregateType<T extends JabatanAggregateArgs> = {
    [P in keyof T & keyof AggregateJabatan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJabatan[P]> : Prisma.GetScalarType<T[P], AggregateJabatan[P]>;
};
export type JabatanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JabatanWhereInput;
    orderBy?: Prisma.JabatanOrderByWithAggregationInput | Prisma.JabatanOrderByWithAggregationInput[];
    by: Prisma.JabatanScalarFieldEnum[] | Prisma.JabatanScalarFieldEnum;
    having?: Prisma.JabatanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JabatanCountAggregateInputType | true;
    _avg?: JabatanAvgAggregateInputType;
    _sum?: JabatanSumAggregateInputType;
    _min?: JabatanMinAggregateInputType;
    _max?: JabatanMaxAggregateInputType;
};
export type JabatanGroupByOutputType = {
    id: number;
    desc: string;
    _count: JabatanCountAggregateOutputType | null;
    _avg: JabatanAvgAggregateOutputType | null;
    _sum: JabatanSumAggregateOutputType | null;
    _min: JabatanMinAggregateOutputType | null;
    _max: JabatanMaxAggregateOutputType | null;
};
type GetJabatanGroupByPayload<T extends JabatanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JabatanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JabatanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JabatanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JabatanGroupByOutputType[P]>;
}>>;
export type JabatanWhereInput = {
    AND?: Prisma.JabatanWhereInput | Prisma.JabatanWhereInput[];
    OR?: Prisma.JabatanWhereInput[];
    NOT?: Prisma.JabatanWhereInput | Prisma.JabatanWhereInput[];
    id?: Prisma.IntFilter<"Jabatan"> | number;
    desc?: Prisma.StringFilter<"Jabatan"> | string;
    pegawaiObj?: Prisma.PegawaiListRelationFilter;
};
export type JabatanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    pegawaiObj?: Prisma.PegawaiOrderByRelationAggregateInput;
};
export type JabatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.JabatanWhereInput | Prisma.JabatanWhereInput[];
    OR?: Prisma.JabatanWhereInput[];
    NOT?: Prisma.JabatanWhereInput | Prisma.JabatanWhereInput[];
    desc?: Prisma.StringFilter<"Jabatan"> | string;
    pegawaiObj?: Prisma.PegawaiListRelationFilter;
}, "id">;
export type JabatanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.JabatanCountOrderByAggregateInput;
    _avg?: Prisma.JabatanAvgOrderByAggregateInput;
    _max?: Prisma.JabatanMaxOrderByAggregateInput;
    _min?: Prisma.JabatanMinOrderByAggregateInput;
    _sum?: Prisma.JabatanSumOrderByAggregateInput;
};
export type JabatanScalarWhereWithAggregatesInput = {
    AND?: Prisma.JabatanScalarWhereWithAggregatesInput | Prisma.JabatanScalarWhereWithAggregatesInput[];
    OR?: Prisma.JabatanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JabatanScalarWhereWithAggregatesInput | Prisma.JabatanScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Jabatan"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"Jabatan"> | string;
};
export type JabatanCreateInput = {
    id: number;
    desc: string;
    pegawaiObj?: Prisma.PegawaiCreateNestedManyWithoutJabatanObjInput;
};
export type JabatanUncheckedCreateInput = {
    id: number;
    desc: string;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedManyWithoutJabatanObjInput;
};
export type JabatanUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawaiObj?: Prisma.PegawaiUpdateManyWithoutJabatanObjNestedInput;
};
export type JabatanUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateManyWithoutJabatanObjNestedInput;
};
export type JabatanCreateManyInput = {
    id: number;
    desc: string;
};
export type JabatanUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type JabatanUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type JabatanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type JabatanAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type JabatanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type JabatanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type JabatanSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type JabatanNullableScalarRelationFilter = {
    is?: Prisma.JabatanWhereInput | null;
    isNot?: Prisma.JabatanWhereInput | null;
};
export type JabatanCreateNestedOneWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.JabatanCreateWithoutPegawaiObjInput, Prisma.JabatanUncheckedCreateWithoutPegawaiObjInput>;
    connectOrCreate?: Prisma.JabatanCreateOrConnectWithoutPegawaiObjInput;
    connect?: Prisma.JabatanWhereUniqueInput;
};
export type JabatanUpdateOneWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.JabatanCreateWithoutPegawaiObjInput, Prisma.JabatanUncheckedCreateWithoutPegawaiObjInput>;
    connectOrCreate?: Prisma.JabatanCreateOrConnectWithoutPegawaiObjInput;
    upsert?: Prisma.JabatanUpsertWithoutPegawaiObjInput;
    disconnect?: Prisma.JabatanWhereInput | boolean;
    delete?: Prisma.JabatanWhereInput | boolean;
    connect?: Prisma.JabatanWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JabatanUpdateToOneWithWhereWithoutPegawaiObjInput, Prisma.JabatanUpdateWithoutPegawaiObjInput>, Prisma.JabatanUncheckedUpdateWithoutPegawaiObjInput>;
};
export type JabatanCreateWithoutPegawaiObjInput = {
    id: number;
    desc: string;
};
export type JabatanUncheckedCreateWithoutPegawaiObjInput = {
    id: number;
    desc: string;
};
export type JabatanCreateOrConnectWithoutPegawaiObjInput = {
    where: Prisma.JabatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.JabatanCreateWithoutPegawaiObjInput, Prisma.JabatanUncheckedCreateWithoutPegawaiObjInput>;
};
export type JabatanUpsertWithoutPegawaiObjInput = {
    update: Prisma.XOR<Prisma.JabatanUpdateWithoutPegawaiObjInput, Prisma.JabatanUncheckedUpdateWithoutPegawaiObjInput>;
    create: Prisma.XOR<Prisma.JabatanCreateWithoutPegawaiObjInput, Prisma.JabatanUncheckedCreateWithoutPegawaiObjInput>;
    where?: Prisma.JabatanWhereInput;
};
export type JabatanUpdateToOneWithWhereWithoutPegawaiObjInput = {
    where?: Prisma.JabatanWhereInput;
    data: Prisma.XOR<Prisma.JabatanUpdateWithoutPegawaiObjInput, Prisma.JabatanUncheckedUpdateWithoutPegawaiObjInput>;
};
export type JabatanUpdateWithoutPegawaiObjInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type JabatanUncheckedUpdateWithoutPegawaiObjInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type JabatanCountOutputType
 */
export type JabatanCountOutputType = {
    pegawaiObj: number;
};
export type JabatanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawaiObj?: boolean | JabatanCountOutputTypeCountPegawaiObjArgs;
};
/**
 * JabatanCountOutputType without action
 */
export type JabatanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JabatanCountOutputType
     */
    select?: Prisma.JabatanCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * JabatanCountOutputType without action
 */
export type JabatanCountOutputTypeCountPegawaiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PegawaiWhereInput;
};
export type JabatanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    pegawaiObj?: boolean | Prisma.Jabatan$pegawaiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.JabatanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jabatan"]>;
export type JabatanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["jabatan"]>;
export type JabatanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["jabatan"]>;
export type JabatanSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type JabatanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["jabatan"]>;
export type JabatanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawaiObj?: boolean | Prisma.Jabatan$pegawaiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.JabatanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JabatanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type JabatanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $JabatanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Jabatan";
    objects: {
        pegawaiObj: Prisma.$PegawaiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["jabatan"]>;
    composites: {};
};
export type JabatanGetPayload<S extends boolean | null | undefined | JabatanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JabatanPayload, S>;
export type JabatanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JabatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JabatanCountAggregateInputType | true;
};
export interface JabatanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Jabatan'];
        meta: {
            name: 'Jabatan';
        };
    };
    /**
     * Find zero or one Jabatan that matches the filter.
     * @param {JabatanFindUniqueArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JabatanFindUniqueArgs>(args: Prisma.SelectSubset<T, JabatanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Jabatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JabatanFindUniqueOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JabatanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JabatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JabatanFindFirstArgs>(args?: Prisma.SelectSubset<T, JabatanFindFirstArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JabatanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JabatanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Jabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jabatans
     * const jabatans = await prisma.jabatan.findMany()
     *
     * // Get first 10 Jabatans
     * const jabatans = await prisma.jabatan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JabatanFindManyArgs>(args?: Prisma.SelectSubset<T, JabatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Jabatan.
     * @param {JabatanCreateArgs} args - Arguments to create a Jabatan.
     * @example
     * // Create one Jabatan
     * const Jabatan = await prisma.jabatan.create({
     *   data: {
     *     // ... data to create a Jabatan
     *   }
     * })
     *
     */
    create<T extends JabatanCreateArgs>(args: Prisma.SelectSubset<T, JabatanCreateArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Jabatans.
     * @param {JabatanCreateManyArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JabatanCreateManyArgs>(args?: Prisma.SelectSubset<T, JabatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Jabatans and returns the data saved in the database.
     * @param {JabatanCreateManyAndReturnArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jabatans and only return the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JabatanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JabatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Jabatan.
     * @param {JabatanDeleteArgs} args - Arguments to delete one Jabatan.
     * @example
     * // Delete one Jabatan
     * const Jabatan = await prisma.jabatan.delete({
     *   where: {
     *     // ... filter to delete one Jabatan
     *   }
     * })
     *
     */
    delete<T extends JabatanDeleteArgs>(args: Prisma.SelectSubset<T, JabatanDeleteArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Jabatan.
     * @param {JabatanUpdateArgs} args - Arguments to update one Jabatan.
     * @example
     * // Update one Jabatan
     * const jabatan = await prisma.jabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JabatanUpdateArgs>(args: Prisma.SelectSubset<T, JabatanUpdateArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Jabatans.
     * @param {JabatanDeleteManyArgs} args - Arguments to filter Jabatans to delete.
     * @example
     * // Delete a few Jabatans
     * const { count } = await prisma.jabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JabatanDeleteManyArgs>(args?: Prisma.SelectSubset<T, JabatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JabatanUpdateManyArgs>(args: Prisma.SelectSubset<T, JabatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jabatans and returns the data updated in the database.
     * @param {JabatanUpdateManyAndReturnArgs} args - Arguments to update many Jabatans.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jabatans and only return the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.updateManyAndReturn({
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
    updateManyAndReturn<T extends JabatanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JabatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Jabatan.
     * @param {JabatanUpsertArgs} args - Arguments to update or create a Jabatan.
     * @example
     * // Update or create a Jabatan
     * const jabatan = await prisma.jabatan.upsert({
     *   create: {
     *     // ... data to create a Jabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jabatan we want to update
     *   }
     * })
     */
    upsert<T extends JabatanUpsertArgs>(args: Prisma.SelectSubset<T, JabatanUpsertArgs<ExtArgs>>): Prisma.Prisma__JabatanClient<runtime.Types.Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanCountArgs} args - Arguments to filter Jabatans to count.
     * @example
     * // Count the number of Jabatans
     * const count = await prisma.jabatan.count({
     *   where: {
     *     // ... the filter for the Jabatans we want to count
     *   }
     * })
    **/
    count<T extends JabatanCountArgs>(args?: Prisma.Subset<T, JabatanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JabatanCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JabatanAggregateArgs>(args: Prisma.Subset<T, JabatanAggregateArgs>): Prisma.PrismaPromise<GetJabatanAggregateType<T>>;
    /**
     * Group by Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JabatanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JabatanGroupByArgs['orderBy'];
    } : {
        orderBy?: JabatanGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Jabatan model
     */
    readonly fields: JabatanFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Jabatan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JabatanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pegawaiObj<T extends Prisma.Jabatan$pegawaiObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Jabatan$pegawaiObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Jabatan model
 */
export interface JabatanFieldRefs {
    readonly id: Prisma.FieldRef<"Jabatan", 'Int'>;
    readonly desc: Prisma.FieldRef<"Jabatan", 'String'>;
}
/**
 * Jabatan findUnique
 */
export type JabatanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter, which Jabatan to fetch.
     */
    where: Prisma.JabatanWhereUniqueInput;
};
/**
 * Jabatan findUniqueOrThrow
 */
export type JabatanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter, which Jabatan to fetch.
     */
    where: Prisma.JabatanWhereUniqueInput;
};
/**
 * Jabatan findFirst
 */
export type JabatanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: Prisma.JabatanOrderByWithRelationInput | Prisma.JabatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jabatans.
     */
    cursor?: Prisma.JabatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jabatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jabatans.
     */
    distinct?: Prisma.JabatanScalarFieldEnum | Prisma.JabatanScalarFieldEnum[];
};
/**
 * Jabatan findFirstOrThrow
 */
export type JabatanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: Prisma.JabatanOrderByWithRelationInput | Prisma.JabatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jabatans.
     */
    cursor?: Prisma.JabatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jabatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jabatans.
     */
    distinct?: Prisma.JabatanScalarFieldEnum | Prisma.JabatanScalarFieldEnum[];
};
/**
 * Jabatan findMany
 */
export type JabatanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter, which Jabatans to fetch.
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: Prisma.JabatanOrderByWithRelationInput | Prisma.JabatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jabatans.
     */
    cursor?: Prisma.JabatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jabatans.
     */
    skip?: number;
    distinct?: Prisma.JabatanScalarFieldEnum | Prisma.JabatanScalarFieldEnum[];
};
/**
 * Jabatan create
 */
export type JabatanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * The data needed to create a Jabatan.
     */
    data: Prisma.XOR<Prisma.JabatanCreateInput, Prisma.JabatanUncheckedCreateInput>;
};
/**
 * Jabatan createMany
 */
export type JabatanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jabatans.
     */
    data: Prisma.JabatanCreateManyInput | Prisma.JabatanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Jabatan createManyAndReturn
 */
export type JabatanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * The data used to create many Jabatans.
     */
    data: Prisma.JabatanCreateManyInput | Prisma.JabatanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Jabatan update
 */
export type JabatanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * The data needed to update a Jabatan.
     */
    data: Prisma.XOR<Prisma.JabatanUpdateInput, Prisma.JabatanUncheckedUpdateInput>;
    /**
     * Choose, which Jabatan to update.
     */
    where: Prisma.JabatanWhereUniqueInput;
};
/**
 * Jabatan updateMany
 */
export type JabatanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Jabatans.
     */
    data: Prisma.XOR<Prisma.JabatanUpdateManyMutationInput, Prisma.JabatanUncheckedUpdateManyInput>;
    /**
     * Filter which Jabatans to update
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * Limit how many Jabatans to update.
     */
    limit?: number;
};
/**
 * Jabatan updateManyAndReturn
 */
export type JabatanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * The data used to update Jabatans.
     */
    data: Prisma.XOR<Prisma.JabatanUpdateManyMutationInput, Prisma.JabatanUncheckedUpdateManyInput>;
    /**
     * Filter which Jabatans to update
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * Limit how many Jabatans to update.
     */
    limit?: number;
};
/**
 * Jabatan upsert
 */
export type JabatanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * The filter to search for the Jabatan to update in case it exists.
     */
    where: Prisma.JabatanWhereUniqueInput;
    /**
     * In case the Jabatan found by the `where` argument doesn't exist, create a new Jabatan with this data.
     */
    create: Prisma.XOR<Prisma.JabatanCreateInput, Prisma.JabatanUncheckedCreateInput>;
    /**
     * In case the Jabatan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JabatanUpdateInput, Prisma.JabatanUncheckedUpdateInput>;
};
/**
 * Jabatan delete
 */
export type JabatanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
    /**
     * Filter which Jabatan to delete.
     */
    where: Prisma.JabatanWhereUniqueInput;
};
/**
 * Jabatan deleteMany
 */
export type JabatanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatans to delete
     */
    where?: Prisma.JabatanWhereInput;
    /**
     * Limit how many Jabatans to delete.
     */
    limit?: number;
};
/**
 * Jabatan.pegawaiObj
 */
export type Jabatan$pegawaiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: Prisma.PegawaiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: Prisma.PegawaiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PegawaiInclude<ExtArgs> | null;
    where?: Prisma.PegawaiWhereInput;
    orderBy?: Prisma.PegawaiOrderByWithRelationInput | Prisma.PegawaiOrderByWithRelationInput[];
    cursor?: Prisma.PegawaiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PegawaiScalarFieldEnum | Prisma.PegawaiScalarFieldEnum[];
};
/**
 * Jabatan without action
 */
export type JabatanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: Prisma.JabatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: Prisma.JabatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JabatanInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Jabatan.d.ts.map