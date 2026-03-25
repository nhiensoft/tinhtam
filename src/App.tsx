import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import logoHou from '@/assets/tqtt/7efa42f0-fa5b-40d4-b030-a55e6ea64936.png'
import vietnamMap from '@/assets/tqtt/vietnam-map-qyhfZCzZ.jpg'
import cotCoHaNoi from '@/assets/tqtt/cot-co-ha-noi-CA8Upe4l.webp'
import vanMieu from '@/assets/tqtt/van-mieu-DeyVa1cG.png'
import hoGuom from '@/assets/tqtt/ho-guom-CLaAZAor.jpg'
import trangAn from '@/assets/tqtt/ninh-binh-vkJKwKRd.jpg'
import daiNoiHue from '@/assets/tqtt/dai-noi-hue-B_wtWm5v.jpg'
import dinhDocLap from '@/assets/tqtt/dinh-doc-lap-BIKLZuBJ.webp'
import buuDienTrungTam from '@/assets/tqtt/buu-dien-tphcm-CV7LqEPm.jpg'

type City = {
  name: string
  subtitle: string
  history: string
  landscape: string
}

type LandmarkItem = {
  title: string
  city: string
  summary: string
  image: string
}

const navItems = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Đất nước', href: '#country' },
  { label: 'Đại học', href: '#university' },
  { label: 'Tự hào', href: '#pride' },
  { label: 'Tư vấn AI', href: '#chatbot' },
]

const cities: City[] = [
  {
    name: 'Hà Nội',
    subtitle: 'Thủ đô ngàn năm văn hiến',
    history:
      'Năm 1010, vua Lý Thái Tổ dời đô từ Hoa Lư ra Đại La, đặt tên là Thăng Long. Ngày 2/9/1945 tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.',
    landscape:
      'Hà Nội là giao điểm giữa nét cổ kính và hiện đại, nổi bật với Hồ Gươm, Văn Miếu - Quốc Tử Giám, phố cổ cùng hệ thống bảo tàng, di tích lịch sử dày đặc.',
  },
  {
    name: 'Ninh Bình',
    subtitle: 'Di sản thiên nhiên và lịch sử',
    history:
      'Ninh Bình từng là kinh đô Hoa Lư của nhà Đinh và Tiền Lê, đánh dấu một giai đoạn quan trọng trong tiến trình dựng nước và củng cố quốc gia phong kiến tập quyền.',
    landscape:
      'Quần thể danh thắng Tràng An, Tam Cốc, Bích Động và cố đô Hoa Lư tạo nên vẻ đẹp non nước hùng vĩ, được UNESCO công nhận là di sản thế giới.',
  },
  {
    name: 'Huế',
    subtitle: 'Cố đô trầm mặc, đậm bản sắc',
    history:
      'Huế là kinh đô của triều Nguyễn hơn 140 năm, lưu giữ hệ thống thành quách, cung điện, lăng tẩm có giá trị đặc biệt về kiến trúc và lịch sử.',
    landscape:
      'Sông Hương, núi Ngự, Đại Nội cùng không gian văn hóa cung đình tạo nên chất thơ riêng của Huế — nơi gìn giữ vẻ đẹp thanh nhã và sâu lắng.',
  },
  {
    name: 'TP.HCM',
    subtitle: 'Trung tâm năng động của cả nước',
    history:
      'Sài Gòn - Gia Định giữ vai trò then chốt trong tiến trình giao thương hiện đại. Dinh Độc Lập là biểu tượng lịch sử gắn với cột mốc thống nhất đất nước năm 1975.',
    landscape:
      'TP.HCM sôi động với sự kết hợp của kiến trúc cổ điển và nhịp sống hiện đại, tiêu biểu như Bưu điện Trung tâm, các trục thương mại và hệ sinh thái khởi nghiệp.',
  },
]

