"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth_middleware");
const pegawai_controller_1 = require("../controller/pegawai_controller");
const penilaiancc_controller_1 = require("../controller/penilaiancc_controller");
const candidatecc_controller_1 = require("../controller/candidatecc_controller");
const penilaicc_controller_1 = require("../controller/penilaicc_controller");
const penilaianccanswers_controller_1 = require("../controller/penilaianccanswers_controller");
const eompenilaian_controller_1 = require("../controller/eompenilaian_controller");
exports.privateRouter = express_1.default.Router();
//auth_middleware
exports.privateRouter.use("/api", auth_middleware_1.authMiddleware);
//pegawai
exports.privateRouter.get("/api/pegawai", pegawai_controller_1.PegawaiController.readAllActive);
exports.privateRouter.get("/api/pegawai/active", pegawai_controller_1.PegawaiController.readAllActive);
//eompenilaian
exports.privateRouter.get("/api/eompenilaian", eompenilaian_controller_1.EOMPenilaianController.readAll);
exports.privateRouter.post("/api/eompenilaian", eompenilaian_controller_1.EOMPenilaianController.create);
exports.privateRouter.get("/api/eompenilaian/:uuid", eompenilaian_controller_1.EOMPenilaianController.getByUuid);
exports.privateRouter.patch("/api/eompenilaian/:uuid", eompenilaian_controller_1.EOMPenilaianController.updateByUuid);
//penilaiancc
exports.privateRouter.get("/api/penilaiancc", penilaiancc_controller_1.PenilaianCcController.readAll);
exports.privateRouter.post("/api/penilaiancc", penilaiancc_controller_1.PenilaianCcController.createPenilaianCC);
exports.privateRouter.get("/api/penilaiancc/all/penilai", penilaiancc_controller_1.PenilaianCcController.readAllByPenilai);
exports.privateRouter.delete("/api/penilaiancc/:uuid", penilaiancc_controller_1.PenilaianCcController.deletePenilaianCC);
exports.privateRouter.patch("/api/penilaiancc/:uuid", penilaiancc_controller_1.PenilaianCcController.updatePenilaianCC);
exports.privateRouter.get("/api/penilaiancc/:uuid/stats", penilaiancc_controller_1.PenilaianCcController.getStatsByUuid);
//cadidatecc
exports.privateRouter.get("/api/penilaiancc/:uuid/candidate", penilaiancc_controller_1.PenilaianCcController.readAllCandidateByPenilaian);
exports.privateRouter.post("/api/penilaiancc/:uuid/candidate", candidatecc_controller_1.CandidateCcController.createCandidateCC);
exports.privateRouter.delete("/api/candidatecc/:uuid", candidatecc_controller_1.CandidateCcController.deleteCandidateCC);
exports.privateRouter.patch("/api/candidatecc/:uuid", candidatecc_controller_1.CandidateCcController.updateCandidateCC);
//penilaicc
exports.privateRouter.get("/api/penilaiancc/:uuid/penilai", penilaicc_controller_1.PenilaiCcController.readAllByPenilaianUuid);
//penilaicc
exports.privateRouter.get("/api/penilaiancc/:uuid/questioners", penilaianccanswers_controller_1.PenilaianCcAnswerController.readAllQuestionerByPenilaian);
exports.privateRouter.patch("/api/penilaianccanswer", penilaianccanswers_controller_1.PenilaianCcAnswerController.updateAllAnswers);
//# sourceMappingURL=private_router.js.map