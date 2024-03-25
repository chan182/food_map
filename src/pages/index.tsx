import Map from "@/components/Map";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/interface";
import axios from "axios";

export default function Home({ stores }: { stores: StoreType[] }) {
  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}

export async function getStaticProps() {
  try {
    const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

    return {
      props: { stores: stores.data },
      revalidate: 60 * 60,
    };
  } catch (e) {
    return {
      props: { stores: [] }, // 에러 발생 시 빈 배열을 반환하거나, 다른 적절한 값을 반환할 수 있습니다.
      revalidate: 60 * 60,
    };
  }
}
