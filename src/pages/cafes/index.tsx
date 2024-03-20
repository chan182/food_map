import { StoreType } from "@/interface";
import React from "react";
import Image from "next/image";
const CafeListPage = ({ stores }: { stores: StoreType[] }) => {
  console.log(stores);
  return (
    <div className="px-4 md:max-w-5xl mx-auto py-8">
      <ul role="list" className="divide-y divde-gray-100">
        {stores?.map((store, index) => (
          <li className="flex justify-between gap-x-6 py-5" key={index}>
            <div className="flex gap-x-4">
              <Image
                src="/images/defalut.png"
                alt="default image"
                width={48}
                height={48}
              />
              <div>
                <div className="text-sm font-semibold leading-9 text-gray-900">
                  {store?.name}
                </div>
                <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                  {store?.storeType}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                {store?.address}
              </div>
              <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                {store?.phone || "번호없음"} | {store?.foodCertifyName} |
                {store?.category}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafeListPage;

export async function getServerSideProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
  };
}
