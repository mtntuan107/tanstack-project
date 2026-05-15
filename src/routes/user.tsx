import { createFileRoute } from '@tanstack/react-router'
import { getUsers } from '../server/users' // Đảm bảo đường dẫn này đúng với file chứa getUsers của bạn

export const Route = createFileRoute('/user')({
  // Loader sẽ chạy ở server để lấy dữ liệu trước khi render component
  loader: async () => {
    const users = await getUsers()
    return {
      users,
    }
  },
  component: UsersComponent,
})

function UsersComponent() {
  // Lấy dữ liệu từ loader
  const { users } = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Community</p>
        <h1 className="display-title mb-6 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Users List
        </h1>

        {users.length === 0 ? (
          <p className="text-[var(--sea-ink-soft)]">No users found.</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between rounded-xl border border-[var(--sea-ink-soft)]/20 p-4 bg-white/50"
              >
                <div>
                  <p className="font-semibold text-[var(--sea-ink)]">{user.name}</p>
                  <p className="text-xs text-[var(--sea-ink-soft)] font-mono">ID: {user.id}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}