import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "../../context/data-context";
import { ReactNode, useMemo } from "react";
import { render } from "@testing-library/react";

interface TestWrapperProps {
  children: ReactNode;
}

export const waitForSearchResults = () =>
  new Promise((resolve) => setTimeout(resolve, 2000));

export const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: false },
        },
      }),
    [],
  );

  return (
    <BrowserRouter>
      <DataProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </DataProvider>
    </BrowserRouter>
  );
};

export const customRender = (ui: ReactNode) => {
  return render(ui, { wrapper: TestWrapper });
};
