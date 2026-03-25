import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  Landmark as LandmarkIcon,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

import logoHou from '@/assets/tqtt/7efa42f0-fa5b-40d4-b030-a55e6ea64936.png'
import vietnamMap from '@/assets/tqtt/vietnam-map-qyhfZCzZ.jpg'
import cotCoHaNoi from '@/assets/tqtt/cot-co-ha-noi-CA8Upe4l.webp'
import vanMieu from '@/assets/tqtt/van-mieu-DeyVa1cG.png'
import hoGuom from '@/assets/tqtt/ho-guom-CLaAZAor.jpg'
import trangAn from '@/assets/tqtt/ninh-binh-vkJKwKRd.jpg'
import daiNoiHue from '@/assets/tqtt/dai-noi-hue-B_wtWm5v.jpg'
import dinhDocLap from '@/assets/tqtt/dinh-doc-lap-BIKLZuBJ.webp'
import buuDienTrungTam from '@/assets/tqtt/buu-dien-tphcm-CV7LqEPm.jpg'

type TabKey = 'history' | 'landscape'

type CityInfo = {
  name: string
  subtitle: string
  history: string
  landscape: string
}

const navItems = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Đất nước', href: '#country' },
  { label: 'Trường ĐH Mở', href: '#university' },
  { label: 'Tự hào sinh viên', href: '#pride' },
  { label: 'Chatbot', href: '#chatbot' },
]

const cities: CityInfo[] = [
  {
    name: 'Hà Nội',
    subtitle: 'Thủ đô ngàn năm văn hiến',
    history:
      'Năm 1010, vua Lý Thái Tổ dời đô từ Hoa Lư ra Đại La, đặt tên là Thăng Long. Ngày 2/9/1945, tại quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập mở ra kỷ nguyên mới của dân tộc.',
    landscape:
      'Hà Nội có Hồ Gươm, Văn Miếu - Quốc Tử Giám, phố cổ và nhiều công trình kiến trúc cổ kính. Thành phố là điểm giao thoa giữa nhịp sống hiện đại và chiều sâu văn hóa.',
  },
  {
    name: 'Ninh Bình',
    subtitle: 'Di sản thiên nhiên và lịch sử',
    history:
      'Ninh Bình từng là kinh đô Hoa Lư của nhà Đinh và Tiền Lê, gắn với nhiều dấu mốc dựng nước. Đây là vùng đất giàu truyền thống, nơi lưu giữ dấu ấn đầu tiên của nhà nước phong kiến tập quyền Việt Nam.',
    landscape:
      'Tràng An, Tam Cốc, Bích Động và cố đô Hoa Lư tạo nên bức tranh non nước hùng vĩ. Địa hình núi đá vôi xen sông ngòi mang vẻ đẹp đặc trưng hiếm có.',
  },
  {
    name: 'Huế',
    subtitle: 'Cố đô trầm mặc, đậm bản sắc',
    history:
      'Huế là kinh đô của triều Nguyễn hơn 140 năm, lưu giữ hệ thống cung điện, lăng tẩm và thành quách độc đáo. Nơi đây phản ánh sâu sắc chiều dài lịch sử và văn hóa cung đình Việt Nam.',
    landscape:
      'Sông Hương, núi Ngự, Đại Nội và các lăng vua tạo nên vẻ đẹp thanh lịch, trầm lắng. Huế cũng nổi tiếng với nhã nhạc cung đình và không gian lễ hội giàu truyền thống.',
  },
  {
    name: 'TP.HCM',
    subtitle: 'Trung tâm năng động của cả nước',
    history:
      'Sài Gòn - Gia Định là vùng đất có vai trò đặc biệt trong giao thương và lịch sử hiện đại Việt Nam. Dinh Độc Lập gắn liền với cột mốc thống nhất đất nước năm 1975.',
    landscape:
      'Thành phố sôi động với Bưu điện Trung tâm, Nhà thờ Đức Bà, các tuyến phố thương mại và nhịp sống trẻ trung. Đây là đầu tàu kinh tế, sáng tạo và hội nhập quốc tế.',
  },
]

type LandmarkSpot = {
  title: string
  city: string
  summary: string
  image: string
}

