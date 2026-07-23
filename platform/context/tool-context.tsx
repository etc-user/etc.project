"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type ToolContextType = {
  files: File[];

  setFiles: React.Dispatch<
    React.SetStateAction<File[]>
  >;

  loading: boolean;

  setLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  result: unknown;

  setResult: React.Dispatch<
    React.SetStateAction<unknown>
  >;

  error: string | null;

  setError: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

const ToolContext =
  createContext<ToolContextType | null>(null);

export function ToolProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [files, setFiles] = useState<File[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<unknown>(null);

  const [error, setError] =
    useState<string | null>(null);

  return (
    <ToolContext.Provider
      value={{
        files,
        setFiles,

        loading,
        setLoading,

        result,
        setResult,

        error,
        setError,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
}

export function useTool() {
  const context =
    useContext(ToolContext);

  if (!context) {
    throw new Error(
      "useTool must be used inside ToolProvider."
    );
  }

  return context;
}