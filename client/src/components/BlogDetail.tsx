/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

export default function BlogDetail({ pid }) {
  pid = pid[0];
  return (
    <div className="container">
      <div className="w-full lg:px-28 lg:mb-12 mt-12">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h3 className="text-2xl font-semibold text-big">
            <Link href={"/blog"}>Article</Link>
          </h3>
          <Link
            href="/"
            className="font-semibold text-med hover:text-small lg:block hidden"
          >
            Check my Full Profile
          </Link>
        </div>
        <hr className="mb-8" />
        <div className="lg:pr-10">
          <div className="head mb-12">
            <h2 className="text-4xl font-bold text-big">
              {titleCase(pid.title)}
            </h2>

            <p className="text-sm text-small mt-6 group-hover:text-slate-300">
              tags:{" "}
              <span className="text-slate-600 text-xs py-1 px-2 bg-slate-200 rounded-full">
                backend
              </span>
            </p>
          </div>
          <div className="content">
            <p className="text-big text-[1.22rem] font-serif leading-8">
              {pid.body} Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Atque sapiente vel eveniet cumque consequuntur omnis nisi
              vitae est molestias, porro explicabo quos assumenda fugit aliquid
              nulla esse tempore. Dicta maiores asperiores ducimus aspernatur
              eveniet assumenda sed iure.
              <br />
              <br />
              Let's get started
              <br />
              <br />
              Ea ipsam totam quis dolorem sit vitae sapiente. Adipisci rem
              dolorum cupiditate unde! Rerum veniam quod iusto sint dicta
              voluptatibus, incidunt minima quia maiores! Deserunt magnam
              eveniet molestiae illo quibusdam, voluptatem repudiandae culpa
              dolor aspernatur ipsam ea dolores aut labore quaerat molestias,
              inventore rerum neque nisi, dicta laudantium architecto explicabo
              eos! Omnis id quis porro cupiditate dicta totam facere quod quos
              itaque unde?
              <br /> <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui unde
              recusandae sunt ipsum magni atque vel officiis ducimus esse! Amet
              saepe molestias, vero eos accusantium architecto dolorum velit
              voluptates sed ea illo eveniet, alias deserunt possimus totam
              excepturi neque vitae veritatis harum maxime deleniti illum
              numquam delectus. Impedit quis eligendi ea numquam esse vitae,
              nobis quod voluptatum, expedita eveniet qui omnis quidem doloribus
              tempora debitis earum repellendus excepturi modi repellat?
              Molestias sint expedita itaque, assumenda, a error vitae rem esse
              facere, ad dicta eligendi dolore ab aspernatur voluptas?
              Cupiditate, enim inventore fugiat a delectus consequatur, unde
              aspernatur, suscipit hic eos rerum recusandae animi earum eveniet!
              Dolorem obcaecati labore modi sed nemo reiciendis explicabo rerum
              ex officiis dolor quia itaque corporis temporibus quibusdam vel,
              cupiditate dolores exercitationem. Nesciunt in illo sapiente quo
              cumque. Corporis sint mollitia laborum, omnis reiciendis
              cupiditate placeat aliquam aut. Consequatur officia neque suscipit
              culpa repellat modi architecto quaerat laboriosam voluptas! Nobis
              soluta quos, non quo atque, ducimus perferendis autem dolorum hic
              fugiat et asperiores, vel voluptas quasi tempore labore. Quae
              cumque deleniti sed quidem. Dolorem totam at, aliquam facere neque
              nihil incidunt, aperiam reprehenderit laboriosam quo dolore modi
              quibusdam rerum ea hic. Repudiandae veniam fugit omnis soluta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
