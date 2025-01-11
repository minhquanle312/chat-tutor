export async function POST(request: Request) {
  const data = await request.json()
  console.log('🚀 ~ POST ~ body:', data)

  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json' },
    status: 201,
  })
}
