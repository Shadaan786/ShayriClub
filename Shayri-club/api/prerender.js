export default async function handler(req, res) {
  try {
    const token = process.env.PRERENDER_TOKEN;

    if (!token) {
      console.error("PRERENDER_TOKEN is missing");
      return res.status(500).send("PRERENDER_TOKEN is not configured");
    }

    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;

    // Get the original path from the Vercel rewrite
    let path = req.query.path || "/";

    if (!path.startsWith("/")) {
      path = `/${path}`;
    }

    const originalUrl = `${protocol}://${host}${path}`;

    console.log("Prerendering:", originalUrl);

    const prerenderUrl =
      `https://service.prerender.io/${originalUrl}`;

    const response = await fetch(prerenderUrl, {
      method: "GET",
      headers: {
        "X-Prerender-Token": token
      }
    });

    const html = await response.text();

    res.status(response.status);

    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") ||
        "text/html; charset=utf-8"
    );

    // Forward Prerender's request ID if present
    const requestId =
      response.headers.get("x-prerender-request-id");

    if (requestId) {
      res.setHeader("x-prerender-request-id", requestId);
    }

    return res.send(html);

  } catch (error) {
    console.error("Prerender error:", error);

    return res.status(500).send("Prerender request failed");
  }
}