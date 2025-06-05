const axios = require("axios");

exports.handler = async function (event) {
  const domain = event.queryStringParameters.domain;

  if (!domain) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing domain name" }),
    };
  }

  try {
    const response = await axios.get("https://www.whoisxmlapi.com/whoisserver/WhoisService", {
      params: {
        apiKey: process.env.WHOIS_API_KEY,
        domainName: domain,
        outputFormat: "JSON",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('WHOIS fetch failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch WHOIS data" }),
    };
  }
};
