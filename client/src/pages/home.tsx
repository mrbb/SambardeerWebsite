import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Star, Info, MessageCircle } from "lucide-react";
import heroImg from "@assets/1140x480_1_1772789087390.png";
import productBag1 from "@assets/1140x480_4_1772789087397.png";
import productBag2 from "@assets/1140x480_5_1772789087398.png";
import bananaPoster from "@assets/海報_01_1772789087398.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#361C0D] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#F4E3C5] px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tight text-[#FFC107] drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] flex items-center gap-2">
          <span className="bg-[#FFC107] text-[#361C0D] px-2 py-1 rounded-lg text-lg">SambarDeer</span>
          三博鹿科技
        </div>
        <div className="hidden md:flex gap-8 font-bold text-[#6D4C41]">
          <a href="#about" className="hover:text-[#FF6B35] transition-colors">關於我們</a>
          <a href="#ip" className="hover:text-[#FF6B35] transition-colors">香蕉人IP</a>
          <a href="#products" className="hover:text-[#FF6B35] transition-colors">周邊商品</a>
        </div>
        <Button className="bg-[#FF6B35] hover:bg-[#E85D2C] text-white rounded-full font-bold shadow-[0_4px_0_#C54A21] hover:translate-y-[2px] hover:shadow-[0_2px_0_#C54A21] transition-all">
          聯絡我們
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFC107] opacity-20 blob-shape -z-10"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#FF6B35] opacity-10 blob-shape animation-delay-2000 -z-10"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[#FFF0B3] text-[#D48806] px-4 py-2 rounded-full font-bold text-sm border border-[#FFE066]">
              台灣原創角色經濟
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
              用角色設計<br/>
              <span className="text-[#FF6B35]">放大快樂</span> 的能量
            </h1>
            <p className="text-xl text-[#6D4C41] font-medium leading-relaxed">
              三博鹿科技 SambarDeer Tech，專注於原創角色 IP 的經營與商業化。我們是超人氣「香蕉人」的專屬經紀公司！
            </p>
            <div className="pt-4 flex gap-4">
              <Button size="lg" className="bg-[#FFC107] hover:bg-[#F0B400] text-[#361C0D] rounded-full font-black text-lg px-8 shadow-[0_4px_0_#D48806] hover:translate-y-[2px] hover:shadow-[0_2px_0_#D48806] transition-all">
                認識香蕉人
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 border-2 border-[#361C0D] hover:bg-[#361C0D] hover:text-white transition-all">
                探索周邊
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFC107] rounded-3xl rotate-3 -z-10 transform transition-transform hover:rotate-6"></div>
            <img 
              src={bananaPoster} 
              alt="香蕉人 Banana Man" 
              className="rounded-3xl shadow-xl w-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Banner Strip */}
      <div className="w-full bg-[#361C0D] overflow-hidden py-4 border-y-4 border-[#FFC107]">
        <div className="flex gap-8 animate-[slide_20s_linear_infinite] whitespace-nowrap text-[#FFC107] font-black text-2xl">
          <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> • <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> •
          <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> • <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> •
          <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> • <span>🍌 BANANA MAN</span> • <span>SAMBARDEER TECH</span> •
        </div>
      </div>

      {/* IP Showcase Section */}
      <section id="ip" className="py-24 px-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNGRkMxMDciIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 inline-block relative">
              明星 IP：香蕉人
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFC107] opacity-50 -z-10 rounded-full"></div>
            </h2>
            <p className="text-xl text-[#6D4C41] font-bold max-w-2xl mx-auto">
              LINE 貼圖百萬下載！用最搞怪、可愛的表情，征服每個人的心。
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-[#FFC107] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <img 
              src={heroImg} 
              alt="香蕉人與朋友們" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#FFF0B3] p-8 rounded-3xl border-2 border-[#FFE066] text-center hover:-translate-y-2 transition-transform">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#FFC107]">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-black mb-2">LINE 貼圖大軍</h3>
              <p className="text-[#6D4C41] font-medium">多款系列貼圖霸榜，日常對話不能沒有他！說話好好笑的超級明星。</p>
            </div>
            <div className="bg-[#FFE5D9] p-8 rounded-3xl border-2 border-[#FFC9B3] text-center hover:-translate-y-2 transition-transform">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#FF6B35]">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-black mb-2">角色經濟生態</h3>
              <p className="text-[#6D4C41] font-medium">從數位貼圖走到實體世界，打造完整的 IP 授權與品牌合作網絡。</p>
            </div>
            <div className="bg-[#E6F4F1] p-8 rounded-3xl border-2 border-[#BFE3DB] text-center hover:-translate-y-2 transition-transform">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#2A9D8F]">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-black mb-2">線下互動體驗</h3>
              <p className="text-[#6D4C41] font-medium">舉辦公仔塗色手作等限定活動，讓粉絲親自感受香蕉人的魅力。</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#361C0D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107] opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#FFC107]">關於三博鹿 SambarDeer</h2>
          <p className="text-xl leading-relaxed mb-6 font-medium text-gray-200">
            三博鹿科技由楊劍雄 (Boris Yang) 創辦，是 AppWorks 培育的優秀新創團隊。我們將自己定位為「香蕉人的經紀公司」。
          </p>
          <p className="text-xl leading-relaxed mb-12 font-medium text-gray-200">
            結合角色經營、程式開發與新媒體傳播，透過優質有共鳴的角色設計，以及新媒體的放大效應，致力於讓台灣原創角色站上國際舞台，帶給更多人純粹的歡樂！
          </p>
          
          <div className="inline-flex gap-4 p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <span className="px-6 py-2 bg-white text-[#361C0D] rounded-full font-bold">IP 經營</span>
            <span className="px-6 py-2 bg-[#FF6B35] text-white rounded-full font-bold">程式開發</span>
            <span className="px-6 py-2 bg-[#FFC107] text-[#361C0D] rounded-full font-bold">新媒體</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 inline-block relative">
                周邊好物
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF6B35] opacity-50 -z-10 rounded-full"></div>
              </h2>
              <p className="text-xl text-[#6D4C41] font-bold">
                把可愛的香蕉人帶入日常生活中吧！
              </p>
            </div>
            <Button className="bg-[#361C0D] hover:bg-[#1A0D06] text-white rounded-full font-bold w-fit">
              查看全部商品 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-[#E6F4F1] rounded-3xl p-8 mb-6 overflow-hidden border-2 border-transparent group-hover:border-[#2A9D8F] transition-all relative">
                <div className="absolute inset-0 bg-[#2A9D8F]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={productBag1} 
                  alt="香蕉人化妝包 (青色)" 
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-black mb-1">飛遊天空 萬用化妝包</h3>
                  <p className="text-[#6D4C41] font-bold">大容量設計，可愛又實用</p>
                </div>
                <div className="bg-[#FFC107] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                  <ShoppingBag className="text-[#361C0D]" />
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#FFE5D9] rounded-3xl p-8 mb-6 overflow-hidden border-2 border-transparent group-hover:border-[#FF6B35] transition-all relative">
                <div className="absolute inset-0 bg-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={productBag2} 
                  alt="香蕉人零錢包 (紅色)" 
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-black mb-1">招財進寶 隨身零錢包</h3>
                  <p className="text-[#6D4C41] font-bold">輕巧好攜帶，讓香蕉人守護你的財富</p>
                </div>
                <div className="bg-[#FFC107] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                  <ShoppingBag className="text-[#361C0D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#FFC107] text-[#361C0D] text-center border-y-4 border-[#361C0D]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">準備好跟香蕉人<br/>一起玩耍了嗎？</h2>
          <p className="text-2xl font-bold">
            合作洽談、IP 授權或是有任何有趣的點子，都歡迎聯絡我們！
          </p>
          <Button size="lg" className="bg-[#361C0D] hover:bg-[#1A0D06] text-white rounded-full font-black text-xl px-12 py-8 shadow-[0_6px_0_#000000] hover:translate-y-[3px] hover:shadow-[0_3px_0_#000000] transition-all">
            聯絡經紀公司
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFFDF7] py-12 px-6 border-t-2 border-[#F4E3C5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tight flex items-center gap-2">
            <span className="bg-[#FFC107] text-[#361C0D] px-2 py-1 rounded-lg text-lg">SambarDeer</span>
            三博鹿科技
          </div>
          <div className="text-[#6D4C41] font-bold text-sm">
            © {new Date().getFullYear()} SambarDeer Tech. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#E8DCC4] flex items-center justify-center text-[#361C0D] hover:bg-[#FFC107] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#E8DCC4] flex items-center justify-center text-[#361C0D] hover:bg-[#FFC107] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </a>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}