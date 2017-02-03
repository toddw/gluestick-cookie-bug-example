export const LOAD_FROM_WEBSITE = "LOAD_FROM_WEBSITE";

export function loadFromWebsite() {
  return {
    type: LOAD_FROM_WEBSITE,
    promise: (httpClient) => httpClient.get("http://www.fakewebsite111.com:8888/route-for-fake-website-1")
  };
}

