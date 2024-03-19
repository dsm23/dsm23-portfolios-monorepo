import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";

import "highlight.js/styles/github-dark-dimmed.min.css";

hljs.registerLanguage("javascript", javascript);

const listItems = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;

  switch (true) {
    case num % 3 === 0 && num % 5 === 0: {
      return "FizzBuzz";
    }
    case num % 5 === 0: {
      return "Buzz";
    }
    case num % 3 === 0: {
      return "Fizz";
    }
    default:
      return num;
  }
});

const Page = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/fizz-buzz/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      FizzBuzz
    </h1>

    <pre
      className="hljs my-4 whitespace-pre-wrap break-normal py-3 font-mono"
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(
          `
            switch (true) {
              case num % 3 === 0 && num % 5 === 0: {
                return 'FizzBuzz';
              }
              case num % 5 === 0: {
                return 'Buzz';
              }
              case num % 3 === 0: {
                return 'Fizz';
              }
              default:
                return num;
            }
          `,
          {
            language: "javascript",
          },
        ).value,
      }}
    />

    <ul role="list" className="space-y-3">
      {listItems.map((num) => (
        <li
          key={`fizzbuzz-${num}`}
          className="elevation overflow-hidden rounded-md bg-white px-6 py-4 text-center text-gray-900"
        >
          {num}
        </li>
      ))}
    </ul>
  </Main>
);

export default Page;
