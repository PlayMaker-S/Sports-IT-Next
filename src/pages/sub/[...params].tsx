import { useRouter } from "next/router";
import React from "react";

const Params = () => {
  const router = useRouter();
  console.log(router);
  return <div></div>;
};

export default Params;
