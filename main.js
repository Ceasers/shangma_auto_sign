process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import signIn from './sign_in.js'

signIn()
  .then(() => {
    console.log('执行签到成功！')
  })
  .catch(error => {
    console.error('执行签到失败：', error.message)
    process.exit(1)
 })
