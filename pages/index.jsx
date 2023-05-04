import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Homepage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/habit");
    // router.push("/game1");
  }, []);
  return <div className="">{/* <Tinder /> */}</div>;
}
