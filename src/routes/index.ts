import { Router } from "express";
import { readdirSync } from "fs";
import { getIndexController } from "../controllers/index.controller";
const PATH_ROUTER = `${__dirname}`;

const router = Router();

router.get("/", getIndexController)

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRoute: any) => {
            console.log(`Se esta cargando la ruta.../${cleanName}`)
            router.use(`/${cleanName}`, moduleRoute.router);
        })
    }
});

export { router };
