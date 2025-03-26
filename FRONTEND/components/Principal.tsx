export default function Principal({titre, children}: {titre:string, children: React.ReactNode}) {
  return (
    <div className=" w-full md:w-5/6 bg-[#121313] p-3 md:p-6  space-y-4 overflow-hidden h-auto">
        <h1 className="text-3xl font-bold">{titre} </h1>
        <div className="bg-[#121313] h-[90%]">{children}</div>
    </div>
  )
}
