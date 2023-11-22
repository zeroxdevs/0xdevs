const asyncHandler =
  (fn: Function) =>
  (req: Request, ...args: any) =>
    Promise.resolve(fn(req, ...args)).catch((e: Error) => {
      return Response.json({
        error: e.message,
        stack: !(process.env.NODE_ENV === 'production') ? e.stack : undefined,
      });
    });

export default asyncHandler;
