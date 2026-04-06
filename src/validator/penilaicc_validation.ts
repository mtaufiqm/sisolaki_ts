import z from "zod";


export class PenilaiCcValidation {
    static CREATE: z.ZodType = z.object({
        pegawai: z.string(),
        penilaiancc: z.string(),
    });

    static UPDATE: z.ZodType = z.object({
        pegawai: z.string().optional,
        penilaiancc: z.string().optional,
    });
}

