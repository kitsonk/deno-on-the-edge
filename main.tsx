/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, init, render, tw } from "nat";

const res = await fetch("https://apiland.deno.dev/v2/modules");
const pkgs: { items: { name: string; description: string }[] } = await res
  .json();

function App() {
  const items = pkgs.items.map(({ name, description }) => (
    <li>{name} - {description}</li>
  ));
  return (
    <div>
      <h1 class={tw`text-4xl`}>Hello from nat!</h1>
      <ul class={tw`list`}>{items}</ul>
    </div>
  );
}

const router = init();

// add routes here, like:
router.get("/", render(<App />));

router.listen();
