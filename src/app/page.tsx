import Button from "./components/Button";

export default function Home() {
  return (
    <main className="mx-auto mt-12 max-w-[600px] space-y-8 border p-4 text-white">
      <h1 className="text-2xl">Client Name</h1>

      <Button />
      <div className="flex flex-col">
        <label htmlFor="">Time</label>
        <input type="text" className="px-2 text-slate-700" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Desc</label>
        <textarea className="px-2 text-slate-700"></textarea>
      </div>
      <button className="border-2 p-4" type="submit">
        Submit
      </button>
    </main>
  );
}
