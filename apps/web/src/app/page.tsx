import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative overflow-hidden header flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="hidden">ShinchanLang</h1>
              <div className="p-4">
               <Image 
               src={"/shinchan-logo.png"} 
               alt={"Logo"}
               width={300}
               height={300}
               />
              </div>
              <p className="mt-3 text-center text-base from-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A toy programming language written in Typescript
              </p>
              <div className="prose text-center pt-4 pb-4">
                {" "}<p className=" font-bold">Not Working</p>
                <code className="language-js">npm i -g shinchanlang </code>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                    <Link href="#playground">
                    <Button>
                    Playground
                    </Button>
                    </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Himasnhu-AT/ShinchanJS"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bhagwa-700 bg-bhagwa-300 hover:bg-bhagwa-400 md:py-4 md:text-lg md:px-10"
                  >
                    View Source
                  </a>
                </div>
              </div>
              <div className="text-center  pt-6">
                Made by
                <Link href="https://github.com/Himasnhu-AT/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span> @himasnhu-at </span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
