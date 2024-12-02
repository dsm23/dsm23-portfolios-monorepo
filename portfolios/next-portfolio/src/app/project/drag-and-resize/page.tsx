import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";
import Counter from "./counter";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";
import Timer from "./timer";

const Page = () => {
  return (
    <Main className="w-full px-6 py-8">
      <GoBack className="mb-4" href="/#projects" />
      <ViewSource pathname="app/project/drag-and-resize/page.tsx" />

      <h1 className="text-4xl uppercase tracking-widest text-sky-600">
        Drag and Resize
      </h1>

      <ResizablePanelGroup
        direction="horizontal"
        className="my-4 min-h-[50dvh] rounded-lg border md:min-h-[75dvh]"
      >
        <ResizablePanel minSize={20}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel minSize={20}>
              <div className="grid h-full place-items-center p-6">
                <span className="font-semibold">
                  <Counter />
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20}>
              <div className="grid h-full place-items-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel minSize={20}>
              <div className="grid h-full place-items-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20}>
              <div className="grid h-full place-items-center p-6">
                <span className="font-semibold">
                  <Timer />
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Main>
  );
};

export default Page;
