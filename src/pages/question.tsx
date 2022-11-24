import { LightBulbIcon } from "@heroicons/react/24/solid";
import { MediaQuery, Tabs } from "@mantine/core";
import Head from "next/head";

import { TextItem } from "../components/Common/TextItem";
import type { NextPage } from "next";
import { MainLayout } from "src/components/Layout/MainLayout";
import { QuestionAccordion } from "src/components/QuestionAccordion";

const questionsList = [
  {
    id: 1,
    title: "JAACに関して",
    contents: [
      {
        id: 1,
        image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
        label: "年会費について",
        description:
          "JAACでは年度を10月1日~翌年9月30日としております。\n会費は年額3000円です。ただし、年度途中入会の年会費の軽減措置を設け、6月1日から9月30日の間に入会する場合の年会費は1500円と致します。\nまた、年度末頃の場合→9月頃に新規会員申請の方には次期年度の会員として受理させていただきます。その旨ご連絡致します。",
      },
      {
        id: 2,
        image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
        label: "掲示板を何故、設置しないのですか？",
        description:
          "誰でも閲覧・書き込み可能な状態では、医療関係はもとより、他の事についても（カツラ関係等も含め）間違った情報？偏った情報？などが掲載される可能性もあります。\n普通の個人サイトではある程度しかたないかもしれませんが、患者会として運営する場合は細心の注意が必要になると思います。それらをチェックしながら運営する事はもちろん可能ですが、現時点では、人もお金もありません(笑)\n現状でもいっぱいいっぱいですので、申し訳ありませんが、掲示板などを一般向けサイトに設置する事は現在は、考えておりません。",
      },
      {
        id: 3,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "カツラメーカーと関連はあるのですか？",
        description:
          "当患者会は、カツラメーカー＆カツラ業界とは一切関係ありません。\nただ、患者の方のご意見を取り入れた「円形脱毛症患者用のカツラとは?」に関しての働きかけなどは、今後必要と考えております。",
      },
      {
        id: 4,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "会員特典は？",
        description:
          "●年会報誌「JAAC1年の歩み」の郵送発行\n●月に数回の「JAAC通信」のメール配信\n●一般の方より学習懇談会参加費用がお安くなります\n●各種会員催しへのご参加\n●会員専用のホームページの各種コンテンツのご提供\n●協力医師への一般的なご相談を受け付けております。疑問・難問を?解決して下さい。\n●その他いろいろ考えています～　みんなで何かやりましょ～♪",
      },
      {
        id: 5,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "JAACから会員メールが届かないのですが?",
        description:
          "ご入会時の申請登録メールアドレスが正しいかご確認下さい。\nサイト全般に関しての質問コーナーの「自動返信メールが届かないのですが?」を参照してみて下さい。\nまたは、JAACからのメールがお使いのメールソフトにより、迷惑メールとして処理されている場合もありますので、その場合は迷惑メールから除外して下さい。\nご不明の場合はお問い合わせフォームからご連絡下さい。",
      },
      {
        id: 6,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "パスワードを紛失してしまい、会員サイトにログイン出来ません",
        description:
          "紛失した場合でも、正しい登録時のメールアドレスさえ紛失しなければ、「パスワード紛失」からパスワードを再発行出来ますのでよろしくお願いいたします。",
      },
    ],
  },
  {
    id: 2,
    title: "医療に関して",
    contents: [
      {
        id: 1,
        image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
        label:
          "抗アレルギー剤の飲み薬を長期間使用していますが、副作用はないのでしょうか？",
        description:
          "抗アレルギー剤が円形脱毛症(以下AA)にどのように作用するのかはまだわかっていません。\nアトピー性円形脱毛症の患者さん達に限らず、単発型と多発型円形脱毛症の成人患者さん53名を抗アレルギー剤を服用するグループと服用しないグループに分けて、12週間症状を観察し抗アレルギー剤の効果を検討した研究では、副作用の報告はなく、著しい効果の差はないものの、服用しているグループの方が脱毛数の減少が持続して、発毛の状態などを総合的に判定すると治癒が早い傾向が示されました。\nそのため、併用療法である、ステロイド外用薬を弱いランクのものに変更できたり、ステロイドの局所注射が早めに終了できると考えられました。\n抗アレルギー剤はAAでおきている、毛の周りの自己免疫性の炎症を改善する効果が推測されています。\n一般的な抗アレルギー剤の副作用は、眠気、のどの渇きです。眠気のために注意力が散漫になったり、子供では落ち着きがなくなるような場合もまれにあります。\n薬の種類によっては味覚障害や生理不順が生じることがあります。また、抗アレルギー剤に関わらず、長期間くすりを服用する場合には、肝臓や腎臓に障害が出ることもあるので、定期的に血液検査を実施して副作用が出ていないかを確認します。\nほとんどの方は長期間内服しても特に問題はありません。\n\n植木理恵 先生",
      },
      {
        id: 2,
        image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
        label: "サプリメント類は円形脱毛症に効果的なのか？",
        description:
          "円形脱毛症には特別に効果のあるサプリメントや食品はありません。\nビオチンや亜鉛は毛の成長にかかわる成分なので薄毛への対策に有効なことがありますが、円形脱毛症で起こっている毛包の周りの炎症を止める作用はありません。\nただし生えてきた毛を丈夫にする効果を持っている可能性はあるので、栄養のバランス良く食事をすることはもちろん重要です。\n男性型脱毛症などの薄毛と円形脱毛症はどちらも髪が抜けますが、原因がまったく違うので薄毛対策では円形脱毛症には効果がありません。\n\n植木理恵 先生",
      },
      {
        id: 3,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "アトピー性皮膚炎と円形脱毛症は関係があるのですか？",
        description:
          "アトピー性皮膚炎に円形脱毛症を併発した時にアトピー性円形脱毛症(Atopic Alopecia)と特別に呼ぶことがあります。\n円形脱毛症の患者さんにはアトピー性皮膚炎に限らずアレルギー性鼻炎などのアレルギー性疾患を合併していることが多いことが知られています。\n花粉症などの鼻炎症状がひどかった後や、全身にかゆい発疹が出た後に円形脱毛症になったり、再発することもあり、アレルギーと円形脱毛症は関係があると考えられています。\nしかし、今のところ円形脱毛症は自己免疫性疾患でアレルギー性疾患とは言えません。\nアレルギー性疾患がきっかけで円形脱毛症の自己免疫性の変化が起きるのではないかと考えられています。\n\n植木理恵 先生",
      },
      {
        id: 4,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label:
          "数年前から汎発型円形脱毛症です。爪がデコボコして割れやすいのですが、円形脱毛症と関係ありますか？治療について教えてください。",
        description:
          "円形脱毛症では、爪がデコボコしたり(点状陥凹)、はがれやすくなったり、横向きに溝のようなくぼみができる、白く濁るなどの変形が生じることがあります。\n円形脱毛症の患者さん304名の調査では、全体の16.1%の患者さんに何らかの爪の変形が出現していて、病型別では、単発型　0%、多発型54.2%、全頭型8.3%、汎発型37.5%と報告されています。\n円形脱毛症に伴う爪の変形は、爪母細胞などの爪をつくる細胞の性質が毛をつくる細胞に似ているため、円形脱毛症を起こしているリンパ球の攻撃を受け、爪をつくる細胞が弱って変形した爪がつくられてしまうと考えられます。\n円形脱毛症の症状が改善すると爪も正常化し、悪化する時期に一致して変形した爪が出てくることも観察されます。爪には、弱いランクのステロイド剤を塗って治療することもあります。尚、爪水虫でも爪が白く濁るなどの変形が生じるので、鑑別が必要です。\nまた、子供の患者さんでは、爪噛みの癖で爪が薄くなったり弱ることもあるので、日常の癖に気をつけてください。\n\n植木理恵 先生",
      },
      {
        id: 5,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "局所注射はどのような症状に有効ですか？",
        description:
          "●円形脱毛症の治療で局所注射というと、ステロイドの注射剤を脱毛部位の皮膚に注射することです。\n昨年発表された、日本皮膚科学会円形脱毛症診療ガイドライン2010では、ステロイド局所注射の推奨度は「B:行うよう勧められる」と評価されました。\n推奨文では「症状の固定した、脱毛面積が頭の２５％未満の単発型、多発型の成人症例に用いるべきである。」と書かれています。\n●ステロイドの局所注射では、注射部位が陥没するような皮膚萎縮が副作用として生じることがあり、十分に注意して注射をしなければなりません。脱毛が広範囲に及ぶ場合は、注射回数と、注射総量が多くなるため全身性の副作用の生じる危険が考えられます。小児には、有益性と危険度が比較された研究がないため、基本的に行わないこととするとされています。\n●症状固定:発症6ヶ月以上。拡大傾向なし。脱毛巣内に易抜毛性、切断毛、屍毛なし。\n\n植木理恵 医師",
      },
      {
        id: 6,
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label:
          "男性型脱毛症（いわゆる、若はげ）の内服薬（プロペシア）は、円形脱毛症には効かないのですか？",
        description:
          "●男性型脱毛症の飲み薬(プロペシア)は、円形脱毛症には効果がありません。\n●脱毛にはいろいろな種類があり、それぞれ原因が異なるため治療も同じではありません。\n●男性型脱毛症は男性ホルモンの作用により、前頭部と頭頂部の頭髪が次第に細く、短くなり、額の生え際が後退して、頭頂部の地肌が見えるようになる現象です。性ホルモンの分泌が活発になる思春期以降に始まり徐々に進行する脱毛症です。男性ホルモンの作用を受けやすい体質の方に起こる生理的な変化と考えられます。日本人男性の約30%に発症するという報告があり、症状の程度に差はありますが、男性にも女性にも起こります。プロペシアという男性型脱毛症の飲み薬は、男性ホルモンの働きを弱くする作用があり、男性型脱毛症の進行を遅らせ、さらに毛の量が増える効果が期待できます。毛を作る細胞だけに作用するわけではないので、性欲の低下や肝障害など副作用もあり、治療には医師の診察が必要です。一方、円形脱毛症は毛を作る細胞に対する自己免疫反応により毛を作る細胞が障害を受ける脱毛症で、男性ホルモンとは関連していないので、男性型脱毛症の飲み薬（プロペシア）は効果がありません。自己免疫反応を抑えるための治療が必要です。\n\n植木理恵医師",
      },
    ],
  },
  {
    id: 3,
    title: "サイト全般に関して",
    contents: [
      {
        id: 1,
        image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
        label: "ホームページ上の情報などの扱いは？",
        description:
          "当ホームページに書かれた情報の全てまたは一部を、許可なく複製・改変・再配布・再出版・表示・掲示または転送することを禁止いたします。",
      },
      {
        id: 2,
        image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
        label: "自動返信メールが届かないのですが？",
        description:
          "各種フォームにて、JAACへ送信メールをした場合、必ず正しいメールアドレスかご確認下さい。\n正しいご自身のメールアドレスをご記入いただけないと確認の自動返信メールは届きませんので、宜しくお願いいたします。\n間違えの無いように、メールアドレスなどは、手書きで打ち込みでなく、コピー&ペーストで入力すると間違いが少なくなると思います。\n会員の方がログインする場合、IDとパスワードもコピー&ペーストが良いと思います。",
      },
    ],
  },
];

