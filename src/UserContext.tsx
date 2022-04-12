import { createContext } from "react";

export const UserContext = createContext<any | null>(null);

// const UserPage: React.FC = () => {
//   const context = useContext(UserContext);

//   return <div>{context}</div>;
// };
