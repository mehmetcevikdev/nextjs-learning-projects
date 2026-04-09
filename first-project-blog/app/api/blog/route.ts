// app/api/blog/route.ts (Mevcut dosyanı bununla değiştir)

import { posts } from "@/lib/data"; 

export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}