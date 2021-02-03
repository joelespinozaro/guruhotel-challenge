function Status(props) {
  const { status } = props;
  return (
    <span
      style={{
        color: `${status ? "green" : "red"}`,
        fontSize: 25,
        fontWeight: 700,
      }}
    >
      {status ? "Open" : "Closed"}
    </span>
  );
}
export default Status;
