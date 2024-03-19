import { useRouter } from "next/router";
import React from "react";

const CafeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>카페 디테일 페이지입니다.{id}</h1>
    </div>
  );
};

export default CafeDetail;
