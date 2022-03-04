export const RequestButton = ({ styles, buttonData, isNotMobile }) => {
  const { stateVal, callbackOrder, borderStyle, status, numOfRequests } =
    buttonData;

  const handleListTypeClick = (fn1, fn2, fn3) => {
    fn1(false);
    fn2(false);
    fn3(true);
  };

  return (
    <>
      {!isNotMobile.matches && (
        <button
          className={`${styles.roadmapBtn} ${stateVal && borderStyle}`}
          onClick={() => {
            window.scrollTo(0, 0);
            handleListTypeClick(
              callbackOrder[0],
              callbackOrder[1],
              callbackOrder[2]
            );
          }}
          tabIndex="0"
        >
          {status} ({numOfRequests})
        </button>
      )}

      {isNotMobile.matches && (
        <>
          <div className={styles.roadmapCategoryTitle}>
            {status} ({numOfRequests})
            <span className={styles.categoryDescription}>
              {buttonData.description}
            </span>
          </div>
        </>
      )}
    </>
  );
};