const landmarks: LandmarkItem[] = [
  {
    title: 'Cột cờ Hà Nội',
    city: 'Hà Nội',
    summary: 'Biểu tượng lịch sử gắn với Hoàng thành Thăng Long.',
    image: cotCoHaNoi,
  },
  {
    title: 'Văn Miếu - Quốc Tử Giám',
    city: 'Hà Nội',
    summary: 'Trường đại học đầu tiên của Việt Nam, tinh thần hiếu học trường tồn.',
    image: vanMieu,
  },
  {
    title: 'Hồ Hoàn Kiếm',
    city: 'Hà Nội',
    summary: 'Không gian xanh biểu tượng giữa trái tim thủ đô.',
    image: hoGuom,
  },
  {
    title: 'Tràng An - Ninh Bình',
    city: 'Ninh Bình',
    summary: 'Di sản thiên nhiên - văn hóa thế giới, cảnh quan kỳ vĩ.',
    image: trangAn,
  },
  {
    title: 'Đại Nội Huế',
    city: 'Huế',
    summary: 'Di sản cung đình tiêu biểu của triều Nguyễn.',
    image: daiNoiHue,
  },
  {
    title: 'Dinh Độc Lập',
    city: 'TP.HCM',
    summary: 'Công trình lịch sử của thời khắc thống nhất dân tộc.',
    image: dinhDocLap,
  },
  {
    title: 'Bưu điện Trung tâm',
    city: 'TP.HCM',
    summary: 'Biểu tượng kiến trúc cổ điển giữa trung tâm năng động.',
    image: buuDienTrungTam,
  },
]

const highlights = [
  { value: '30+', label: 'Năm đào tạo và phát triển' },
  { value: '35.000+', label: 'Sinh viên đang theo học' },
  { value: '21', label: 'Ngành đào tạo đại học' },
  { value: '80+', label: 'Trung tâm liên kết toàn quốc' },
]

const programs = [
  { name: 'Kế toán', students: '1.000+', level: 'Đại học' },
  { name: 'Quản trị kinh doanh', students: '1.200+', level: 'Đại học' },
  { name: 'Thương mại điện tử', students: '800+', level: 'Đại học' },
]

const stories = [
  {
    name: 'Nguyễn Minh Anh',
    major: 'Quản trị kinh doanh - K18',
    quote:
      'Môi trường học tập linh hoạt giúp mình vừa làm vừa học, mở ra cơ hội tăng tốc sự nghiệp mà vẫn bám sát thực tiễn.',
  },
  {
    name: 'Trần Văn Hùng',
    major: 'Kế toán - K17',
    quote:
      'Sau nhiều năm đi làm, quay lại học tại Khoa Kinh tế giúp mình cập nhật tư duy quản trị hiện đại và tự tin thăng tiến.',
  },
  {
    name: 'Lê Thị Hoa',
    major: 'Thương mại điện tử - K19',
    quote:
      'Lịch học linh hoạt và chương trình giàu tính ứng dụng đã giúp mình cân bằng gia đình, công việc và mục tiêu học tập.',
  },
]

const faqs = [
  'Khoa Kinh tế có những ngành nào?',
  'Điều kiện tuyển sinh năm nay là gì?',
  'Học phí và lộ trình học ra sao?',
  'Cơ hội nghề nghiệp sau tốt nghiệp?',
]

