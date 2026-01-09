import { CandidateCC, PenilaianCC, PenilaianCcAnswer, PenilaianCcQuestions } from "../generated/prisma/client";
import { CandidateCcReponse } from "./candidatecc_model";


export type UpdatePenilaianCcAnswer = {
    value?: number;
}

export type CreatePenilaianCcAnswer = {
    penilaicc: string;
    candidatecc: string;
    question: string;
}

export type PenilaianCcAnswerDetailResponse = {
    uuid: string;
    penilaicc: string;
    candidatecc: string;
    question: string;
    questionObj: PenilaianCcQuestions
    value: number;
    created_at: Date;
    last_updated: Date;
};

export type KuesionerCcResponse = {
    candidate: CandidateCcReponse;
    answers: PenilaianCcAnswerDetailResponse[];
}