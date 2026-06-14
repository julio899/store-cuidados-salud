export default defineEventHandler((event) => {
  const query = getQuery(event)

  if (query.error) {
    return sendRedirect(event, '/', 302)
  }

  return sendRedirect(event, '/', 302)
})
