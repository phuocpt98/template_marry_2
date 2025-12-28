
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, Send } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const AIGreeting: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const generateGreeting = async () => {
    if (!name) return alert("Vui lòng nhập tên của bạn");
    setLoading(true);
    try {
      const prompt = `Hãy viết một lời chúc đám cưới thật ngọt ngào, trang trọng và đầy cảm xúc từ ${name} gửi đến cặp đôi Minh và Lan. Lời chúc nên có độ dài khoảng 2-3 câu, mang phong cách văn thơ và ấm áp.`;
      
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      
      setResponse(result.text || "Chúc mừng hai bạn trăm năm hạnh phúc!");
    } catch (error) {
      console.error(error);
      setResponse("Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
             <Sparkles className="text-amber-300 w-8 h-8 opacity-50" />
          </div>

          <h3 className="text-2xl font-serif-title mb-6 text-gray-800 flex items-center gap-2">
            Gửi Lời Chúc (Cùng AI)
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            Nhập tên của bạn, AI sẽ giúp bạn soạn một lời chúc thật ý nghĩa cho Minh & Lan.
          </p>

          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Tên của bạn là gì?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button 
              onClick={generateGreeting}
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? 'Đang tạo lời chúc...' : 'Tạo lời chúc ý nghĩa'}
            </button>
          </div>

          {response && (
            <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-amber-500 shadow-sm animate-fade-in">
              <p className="text-gray-700 italic font-serif-title leading-relaxed">
                "{response}"
              </p>
              <p className="mt-4 text-xs text-amber-600 font-bold uppercase tracking-widest text-right">
                — {name}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIGreeting;
