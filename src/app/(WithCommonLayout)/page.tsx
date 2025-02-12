"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Welcome To NextMart Home Page</h1>
    </div>
  );
};

export default HomePage;
