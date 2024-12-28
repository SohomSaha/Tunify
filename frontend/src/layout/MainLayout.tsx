import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

function MainLayout() {
  const isMobile = false;
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden">
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
          <div className="bg-gray-800 p-4 min-h-screen ">
            <LeftSideBar />
            </div> 
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
        <ResizablePanel defaultSize={isMobile?80:60}>
        <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
          <div className="bg-gray-800 p-4">
            <RightSideBar/>
          </div>
        </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  );
}

export default MainLayout;
