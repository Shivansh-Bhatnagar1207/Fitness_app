import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "@/lib/firebaseConfig"; // Adjust the path as needed
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Watch for authentication state changes
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // Fetch user details from Firestore
                const userDocRef = doc(db, "users", currentUser.uid);
                const userSnapshot = await getDoc(userDocRef);

                if (userSnapshot.exists()) {
                    setUserData(userSnapshot.data());
                } else {
                    console.error("User data not found in Firestore!");
                    setUserData(null);
                }
            } else {
                setUser(null);
                setUserData(null);
            }
            setLoading(false);
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, userData, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
