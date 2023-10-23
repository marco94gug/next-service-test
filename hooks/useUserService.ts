import { User, Users } from "@/types/UsersServiceTypes";
import { useState } from "react";

export function useUsersService(): any {
  const [userState, setUser] = useState<User>({
    name: "",
    lastname: "",
    age: 0,
  });
  const [usersState, setUsers] = useState<Users>([]);

  class UsersService {
    static _user = userState;
    static _users: Users = usersState;

    get user() {
      return UsersService._user;
    }

    get users() {
      return usersState;
    }

    set user(user: User) {
      setUser(user);
      setUsers((prev) => [...prev, user]);
      UsersService._user = userState;
    }

    set users(users: Users) {
      setUsers(users);
    }
  }

  const newService = new UsersService();

  return newService;
}