const Question: NextPage = () => {
  return (
    <>
      <Head>
        <title>Question Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="mb-[140px] flex flex-col px-5 xl:px-20">
          <div className="h-[320px]" />
          <TextItem text="QUESTION" />

          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Tabs defaultValue="1" variant="outline">
              <Tabs.List>
                {questionsList.map((questions) => (
                  <div key={questions.id}>
                    <Tabs.Tab
                      value={questions.id.toString()}
                      fz="lg"
                      fw="bold"
                      icon={<LightBulbIcon className="h-6 text-yellow-400" />}
                    >
                      {questions.title}
                    </Tabs.Tab>
                  </div>
                ))}
              </Tabs.List>
              {questionsList.map((questions) => (
                <Tabs.Panel
                  key={questions.id}
                  value={questions.id.toString()}
                  pt="xs"
                >
                  <QuestionAccordion contents={questions.contents} />
                </Tabs.Panel>
              ))}
            </Tabs>
          </MediaQuery>

          {questionsList.map((questions) => (
            <div key={questions.id} className="md:hidden">
              <div className="mb-3 flex items-center space-x-2">
                <LightBulbIcon className="h-6 text-yellow-400" />

                <p className="text-xl font-bold">{questions.title}</p>
              </div>
              <QuestionAccordion contents={questions.contents} />
            </div>
          ))}
        </section>
      </MainLayout>
    </>
  );
};

export default Question;
