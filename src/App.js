import Header from './Header'
import ActionButton from './ActionButton';
import PreviewSection from './PreviewSection';
import ScoreSection from './ScoreSection';
import './App.css';

function App() {
  const uploadImage = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  return (
    <main className="flex flex-col items-start pt-8 pr-20 pb-20 pl-7 max-md:px-5">
      <Header />
      <section className="self-center mt-40 w-full max-w-[1246px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-6xl text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
            <form id = "uploadForm" onSubmit={uploadImage} encType="multipart/form-data">
              Select image to upload:
              <input type="file" name="fileToUpload" id="fileToUpload"/>
              <ActionButton text="UPLOAD" />
              
            </form>
    
            <ActionButton text="PREDICT" additionalClasses="mt-14 max-md:mt-10" additionalProperties = {{id: "predictButton", form: "predictForm"}}/>

            </div>
          </div>
          <PreviewSection />
          <ScoreSection />
        </div>
      </section>
    </main>
  );
}

export default App;
