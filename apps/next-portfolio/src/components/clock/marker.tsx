import type { FunctionComponent } from "react";

import { clockStyles as styles } from "@repo/shared-styles";

type Props = {
  isMajor: boolean;
  radial: number;
};

const Marker: FunctionComponent<Props> = (props) => (
  <line
    className={props.isMajor ? styles.major : styles.minor}
    y1={props.isMajor ? 35 : 42}
    y2="45"
    transform={`rotate(${
      props.isMajor ? 30 * props.radial : 6 * props.radial
    })`}
  />
);

export default Marker;
