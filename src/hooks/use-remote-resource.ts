import { useEffect, useState } from "react";

type ErrorState = Error | undefined;

function useRemoteResource<D>(fn: () => Promise<D>, init: D): [ErrorState, boolean, D] {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(init);

  useEffect(() => {
    let didCancel = false;

    (async () => {
      try {
        const data = await fn();
        if (!didCancel) {
          setData(data);
          setIsLoading(false);
          setError(undefined);
        }
      } catch (e) {
        if (!didCancel) {
          setError(e);
          setIsLoading(false);
        }
      }
    })();

    return () => {
      didCancel = true;
    }
  }, [fn]);

  return [error, isLoading, data];
}

export default useRemoteResource;
