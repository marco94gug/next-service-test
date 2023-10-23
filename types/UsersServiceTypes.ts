interface User {
  name: string;
  lastname: string;
  age: number;
}

type Users = User[];

export type { User, Users };
