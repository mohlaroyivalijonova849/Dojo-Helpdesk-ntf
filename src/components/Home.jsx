import React from "react";

function Home() {
  return (
    <div>
      <div className="  flex flex-col  myContainer gap-5">
        <h2 className="text-[#7856ff] mb-4 pb-2 font-bold">Dashboard</h2>
        <p className="text-[#6b7280] w-[960px] pb-8 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          repellendus tempore, exercitationem odit, quasi doloremque possimus
          recusandae alias sequi totam soluta natus iure eius, obcaecati sint
          dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
          voluptates iste cum totam, facere explicabo, fugit suscipit ratione
          aspernatur consequuntur ex mollitia quaerat?
        </p>
        <button className="btn btn-primary items-center justify-center mx-auto">
          View Tickets
        </button>

        <h3 className="text-[#7856ff] text-base pb-2 mb-4 font-bold">
          Company Updates
        </h3>
        <div className="card w-full bg-base-100">
          <div className="card-body">
            <h3 className="text-[#374151] text-sm font-bold">
              New member of the web dev team...
            </h3>
            <p className="text-[#6b7280] text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 mt-8">
          <div className="card-body">
            <h3 className="text-[#374151] text-sm font-bold">
              New website live!
            </h3>
            <p className="text-[#6b7280] text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti, assumenda
              distinctio adipisci, cupiditate minima eum vitae? Similique dicta
              est facilis debitis, autem temporibus quo repellat illum unde id
              iste veritatis eveniet, aspernatur enim quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
