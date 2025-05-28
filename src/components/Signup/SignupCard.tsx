import "../../App.css";
import { create } from "zustand";
import { signUpAPICall } from "../../API/auth";
// values extracted {first name, last name, email, username, password}
interface Credentials {
  dataSecret: {
    firstName?: string;
    lastName?: string;
    email?: string;
    userName?: string;
    password?: string;
  };
  setFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCredentials = create<Credentials>()((set) => ({
  dataSecret: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    userName: undefined,
    password: undefined,
  },
  setFirstName: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        firstName: e.target.value,
        lastName: state.dataSecret.lastName,
        email: state.dataSecret.email,
        userName: state.dataSecret.userName,
        password: state.dataSecret.password,
      },
    }));
  },
  setLastName: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        lastName: e.target.value,
        firstName: state.dataSecret.firstName,
        email: state.dataSecret.email,
        userName: state.dataSecret.userName,
        password: state.dataSecret.password,
      },
    }));
  },
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        email: e.target.value,
        firstName: state.dataSecret.firstName,
        lastName: state.dataSecret.lastName,
        userName: state.dataSecret.userName,
        password: state.dataSecret.password,
      },
    }));
  },
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        password: e.target.value,
        firstName: state.dataSecret.firstName,
        lastName: state.dataSecret.lastName,
        email: state.dataSecret.email,
        userName: state.dataSecret.userName,
      },
    }));
  },
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        userName: e.target.value,
        firstName: state.dataSecret.firstName,
        lastName: state.dataSecret.lastName,
        email: state.dataSecret.email,
        password: state.dataSecret.password,
      },
    }));
  },
}));

const SignupCard = () => {
  const {
    dataSecret,
    setFirstName,
    setLastName,
    setEmail,
    setUserName,
    setPassword,
  } = useCredentials();
  async function onSubmit(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    let res;
    //send to the backend via axios or something
    if (
      dataSecret.email &&
      dataSecret.firstName &&
      dataSecret.lastName &&
      dataSecret.userName &&
      dataSecret.password
    ) {
      try {
        const fullName = dataSecret.firstName + " " + dataSecret.lastName;
        res = await signUpAPICall(
          fullName,
          dataSecret.email,
          dataSecret.userName,
          dataSecret.password
        );
      } catch (e) {
        console.log(e);
      }
      console.log(res);
    } else {
      alert("Incomplete form submission");
    }
  }
  //previous size: max-w-1/3 min-w-xs

  return (
    <div className="px-3 py-3 mt-4 max-w-1/3 min-w-xs">
      <div className="poppins-regular text-lightviolet bg-gradient-to-r shadow-sm shadow-lightblue rounded-md from-lightviolet to-darkviolet ">
        <div className="flex justify-center text-3xl py-2 ">Signup</div>
        <div className="flex flex-row justify-centre p-2">
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={setFirstName}
            placeholder="First Name"
            className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm shadow-lightblue min-w-2/5"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={setLastName}
            placeholder="Last Name"
            className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm shadow-lightblue min-w-2/5"
          />
        </div>
        <div className="flex flex-row justify-centre p-2 ">
          <input
            type="email"
            name="email"
            id="email"
            onChange={setEmail}
            placeholder="Email"
            className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl container outline-none shadow-lightblue shadow-sm"
          />
        </div>
        <div className="flex flex-row justify-centre p-2 ">
          <input
            type="text"
            name="username"
            id="username"
            onChange={setUserName}
            placeholder="Username"
            className="p-2 m-2 bg-darkviolet text-lightviolet container  rounded-xl outline-none shadow-lightblue shadow-sm"
          />
        </div>
        <div className="flex flex-row justify-centre p-2 ">
          <input
            type="password"
            name="password"
            id="password"
            onChange={setPassword}
            placeholder="Password"
            className="p-2 m-2 bg-darkviolet text-lightviolet container rounded-xl outline-none shadow-lightblue shadow-sm"
          />
        </div>
        <div className="flex flex-row justify-center p-2 text-lightviolet">
          <input
            type="submit"
            value="Submit"
            onClick={onSubmit}
            id="submit"
            className="p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-md shadow-lightblue active:shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
