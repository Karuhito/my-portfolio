export const profile = {
  name: "ENOMOTO KAZUTO",
  role: "Engineer",
  location: "Ibaraki, Japan",
  languages: ["Python","JavaScript"],
  interests: ["React","TypeScript","Java","AWS"],
  stats: [
    { value: "2", label: "Years Exp." },
    { value: "4", label: "Projects" },
    { value: "2", label: "Languages" },
  ],
  bio: [
    "榎本 和斗(19歳)、プログラミングの専門スクールに通う学生です。",
    "Pythonを使いバックエンドを中心としたwebアプリ開発を行っています。",
    "技術スタックを広げるため、Java、TypeScript、Reactなどフロント/バックに関わらず幅広く学習しています",
  ],
  contact: {
    email: "kazutopg@gmail.com",
    github: "https://github.com/Karuhito",
    wantedly: "https://www.wantedly.com/id/kazuto_enomoto1028",
  },
};

export const skills = [
  {
    icon: "🖥️",
    title: "フロントエンド",
    tags: ["JavaScript","TypeScript","React"],
  },
  {
    icon: "⚙️",
    title: "バックエンド",
    tags: ["Python(Django)",],
  },
  {
    icon: "🗄️",
    title: "データベース",
    tags: ["MySQL","PostgreSQL"],
  },
  /*
  // 学んだら追加予定
  {
    icon: "☁️",
    title: "インフラ・クラウド",
    tags: [],
  },
  {
    icon: "🔐",
    title: "セキュリティ・設計",
    tags: [],
  },
  */
];

export const projects = [
  {
    title: "日々のタスクを記録・管理できるアプリ",
    desc: "Djangoを用いて日常のタスクを管理できるアプリを制作しました。Goal、Todo、Schedule、Reflectionの4つのCRUD機能を盛り込んでいます。",
    tags: ["Python","Django","SQLite"],
    link: "https://github.com/Karuhito/JournaLog_app",
  },
  {
    title: "フレンドと競い合える運動記録アプリ",
    desc: "チーム開発でFirebase+VanillaJSを用いて運動記録をスコア化し、フレンドと競い合うことができるアプリを制作しました。私はスコア計算部分の実装に携わりました。",
    tags: ["JavaScript","Firebase","チーム開発"],
    link: "https://github.com/Tech-Jam-KDG-2026-Winter/Team-13-HTML-CSS-JS",
  },
  {
    title: "みんなの空き時間を確認できるアプリ",
    desc: "フロントエンドにReact-TS、バックエンドにFastAPIを用いて友達に暇な時間の情報を共有することで、遊ぶ時間を決めることができるアプリを制作しました。",
    tags: ["TypeScript","React", "Python", "FastAPI", "Supabase"],
    link: "https://github.com/Karuhito/group-schedule-adjustment-app",
  },
  {
    title: "持ち物チェックアプリ",
    desc: "フロント/バック両エンドにTypeScriptを採用し、1つの言語で一貫した開発を行いました。",
    tags: ["TypeScript","React","LocalStorage"],
    link: "https://github.com/Karuhito/belongings-check-app",
  }
];

export const timeline = [
  {
    date: "2025.04 - 現在",
    title: "専門校へ進学。",
    org: "KADOKAWAドワンゴ情報工科学院",
    desc: "1年次ではPythonを中心に学習し、2年次ではJavaとTypeScriptを学習しています。",
  },
  {
    date: "2022.04 - 2025.03",
    title: "通信制の高校へ",
    org: "N高等学校 普通科",
    desc: "3年次の時に学校の学習サービスを利用し、プログラミング学習を始め、プログラミングを仕事にしたいと思うようになる。",
  },
];
