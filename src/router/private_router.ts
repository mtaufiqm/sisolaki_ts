import express from "express"
import { authMiddleware } from "../middleware/auth_middleware";
import { PegawaiController } from "../controller/pegawai_controller";
import { PenilaianCcController } from "../controller/penilaiancc_controller";
import { CandidateCcController } from "../controller/candidatecc_controller";
import { PenilaiCcController } from "../controller/penilaicc_controller";
import { PenilaianCcAnswerController } from "../controller/penilaianccanswers_controller";


export const privateRouter = express.Router();
//auth_middleware
privateRouter.use("/api",authMiddleware);


//pegawai
privateRouter.get("/api/pegawai", PegawaiController.readAllActive);
privateRouter.get("/api/pegawai/active", PegawaiController.readAllActive);


//penilaiancc
privateRouter.get("/api/penilaiancc", PenilaianCcController.readAll);
privateRouter.post("/api/penilaiancc", PenilaianCcController.createPenilaianCC);

privateRouter.get("/api/penilaiancc/all/penilai", PenilaianCcController.readAllByPenilai);
privateRouter.patch("/api/penilaiancc/:uuid", PenilaianCcController.updatePenilaianCC);
privateRouter.delete("/api/penilaiancc/:uuid", PenilaianCcController.deletePenilaianCC);

//cadidatecc
privateRouter.get("/api/penilaiancc/:uuid/candidate", PenilaianCcController.readAllCandidateByPenilaian);
privateRouter.post("/api/penilaiancc/:uuid/candidate", CandidateCcController.createCandidateCC);
privateRouter.delete("/api/candidatecc/:uuid", CandidateCcController.deleteCandidateCC);
privateRouter.patch("/api/candidatecc/:uuid", CandidateCcController.updateCandidateCC);


//penilaicc
privateRouter.get("/api/penilaiancc/:uuid/penilai", PenilaiCcController.readAllByPenilaianUuid);

//penilaicc
privateRouter.get("/api/penilaiancc/:uuid/questioners", PenilaianCcAnswerController.readAllQuestionerByPenilaian);
privateRouter.patch("/api/penilaianccanswer", PenilaianCcAnswerController.updateAllAnswers);