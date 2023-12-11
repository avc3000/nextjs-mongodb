"use client";

import { useRouter } from "next/navigation";

function RegisterPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let person = {
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      age: parseInt(e.target.age.value),
    };

    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="grid gap-2 p-2"
        autoComplete="off"
      >
        <h1 className="font-mono font-bold text-orange-500 text-2xl text-center">
          Users
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-lg bg-transparent border-sky-300 border-2 p-1"
        />
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          className="rounded-lg bg-transparent border-sky-300 border-2 p-1"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="rounded-lg bg-transparent border-sky-300 border-2 p-1"
        />
        <button
          type="submit"
          className="bg-green-400 text-black rounded-lg p-2 font-bold mt-2 transition-all duration-150 hover:bg-green-600 hover:text-white"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
