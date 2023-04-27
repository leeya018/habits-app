import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Homepage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/game");
  }, []);
  return <div className="">{/* <Tinder /> */}</div>;
}
