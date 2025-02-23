import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  hasError?: boolean;
  errorMessage?: string;
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}