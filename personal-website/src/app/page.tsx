import { HeroMotion } from "./HeroMotion";

const links = {
  email: "mailto:longzc725@gmail.com",
  github: "https://github.com/cz0729zc",
  csdn: "https://blog.csdn.net/m0_74274761",
  resume: "/zhang-chi-resume.pdf",
};

const projects = [
  {
    name: "SmartTrain-Node",
    role: "Embedded Linux / IoT Node",
    summary:
      "面向列车节点侧的嵌入式与物联网实践，重点展示设备接入、协议组织、节点状态监测和工程调试能力。",
    tags: ["Embedded Linux", "C/C++", "IoT", "Protocol"],
    url: "https://github.com/cz0729zc/SmartTrain-Node",
    accent: "cyan",
  },
  {
    name: "smart-orchard-irrigation-system",
    role: "STM32 Smart Orchard",
    summary:
      "基于 STM32 与 ESP8266 的果园智能灌溉监控系统，实现环境参数采集、设备控制、网络通信和云平台对接。",
    tags: ["STM32", "ESP8266", "Keil MDK", "Sensors"],
    url: "https://github.com/cz0729zc/smart-orchard-irrigation-system",
    accent: "lime",
  },
  {
    name: "ESP32 智能植物传感器 MVP2.0",
    role: "ESP32 / FreeRTOS / LVGL",
    summary:
      "面向海外市场的消费级智能硬件项目，负责 ESP32 固件、LVGL 游戏化交互、传感器融合、FreeRTOS 任务拆分和低功耗策略。",
    tags: ["ESP32", "FreeRTOS", "LVGL", "Low Power"],
    url: "https://github.com/cz0729zc",
    accent: "cyan",
  },
];

const skills = [
  "C / C++",
  "STM32 / ESP32",
  "FreeRTOS",
  "LVGL",
  "Linux / Shell",
  "UART / IIC / SPI / PWM",
  "Socket / Network",
  "PCB & Hardware Debug",
];

const writings = [
  {
    title: "CSDN 技术文章精选 01",
    topic: "嵌入式开发记录",
    url: "https://blog.csdn.net/m0_74274761/article/details/149645254",
  },
  {
    title: "CSDN 技术文章精选 02",
    topic: "STM32 / ESP32 / LVGL 实践",
    url: "https://blog.csdn.net/m0_74274761/article/details/150610631",
  },
  {
    title: "CSDN 技术文章精选 03",
    topic: "系统调试与工程复盘",
    url: "https://blog.csdn.net/m0_74274761/article/details/151718408",
  },
];

const experience = [
  {
    company: "深圳实步科技有限公司",
    role: "嵌入式软件工程师",
    time: "2025.06 - 至今",
    points: [
      "主导 ESP32 + FreeRTOS 智能硬件固件开发，完成 I2C、ADC、SPI、I2S 等外设驱动集成。",
      "设计 FSM 事件驱动架构，解耦 UI、传感器和逻辑控制任务，优化 LVGL 多任务访问的线程安全。",
      "实现 Light-Sleep 低功耗策略，使待机功耗降低约 85%，并支持 MVP2.0、云服务和 OTA 联调。",
    ],
  },
  {
    company: "宜昌科威智能电子科技有限公司",
    role: "嵌入式软件工程师",
    time: "2025.03 - 2025.06",
    points: [
      "参与物联网终端产品开发，覆盖硬件原理图、PCB 绘制、模块焊接调试和嵌入式应用开发。",
      "独立完成多块电路板原理图与 PCB 布局，使用万用表、示波器定位并修复信号与电源异常。",
      "编写多类外设驱动并完成传感器模块通信集成，提升从硬件设计到软件调试的完整工程能力。",
    ],
  },
];

