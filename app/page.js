import { supabase } from "./supabaseClient";

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select("*");
  console.log(products);
  return (
    <div>
      <h2
        className="text-4xl font-bold bg-gradient-to-br from-red-700 to-blue-200 
      bg-clip-text text-transparent
      "
      >
        Home page rendered!
        <div>
          <h2 className="text-center">Fetching Data from supabase !</h2>
          <hr />
          {products &&
            products.map((item) => (
              <p key={item.id}>
                {item.title} -- {item.price}
              </p>
            ))}
        </div>
      </h2>
    </div>
  );
}
