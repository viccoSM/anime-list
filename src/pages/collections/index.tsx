import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/ListCollection"), {
  ssr: false,
});

export default Page;
