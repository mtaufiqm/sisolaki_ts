import z from "zod";


export class PenilaianCcValidation {

    static CREATE: z.ZodType = z.object({
        desc: z.string(),
        tahun: z.number().int().nonnegative().max(9999),
        status: z.number().int().nonnegative().max(5)
    });

    static UPDATE: z.ZodType = z.object({
        desc: z.string().optional(),
        tahun: z.number().int().nonnegative().max(9999).optional(),
        status: z.number().int().nonnegative().max(5).optional()
    });
}