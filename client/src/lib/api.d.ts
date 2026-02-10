export declare class ApiError extends Error {
    status: number;
    body: unknown;
    constructor(status: number, body: unknown);
}
export declare function apiFetch<T>(path: string, init?: RequestInit): Promise<T>;
//# sourceMappingURL=api.d.ts.map