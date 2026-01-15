const http = require("http");
const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "..", "out");
const port = Number(process.env.PLAYWRIGHT_PORT || process.env.PORT || 3000);
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath =
  rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

const toFilePath = (urlPath) => {
  const safePath = urlPath.replace(/^\/+/, "");
  return path.join(outDir, safePath);
};

const serveFile = (filePath, res) => {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
};

const stripBasePath = (urlPath) => {
  if (!normalizedBasePath) {
    return urlPath || "/";
  }
  if (urlPath === normalizedBasePath) {
    return "/";
  }
  if (urlPath.startsWith(`${normalizedBasePath}/`)) {
    const strippedPath = urlPath.slice(normalizedBasePath.length);
    return strippedPath || "/";
  }
  return urlPath || "/";
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0] || "/");
  const strippedPath = stripBasePath(urlPath);
  const normalizedPath = strippedPath.endsWith("/")
    ? `${strippedPath}index.html`
    : strippedPath;
  const filePath = toFilePath(normalizedPath);

  if (!filePath.startsWith(outDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }

    serveFile(filePath, res);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${outDir} at http://127.0.0.1:${port}`);
});
