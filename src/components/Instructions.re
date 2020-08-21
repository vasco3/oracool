[@react.component]
let make = () => {
  <div
    className="rounded bg-yellow-200 text-left text-yellow-800 h-64 w-full max-w-screen-sm overflow-y-scroll p-4 m-auto">
    <h2 className="font-semibold leading-relaxed">
      "Guessing game"->ReasonReact.string
    </h2>
    <p>
      "The purpose of this micro-app is to prank people. It was inspired by a 1990's Unix/DOS game."
      ->ReasonReact.string
    </p>
    <p>
      "Prank your friends by letting them believe that this web app will guess correctly any question that they already know the answer for."
      ->ReasonReact.string
    </p>
    <h3 className="font-medium leading-loose">
      "Example on how to use"->ReasonReact.string
    </h3>
    <ol className="text-left">
      <li>
        "Type the following in the input field: "->ReasonReact.string
        "Oracool,.john.me which is my name"->ReasonReact.string
      </li>
      <li>
        "It will look like: "->ReasonReact.string
        "Oracool, tell me which is my name"->ReasonReact.string
      </li>
      <li> "Press ENTER"->ReasonReact.string </li>
      <li> "You will see the answer: JOHN"->ReasonReact.string </li>
    </ol>
  </div>;
};
