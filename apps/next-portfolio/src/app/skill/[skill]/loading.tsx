import type { FunctionComponent } from "react";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import EmptyStar from "~/components/svgs/empty-star";
import ViewSource from "~/components/view-source";

const Loading: FunctionComponent = async () => {
  return (
    <Main className="w-full px-6 py-8">
      <GoBack className="mb-4" href="/#skills" />
      <ViewSource pathname="app/skill/[skill]/page.tsx" />

      <h1 className="sr-only">Loading</h1>

      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-10 rounded bg-slate-700"></div>
          <div className="space-y-3">
            <div className="col-span-2 h-4 rounded bg-slate-700"></div>

            <div className="h-4 rounded bg-slate-700"></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <h2 className="tracking-widest text-sky-600">PROFICIENCY:</h2>

        <div className="flex animate-pulse">
          {Array.from({ length: 5 }).map((_, i) => (
            <EmptyStar className="h-6 w-6" key={`empty-star-${i}`} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Loading;
