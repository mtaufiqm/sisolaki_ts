import { EOMPenilaian } from "../generated/prisma/client";
export type EOMPenilaianResponse = EOMPenilaian;
export type CreateEOMPenilaianRequest = Omit<EOMPenilaian, "uuid"> & {
    uuid?: string;
};
export type UpdateEOMPenilaianRequest = Partial<Omit<EOMPenilaian, "uuid">>;
export declare function toEOMPenilaianResponse(data: EOMPenilaian): EOMPenilaianResponse;
//# sourceMappingURL=eompenilaian_model.d.ts.map