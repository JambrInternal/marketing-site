const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = rawBasePath === "/" ? "" : rawBasePath;
export const withBasePath = (path) => `${basePath}${path}`;
