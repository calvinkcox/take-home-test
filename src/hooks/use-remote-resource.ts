import { useState } from "react";

function useRemoteResource<D>(fn: () => Promise<D>, init: D) {
  let didCancel = false;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(init);

  (async () => {
    const data = await fn();
    if (!didCancel) {
      setData(data);
      setIsLoading(false);
      setError(undefined);
    }
  })();

  return () => {
    didCancel = true;
  }
}

export default useRemoteResource;
