import { apiFetch } from "@/services/fetch/fetch";
import { useState } from "react";

export function useFetch<T>(endpoint: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | string>(null);

  const handleFetch = () => {
    setLoading(true);
    apiFetch(endpoint)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return {
    loading,
    data,
    error,
    handleFetch,
  };
}
