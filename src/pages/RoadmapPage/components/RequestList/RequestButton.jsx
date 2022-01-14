export const RequestButton = ({ styles, buttonData }) => {
  const { stateVal, callbackOrder, borderStyle, status, numOfRequests } =
    buttonData;

  const handleListTypeClick = (fn1, fn2, fn3) => {
    fn1(false);
    fn2(false);
    fn3(true);
  };

  return (
    <button
      className={`${styles.roadmapBtn} ${stateVal && borderStyle}`}
      onClick={() =>
        handleListTypeClick(
          callbackOrder[0],
          callbackOrder[1],
          callbackOrder[2]
        )
      }
      tabIndex="0"
    >
      {status} ({numOfRequests})
    </button>
  );
};
