// A mock function to mimic making an async request for data
interface FetchCountReturnObj {
  data: number
}
export function fetchCount(amount = 1): Promise<FetchCountReturnObj> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
