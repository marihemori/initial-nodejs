import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { type } from 'os';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const routerLoader = (app) => {
  const modulesPaths = path.join(__dirName, 'modules');

  // Check if the module is true
  fs.readdirSync(modulesPath).forEach(async (dir) => {
    const modulePath = path.join(modulesPath, dir);

    if (fs.statSync(modulePath).isDirectory()) {
      const controllerPath = path.join(modulePath, `${dir}.controller.js`);
      if (fs.existsSync(controllerPath)) {
        const controller = await import(controllerPath);

        if (controller.default && typeof controller.default === 'function') {
          app.use(controller.default);
        }
      }
    }
  });
};
