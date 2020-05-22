import path from "path";
import fs from "fs";

// 文件服务
const getFile = async (ctx) => {
  const root = path.resolve(".");
  const filepath = path.join(root, ctx.params.name);

  ctx.response.body = fs.createReadStream(filepath);
};

export default getFile;
