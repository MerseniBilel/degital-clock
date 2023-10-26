import { SegmentDefinition } from "../utils/SegmentDef";
import Segment from "./Segment";

interface DegitsHolderProps {
  degit: string;
}
function DegitsHolder({ degit }: DegitsHolderProps) {
  const borderStyle = SegmentDefinition[degit];

  return (
    <div className="degitHolder">
      <Segment isTopSegment={true} borderStyle={borderStyle.top} />
      <Segment borderStyle={borderStyle.bottom} />
    </div>
  );
}

export default DegitsHolder;
