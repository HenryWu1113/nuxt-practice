export default defineEventHandler((event) => {
  const query = getQuery(event)

  setCookie(event, 'refresh-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // 1 天
    path: '/',
    sameSite: 'strict'
  })

  return {
    ok: true,
    data: {
      title: '早上好 ' + query.name + ', cookie已經被設置!',
      content: '今天颱風假，注意安全'
    }
  }
})
