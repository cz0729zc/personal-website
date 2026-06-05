import { HeroMotion } from "./HeroMotion";

const projects = [
  {
    name: "SmartTrain-Node",
    role: "Embedded Linux / IoT Node",
    summary:
      "面向列车节点侧的数据采集与通信实践，突出设备接入、协议组织、状态监测和工程化调试能力。",
    tags: ["Linux", "C/C++", "IoT", "Protocol"],
    accent: "cyan",
  },
  {
    name: "smart-orchard-irrigation-system",
    role: "Smart Orchard Irrigation",
    summary:
      "智慧果园灌溉系统，围绕传感器采集、控制策略、边缘节点和农业场景可视化组织作品叙事。",
    tags: ["STM32", "ESP32", "Sensors", "Control"],
    accent: "lime",
  },
];

const skills = [
  "STM32 / ESP32",
  "Embedded Linux",
  "C / C++",
  "LVGL",
  "Linux Driver",
  "Networking",
  "Hardware Debug",
  "System Design",
];

const writing = [
  "LVGL 图形界面移植与组件实践",
  "ESP32 物联网节点开发记录",
  "STM32 外设、传感器和控制链路",
  "Linux 驱动与嵌入式系统学习笔记",
];

const timeline = [
  ["Now", "作品集主页 MVP", "聚焦项目展示、技术可信度和后续扩展结构。"],
  ["Next", "项目详情页", "为 SmartTrain 和智慧果园补充架构图、截图、视频和指标。"],
  ["Later", "博客与后台", "接入 CSDN 精选文章，逐步沉淀技术写作和内容管理。"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-slate-100">
      <HeroMotion />
      <section className="relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(0,232,255,0.18),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(118,255,164,0.14),transparent_30%),linear-gradient(135deg,#05070d_0%,#0b1020_45%,#07121b_100%)]" />
        <div className="absolute inset-0 -z-10 circuit-grid opacity-70" />

        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 pb-5 text-sm text-slate-300">
          <a className="font-semibold tracking-[0.28em] text-cyan-200" href="#">
            ZHANG CHI
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#projects">Projects</a>
            <a href="#skills">Stack</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <div data-hero="copy" className="mb-6 inline-flex items-center gap-3 border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
              <span className="h-2 w-2 animate-pulse bg-lime-300" />
              Embedded Systems & IoT Developer
            </div>
            <h1 data-hero="copy" className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              张驰
              <span className="block text-cyan-200">Zhang Chi</span>
            </h1>
            <p data-hero="copy" className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              我把嵌入式底层、IoT 节点、硬件调试和工程文档串成可展示的作品集。
              第一版先让 HR 和面试官快速看见项目价值，后续再扩展博客、后台和完整案例页。
            </p>
            <div data-hero="copy" className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="group inline-flex h-12 items-center justify-center gap-2 border border-cyan-200 bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white"
                href="#projects"
              >
                查看项目
                <span aria-hidden="true" className="transition group-hover:translate-x-1">
                  -&gt;
                </span>
              </a>
              <a
                className="inline-flex h-12 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-slate-100 transition hover:border-lime-200 hover:text-lime-100"
                href="#contact"
              >
                联系方式
              </a>
            </div>
          </div>

          <aside className="relative">
            <div data-hero="panel" className="scan-panel border border-cyan-200/20 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-200">
                <span>Portfolio Node</span>
                <span>Online</span>
              </div>
              <div className="grid gap-3">
                {projects.map((project) => (
                  <article
                    className="border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-200/50"
                    key={project.name}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs text-slate-400">{project.role}</p>
                        <h2 className="mt-1 text-xl font-semibold text-white">{project.name}</h2>
                      </div>
                      <span
                        className={`mt-1 h-3 w-3 ${
                          project.accent === "cyan" ? "bg-cyan-300" : "bg-lime-300"
                        }`}
                      />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          className="border border-white/10 px-2 py-1 text-xs text-slate-300"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-slate-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">项目先讲清楚场景，再讲技术深度。</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article className="border border-white/10 bg-white/[0.03] p-6" key={project.name}>
                <p className="text-sm text-cyan-200">{project.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Core Stack</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">嵌入式到前端展示的技术坐标。</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-300">
              首页先承载招聘阅读场景：关键词可扫读，项目可追问，后续资料齐了再补实物图、架构图和演示视频。
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div className="border border-white/10 bg-white/[0.035] px-4 py-4 text-slate-100" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="bg-[#071018] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">Writing</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">文章区先做精选入口。</h2>
            <div className="mt-8 grid gap-3">
              {writing.map((item) => (
                <div className="border border-white/10 bg-white/[0.035] p-4 text-slate-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-4">
            {timeline.map(([phase, title, copy]) => (
              <div className="border border-cyan-200/15 bg-slate-950/55 p-5" key={phase}>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">{phase}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold text-white">准备接入真实资料。</p>
            <p className="mt-2 text-slate-400">邮箱、GitHub、CSDN、简历 PDF 和项目素材都可以继续补进来。</p>
          </div>
          <a
            className="inline-flex h-12 items-center justify-center border border-lime-200 px-5 text-sm font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-slate-950"
            href="mailto:your.email@example.com"
          >
            your.email@example.com
          </a>
        </div>
      </footer>
    </main>
  );
}
