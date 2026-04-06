import { CreateEOMPenilaianRequest, EOMPenilaianResponse, UpdateEOMPenilaianRequest } from "../model/eompenilaian_model";
export declare class EOMPenilaianService {
    static getByUuid(uuid: string): Promise<EOMPenilaianResponse>;
    static readAll(args?: {
        limit?: number;
        status?: number;
    }): Promise<EOMPenilaianResponse[]>;
    static updateByUuid(uuid: string, data: UpdateEOMPenilaianRequest): Promise<EOMPenilaianResponse>;
    static create(data: CreateEOMPenilaianRequest): Promise<EOMPenilaianResponse>;
    static deleteByUuid(uuid: string): Promise<EOMPenilaianResponse>;
}
//# sourceMappingURL=eompenilaian_service.d.ts.map