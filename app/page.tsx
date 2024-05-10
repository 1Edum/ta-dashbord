import Sidebar from "./_components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen ">
      <Sidebar />
      <div className="w-screen">
        <div className="w-full h-16  bg-slate-100">
        <h1 className="text-6xl">Dashbord</h1>

        </div>
      </div>
    </div>
  );
}
