export default defineEventHandler((_) => {
  throw createError({
    statusCode: 400,
    statusMessage: 'Bad Request',
    message: '請勿再次請求',
    data: { field: 'email' }
  })
})
