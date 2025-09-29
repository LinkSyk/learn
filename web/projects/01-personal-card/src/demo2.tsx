import "./App.css";
import { Mail, Phone, MapPin, Copy } from 'lucide-react';

function App() {
  // 复制到剪贴板功能
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // 这里可以添加复制成功的提示
      console.log('已复制到剪贴板');
    });
  };

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-stone-100">
      <div className="bg-white w-[80%] max-w-md h-auto min-h-[240px] flex flex-col items-center rounded-xl p-6 shadow-xl">
        <div>
          <img src="/cat.png" className="w-24 h-24 rounded-full mx-auto mb-4"/>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-1">LinkSyk</h1>
          <p className="text-sm text-rose-300 mb-1">全栈工程师</p>
          <p className="text-slate-600">字节集团</p>
        </div>

        <div className="w-full space-y-2">
          <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500 w-5 h-5" />
              <p className='text-slate-600 text-base'>shiyongkang@example.com</p>
            </div>
            <button 
              onClick={() => copyToClipboard('shiyongkang@example.com')}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500 w-5 h-5" />
              <p className='text-slate-600 text-base'>15868158354</p>
            </div>
            <button 
              onClick={() => copyToClipboard('15868158354')}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500 w-5 h-5" />
              <p className='text-slate-600 text-base'>北京市朝阳区</p>
            </div>
            <button 
              onClick={() => copyToClipboard('北京市朝阳区')}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div id="copyToast" className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300">
        <i className="fas fa-check mr-2"></i>
        复制成功！
      </div>
    </div>
  );
}

export default App;