const landmarkSpots: LandmarkSpot[] = [
  {
    title: 'Cột cờ Hà Nội',
    city: 'Hà Nội',
    summary: 'Biểu tượng lịch sử gắn với Hoàng thành Thăng Long.',
    image: cotCoHaNoi,
  },
  {
    title: 'Văn Miếu - Quốc Tử Giám',
    city: 'Hà Nội',
    summary: 'Trường đại học đầu tiên của Việt Nam, giàu giá trị hiếu học.',
    image: vanMieu,
  },
  {
    title: 'Hồ Hoàn Kiếm',
    city: 'Hà Nội',
    summary: 'Trái tim thủ đô với vẻ đẹp thanh bình giữa lòng đô thị.',
    image: hoGuom,
  },
  {
    title: 'Tràng An - Ninh Bình',
    city: 'Ninh Bình',
    summary: 'Di sản thế giới với cảnh quan non nước kỳ vĩ.',
    image: trangAn,
  },
  {
    title: 'Đại Nội Huế',
    city: 'Huế',
    summary: 'Quần thể cung đình tiêu biểu của triều Nguyễn.',
    image: daiNoiHue,
  },
  {
    title: 'Dinh Độc Lập',
    city: 'TP.HCM',
    summary: 'Công trình mang dấu ấn lịch sử hiện đại Việt Nam.',
    image: dinhDocLap,
  },
  {
    title: 'Bưu điện Trung tâm',
    city: 'TP.HCM',
    summary: 'Kiến trúc cổ điển giữa trung tâm Sài Gòn năng động.',
    image: buuDienTrungTam,
  },
]

const highlights = [
  { title: '30+ năm', subtitle: 'Kinh nghiệm đào tạo' },
  { title: '35.000+', subtitle: 'Sinh viên đang theo học' },
  { title: '21 ngành', subtitle: 'Đại học + sau đại học' },
  { title: '80+ trung tâm', subtitle: 'Liên kết trên toàn quốc' },
]

const programs = [
  { name: 'Kế toán', level: 'Đại học', students: '1000+' },
  { name: 'Quản trị kinh doanh', level: 'Đại học', students: '1200+' },
  { name: 'Thương mại điện tử', level: 'Đại học', students: '800+' },
]

const prideStories = [
  {
    name: 'Nguyễn Minh Anh',
    major: 'Quản trị kinh doanh - K18',
    quote:
      'Từ một sinh viên vùng sâu, mình có cơ hội học tập linh hoạt, vừa làm vừa học. Chương trình của Khoa Kinh tế giúp mình tự tin lên vị trí quản lý.',
  },
  {
    name: 'Trần Văn Hùng',
    major: 'Kế toán - K17',
    quote:
      'Sau 10 năm đi làm, mình quay lại trường để nâng cao chuyên môn. Kiến thức cập nhật và tính ứng dụng cao giúp mình tiến xa hơn trong sự nghiệp.',
  },
  {
    name: 'Lê Thị Hoa',
    major: 'Thương mại điện tử - K19',
    quote:
      'Là mẹ đơn thân, mình cần hình thức học tập linh hoạt. Chương trình online giúp cân bằng gia đình, công việc và học tập rất hiệu quả.',
  },
]

const chatbotQuickQuestions = [
  'Khoa Kinh tế có những ngành nào?',
  'Học phí của khoa là bao nhiêu?',
  'Điều kiện tuyển sinh như thế nào?',
  'Huế có gì đặc biệt?',
]

