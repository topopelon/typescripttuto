type professor = "professor";
type coordinator = "coordinator";

type Privileges = professor | coordinator;

type User = {
  name: string;
  privileges?: Privileges;
};

export default User;
