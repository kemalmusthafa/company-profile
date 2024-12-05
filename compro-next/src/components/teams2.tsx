"use client";

import HeadTeam from "@/components/teams";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Person {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { medium: string };
}

export default function TeamsComponent() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
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
    <div
      className="hero bg-base-100 min-h-screen px-4 py-10 sm:px-10 overflow-x-hidden"
      style={{
        backgroundImage: "url('/banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col p-5">
        <div className="flex flex-1">
          <HeadTeam />
        </div>

        <div className="mx-auto grid max-w-[1300px] gap-10 sm:gap-16 px-6 lg:px-8 xl:grid-cols-3">
          <div className="bg-white shadow-lg p-20 rounded-br-[200px] mb-6 xl:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              Meet Our Members
            </h2>
            <p className="mt-4 text-base sm:text-lg font-mono text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-y-8 sm:grid-cols-2 sm:gap-8 xl:col-span-2 p-5"
          >
            {people.map((person) => (
              <li key={person.login.uuid}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-start gap-4 p-4 shadow-lg bg-white">
                  <div className="h-16 w-16 relative">
                    <Image
                      alt={person.name.first}
                      src={person.picture.medium}
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-black">
                      {`${person.name.first} ${person.name.last}`}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 font-mono">
                      {person.email}
                    </p>
                    <p className="text-sm font-semibold text-base-content">
                      as a member
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
