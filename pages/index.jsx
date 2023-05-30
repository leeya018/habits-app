import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Homepage() {
  const router = useRouter();
  useEffect(() => {
    // router.push("/waltdisney");
    // router.push("/qr");
    router.push("/order");
    // router.push("/goals");
  }, []);
  return <div className=""></div>;
}
