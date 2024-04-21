import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { Demo } from "./components/Card";
import { useRef } from "react";
import Form, { FormHandle } from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main className="min-h-screen w-full bg-sky-100 flex flex-col items-center">
      <div className="w-[70%] flex flex-col justify-center items-center gap-2 p-5 bg-blue-200 mt-5 rounded-xl">
        <Input id="name" label="Your Name" type="text" ref={input} />
        <Input id="age" label="Your Age" type="number" />
      </div>
      <div className="flex flex-row  justify-center items-center w-[70%] gap-5 p-5 bg-blue-200 mt-5 rounded-xl">
        <p>
          <Button>A Button</Button>
        </p>
        <p>
          <Button href="http://www.google.com">A Link</Button>
        </p>
      </div>
      <Container as="button" onClick={() => alert("Hello")}>
        Click me
      </Container>
      <Demo />
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your Name" type="text" />
        <Input id="age" label="Your Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
