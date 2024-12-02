import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "Divisibles divided by 1";
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
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Divisibles / 1
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
