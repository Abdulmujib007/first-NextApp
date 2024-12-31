import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <p className="text-3xl text-center">Oppsss......</p>
      <p className="text-2xl text-center text-red-600">Page not found my gee</p>
      <p>
        Go back to <Link href="/">Homepage</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
