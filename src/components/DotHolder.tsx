function DotsHolder() {
  return (
    <div className="separator">
      <Dot />
      <Dot />
    </div>
  );
}

function Dot() {
  return <div className="dot"></div>;
}

export default DotsHolder;
