import { useRouter } from "next/router";

const CafeEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>카페 디테일 수정 페이지입니다.{id}</h1>
    </div>
  );
};

export default CafeEditPage;
