"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = __importDefault(require("./app.module"));
async function bootstrap() {
    console.log("Starting SVC Navigator...");
    const app = await core_1.NestFactory.create(app_module_1.default);
    const PORT = process.env.PORT || 3001;
    app.listen(PORT);
    console.log(`SVC Navigator started on ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map