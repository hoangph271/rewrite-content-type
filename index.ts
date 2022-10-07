import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve(async (req: Request) => {
    const query = new URLSearchParams(new URL(req.url).search)

    const url = query.get('url')
    const contentType = query.get('contentType')

    if (!url) return new Response('Not Found: url', { status: 404 })
    if (!contentType) return new Response('Not Found: contentType', { status: 404 })

    const res = await fetch(url)
    const blob = await res.blob()

    return new Response(blob, {
        headers: {
            'Content-Type': contentType
        }
    })
});
