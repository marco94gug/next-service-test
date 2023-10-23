import FormUser from "@/components/FormUser";
import { ServiceContext } from "./_app";
import { useContext } from "react";
import { User } from "@/types/UsersServiceTypes";

export default function Home() {
  const serviceInterface = useContext(ServiceContext);

  const onLogClick = () => {
    console.log(serviceInterface!.user);
  };
  return (
    <>
      <h1>This is Home Page</h1>
      <p>asd asd</p>
      <FormUser />
      <button onClick={onLogClick}>Logga gli users</button>
      {serviceInterface?.users.map((user: User, index: number) => (
        <div key={index}>
          <div
            style={{
              border: "2px solid white",
              flex: "0 0 auto",
              width: "30%",
              marginBlock: 20,
            }}
          >
            <p>Name: {user.name}</p>
            <p>LastName: {user.lastname}</p>
            <p>Age: {user.age}</p>
          </div>
        </div>
      ))}
    </>
  );
}
