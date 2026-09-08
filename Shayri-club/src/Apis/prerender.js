export default async function handler(req, res) {
  try {
    const token = process.env.PRERENDER_TOKEN;

    if (!token) {
      return res.status(500).send("PRERENDER_TOKEN is not configured");
    }

    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;

    const url = `${protocol}://${host}${req.query.url || "/"}`;

    const response = await fetch(
      `https://service.prerender.io/${url}`,
      {
        headers: {
          "X-Prerender-Token": token
        }
      }
    );

    const html = await response.text();

    res.status(response.status);
    res.setHeader(
      "Content-Type",
      "text/html; charset=utf-8"
    );

    return res.send(html);

  } catch (error) {
    console.error(error);
    return res.status(500).send("Prerender failed");
  }
}