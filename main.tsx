/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, init, h, render, tw } from "nat";

function App() {
  return <h1 class={tw`text-4xl`}>Hello from nat!</h1>;
}

const router = init();

// add routes here, like:
router.get("/", render(<App />));

router.listen();
