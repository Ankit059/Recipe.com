import React from "react";
// import img from "./f01.jfif";
import img from "./f02.jpg";
import desImg from "./desImg.png";
import { Link } from "react-router-dom";

export const Description = () => {
  return (
    <>
      <div className=" fixed  flex flex-col mt-20 items-center justify-center border-black h-4/5 w-screen">
        <div className="flex">
          <div className="mb-4 mr-8">
            <img src={desImg} className="w-12 " alt="img" />
          </div>
          <div className="border-black h-14  font-bold text-4xl font-serif text-green-700 underline ">
            Food item recipe
          </div>
          <div className="border-black h-14 font-bold text-4xl font-serif text-green-700 ">
            <Link
              to="/"
              className="absolute right-60 mt-2 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5"
            >
              Back
            </Link>
          </div>
        </div>
        <div className=" flex  border-black mt-20 h-4/5 w-4/5 rounded-2xl ">
          <div className="w-2/4  border-black">
            <img src={localStorage.getItem("img")} className=" w-full rounded-xl" alt="img" />
          </div>
          <div className=" border-black w-2/4 h-3/4 overflow-x-scroll relative">
            <div className="flex items-center ">
            <div className=" font-bold text-2xl m-4 font-serif">{localStorage.getItem("name")}</div>
            <div className=" font-thin text-sm m-4 font-mono absolute right-10 text-red-800">By Ankit singh</div>
            </div>
            <div className="m-4 font-serif text-lg">
              {localStorage.getItem("desc")}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea
              culpa similique ex asperiores, sunt iure vitae explicabo modi,
              molestiae dicta ipsam quasi corrupti distinctio nemo sequi vel
              nostrum sapiente et dolor velit eaque quaerat? Eum voluptatum
              pariatur assumenda quibusdam ipsum accusamus obcaecati ab dolores,
              culpa similique ex asperiores, sunt iure vitae explicabo modi,
              molestiae dicta ipsam quasi corrupti distinctio nemo sequi vel
              nostrum sapiente et dolor velit eaque quaerat? Eum voluptatum
              pariatur assumenda quibusdam ipsum accusamus obcaecati ab dolores,
              exercitationem molestias beatae optio. Autem quia consequuntur vel
              explicabo saepe vero, ducimus dolorem veritatis molestiae neque
              sit eligendi voluptatibus ipsa? Consequuntur magni minus eligendi,
              error perspiciatis odit, repudiandae voluptatem, sed iusto
              suscipit dicta officia reiciendis molestias. Optio, rerum? Porro
              nostrum magnam hic nulla quis quod ab pariatur harum, corrupti
              maxime expedita totam animi, architecto voluptatem, itaque odio
              necessitatibus excepturi magni! Ab, repellendus! Harum excepturi
              accusantium natus iure error quibusdam alias quidem totam dolorum!
              Ipsam nulla nostrum provident voluptatem enim quaerat, debitis
              veritatis magni dolor cupiditate deserunt natus eius optio placeat
              perspiciatis minima sint asperiores molestiae corrupti! Atque,
              quod nobis. Maxime autem ex, accusamus adipisci, molestias ab
              tempore a doloremque voluptatum, rem laborum assumenda et harum
              quia veritatis libero sequi eveniet alias iste illo repellat
              eligendi? Non minima quisquam voluptatem sed iure numquam
              excepturi rem, commodi debitis omnis consequatur, expedita
              consequuntur. Aliquid, dicta porro tempore nisi illum velit saepe
              suscipit molestias non rerum, neque numquam nemo vero voluptatibus
              et nostrum eum pariatur debitis. Error reiciendis libero nisi in.
              Expedita laboriosam, molestiae, illum eveniet sequi, provident
              ipsa ipsam in doloremque sit non corporis. Qui ex nesciunt
              deleniti porro ut quidem, natus cum obcaecati consequuntur odio in
              recusandae repellat eos, dolorem laboriosam nulla quas fugiat
              quibusdam facere quia? Accusamus quaerat animi aliquid sequi
              dolorem vero hic repellat ratione culpa natus itaque tempora error
              dignissimos, esse nulla quam enim et possimus velit dolorum cum
              reprehenderit. Quidem expedita dolore ut in fuga?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
