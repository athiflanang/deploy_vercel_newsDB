import Carosel from "../components/Carosel";
import Card from "../components/Card";
import Searchbar from "../components/Search";
import FilterById from "../components/FilterById";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [newSearch, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postPage, setPostPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);

  // const [filterId, setFilterId] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get(
        `https://server.athiflanang.site/pub?filter=&sort=id&title=${newSearch}&page[size]=${10}&page[number]=${currentPage}`
      );
      setData(data.data); //panggil semua data

      setCurrentPage(data.page); // data page yang telah di set di posisi page pertama (1)
      setPostPage(data.dataPerPage); // jumlah data / article yang akan ditampilkan (10)
      setTotalPage(data.totalPage); // ini jumlah page yang sifatnya sudah di hitung dari backend

      // setFilterId(data.data.categoryId);
      // console.log(data.data.categoryId);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [newSearch, currentPage, totalPage]);

  return (
    <>
      <div className="bg-black min-h-screen font-Playfair">
        <div className="text-6xl font-bold items-center">
          <div className="flex justify-center py-5 text-darkGold">
            Warforge Media
          </div>
          <div className="flex text-xl font-semibold justify-center py-5 text-boneWhite">
            Your latest news cycle from the Imperium of Man
          </div>
          <Searchbar setSearch={setSearch} setelData={setData} />
          <div className="flex justify-center mt-5">
            <FilterById />
          </div>
        </div>

        <div className="rounded-lg py-5 flex justify-center">
          <div className="max-w-4xl px-14">
            <Carosel />
          </div>
        </div>
        <div className="flex justify-center py-5 mb-5">
          <main className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl px-4 justify-items-center">
            {data.map((article) => {
              return <Card key={article.id} article={article} />;
            })}
          </main>
        </div>
        <div className="flex justify-items-center justify-center">
          <Pagination
            totalPagination={totalPage}
            currentPageNow={currentPage}
            totalDatePerPage={postPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
