export async function POST(req) {
  const API_KEY = "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";
  const invokeUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";

  try {
    const requestBody = await req.json(); // Parse the body of the incoming request
    const response = await fetch(invokeUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Forward the request body
    });

    const data = await response.json();
    console.log(data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching from NVIDIA API:", error);

    return new Response(
      JSON.stringify({ error: "Error with the external API" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
