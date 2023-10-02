import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { userStore } from "mobx/userStore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Image from "next/image";
import Person2Icon from "@mui/icons-material/Person2";
import { useRouter } from "next/router";

const NavTop = observer(() => {
  const router = useRouter();

  const getProfileImage = () => {
    if (userStore.photoURL) {
      return (
        <div className="flex gap-2 p-2    items-center">
          <div>
            <Image
              src={userStore.photoURL}
              alt="no data"
              height={50}
              className="rounded-full shadow-2xl"
              width={50}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex gap-2 p-2   ">
          <Person2Icon
            className="w-10 h-10   ml-auto cursor-pointer"
            onClick={() => router.push("/login")}
          />
        </div>
      );
    }
  };

  return (
    <div className="absolute w-full bg-secondary flex justify-between px-3">
      <div className="flex justify-center items-center">
        {userStore.displayName}
      </div>
      <div className="flex justify-center items-center">
        {getProfileImage()}
      </div>
    </div>
  );
});

export default NavTop;
