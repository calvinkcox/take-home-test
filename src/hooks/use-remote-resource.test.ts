import { renderHook } from "@testing-library/react-hooks";
import useRemoteResource from "./use-remote-resource";

test("loads a successful async call", async () => {
  const successAsync = () => new Promise((resolve) => {
    setTimeout(() => { resolve("data"); }, 100);
  });
  const { result, waitForNextUpdate } = renderHook(() => useRemoteResource(successAsync, ""));

  expect(result.current).toEqual([undefined, true, ""]);
  await waitForNextUpdate();

  expect(result.current).toEqual([undefined, false, "data"]);
});

test("loads an un-successful async call", async () => {
  const successAsync = () => new Promise((_, reject) => {
    setTimeout(() => { reject("error"); }, 100);
  });
  const { result, waitForNextUpdate } = renderHook(() => useRemoteResource(successAsync, ""));

  expect(result.current).toEqual([undefined, true, ""]);
  await waitForNextUpdate();

  expect(result.current).toEqual(["error", false, ""]);
});
