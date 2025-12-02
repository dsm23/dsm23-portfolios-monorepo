import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "a pie chart";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";
// export const dynamic = "force-static";

// Image generation
const Image = () => {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 140,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Icon by <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=683'>Iconpacks</a> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <g
          style={{
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
          }}
        >
          <path
            d="M41.808 45.075 56.531 1.497A45.058 45.058 0 0 0 45 0C20.147 0 0 20.147 0 45s20.147 45 45 45c4.727 0 9.283-.733 13.563-2.085l-16.755-42.84z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "#d2555a",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          />
          <path
            d="M86.934 28.656a45.149 45.149 0 0 0-24.72-25.239L49.59 40.788l37.344-12.132z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "#ffc36e",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          />
          <path
            d="m49.104 47.255 15.046 38.47C79.424 78.53 90 63.003 90 45c0-3.659-.442-7.214-1.267-10.62L49.104 47.255z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "#a5d76e",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          />
        </g>
      </svg>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
};

export default Image;
