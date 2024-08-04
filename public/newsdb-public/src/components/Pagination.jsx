export default function Pagination({
  totalPagination,
  // currentPageNow,
  setCurrentPage,
  // totalDatePerPage,
}) {
  let dataPagination = [];

  for (let i = 1; i <= totalPagination; i++) {
    dataPagination.push(i);
  }
  // console.log(dataPagination);
  return (
    <>
      <div className="join">
        {dataPagination.map((el) => {
          return (
            <button
              className="join-item btn"
              key={el}
              onClick={() => setCurrentPage(el)}
            >
              {el}
            </button>
          );

          // <button className="join-item btn">«</button>
          // <button className="join-item btn">»</button>
        })}
      </div>
    </>
  );
}
