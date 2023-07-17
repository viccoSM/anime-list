import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Detail"), {
  ssr: false,
});

export default Page;
