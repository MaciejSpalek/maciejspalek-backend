"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const craft_1 = __importDefault(require("./src/routes/craft"));
const image_1 = __importDefault(require("./src/routes/image"));
const post_1 = __importDefault(require("./src/routes/post"));
const home_1 = __importDefault(require("./src/routes/home"));
const mailer_1 = __importDefault(require("./src/routes/mailer"));
const auth_1 = __importDefault(require("./src/routes/auth"));
const article_1 = __importDefault(require("./src/routes/article"));
const db_1 = require("./src/config/db");
const helpers_1 = require("./src/helpers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: helpers_1.DOMAINS,
}));
app.use(express_1.default.json({ limit: "10mb" }));
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/home", home_1.default);
app.use("/api/craft", craft_1.default);
app.use("/api/image", image_1.default);
app.use("/api/post", post_1.default);
app.use("/api/email", mailer_1.default);
app.use("/api/auth", auth_1.default);
app.use("/api/article", article_1.default);
app.use("/images", express_1.default.static("images"));
(0, db_1.connection)();
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
