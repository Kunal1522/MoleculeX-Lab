import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/lib/actions/user.actions";
const UserContext = createContext<any>(null);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    photo: "/images/user/user-01.png",
    jobTitle: "Drug Researcher",
    userBio: "",
  });

  useEffect(() => {
    /*Why is it needed?
Optimizes performance: The useEffect won't re-run unnecessarily if session?.user?.email stays the same.
Reactivity: If the user's email changes (e.g., a different user logs in), the fetchUser function will run again to fetch the new user's data.
Avoid redundant calls: Without the dependency array, the useEffect would run after every render, which isn't efficient.
    */
    const fetchUser = async () => {
      if (session?.user?.email) {
        const fetchedUser = await getUserByEmail(session.user.email);
        setUser({
          firstName: fetchedUser?.firstName || "John",
          lastName: fetchedUser?.lastName || "Doe",
          photo: fetchedUser?.photo || "/images/user/user-01.png",
          jobTitle: fetchedUser?.jobTitle || "Researcher",
          userBio: fetchedUser?.userBio || "",
        });
      }
    };
    fetchUser();
  }, [session?.user?.email]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export const useUser = () => useContext(UserContext);
