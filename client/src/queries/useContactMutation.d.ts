import type { ApiResponse } from "@shared/types";
export declare function useContactMutation(): import("@tanstack/react-query").UseMutationResult<ApiResponse<null>, Error, {
    name: string;
    email: string;
    message: string;
    phone?: string | undefined;
}, unknown>;
//# sourceMappingURL=useContactMutation.d.ts.map