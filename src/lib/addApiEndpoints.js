import cors from "cors";

export default function (app) {
  app.use(cors());

  // http://www.fakewebsite111.com:8888/route-for-fake-website-1
  app.get("/route-for-fake-website-1", (req, res) => {
    res.cookie("fake-website-1", true);

    res.end("Cookies:" + JSON.stringify(req.headers.cookie));
  });







  // http://www.fakesupersecuresite222.com:8888/route-for-super-secure-site-2
  app.get("/route-for-super-secure-site-2", (req, res) => {
    res.cookie("fake-website-2", true);

    res.end("Cookies:" + JSON.stringify(req.headers.cookie));
  });
}

