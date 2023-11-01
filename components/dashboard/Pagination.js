function Pagination() {
  return (
      <div className="mt-5">
          {/* DaisyUI pagination structure */}
          <div className="join">
              <button className="join-item btn">Prev</button>
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">99</button>
              <button className="join-item btn">100</button>
              <button className="join-item btn">Next</button>
          </div>
      </div>
  );
}

export default Pagination;
