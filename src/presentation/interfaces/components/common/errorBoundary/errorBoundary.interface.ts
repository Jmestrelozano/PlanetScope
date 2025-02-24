import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  hasError?: boolean;
  errorMessage?: string;
  refreshRequest?: () => void;
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}