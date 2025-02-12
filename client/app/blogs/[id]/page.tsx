"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import blogData from "@/data/blogData";
import { Icons } from "@/components/Icons";

interface Props {
  params: {
    id: string;
  };
}

const Blog: React.FC<Props> = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const id = params.id;
  const data = id ? blogData[parseInt(id) - 1] : null;

  const formatDescription = (desc: string | undefined) => {
    return <div dangerouslySetInnerHTML={{ __html: desc || "" }} />;
  };

  return (
    <section className="pt-[70px] md:pt-[120px] pb-[50px] md:pb-[100px] flex items-center justify-center font-bricolage">
      <div className="container p-6 md:p-10 w-full">
        <div className="flex gap-1 pb-2">
          <button onClick={() => router.back()}>← Back</button>
          <p className="text-slate-400">/ Blogs</p>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-4 md:mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                {data?.title}
              </h2>
              <div className="mb-4 md:mb-10 flex flex-wrap items-center justify-between border-b border-gray-300 pb-1 md:pb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <div className="mr-4">
                      <Image
                        src="/assets/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-12 h-8"
                      />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-sm md:text-base font-medium text-black">
                        By Al Amri Group
                      </h4>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="flex items-center text-xs md:text-sm font-medium text-black">
                      <span className="hidden md:flex items-center md:text-sm">
                        posted on&nbsp;
                        <Icons.date />
                      </span>
                      &nbsp;
                      {data?.createdAt
                        ? new Date(data.createdAt).toDateString()
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="hidden md:flex items-center text-xs md:text-sm font-medium text-black">
                    <span className="mr-3 flex items-center md:text-sm">
                      last updated on&nbsp;
                      <Icons.date />
                    </span>
                    {data?.updatedAt
                      ? new Date(data.updatedAt).toDateString()
                      : ""}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {data?.subtitle}
                </p>
                <div className="mb-10 w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] flex items-center justify-center">
                    <img
                      src={`/assets/${data?.image}`}
                      alt="image"
                      onLoad={() => setLoading(false)}
                      width={400}
                      height={100}
                      className={`${
                        loading && "hidden"
                      } object-cover object-center w-full max-h-[500px]`}
                    />
                    {(!data?.image || loading) && (
                      <div
                        role="status"
                        className="flex items-center justify-center w-full h-[50vh] max-h-[500px] mb-4 bg-gray-300 animate-pulse"
                      >
                        <svg
                          className="w-10 h-10 text-gray-200"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {formatDescription(data?.description)}
                </div>
                <Link
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href={data?.url ?? "https://www.alamrigroups.com"}
                >
                  know more
                </Link>
                <div className="items-center justify-between sm:flex">
                  <div className="mb-5 flex items-center">
                    <h5 className="mb-3 text-sm font-medium text-black sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.alamrigroups.com/blogs/${data?._id}`}
                        target="_blank"
                        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500 sm:ml-3"
                      >
                        <Icons.linkedIn />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.alamrigroups.com/blogs/${data?._id}`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.facebook />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://www.alamrigroups.com/blogs/${data?._id}text=Check%20this%20out`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.twitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
