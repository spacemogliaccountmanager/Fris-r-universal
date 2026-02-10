export interface ApiResponse<T> {
    ok: boolean;
    data?: T;
    message?: string;
    errors?: Record<string, string[]>;
}
//# sourceMappingURL=api.d.ts.map