import { createServerFn, createServerOnlyFn  } from '@tanstack/react-start'

export const getSystemStatus = createServerFn({method: 'GET'})
    .handler(async () => {
        const time = new Date().toISOString()
        console.log('Checking server....', time)
        return { status: 'ok', time: time}
    })


export function checkAdminPassword(password: string) {
  const secretKey = "TrBiMat_123"; // Mã bí mật
  return password === secretKey;
}

export const checkAdminPasswordButServer = createServerOnlyFn((password: string)=>{
  const secretKey = "TrBiMat_123_Server"; // Mã bí mật
  return password === secretKey;
})