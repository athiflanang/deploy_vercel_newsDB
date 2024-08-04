import imperialAquila from "../assets/imperial-aquila.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center text-boneWhite w-full bg-black">
        <nav className="grid grid-flow-col gap-4 mt-5">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="w-full">
          <div className="w-full flex justify-center py-4 bg-darkGold">
            <a>
              <img src={imperialAquila} alt="" className="w-24 h-24" />
            </a>
          </div>
        </nav>
        <aside className="mt-3 mb-12 text-center ">
          <p>This Content has been approved by His Holy Inquisition</p>
          <p className="font-bold text-crimsonRed">Innocentia Nihil Probat</p>
        </aside>
      </footer>
    </>
  );
}