function App() {
  const [activeCity, setActiveCity] = useState<CityInfo>(cities[0])
  const [activeTab, setActiveTab] = useState<TabKey>('history')
  const [activeLandmarkIndex, setActiveLandmarkIndex] = useState(1)

  const currentLandmark = landmarkSpots[activeLandmarkIndex]
  const currentYear = new Date().getFullYear()

  const nextLandmark = () => {
    setActiveLandmarkIndex((prev) => (prev + 1) % landmarkSpots.length)
  }

  const prevLandmark = () => {
    setActiveLandmarkIndex((prev) =>
      prev === 0 ? landmarkSpots.length - 1 : prev - 1,
    )
  }

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoHou}
              alt="Logo Trường Đại học Mở Hà Nội"
              className="h-11 w-11 rounded-xl border border-blue-100 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-slate-600">Trường ĐH Mở Hà Nội</p>
              <p className="text-base font-bold text-slate-900">Khoa Kinh tế</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-700 text-white"
        >
          <div className="absolute -top-14 right-6 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />

          <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Dấu ấn Việt Nam - Niềm tự hào trong tim
              </p>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Khám phá vẻ đẹp Việt Nam và hành trình của sinh viên Khoa Kinh tế
              </h1>
              <p className="max-w-xl text-lg text-blue-50/90">
                Trang landing page được dựng lại dựa trên layout DOM gốc, tối ưu giao diện
                theo hướng hiện đại, rõ phân cấp nội dung, tương thích tốt trên mobile.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 font-semibold text-white hover:bg-orange-600"
                >
                  <a href="#country">
                    Khám phá đất nước <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 font-semibold text-white hover:bg-white/20"
                >
                  <a href="#university">Tìm hiểu Trường ĐH Mở Hà Nội</a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src={daiNoiHue}
                alt="Đại Nội Huế"
                className="h-[380px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="country" className="bg-gradient-to-b from-sky-50 to-white py-20">
          <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Quảng bá hình ảnh quê hương đất nước
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600">
                Bám theo cấu trúc DOM của bản gốc: khu vực bản đồ tương tác, chọn thành phố,
                và cụm nội dung theo tab Lịch sử/Cảnh quan.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <img
                  src={vietnamMap}
                  alt="Bản đồ Việt Nam"
                  className="h-[420px] w-full rounded-xl object-cover"
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {cities.map((city) => {
                    const isActive = activeCity.name === city.name

                    return (
                      <button
                        key={city.name}
                        type="button"
                        onClick={() => {
                          setActiveCity(city)
                          setActiveTab('history')
                        }}
                        className={`cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                          isActive
                            ? 'border-blue-600 bg-blue-600 text-white shadow'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50'
                        }`}
                      >
                        {city.name}
                      </button>
                    )
                  })}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {activeCity.name}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{activeCity.subtitle}</h3>

                <div className="mt-5 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('history')}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeTab === 'history'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-600 hover:text-blue-700'
                    }`}
                  >
                    Lịch sử
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('landscape')}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeTab === 'landscape'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-600 hover:text-blue-700'
                    }`}
                  >
                    Cảnh quan
                  </button>
                </div>

                <p className="mt-5 leading-7 text-slate-700">
                  {activeTab === 'history' ? activeCity.history : activeCity.landscape}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Danh lam thắng cảnh Việt Nam</h2>
                <p className="mt-2 text-slate-600">
                  Trình bày theo cụm gallery + thumbnail, thay thế carousel cũ bằng điều hướng trực quan.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevLandmark}
                  className="cursor-pointer"
                >
                  Ảnh trước
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={nextLandmark}
                  className="cursor-pointer"
                >
                  Ảnh sau
                </Button>
              </div>
            </div>

            <article className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src={currentLandmark.image}
                  alt={currentLandmark.title}
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold">{currentLandmark.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{currentLandmark.city}</p>
                  <p className="mt-2 max-w-xl text-sm text-white/85">{currentLandmark.summary}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {landmarkSpots.map((spot, index) => {
                  const active = index === activeLandmarkIndex

                  return (
                    <button
                      key={spot.title}
                      type="button"
                      onClick={() => setActiveLandmarkIndex(index)}
                      className={`cursor-pointer overflow-hidden rounded-xl border text-left transition ${
                        active
                          ? 'border-blue-600 shadow-lg shadow-blue-100'
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <img src={spot.image} alt={spot.title} className="h-24 w-full object-cover" />
                      <div className="p-3">
                        <p className="line-clamp-1 text-sm font-semibold text-slate-900">{spot.title}</p>
                        <p className="mt-1 text-xs text-slate-600">{spot.city}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </article>
          </div>
        </section>

        <section id="university" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold md:text-4xl">
                Trường Đại học Mở Hà Nội - Khoa Kinh tế
              </h2>
              <p className="max-w-3xl text-slate-300">
                “Mở cơ hội - Mở trái tim - Mở trí tuệ - Mở tầm nhìn - Mở tương lai”.
                Nội dung được cấu trúc lại theo card rõ ràng, tăng khả năng đọc và mức độ tin cậy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <p className="text-2xl font-bold text-blue-300">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <BookOpen className="h-5 w-5 text-blue-300" />
                  Chương trình đào tạo
                </h3>

                <div className="mt-4 space-y-3">
                  {programs.map((program) => (
                    <div
                      key={program.name}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-white">{program.name}</p>
                        <p className="text-sm text-slate-400">{program.level}</p>
                      </div>
                      <p className="text-sm font-semibold text-blue-300">{program.students} sinh viên</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Building2 className="h-5 w-5 text-blue-300" />
                  Sứ mệnh & mục tiêu
                </h3>

                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>• Cập nhật chuẩn đầu ra theo định hướng quốc tế.</li>
                  <li>• Đào tạo gắn với nhu cầu nhân lực thời đại số.</li>
                  <li>• Liên kết doanh nghiệp để tăng năng lực thực chiến.</li>
                  <li>• Mở rộng cơ hội học tập linh hoạt cho mọi đối tượng.</li>
                </ul>

                <Button
                  asChild
                  className="mt-6 bg-orange-500 font-semibold text-white hover:bg-orange-600"
                >
                  <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
                    Đăng ký tuyển sinh ngay <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </article>
            </div>
          </div>
        </section>

        <section id="pride" className="bg-gradient-to-b from-white to-sky-50 py-20">
          <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Tự hào sinh viên Kinh tế</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Câu chuyện thật từ cộng đồng sinh viên và cựu sinh viên – phần nội dung quan trọng
                trong layout gốc được giữ lại để tăng sức thuyết phục.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {prideStories.map((story) => (
                <article
                  key={story.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg font-semibold text-slate-900">{story.name}</p>
                  <p className="mt-1 text-sm text-blue-700">{story.major}</p>
                  <p className="mt-4 text-slate-700">“{story.quote}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="chatbot" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
              <aside className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <GraduationCap className="h-5 w-5 text-blue-700" />
                  Trợ lý ảo Khoa Kinh tế
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mô phỏng khu vực chatbot trong trang gốc: hỗ trợ tư vấn tuyển sinh, ngành học,
                  lịch sử văn hóa Việt Nam và cơ hội nghề nghiệp.
                </p>

                <div className="mt-5 space-y-2">
                  {chatbotQuickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </aside>

              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="space-y-4">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-blue-50 p-3 text-sm text-slate-700">
                    Xin chào! Tôi là trợ lý ảo của Khoa Kinh tế - Trường Đại học Mở Hà Nội. Tôi có
                    thể giúp bạn tìm hiểu ngành học, học phí và cơ hội nghề nghiệp.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-100 p-3 text-sm text-slate-700">
                    Khoa Kinh tế có những ngành nào?
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-blue-50 p-3 text-sm text-slate-700">
                    Hiện có các ngành chính: Kế toán, Quản trị kinh doanh và Thương mại điện tử,
                    đào tạo theo hướng ứng dụng cao.
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <input
                    type="text"
                    value="Nhập câu hỏi của bạn..."
                    readOnly
                    className="h-11 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-500"
                  />
                  <Button disabled className="h-11 px-6">
                    Gửi
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-6">
            <div>
              <h2 className="text-3xl font-bold">Cùng viết tiếp câu chuyện tự hào</h2>
              <p className="mt-3 max-w-2xl text-blue-100">
                Tham gia cộng đồng sinh viên Khoa Kinh tế để học tập linh hoạt, gắn kết thực tiễn
                và lan tỏa tình yêu quê hương.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-orange-500 font-semibold text-white hover:bg-orange-600"
              >
                <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
                  Đăng ký ngay tại tuyensinh.hou.edu.vn <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <article className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <LandmarkIcon className="h-5 w-5" />
                Thông tin liên hệ
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-blue-100">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  Tầng 7-8, số 35/61 Lạc Trung, Vĩnh Tuy, Hà Nội
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  (024) 3868 4430
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  kinhte@hou.edu.vn
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:px-6">
          <p>© {currentYear} Trường Đại học Mở Hà Nội - Khoa Kinh tế</p>
          <p className="text-slate-500">Version clone UI/UX Pro Max - rebuilt from source DOM</p>
        </div>
      </footer>
    </div>
  )
}

export default App
