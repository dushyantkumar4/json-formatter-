import { useState } from "react";
import Footer from "./components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);

      setOutput(formatted);
      setError("");
    } catch {
      setOutput("");
      setError("Invalid JSON");
    }
  };

  const handleCopy = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    alert("Copied Successfully!");
  };

  const handleReset = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-bold">
          JSON Formatter & Validator
        </h1>

        <div className="mb-6 flex gap-4">
          <button
            onClick={handleReset}
            className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
          >
            New
          </button>

          <button
            onClick={formatJson}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Format JSON
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-lg font-semibold">
              Input JSON
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className="h-[450px] w-full rounded-lg border p-4 font-mono outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-lg font-semibold">Formatted Output</label>

              <button
                onClick={handleCopy}
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                Copy
              </button>
            </div>


            <SyntaxHighlighter
              language="json"
              style={oneLight}
              customStyle={{
                height: "450px",
                borderRadius: "8px",
              }}
            >
              {output}
            </SyntaxHighlighter>
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-lg bg-red-100 p-4 text-red-600">
            {error}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default App;
