import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { User } from "@/types/UsersServiceTypes";
import { ServiceContext } from "../../pages/_app";

export default function FormUser() {
  const [user, setUser] = useState<User>({ name: "", lastname: "", age: 0 });

  const serviceInterface = useContext(ServiceContext);

  const handleSaveData = (e: MouseEvent) => {
    e.preventDefault();
    serviceInterface!.user = user;
    console.log(serviceInterface!.user);
  };
  return (
    <form className={styles.formUser}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Insert your name"
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Insert your lastname"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, lastname: e.target.value }))
        }
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setUser((prev) => ({ ...prev, age: +e.target.value }))}
      />
      <button onClick={(e) => handleSaveData(e as unknown as MouseEvent)}>
        Save Data
      </button>
    </form>
  );
}
