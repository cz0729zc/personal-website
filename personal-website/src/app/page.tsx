import { HeroMotion } from "./HeroMotion";
import { CopyEmailButton } from "./CopyEmailButton";

const links = {
  email: "mailto:longzc725@gmail.com",
  emailText: "longzc725@gmail.com",
  github: "https://github.com/cz0729zc",
  csdn: "https://blog.csdn.net/m0_74274761",
  resume: "/zhang-chi-resume.pdf",
};

const projects = [
  {
    name: "SmartTrain-Node",
    role: "ESP32-S3 培训考勤终端固件",
    summary:
      "一个运行在 ESP32-S3 上的企业线下培训考勤终端，打通刷卡建档、生物特征确认、本地留档、云端上报和断网补传的完整业务闭环。",
    tags: ["ESP32-S3", "ESP-IDF", "LVGL 9", "MQTT/OneNET"],
    highlights: [
      "接入 RC522、FM225 人脸模块、AS608 指纹模块、DHT11、ILI9488 LCD 与 XPT2046 Touch。",
      "用 app_attendance 状态机承载考勤流程，UI 事件层只做桥接，避免业务逻辑和 LVGL 回调缠在一起。",
      "考勤成功先写 SPIFFS CSV 和 pending 队列，MQTT 恢复后按序补传，降低断网丢记录风险。",
    ],
    url: "https://github.com/cz0729zc/SmartTrain-Node",
    accent: "cyan",
  },
  {
    name: "smart-orchard-irrigation-system",
    role: "STM32 + ESP8266 智能果园灌溉",
    summary:
      "一套面向农业场景的环境监测与灌溉控制系统，围绕土壤湿度、光照、温湿度采集，实现自动/手动控制、本地显示、云端监控和报警联动。",
    tags: ["STM32F103", "ESP8266", "Gizwits", "LCD1602"],
    highlights: [
      "STM32F103 负责传感器采集、阈值判断和继电器、LED、蜂鸣器、风扇等执行器控制。",
      "ESP8266 接入机智云 Gizwits，支持手机 App 查看数据、远程开关设备和调整报警阈值。",
      "项目包含实物图、云端 App 控制界面、36KHz 驱鸟电路示波器效果和 B 站演示视频。",
    ],
    url: "https://github.com/cz0729zc/smart-orchard-irrigation-system",
    accent: "lime",
  },
  {
    name: "ESP32 智能植物传感器 MVP2.0",
    role: "实习项目 / 消费级智能硬件固件",
    summary:
      "面向海外市场的智能植物传感器固件项目，聚焦 ESP32、FreeRTOS、LVGL 交互、多传感器融合和低功耗体验优化。",
    tags: ["ESP32", "FreeRTOS", "LVGL", "Light-Sleep"],
    highlights: [
      "主导 I2C、ADC、SPI、I2S 等外设驱动集成，配合 VSCode/ESP-IDF 完成固件开发与调试。",
      "设计 FSM 事件驱动架构，解耦 UI、传感器和逻辑控制任务，解决 LVGL 多任务访问线程安全问题。",
      "实现基于空闲检测的 Light-Sleep 策略，在保证体验的同时将待机功耗降低约 85%。",
    ],
    url: links.resume,
    accent: "cyan",
  },
];

const skills = [
  "C / C++",
  "STM32 / ESP32",
  "ESP-IDF / Keil MDK",
  "FreeRTOS",
  "LVGL / GUI Guider",
  "UART / IIC / SPI / PWM / I2S",
  "MQTT / OneNET / Gizwits",
  "PCB & Hardware Debug",
];

const writings = [
  {
    title: "GUI Guider + LVGL 页面移植：把生成代码接入 STM32/ESP32 工程",
    topic: "LVGL UI 移植与工程集成",
    url: "https://blog.csdn.net/m0_74274761/article/details/149645254",
  },
  {
    title: "ST7789 屏幕调试：SPI 接线、初始化和颜色反色问题排查",
    topic: "LCD 驱动与显示异常定位",
    url: "https://blog.csdn.net/m0_74274761/article/details/150610631",
  },
  {
    title: "ESP32-C3 I2S 音频调试：从喇叭振铃到信号完整性排查",
    topic: "I2S 音频、功放与硬件调试复盘",
    url: "https://blog.csdn.net/m0_74274761/article/details/151718408",
  },
];

const experience = [
  {
    company: "深圳实步科技有限公司",
    role: "嵌入式软件工程师",
    time: "2025.06 - 2025.09",
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
            <div data-hero="copy" className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-slate-300 sm:text-xl">
              <p>
                <span className="font-semibold text-white">求职方向：</span>
                嵌入式软件开发
              </p>
              <p>
                <span className="font-semibold text-white">个人优势：</span>
                熟悉 C/C++、STM32、ESP32、FreeRTOS、LVGL 和 Linux 开发环境，能阅读 datasheet 完成模块驱动开发，
                具备外设通信、低功耗优化、PCB 调试和软硬件联调经验。
              </p>
            </div>
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
              <CopyEmailButton
                className="inline-flex h-12 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-slate-100 transition hover:border-lime-200 hover:text-lime-100"
                email={links.emailText}
              />
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">项目从设备接入、业务闭环到工程调试都有真实落点。</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="flex min-h-[440px] flex-col border border-white/10 bg-white/[0.03] p-6" key={project.name}>
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
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {project.highlights.map((item) => (
                    <li className="border-l border-lime-200/40 pl-3" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="mt-auto pt-6 text-sm font-semibold text-lime-200 hover:text-white" href={project.url}>
                  {project.url === links.resume ? "View in resume ->" : "View repository ->"}
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">文章标题直接对应问题，让读者一眼知道你解决过什么。</h2>
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