function App() {
  const [activeCity, setActiveCity] = useState(cities[0])
  const [landmarkIndex, setLandmarkIndex] = useState(1)

  const currentLandmark = useMemo(
    () => landmarks[landmarkIndex],
    [landmarkIndex],
  )

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="group flex items-center gap-3">
            <img
              src={logoHou}
              alt="Logo Trường Đại học Mở Hà Nội"
              className="h-11 w-11 rounded-xl border border-blue-200 object-cover shadow-sm transition group-hover:shadow-md"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                Trường ĐH Mở Hà Nội
              </p>
              <p className="text-sm font-semibold text-slate-900">Khoa Kinh tế</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 sm:inline-flex"
          >
            <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
              Đăng ký ngay
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-700 py-20 text-white md:py-28"
        >
          <div className="bg-mesh absolute inset-0 opacity-70" aria-hidden />
          <div className="absolute -left-16 top-8 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-400/25 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <Badge className="rounded-full border-white/20 bg-white/15 px-3 py-1 text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Premium UI • React + shadcn/ui
              </Badge>

              <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
                Dấu ấn Việt Nam — Niềm tự hào trong tim
              </h1>

              <p className="lead-copy text-balance text-lg leading-8 text-blue-50/95 md:text-xl">
                Bản dựng mới theo chuẩn UI/UX Pro Max: thị giác mạnh, bố cục mạch lạc,
                tương tác mượt và giữ trọn tinh thần học thuật - tự hào dân tộc.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground shadow-lg shadow-orange-950/20 hover:bg-orange-500"
                >
                  <a href="#country">
                    Khám phá Việt Nam <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="#university">Tìm hiểu Khoa Kinh tế</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="glass-card rounded-3xl border border-white/30 p-3 shadow-2xl"
            >
              <img
                src={daiNoiHue}
                alt="Đại Nội Huế"
                className="h-[430px] w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section id="country" className="bg-gradient-to-b from-sky-50 to-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-blue-700">
                Chapter 01
              </Badge>
              <h2 className="text-balance text-4xl font-bold md:text-5xl">
                Quảng bá hình ảnh quê hương đất nước
              </h2>
              <p className="mx-auto max-w-3xl text-balance text-slate-600 md:text-lg">
                Dữ liệu được tổ chức lại theo mô hình “map + context tabs” giúp người xem nắm
                nhanh lịch sử, địa lý và bản sắc của từng điểm đến tiêu biểu.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-[1.04fr_1fr]">
              <Card className="overflow-hidden border-blue-100 shadow-md shadow-blue-100/40">
                <CardContent className="space-y-5 px-5 py-5">
                  <img
                    src={vietnamMap}
                    alt="Bản đồ Việt Nam"
                    className="h-[440px] w-full rounded-2xl object-cover"
                  />

                  <div className="grid gap-2 sm:grid-cols-2">
                    {cities.map((city) => {
                      const active = city.name === activeCity.name

                      return (
                        <Button
                          key={city.name}
                          type="button"
                          variant={active ? 'default' : 'outline'}
                          className={`h-11 justify-start rounded-xl text-sm font-semibold ${
                            active
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'text-slate-700 hover:bg-blue-50'
                          }`}
                          onClick={() => setActiveCity(city)}
                        >
                          {city.name}
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-md shadow-blue-100/40">
                <CardHeader>
                  <CardTitle className="text-3xl">{activeCity.name}</CardTitle>
                  <CardDescription className="text-base text-blue-700">
                    {activeCity.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="history" className="w-full">
                    <TabsList className="mb-4 bg-slate-100">
                      <TabsTrigger value="history">Lịch sử</TabsTrigger>
                      <TabsTrigger value="landscape">Cảnh quan</TabsTrigger>
                    </TabsList>

                    <TabsContent value="history" className="rounded-xl bg-slate-50 p-4">
                      <p className="leading-7 text-slate-700">{activeCity.history}</p>
                    </TabsContent>

                    <TabsContent value="landscape" className="rounded-xl bg-slate-50 p-4">
                      <p className="leading-7 text-slate-700">{activeCity.landscape}</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-blue-700">
                  Chapter 02
                </Badge>
                <h2 className="text-balance text-3xl font-bold md:text-5xl">
                  Danh lam thắng cảnh Việt Nam
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    setLandmarkIndex((prev) =>
                      prev === 0 ? landmarks.length - 1 : prev - 1,
                    )
                  }
                >
                  Ảnh trước
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setLandmarkIndex((prev) => (prev + 1) % landmarks.length)}
                >
                  Ảnh sau
                </Button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="overflow-hidden border-slate-200 shadow-md">
                <CardContent className="relative p-0">
                  <img
                    src={currentLandmark.image}
                    alt={currentLandmark.title}
                    className="h-[460px] w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent px-6 pb-6 pt-16 text-white">
                    <h3 className="text-3xl font-semibold">{currentLandmark.title}</h3>
                    <p className="text-sm uppercase tracking-[0.18em] text-blue-100">
                      {currentLandmark.city}
                    </p>
                    <p className="max-w-2xl text-sm text-blue-50/90">
                      {currentLandmark.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-3 sm:grid-cols-2">
                {landmarks.map((spot, idx) => {
                  const active = idx === landmarkIndex

                  return (
                    <Card
                      key={spot.title}
                      onClick={() => setLandmarkIndex(idx)}
                      className={`cursor-pointer overflow-hidden border transition-all ${
                        active
                          ? 'border-blue-500 shadow-lg shadow-blue-100'
                          : 'border-slate-200 hover:border-blue-200 hover:shadow-sm'
                      }`}
                    >
                      <CardContent className="p-0">
                        <img src={spot.image} alt={spot.title} className="h-24 w-full object-cover" />
                        <div className="space-y-1 px-3 py-2.5">
                          <p className="line-clamp-1 text-sm font-semibold text-slate-900">
                            {spot.title}
                          </p>
                          <p className="text-xs text-slate-600">{spot.city}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="university" className="bg-slate-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
            <div className="space-y-3">
              <Badge className="rounded-full bg-white/10 px-3 py-1 text-blue-100">
                Chapter 03
              </Badge>
              <h2 className="text-balance text-4xl font-bold md:text-5xl">
                Trường Đại học Mở Hà Nội — Khoa Kinh tế
              </h2>
              <p className="lead-copy max-w-3xl text-lg text-slate-300">
                “Mở cơ hội — Mở trái tim — Mở trí tuệ — Mở tầm nhìn — Mở tương lai”.
                Bố cục được tinh chỉnh theo phong cách premium, tăng chiều sâu thị giác và
                độ tin cậy học thuật.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <Card
                  key={item.value}
                  className="border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/70 text-white"
                >
                  <CardHeader className="gap-1">
                    <CardTitle className="text-4xl text-blue-300">{item.value}</CardTitle>
                    <CardDescription className="text-slate-300">{item.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-slate-800 bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BookOpen className="h-5 w-5 text-blue-300" />
                    Chương trình đào tạo
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Mô hình học tập linh hoạt, định hướng thực tiễn.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {programs.map((program) => (
                    <div
                      key={program.name}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/90 px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold">{program.name}</p>
                        <p className="text-xs text-slate-400">{program.level}</p>
                      </div>
                      <Badge className="bg-blue-600 text-white">{program.students}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Building2 className="h-5 w-5 text-blue-300" />
                    Sứ mệnh & định hướng
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Chất lượng đào tạo gắn với nhu cầu nhân lực thời đại số.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-7 text-slate-200">
                  <p>• Cập nhật chuẩn đầu ra theo định hướng quốc tế.</p>
                  <p>• Học liệu gắn với bối cảnh doanh nghiệp thực tế.</p>
                  <p>• Tăng cường kỹ năng số và năng lực liên ngành.</p>
                  <p>• Kết nối mạng lưới cựu sinh viên và nhà tuyển dụng.</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-orange-500"
                  >
                    <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
                      Đăng ký tuyển sinh ngay <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="pride" className="bg-gradient-to-b from-white to-sky-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-blue-700">
                Chapter 04
              </Badge>
              <h2 className="text-balance text-4xl font-bold md:text-5xl">
                Tự hào sinh viên Kinh tế
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Những câu chuyện truyền cảm hứng được trình bày theo format editorial card,
                cân bằng giữa cảm xúc và độ chuyên nghiệp.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {stories.map((story, idx) => (
                <Card
                  key={story.name}
                  className="border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:shadow-blue-100/70"
                >
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Avatar className="h-11 w-11 border border-blue-100 bg-blue-50">
                        <AvatarFallback className="bg-blue-100 text-blue-800">
                          {story.name
                            .split(' ')
                            .map((part) => part[0])
                            .slice(-2)
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="text-slate-600">
                        Câu chuyện {idx + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{story.name}</CardTitle>
                    <CardDescription className="text-blue-700">{story.major}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="lead-copy text-lg leading-8 text-slate-700">“{story.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="chatbot" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Card className="overflow-hidden border-blue-100 shadow-lg shadow-blue-100/50">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-white p-6 lg:p-8">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-2 text-3xl">
                      <Compass className="h-5 w-5 text-blue-700" />
                      Trợ lý ảo Khoa Kinh tế
                    </CardTitle>
                    <CardDescription className="text-base">
                      Hỏi đáp 24/7 về tuyển sinh, ngành học, học phí và định hướng nghề nghiệp.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-2 px-0">
                    {faqs.map((q) => (
                      <Button
                        key={q}
                        variant="outline"
                        className="h-auto w-full justify-start rounded-xl border-blue-100 bg-white py-3 text-left text-slate-700 hover:bg-blue-50"
                      >
                        {q}
                      </Button>
                    ))}
                  </CardContent>
                </div>

                <div className="p-6 lg:p-8">
                  <Card className="border-slate-200 bg-slate-50 shadow-none">
                    <CardContent className="space-y-4 p-5">
                      <div className="w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-blue-600 px-4 py-2.5 text-sm text-white">
                        Xin chào! Mình có thể tư vấn chương trình học và cơ hội nghề nghiệp phù hợp cho bạn.
                      </div>
                      <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-tr-sm bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm">
                        Mình muốn tìm hiểu ngành Quản trị kinh doanh.
                      </div>
                      <div className="w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-blue-50 px-4 py-2.5 text-sm text-slate-700">
                        Tuyệt vời! Ngành có 1.200+ sinh viên, chú trọng thực hành quản trị và tư duy chiến lược.
                      </div>
                    </CardContent>
                  </Card>

                  <Separator className="my-5" />

                  <div className="flex gap-2">
                    <Input
                      readOnly
                      value="Nhập câu hỏi của bạn..."
                      className="h-11 rounded-xl bg-slate-50"
                    />
                    <Button className="h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                      Gửi
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
            <div className="space-y-4">
              <Badge className="rounded-full bg-white/15 px-3 py-1 text-white">
                Final Chapter
              </Badge>
              <h2 className="text-balance text-4xl font-bold md:text-5xl">
                Cùng viết tiếp câu chuyện tự hào
              </h2>
              <p className="lead-copy max-w-2xl text-xl leading-8 text-blue-50/95">
                Trở thành một phần của cộng đồng sinh viên Khoa Kinh tế — nơi kết nối tri thức,
                ý chí và khát vọng đóng góp cho Việt Nam trong thời đại mới.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground shadow-lg shadow-orange-950/30 hover:bg-orange-500"
                >
                  <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
                    Đăng ký ngay <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="#home">Quay lại đầu trang</a>
                </Button>
              </div>
            </div>

            <Card className="border-white/25 bg-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl">Thông tin liên hệ</CardTitle>
                <CardDescription className="text-blue-100">
                  Khoa Kinh tế - Trường Đại học Mở Hà Nội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="flex items-start gap-2 leading-6 text-blue-100">
                  <MapPin className="mt-1 h-4 w-4 shrink-0" />
                  Tầng 7-8, số 35/61 Lạc Trung, Vĩnh Tuy, Hà Nội
                </p>
                <p className="flex items-center gap-2 text-blue-100">
                  <Phone className="h-4 w-4 shrink-0" /> (024) 3868 4430
                </p>
                <p className="flex items-center gap-2 text-blue-100">
                  <Mail className="h-4 w-4 shrink-0" /> kinhte@hou.edu.vn
                </p>

                <Separator className="bg-white/25" />

                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-blue-100">
                    <CheckCircle2 className="h-4 w-4" /> Không thi đầu vào
                  </div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <CheckCircle2 className="h-4 w-4" /> Học linh hoạt vừa làm vừa học
                  </div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <CheckCircle2 className="h-4 w-4" /> Bằng cấp có giá trị tương đương
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-white text-blue-700 hover:bg-blue-50"
                >
                  <a href="https://tuyensinh.hou.edu.vn/" target="_blank" rel="noreferrer">
                    Tới cổng tuyển sinh
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <img
              src={logoHou}
              alt="Logo Trường Đại học Mở Hà Nội"
              className="h-10 w-10 rounded-lg border border-blue-100 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Khoa Kinh tế - Trường ĐH Mở Hà Nội</p>
              <p className="text-xs text-slate-500">© {currentYear} All rights reserved.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Star className="h-4 w-4 text-amber-500" />
            Premium redesign • React + shadcn/ui + UI/UX Pro Max
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
