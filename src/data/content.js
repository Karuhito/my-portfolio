export const profile = {
  name: "ENOMOTO KAZUTO",
  location: "Ibaraki, Japan",
  languages: ["Python", "Java", "JavaScript"],
  databases: ["MySQL", "PostgreSQL"],
  interests: ["TypeScript"],
  bio: [
    "榎本 和斗",
    "プログラミングの専門校に通っている28卒の学生です。",
    "現在はJavaやTypeScriptなどの開発言語やPostgreSQLなどデータベース言語や、要件定義・設計など上流工程部分の考え方、基本情報技術者の資格学習など多岐にわたる範囲の学習をしています。",
  ],
  contact: {
    email: "kazutopg@gmail.com",
    github: "https://github.com/Karuhito",
    wantedly: "https://www.wantedly.com/id/kazuto_enomoto1028",
  },
};

// 理解度の段階（上から順に高い）。skills[].items[].level はこの中のどれかを使う
export const skillLevels = ["主に使用", "使用経験あり", "学習中"];

// 各カード内はバックエンド寄りの技術を上に並べる
export const skills = [
  {
    icon: "Code",
    title: "言語",
    items: [
      { name: "Python", level: "主に使用", note: "個人制作やチーム開発で使用した経験があります。" },
      { name: "Java", level: "主に使用", note: "現在Java+Spring Bootで開発中のプロジェクトがあります。" },
      { name: "JavaScript", level: "使用経験あり", note: "簡単なDOM操作やJournaLogやInvyで画面の表示切り替えなどフロント側の制御に使用した経験があります。"},
      { name: "TypeScript", level: "学習中", note: "TypeScriptの特徴である型定義やJavaScript同様簡単なDOM操作はできます。授業や個人開発を通じて学習をしている状態です。"},
    ],
  },
  {
    icon: "Database",
    title: "データベース",
    items: [
      { name: "MySQL", level: "使用経験あり", note: "PostgreSQLを学ぶまではMySQLを主に使用していました。" },
      { name: "PostgreSQL", level: "使用経験あり", note: "個人・チームどちらのプロジェクトでも使用して開発をした経験があります。"},
    ],
  },
  {
    icon: "Layers",
    title: "フレームワーク",
    items: [
      { name: "Django", level: "使用経験あり", note: "JournaLogとInvyの開発で使用した経験があります。" },
      { name: "Spring Boot", level: "学習中", note: "現在チーム開発プロジェクトで使用しています。学びながら開発を進めている状況です。" },
      { name: "FastAPI", level: "学習中", note: "GroupSyncで使用した経験がありますが、まだ理解しているとは言えない状態です。理解を深める必要があると考えています。" },
      { name: "React", level: "学習中", note: "すっきりチェックの開発で使用した経験はありますが、まだ自信をもって理解しているとは言えない状態です。まだスキル向上の余地があると考えています。" },
    ],
  },
];

export const projects = [
  {
    title: "JournaLog",
    desc: "Djangoを用いて日常のタスクを管理できるwebアプリケーションを開発しました。その日のGoal、Todo、スケジュール、思ったことや振り返りを記録に残すことができます。このwebアプリケーションの開発では、Djangoでの基本的なCRUD操作を学びました。",
    tags: ["Python","Django","PostgreSQL","JavaScript"],
    thumbnail: "/projects/journalog-screen.jpeg",
    link: "https://github.com/Karuhito/JournaLog_app",
  },
  {
    title: "Fit Fight",
    desc: "チーム開発でFirebase+VanillaJSを用いて運動記録をスコア化し、フレンドと競い合うことができるwebアプリケーションを開発しました。私はスコア計算部分の実装や初期データの作成部分に携わりました。",
    tags: ["JavaScript","Firebase","チーム開発"],
    thumbnail: "/projects/fitfight-screen.jpeg",
    link: "https://github.com/Tech-Jam-KDG-2026-Winter/Team-13-HTML-CSS-JS",
  },
  {
    title: "GroupSync",
    desc: "[開発中] Discordのアカウント認証を利用したwebアプリケーションを開発しています。フレンドに自分の空き時間の情報を共有し合うことで一緒にゲームする予定の時間の調整をすることができます。結合テスト段階で複数のバグが見つかっているので修正対応を進めています。",
    tags: ["TypeScript","React", "Python", "FastAPI", "PostgreSQL"],
    thumbnail: "/projects/groupsync-screen.jpeg",
    link: "https://github.com/Karuhito/group-schedule-adjustment-app",
  },
  {
    title: "すっきりチェック",
    desc: "持ち物管理ができるwebアプリケーションを開発しました。ここではブラウザのLocalStorageの仕組みを学び、必ずしもデータベースを使用する必要はないということや作るものの規模に応じてデータベースを使用するかの判断を学びました。",
    tags: ["TypeScript","React","LocalStorage"],
    thumbnail: "/projects/belongingcheck-screen.jpeg",
    link: "https://github.com/Karuhito/belongings-check-app",
  },
  {
    title:"Invy",
    desc:"チーム開発で季節の思い出をミッション型スタンプラリーのような形式で写真の記録を残せるwebアプリケーションを開発しました。私はチームリーダーとして、GitHub上でissueを利用したタスク管理、メンバーへのタスク割り振り、Renderへのデプロイ環境の設定などを行いました。",
    tags:["Python","Django","JavaScript","PostgreSQL","チーム開発"],
    thumbnail: "/projects/invy-screen.jpeg",
    link: "https://github.com/KDGT2026-Summer-Techjam/Team-B-Django"
  },
  {
    title: "オーダールーム",
    desc: "[開発中] ホームパーティなどを開く際に必要だと思うアイテムをメンバーが提案し、ホストがアイテムを採用、却下の判断を行い、予算や実際の費用、何をいくつ購入するかをまとめられるwebアプリケーションを開発中です。3人体制でリーダー、フロントエンド、バックエンド1人ずつの体制で、私はバックエンドを担当しています。",
    tags: ["Java", "Spring Boot", "TypeScript", "React", "チーム開発"],
    thumbnail: "/projects/orderroom-screen.jpeg",
    link: "https://github.com/sisicity4/OrderRoom"
  }
];

export const timeline = [
  {
    date: "2025.04 - 現在",
    org: "KADOKAWAドワンゴ情報工科学院",
    desc: "1年次ではPython(Django)、MySQLを学び、2年次ではJava(Spring Boot)とTypeScript、PostgreSQLを学習しています。",
  },
  {
    date: "2022.04 - 2025.03",
    org: "N高等学校 普通科",
    desc: "3年次の時に学校の学習サービスを利用し、プログラミング学習を始めました。そこで学んでいくうちに将来エンジニアを仕事にしたいと思うようになりました。",
  },
];
