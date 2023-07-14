import { Head } from "$fresh/runtime.ts";

import { GoLeafLogo } from "../components/GoLeafLogo.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GoLeaf - Automatiza alta de empresas</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <header>
          <GoLeafLogo />
        </header>
      </div>
    </>
  );
}
