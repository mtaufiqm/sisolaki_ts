import { ResponseError } from "../error/response_error";
import { PenilaianCcStatsResponse } from "../model/penilaiancc_model";
import { client } from "../web/database";


export class PenilaianCcService {
    static async getStatsByUuid(uuid: string): Promise<PenilaianCcStatsResponse>{
        let result = await client.penilaianCC.findUnique({
            where: {
                uuid: uuid
            },
            include: {
                candidateObj: {
                    include: {
                        pegawaiObj: true,
                        penilaianAnswer: true
                    },
                },
                penilaiObj: {
                    include: {
                        pegawaiObj: true
                    }
                }
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        result.candidateObj.forEach((el) => {
            let listValue: number[] = [];
            el.penilaianAnswer.forEach((el2) => {
                listValue.push(el2.value);
            });
            let total = 0;
            listValue.forEach((el) => total = total+el);
            let average: number = (listValue.length !== 0)?(total/listValue.length):0;
            el.score = average;
        });
        let {candidateObj, penilaiObj, ...restData} = result;
        candidateObj.sort((data1, data2) => {
            if(data1.score < data2.score){
                return 1;
            }
            if(data1.score > data2.score){
                return -1;
            }
            return 0;
        });
        return {
            ...restData,
            penilaiObj: penilaiObj,
            candidateObj: candidateObj.map((el) => {
                let {penilaianAnswer, ...candidateRestData} = el;
                return candidateRestData;
            })

        }
    }
}