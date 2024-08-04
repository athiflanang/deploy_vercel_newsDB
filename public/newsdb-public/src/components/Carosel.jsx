export default function Carosel() {
  return (
    <>
      <div className="carousel justify-items-center w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.wargamer.com/wp-content/uploads/2021/06/warhammer-40k-ultramarines-guide-guilliman-and-warriors-fighting-black-legion.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.wargamer.com/wp-content/sites/wargamer/2023/01/warhammer-40k-iron-hands-ferrus-manus.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.wargamer.com/wp-content/sites/wargamer/2023/01/warhammer-40k-salamanders-deathfire.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.belloflostsouls.net/wp-content/uploads/2017/06/imperial-fist.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
