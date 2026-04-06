import z from "zod";

export class EOMPenilaianValidation {
    static CREATE: z.ZodType = z.object({
        desc: z.string(),
        periode: z.string(),
        start_date: z.string(),
        end_date: z. string(),
        status: z.number(),
        created_at: z.string().optional(),
        last_updated: z.string().optional()
    });

    static UPDATE: z.ZodType = z.object({
        desc: z.string().optional(),
        start_date: z.string().optional(),
        end_date: z. string().optional(),
        status: z.number().optional()
    });
}