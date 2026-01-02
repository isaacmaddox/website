import { GlobalNav } from "@/components/common/nav";
import { PageWrapper } from "@components/common/page-wrapper";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <GlobalNav />
        <section>
          <img
            src="/isaac-maddox.jpg"
            alt="Isaac Maddox"
            className="size-24 mb-3 md:size-32 rounded-full row-span-2 border-2 border-gray-500 ring-8 ring-gray-500/15"
          />
          <h1 className="typo-h1 mb-1">Coming Soon</h1>
          <p className="paragraph">My website is under construction and will be up soon!</p>
        </section>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
