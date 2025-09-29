import "./App.css";
import { useState } from 'react';
import { Phone, Mail, Copy, MapPin } from "lucide-react";

function App() {
  const [showToast, setShowToast] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // 显示提示框
      setShowToast(true);

      // 2秒后自动隐藏提示框
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    });
  };

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-stone-100">
      <div className="bg-white w-[40%] max-w-[400px] min-w-[350px] space-y-2 flex items-center flex-col rounded-xl p-4 shadow-xl ">
        <div>
          <img src="/cat.png" className="w-20 h-20 rounded-full"/>
        </div>
          <h1 className="text-2xl font-bold">LinkSyk</h1>
          <p className="text-sm text-rose-300">全栈工程师</p>
          <p>字节集团</p>

          <div className='flex gap-2 border-gray-100 border-1 rounded-md p-1 w-full justify-between'>
            <Mail  className="w-4 h-4"/>
            <p>shiyongkang@bytedance.com</p>
            <button 
              onClick={()=> {copyToClipboard("shiyongkang@bytedance.com")}}>
              <Copy className="w-4 h-4 hover:text-blue-300 transition-colors"/>
            </button>
          </div>
          <div className='flex gap-2 border-gray-100 border-1 rounded-md p-1 w-full justify-between'>
            <Phone className="w-4 h-4"/>
            <p>15934131239</p>
            <button 
              onClick={()=> {copyToClipboard("15934131239")}}>
              <Copy className="w-4 h-4"/>
            </button>
          </div>
                    <div className='flex gap-2 border-gray-100 border-1 rounded-md p-1 w-full justify-between'>
            <MapPin className="w-4 h-4" />
            <p>北京市朝阳区</p>
            <button 
              onClick={()=> {copyToClipboard("北京市朝阳区")}}>
              <Copy  className="w-4 h-4"/>
            </button>
          </div>
      </div>
      <div className={`fixed top-4 right-0 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${showToast ? 'translate-x-0' : 'translate-x-full'}`}>
          <span className="mr-2">✓</span>
          复制成功！
      </div>
    </div>
  );
}

export default App;
