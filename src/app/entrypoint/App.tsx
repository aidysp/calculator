import { Calculator } from "../../widgets/calculator";

function App() {
  return (
    <>
    
      <div className="grid h-screen w-screen  overflow-hidden bg-gradient-to-tr from-[#58BEF6] to-emerald-400 dark:to-[#A117A5]">
        <div className="sm:py-5">
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;