const highlights = [
  ["教育背景", "三峡大学 · 计算机科学与技术 · 本科 · 2022.09 - 2026.06"],
  ["成绩亮点", "GPA 3.0/4.0，获校级二等奖学金，程序设计基础 100，计算机组成与结构 97。"],
  ["技能证书", "嵌入式系统设计师、C1 驾驶证、CET-4，中国机器人大赛暨国际公开赛国赛一等奖。"],
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
            <a href="#experience">Experience</a>
            <a href="#skills">Stack</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div
              data-hero="copy"
              className="mb-6 inline-flex items-center gap-3 border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100"
            >
              <span className="h-2 w-2 animate-pulse bg-lime-300" />
              Embedded Software Developer
            </div>
            <h1 data-hero="copy" className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              张驰
              <span className="block text-cyan-200">Zhang Chi</span>
            </h1>
            <p data-hero="copy" className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              求职方向：嵌入式软件开发。熟悉 STM32、ESP32、FreeRTOS、LVGL、Linux 环境开发与硬件调试，
              具备从传感器采集、外设驱动、低功耗策略到 IoT 系统联调的完整实践经验。
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
                href={links.email}
              >
                longzc725@gmail.com
              </a>
              <a
                className="inline-flex h-12 items-center justify-center border border-lime-200/70 px-5 text-sm font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-slate-950"
                href={links.resume}
                download
              >
                下载简历
              </a>
            </div>
          </div>

          <aside className="relative">
            <div
              data-hero="panel"
              className="scan-panel border border-cyan-200/20 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur"
            >
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-200">
                <span>Candidate Signal</span>
                <span>Available</span>
              </div>
              <div className="grid gap-3">
                {highlights.map(([label, copy]) => (
                  <div className="border border-white/10 bg-white/[0.04] p-4" key={label}>
                    <p className="text-xs uppercase tracking-[0.18em] text-lime-200">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                <a className="border border-white/10 px-3 py-2 text-cyan-100 hover:border-cyan-200" href={links.github}>
                  GitHub: cz0729zc
                </a>
                <a className="border border-white/10 px-3 py-2 text-cyan-100 hover:border-cyan-200" href={links.csdn}>
                  CSDN 技术博客
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-slate-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">项目围绕硬件、驱动、系统和场景落地展开。</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="flex min-h-[320px] flex-col border border-white/10 bg-white/[0.03] p-6" key={project.name}>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm text-cyan-200">{project.role}</p>
                  <span className={`mt-1 h-3 w-3 ${project.accent === "cyan" ? "bg-cyan-300" : "bg-lime-300"}`} />
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="border border-white/10 px-2 py-1 text-xs text-slate-300" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="mt-auto pt-6 text-sm font-semibold text-lime-200 hover:text-white" href={project.url}>
                  View repository -&gt;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">实习经历强调真实工程交付。</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <article className="border border-white/10 bg-white/[0.035] p-6" key={item.company}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-1 text-cyan-200">{item.role}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.time}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li className="border-l border-lime-200/40 pl-3" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#071018] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">Core Stack</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">能从底层接口一路调到产品体验。</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-300">
              熟悉常见 ARM 架构与 RISC-V 芯片应用开发，能阅读 datasheet，完成模块驱动开发、外设通信、低功耗优化和软硬件联调。
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

      <section id="writing" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Writing</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">CSDN 技术文章作为持续学习轨迹。</h2>
          </div>
          <div className="grid gap-3">
            {writings.map((item) => (
              <a className="border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-200/50" href={item.url} key={item.url}>
                <p className="text-sm text-lime-200">{item.topic}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.url}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold text-white">嵌入式软件开发岗位沟通入口。</p>
            <p className="mt-2 text-slate-400">
              可通过邮箱联系，也可以直接下载 PDF 简历查看教育经历、实习经历和项目细节。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center border border-lime-200 px-5 text-sm font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-slate-950"
              href={links.email}
            >
              Email
            </a>
            <a
              className="inline-flex h-12 items-center justify-center border border-cyan-200 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
              href={links.github}
            >
              GitHub
            </a>
            <a
              className="inline-flex h-12 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-slate-100 transition hover:border-lime-200 hover:text-lime-100"
              href={links.resume}
              download
            >
              下载简历
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
