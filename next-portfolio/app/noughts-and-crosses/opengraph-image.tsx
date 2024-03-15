import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "a noughts and crosses board";
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
        {/* <div>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</div> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M82.2 46.1v36.1H10v9.2h72.2V164.7H10v9.2h72.2V246h9.2v-72.2H164.7V246h9.2v-72.2H246v-9.2h-72.2V91.3H246v-9.2h-72.2V10h-9.2v72.2H91.3V10h-9.2v36.1h.1zm82.5 81.9v36.7H91.3V91.3h73.4V128z" />
          <path d="m106.8 107.1-3.1 3.2 8.9 8.9 8.9 8.9-8.9 8.9-8.9 8.9 3.3 3.3 3.3 3.3 8.9-8.9 8.9-8.9 8.9 8.9 8.9 8.9 3.3-3.3 3.3-3.3-8.9-8.9-8.9-8.9 8.9-8.9 8.9-8.9-3.5-3.3-3.3-3.3-8.9 8.9-8.9 8.9-8.8-8.8c-4.8-4.8-8.9-8.7-9-8.7 0-.1-1.6 1.4-3.3 3.1zM209.1 99.8c-6.4.9-11.5 3.4-16.2 7.8-3.8 3.6-6 7-7.6 11.9-1.1 3.1-1.2 4.6-1 9.8.2 5.6.5 6.5 2.3 10.5 4.9 10.4 14.3 16.4 25.6 16.6 13.5.1 24.6-8.8 27.8-22.1.9-4 1.1-10.8.3-10.8-.3 0-.8-1.2-1.1-2.6-2.3-9-9.7-17.1-18.3-19.7-3.5-1.2-9.1-1.8-11.8-1.4zm10.2 10.2c3.7 1.2 8.5 5.7 10.5 9.9 1.4 2.8 1.6 4 1.6 8.1 0 4.2-.2 5.3-1.6 8.1-2.1 4.2-6.9 8.6-10.8 10-1.9.6-4.6 1-7.2 1-3.5-.1-4.8-.3-7.8-1.8-4.5-2.2-7.8-5.8-9.5-10.3-1.8-4.8-1.4-11.7.9-16 4.6-8.7 13.9-12.1 23.9-9zM120 185.2c-6.9 2.3-12.4 6.5-16.1 12.2-5.8 9.1-5.5 21.5.7 30.9 2.9 4.4 6.1 7.1 10.9 9.5 8.2 4 16.7 4 25-.1 8.9-4.4 14.4-12.4 15.6-22.8.6-4.5.5-5.8-.1-6.8-.4-.7-1.1-2.5-1.6-4.1-2.2-7.7-7.8-14.4-14.9-17.7-3.6-1.7-4.5-1.8-10.2-1.9-4.7-.2-6.9 0-9.3.8zm16.4 9.5c9.5 4.4 13.5 16.7 8.7 26.5-.6 1.3-2.6 3.7-4.3 5.3-8 7.3-19.6 6.6-27.1-1.4-3.5-3.9-4.9-7.6-4.8-13.2.1-7.7 4.8-14.7 11.8-17.4 4.5-1.7 11.8-1.7 15.7.2zM24.3 191.4l-3.2 3.2 8.8 8.6 8.8 8.6-8.8 8.8-8.8 8.8 3.2 3.2 3.3 3.2 8.9-8.7 8.9-8.8 8.9 8.8 8.9 8.8 3.2-3.2 3.3-3.3-8.8-8.8-8.9-8.9 8.9-8.6 8.8-8.5-3.3-3.4-3.3-3.3-8.9 8.9-8.9 8.9-8.8-8.8c-4.8-4.8-8.9-8.7-9-8.7.1-.1-1.5 1.4-3.2 3.2z" />
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
