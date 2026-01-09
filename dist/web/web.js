"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const public_router_1 = require("../router/public_router");
const private_router_1 = require("../router/private_router");
const error_middleware_1 = require("../middleware/error_middleware");
const moment_1 = __importDefault(require("moment"));
require("moment/locale/id.js");
//set moment language
moment_1.default.locale("id");
dotenv_1.default.config({ override: true });
const web = (0, express_1.default)();
web.set("trust proxy", true);
web.use((0, cors_1.default)({
    allowedHeaders: "*",
    exposedHeaders: "*",
    origin: "*"
}));
web.use(express_1.default.json());
web.use(public_router_1.publicRouter);
web.use(private_router_1.privateRouter);
//error middleware
web.use(error_middleware_1.errorMiddleware);
web.listen(process.env.SERVER_PORT);
//# sourceMappingURL=web.js.map