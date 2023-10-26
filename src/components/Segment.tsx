interface SegmentProps {
  isTopSegment?: boolean;
  borderStyle: string[];
}
function Segment({ isTopSegment, borderStyle }: SegmentProps) {
  return (
    <div
      style={{
        borderTop: isTopSegment ? `5px solid ${borderStyle[0]}` : "",
        borderRight: `5px solid ${borderStyle[1]}`,
        borderBottom: `5px solid ${borderStyle[2]}`,
        borderLeft: `5px solid ${borderStyle[3]}`,
      }}
      className="degit margin"
    ></div>
  );
}

export default Segment;
