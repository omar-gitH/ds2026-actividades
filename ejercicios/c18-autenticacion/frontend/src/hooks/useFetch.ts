import { useEffect, useState } from 'react';

export type UseFetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string): UseFetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);
    setData(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json() as Promise<T>;
      })
      .then((json) => setData(json))
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message ?? 'Error al cargar los datos.');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
