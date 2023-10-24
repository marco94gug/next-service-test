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
    _user = userState;
    _users: Users = usersState;

    get user() {
      return this._user;
    }

    get users() {
      return this._users;
    }

    set user(user: User) {
      setUser(user);
      setUsers((prev) => [...prev, user]);
    }

    set users(users: Users) {
      setUsers(users);
    }
  }

  const newService = new UsersService();

  return newService;
}
