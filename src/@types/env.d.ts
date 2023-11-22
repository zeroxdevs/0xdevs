declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      D1: D1Database;
    }
  }
}

export {};
