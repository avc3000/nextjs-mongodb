import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import Link from "next/link";

async function loadPersons() {
  await connectDB();
  const persons = await User.find();
  return persons;
}

async function HomePage() {
  const persons = await loadPersons();

  return (
    <div className="grid">
      <h1 className="text-center mt-4 text-2xl font-mono text-sky-700 font-bold">
        LIST PERSONS
      </h1>
      <div className="grid grid-cols-6 p-2">
        {persons.map((person) => (
          <div
            key={person._id}
            className="bg-transparent border-2 border-yellow-500 rounded-lg p-3 m-2 font-mono font-bold text-xl"
          >
            <p>
              <span className="text-green-500">Name:</span> {person.name}
            </p>
            <p>
              <span className="text-green-500">Last:</span> {person.lastName}
            </p>
            <p>
              <span className="text-green-500">Age:</span> {person.age}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/register"
          className="bg-amber-500 px-3 text-black py-2 font-bold rounded-lg hover:bg-amber-600 hover:text-white transition duration-150"
        >
          REGISTER PERSON
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
