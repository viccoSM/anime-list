import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Collection"), {
  ssr: false,
});

export default Page;
