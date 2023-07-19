import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/DetailCollection"), {
  ssr: false,
});

export default Page;
