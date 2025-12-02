import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "A clock face copied from svelte.dev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";
// export const dynamic = "force-static";

// Image generation
const Image = () => {
  const hours = 1;
  const minutes = 27;
  const seconds = 46;

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
      <svg
        viewBox="-50 -50 100 100"
        style={{
          height: "100%",
          width: "52.5%",
        }}
      >
        <circle
          style={{
            stroke: "#333",
            fill: "white",
          }}
          r="48"
        />

        {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((minute) => (
          <g key={`minute-${minute}`}>
            <line
              style={{
                stroke: "#333",
                strokeWidth: 1,
              }}
              y1="35"
              y2="45"
              transform={`rotate(${30 * minute})`}
            />

            {[1, 2, 3, 4].map((offset) => (
              <line
                key={`minute-${minute}-offset-${offset}`}
                style={{
                  stroke: "#999",
                  strokeWidth: 0.5,
                }}
                y1="42"
                y2="45"
                transform={`rotate(${6 * (minute + offset)})`}
              />
            ))}
          </g>
        ))}

        <line
          style={{
            stroke: "#333",
          }}
          y1="2"
          y2="-20"
          transform={`rotate(${30 * hours + minutes / 2})`}
        />

        <line
          style={{
            stroke: "#666",
          }}
          y1="4"
          y2="-30"
          transform={`rotate(${6 * minutes + seconds / 10})`}
        />

        <g transform={`rotate(${6 * seconds})`}>
          <line
            style={{
              stroke: "rgb(180, 0, 0)",
            }}
            y1="10"
            y2="-38"
          />
          <line
            style={{
              stroke: "rgb(180, 0, 0)",
              strokeWidth: 3,
            }}
            y1="10"
            y2="2"
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
