"use client";

import { Transition } from "@headlessui/react";
import type { FunctionComponent, HTMLAttributes } from "react";
import { useAsyncFn } from "react-use";
import Section from "~/components/section";
import ArrowDownTray from "~/components/svgs/arrow-down-tray";
import ThreeDots from "~/components/svgs/three-dots";
import { cn, sleep } from "~/utils";

type Props = HTMLAttributes<HTMLElement>;

const fetcher = async () => {
  const response = await fetch("/api/create-pdf");

  const blob = await response.blob();

  if (blob instanceof Blob) {
    const url = window.URL.createObjectURL(blob as Blob);

    const link = document.createElement("a");
    link.download = "DavidMurdochCV.pdf";
    link.href = url;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }
};

const Download: FunctionComponent<Props> = ({ className, ...props }) => {
  const [{ loading }, handleClick] = useAsyncFn(
    () => Promise.all([fetcher(), sleep(300)]),
    [],
  );

  return (
    <Section {...props} className={cn("print:hidden", className)}>
      <h2 className="text-5xl">Download</h2>

      <button
        className="mt-8 flex items-center gap-x-2 rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        onClick={handleClick}
        disabled={loading}
      >
        <ArrowDownTray className="h-5 w-5" />
        Download this page as .pdf
        <Transition
          show={loading}
          className="grid"
          enter="transition-[grid-template-columns] motion-reduce:transition-none duration-150"
          enterFrom="grid-cols-[0fr]"
          enterTo="grid-cols-[1fr]"
          leave="transition-[grid-template-columns] motion-reduce:transition-none duration-150"
          leaveFrom="grid-cols-[1fr]"
          leaveTo="grid-cols-[0fr]"
        >
          <div className="overflow-hidden">
            <ThreeDots className="h-5 w-5" />
          </div>
        </Transition>
      </button>

      <pre className="mt-4 whitespace-pre-wrap break-normal font-mono">
        gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen
        -dNOPAUSE -dQUIET -dBATCH
        -sOutputFile=DavidMurdochCV-postGhostscript.pdf DavidMurdochCV.pdf
      </pre>
    </Section>
  );
};
export default Download;
