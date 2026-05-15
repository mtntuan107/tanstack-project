import { createServerFn  } from '@tanstack/react-start'
import { getAllUsers } from '../db/queries/users';

export const getUsers = createServerFn({ method: 'GET' })
    .handler(async () => {
        const users = await getAllUsers();
        return users;
    })
