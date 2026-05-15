import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
    server: {
        handlers: {
            GET: async({}) => {
                const data = {data: 'hello'}
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
        }
    }
})
