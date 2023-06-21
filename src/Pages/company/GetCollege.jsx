import React from "react";
import { useState } from "react";

const GetCompany = () => {
    const countries = [
        { name: "Pimpri Chinchwad College of Engineering", email: "pccoepune.org" , avaible_stu:100  },
        { name: "Vishwakarma Institute of Technology", email: "vit.org" , avaible_stu:220},
    ];

const [search, setSearch] = useState("")

const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
};

  const searchItem = countries.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="m-2 flex justify-end ">
          <input
            className="m-2 flex justify-end border-solid border-black border-2 p-1 rounded-lg"
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            // value={searchInput}
          />
        </div>

        {searchItem.map((country) => (
          <div
            className=" text-center items-center inline-flex w-full sm:w-1/3"
            key={country.name}
          >
            <div className="border-solid border-black border-2 w-3/4 mx-auto my-2 ">
              <div className=" ">
                <div className=" text-lg font-bold justify-start flex px-4">{country.name}</div>
                <div className="">{country.email}</div>
                <div>No. of Available Students: {country.avaible_stu}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetCompany;
