import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/List"), {
  ssr: false,
});

export default Page;
