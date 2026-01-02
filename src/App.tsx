import { GlobalNav } from "@/components/common/nav";
import { HomePage } from "@/pages/home/page";
import { NotFoundPage } from "@/pages/not-found/not-found-page";
import { TaskLiskProjectPage } from "@/pages/projects/tasklist/page";
import { PageWrapper } from "@components/common/page-wrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <PageWrapper>
            <GlobalNav />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/projects" element={<h1 className="typo-h1">Projects</h1>} />
               <Route path="/projects">
                  <Route path="tasklist" element={<TaskLiskProjectPage />} />
               </Route>
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </PageWrapper>
      </BrowserRouter>
   );
}

export default App;
