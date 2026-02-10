const BASE = "/api";
export class ApiError extends Error {
    status;
    body;
    constructor(status, body) {
        super(`API error ${status}`);
        this.status = status;
        this.body = body;
    }
}
export async function apiFetch(path, init) {
    const res = await fetch(`${BASE}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...init,
    });
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new ApiError(res.status, body);
    }
    return res.json();
}
//# sourceMappingURL=api.js.map