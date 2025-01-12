export async function POST(request: Request) {
  // const data = await request.json()
  // console.log('🚀 ~ POST ~ body:', data)

  // return new Response(JSON.stringify(data), {
  //   headers: { 'content-type': 'application/json' },
  //   status: 201,
  // })
  try {
    console.log('🚀 ~ POST ~ request:', request)
    const text = await request.text()
    console.log('🚀 ~ POST ~ text:', text)
    // Process the webhook payload
    return new Response(JSON.stringify({ status: 'Success', text }), {
      status: 200,
    })
  } catch (error) {
    console.log('🚀 ~ POST ~ error:', error)
    if (error instanceof Error)
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      })
    return new Response('Unknown error', {
      status: 400,
    })
  }
}
