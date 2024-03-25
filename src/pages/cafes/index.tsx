import { StoreApiResponse, StoreType } from "@/interface";
import React, { useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import SearchFilter from "@/components/SearchFilter";
import Pagination from "@/components/Pagination";
import { searchState } from "@/atom";
import { useRecoilValue } from "recoil";

const CafeListPage = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  // const isPageEnd = !!pageRef?.isInteresting;
  const searchValue = useRecoilValue(searchState);

  const searchParmas = {
    q: searchValue?.q,
    district: searchValue?.district,
  };

  const { page = "1" }: any = router.query;
  const {
    data: stores,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["stores", page],
    queryFn: async () => {
      const { data } = await axios(`api/stores?page=${page}`);
      return data as StoreApiResponse;
    },
  });

  if (isError) {
    return (
      <div className="w-full h-screen mx-auto pt-[30%] text-red-500 text-center font-semibold">
        다시 시도해주세요
      </div>
    );
  }

  return (
    <div className="px-4 md:max-w-5xl mx-auto py-8">
      <SearchFilter />
      <ul role="list" className="divide-y divde-gray-100">
        {isLoading ? (
          <Loading />
        ) : (
          stores?.data?.map((store, index) => (
            <li
              className="flex justify-between gap-x-6 py-5 cursor-pointer hover:bg-gray-50"
              key={index}
              onClick={() => {
                router.push(`cafes/${store.id}`);
              }}
            >
              <div className="flex gap-x-4">
                <Image
                  src={
                    store?.category
                      ? `/images/markers/${store?.category}.png`
                      : `/images/markers/default.png`
                  }
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
          ))
        )}
      </ul>
      {stores?.totalPage && (
        <Pagination total={stores?.totalPage} page={page} />
      )}
    </div>
  );
};

export default CafeListPage;
