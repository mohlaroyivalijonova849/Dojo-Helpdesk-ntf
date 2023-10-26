import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function NewTikert() {
  const { data } = useFetch("http://localhost:3001/tickets");
  console.log(data);
  return (
    <>
      <div className="flex flex-col myContainer gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#7856ff] mb-4 pb-2 text-2xl font-bold">
              Tikets
            </h1>
            <span className="text-[#6b7280] pb-8 text-base font-normal">
              Currently open tikets
            </span>
          </div>
          <Link
            to="/create"
            className="btn btn-primary items-center justify-center"
          >
            NEW Tikets
          </Link>
        </div>
        <div className="pt-7">
          {data &&
            data.map((item) => (
              <div
                className="card w-full bg-base-100 responsive mb-5"
                key={item.id}
              >
                <div className="card-body">
                  <h3 className="text-[#374151] text-sm font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm my-4">{item.body}</p>
                  <p
                    className={`${
                      item.priority == "low"
                        ? "bg-[#5BD6AD] text-[#189A6D]"
                        : item.priority == "medium"
                        ? "bg-[#93C5FD] text-[#3169EB]"
                        : "bg-[#FCA5A5] text-[#DF302B]"
                    } absolute  right-0 bottom-0 py-1 px-4`}
                  >
                    {item.priority}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default NewTikert;
