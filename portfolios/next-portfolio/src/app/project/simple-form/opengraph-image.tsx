import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "a depiction of a website form";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";
// export const dynamic = "force-static";

// Image generation
const Image = () => {
  return new ImageResponse(
    (
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
          <path
            d="M24 16h464c13.254 0 24 10.745 24 24v432c0 13.254-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V40c0-13.255 10.745-24 24-24z"
            fill="#cad1d8"
          />
          <circle cx={24.002} cy={47.995} r={7.998} fill="#9ba7af" />
          <circle cx={56.002} cy={47.995} r={7.998} fill="#9ba7af" />
          <circle cx={88.002} cy={47.995} r={7.998} fill="#9ba7af" />
          <path
            d="M24 80h464a8 8 0 0 1 8 8v384a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8z"
            fill="#fff"
          />
          <path
            d="M120 40h368a8 8 0 0 1 0 16H120a8 8 0 0 1 0-16z"
            fill="#e2e5e7"
          />
          <path
            d="M384 248.001v32H128v-32h256m0-8.001H128a8.001 8.001 0 0 0-8.001 8.001v32a8 8 0 0 0 8.001 8h256a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8.001zm0 72v32H128v-32h256m0-8H128a8.001 8.001 0 0 0-8.001 8v32a8 8 0 0 0 8.001 8h256a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8z"
            fill="#cad1d8"
          />
          <path d="M128 248.002h256v32H128z" fill="#e2e5e7" />
          <path
            d="M384 184.001v32H128v-32h256m0-8.001H128a8.001 8.001 0 0 0-8.001 8.001v32a8 8 0 0 0 8.001 8h256a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8.001z"
            fill="#cad1d8"
          />
          <path
            d="M128 184.002h256v32H128zm0 128h256v32H128zM208 384h112c13.254 0 24 10.745 24 24 0 13.254-10.745 24-24 24H208c-13.254 0-24.001-10.745-24.001-24 .002-13.255 10.747-24 24.001-24z"
            fill="#e2e5e7"
          />
          <path
            d="M208 376h112c13.254 0 24 10.745 24 24 0 13.254-10.745 24-24 24H208c-13.254 0-24.001-10.745-24.001-24 .002-13.254 10.747-24 24.001-24z"
            fill="#3cb54a"
          />
          <circle cx={263.998} cy={399.995} r={7.998} fill="#0e9347" />
          <circle cx={295.998} cy={399.995} r={7.998} fill="#0e9347" />
          <circle cx={231.998} cy={399.995} r={7.998} fill="#0e9347" />
          <path
            d="M304 136.001a8 8 0 0 1-8 8h-80A8.001 8.001 0 0 1 216 128h80a8 8 0 0 1 8 8.001z"
            fill="#595a66"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
};

export default Image;
