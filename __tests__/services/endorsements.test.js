const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

import { useGetEndorsements, usePostEndorsement } from "@/services/endorsements";
import { renderHook, waitFor } from "@testing-library/react";
const { server } = require("../../__mocks__/server");

beforeAll(() => {
    server.listen({
        onUnhandledRequest: "warn",
    });
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
const queryClient = new QueryClient();
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

test("test useGetEndorsements hook", async () => {
    const { result } = renderHook(() => useGetEndorsements(), { wrapper });
    await waitFor(() => result.current.isSuccess);
});

test("test useGetEndorsements hook", async () => {
    const { result } = renderHook(() => usePostEndorsement({ endorsementData: {} }), { wrapper });
    await waitFor(() => result.current.isSuccess);
});
