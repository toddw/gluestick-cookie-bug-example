export const LOAD_FROM_FAKE_SECURE_SITE = "LOAD_FROM_FAKE_SECURE_SITE";

export function loadFromFakeSecureSite () {
  return {
    type: LOAD_FROM_FAKE_SECURE_SITE,
    promise: (httpClient) => {
      debugger;
      return httpClient.get("http://www.fakesupersecuresite222.com:8888/route-for-super-secure-site-2");
    }
  };
}

