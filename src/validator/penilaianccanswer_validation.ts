import z from "zod";


export class PenilaianCcAnswerValidation {

    static UPDATE: z.ZodType = z.object({
        value: z.number().min(0).max(0).optional()
    });
}