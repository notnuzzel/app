
import { handleEvent } from 'flareact'

const DEBUG = process.env.DEBUG

addEventListener("fetch", (event) => {
  try {
    event.respondWith(
      handleEvent(event, require.context("./pages/", true, /\.(js|jsx|ts|tsx)$/), DEBUG)
    )
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        })
      )
    }
    event.respondWith(new Response("Internal Error", { status: 500 }))
  }
})
