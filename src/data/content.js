export const profile = {
  name: "ENOMOTO KAZUTO",
  role: "Backend Engineer",
  location: "Ibaraki, Japan",
  languages: ["Python","JavaScript"],
  openToWork: true,
  interests: [],
  stats: [
    { value: "2+", label: "Years Exp." },
    { value: "3+", label: "Projects" },
    { value: "2", label: "Languages" },
  ],
  bio: [
    "榎本 和斗(19歳)、プログラミングの専門校に通う学生です。",
    "Pythonを中心としたwebアプリ開発を行ってきました。",
    "",
  ],
  contact: {
    email: "kazutopg@gmail.com",
    github: "https://github.com/Karuhito",
    linkedin: ""
  },
};

export const skills = [
  {
    icon: "⚙️",
    title: "バックエンド",
    tags: ["Python"],
  },
  {
    icon: "🗄️",
    title: "データベース",
    tags: ["MySQL"],
  },
  /*
  {
    icon: "☁️",
    title: "インフラ・クラウド",
    tags: ["AWS", "Docker"],
  },
  {
    icon: "🔐",
    title: "セキュリティ・設計",
    tags: ["OAuth2", "JWT", "DDD", "Clean Architecture", "Microservices"],
  },
  */
];

export const projects = [
  {
    title: "日々のタスクを記録・管理できるアプリ",
    desc: "Djangoを用いて日常のタスクを管理できるアプリを制作しました。",
    tags: ["Python","SQLite"],
    link: "https://github.com/Karuhito/JournaLog_app",
  },
  {
    title: "フレンドと競い合える運動記録アプリ",
    desc: "チーム開発でFirebase+VanillaJSを用いて運動記録をスコア化し、フレンドと競い合うことができるアプリを制作しました。",
    tags: ["JavaScript","Firebase"],
    link: "https://github.com/Tech-Jam-KDG-2026-Winter/Team-13-HTML-CSS-JS",
  },
];

export const timeline = [
  {
    date: "2025.04 – 現在",
    title: "専門校へ進学。",
    org: "KADOKAWAドワンゴ情報工科学院",
    desc: "授業ではPythonを中心に学習しています。",
  },
  {
    date: "2022.04 – 2025.03",
    title: "通信制の高校へ",
    org: "N高等学校 普通科",
    desc: "3年生の時に学校の学習サービスを利用し、プログラミングについて学び始め、プログラミングを仕事にしたいと思うようになる。",
  },
];
