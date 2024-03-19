import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";

const MathML = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/mathml/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      MathML Core example
    </h1>
    <p>An example of MathML core supported in Chrome from v109+</p>

    <p
      className="container mx-auto"
      dangerouslySetInnerHTML={{
        __html: `
    The infinite sum
    <math display="block">
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>n</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mrow>
            <mo>+</mo>
            <mn>∞</mn>
          </mrow>
        </munderover>
        <mfrac>
          <mn>1</mn>
          <msup>
            <mi>n</mi>
            <mn>2</mn>
          </msup>
        </mfrac>
      </mrow>
    </math>
    is equal to the real number
    <math display="inline">
      <mfrac>
        <msup>
          <mi>π</mi>
          <mn>2</mn>
        </msup>
        <mn>6</mn>
      </mfrac>
    </math>
    .
    `,
      }}
    />
  </Main>
);

export default MathML;
