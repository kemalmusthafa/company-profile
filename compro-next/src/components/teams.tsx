import React, { useEffect, useState } from "react";
import Divider from "./divider";
import Image from "next/image";

interface Person {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { medium: string };
}

export default function HeadTeam() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-screen-2xl p-10">
      <div className="text-center mb-8">
        <h1 className="text-xl lg:text-2xl font-bold text-white">
          OUR MANAGEMENT TEAM
        </h1>
        <div className="flex justify-center m-5">
          <Divider />
        </div>
        <p className="text-sm md:text-md font-mono text-white mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          harum laudantium porro maiores architecto hic optio dolore nihil
          praesentium neque!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center p-5">
        {people.map((person) => (
          <div
            key={person.login.uuid}
            className="bg-white h-[300px] w-[250px] flex flex-col justify-center items-center shadow-lg relative"
          >
            <div className="flex bg-teal-700 w-[50px] h-[30px] items-center justify-center absolute top-0 right-0 font-mono rounded-bl-3xl">
              CEO
            </div>
            <div className="h-[100px] w-[100px] rounded-full mb-4 relative">
              <Image alt={person.name.first} src={person.picture.medium} fill />
            </div>
            <div className="flex flex-col justify-center text-center items-center p-5 gap-3">
              <h3 className="text-base font-semibold tracking-tight text-black">
                {`${person.name.first} ${person.name.last}`}
              </h3>
              <p className="text-sm font-semibold text-base-content">
                Founders
              </p>
              <p className="text-sm font-semibold text-indigo-400 font-mono">
                {person.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
