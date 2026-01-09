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
exports.privateRouter = express_1.default.Router();
//auth_middleware
exports.privateRouter.use("/api", auth_middleware_1.authMiddleware);
//pegawai
exports.privateRouter.get("/api/pegawai/active", pegawai_controller_1.PegawaiController.readAllActive);
//read all penilaiancc
exports.privateRouter.get("/api/penilaiancc", penilaiancc_controller_1.PenilaianCcController.readAll);
exports.privateRouter.post("/api/penilaiancc", penilaiancc_controller_1.PenilaianCcController.createPenilaianCC);
exports.privateRouter.patch("/api/penilaiancc/:uuid", penilaiancc_controller_1.PenilaianCcController.updatePenilaianCC);
exports.privateRouter.delete("/api/penilaiancc/:uuid", penilaiancc_controller_1.PenilaianCcController.deletePenilaianCC);
//cadidatecc
exports.privateRouter.get("/api/penilaiancc/:uuid/candidate", penilaiancc_controller_1.PenilaianCcController.readAllCandidateByPenilaian);
exports.privateRouter.post("/api/penilaiancc/:uuid/candidate", candidatecc_controller_1.CandidateCcController.createCandidateCC);
exports.privateRouter.delete("/api/candidatecc/:uuid", candidatecc_controller_1.CandidateCcController.deleteCandidateCC);
exports.privateRouter.patch("/api/candidatecc/:uuid", candidatecc_controller_1.CandidateCcController.updateCandidateCC);
//# sourceMappingURL=private_router.js.map