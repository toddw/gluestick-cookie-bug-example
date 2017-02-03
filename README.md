### Demo
This repo was created to demonstrate the problem described here: [Implement proper cookie jar for server side requests](https://github.com/TrueCar/gluestick-shared/issues/21#issuecomment-276939797).

Since this requires making API requests from multiple domains, this test requires the following change to _etc/hosts_:
```
127.0.0.1 www.fakewebsite111.com
127.0.0.1 www.fakesupersecuresite222.com
```

This example also requires [v1](https://github.com/TrueCar/gluestick/tree/v1) branch of GlueStick.

