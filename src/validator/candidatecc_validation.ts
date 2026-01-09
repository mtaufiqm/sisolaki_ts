import z from "zod";

export class CandidateCcValidation {

    static CREATE: z.ZodType = z.object({
        pegawai: z.string(),
        penilaiancc: z.string(),
        kjk: z.number().nonnegative().max(100.0).optional(),
        skp: z.number().nonnegative().max(100.0).optional()
    });

    static UPDATE: z.ZodType = z.object({
        kjk: z.number().nonnegative().max(100.0).optional(),
        skp: z.number().nonnegative().max(100.0).optional()
    });
}
