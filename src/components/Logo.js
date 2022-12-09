export default function Logo() {
  return (
    <a href="/" className="flex flex-row items-baseline">
      <span className="sr-only">company logo</span>
      <img
        className="h-9"
        src="https://i.ibb.co/WHJhTjz/favicon.png"
        alt="canmycateat.xyz"
        border="0"
      />
      {/* <span className="text-5xl font-bold text-purple-900 tracking-tight">.xyz</span> */}
      <span className="text-3xl font-bold text-purple-900">.xyz</span>
    </a>
  );
}
