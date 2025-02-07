export default function App() {
  return (
    <main className="flex flex-col items-center gap-y-4 md:rounded md:border-2 md:border-purple-600/20 md:p-8 xl:gap-y-12">
      <div className="space-y-2 text-center">
        <h6 className="text-purple-600">Newsletter</h6>
        <h1 className="text-2xl font-bold sm:text-4xl">
          Subscribe to our Newsletter
        </h1>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          tempore? Dicta libero quo similique ipsa!
        </p>
      </div>

      <form className="flex w-full flex-col gap-6 rounded p-5 shadow-md *:rounded *:px-4 *:py-2 *:text-xl sm:w-3/4 md:flex-row">
        <input
          className="basis-full border-2 border-purple-600/20 placeholder:text-purple-600/40 focus:outline-none"
          type="email"
          placeholder="Your Email Address"
        />
        <input
          className="cursor-pointer bg-purple-600 text-white"
          type="submit"
          value="Subscribe"
        />
      </form>
    </main>
  );
}
