const questions = [
  {
    question: "問1. スプリンクラーは、なんの工事（こうじ）か",
    options: [
      "1．海洋（かいよう）土木（どぼく）工事（こうじ）",
      "2．通（つうしん）工事（こうじ）",
      "3．土木（どぼく）工事（こうじ）",
      "4．消防（しょうぼう）設備（せつび）工事（こうじ）"
    ],
    answer: 4,
    explanation: "スプリンクラーは火災時に自動的に水を噴出する消防設備です。",
    translation: "Hệ thống sprinkler thuộc về hạng mục công trình thiết bị phòng cháy chữa cháy."
  },
  {
    question: "問2. 建物（たてもの）の中（なか）から外（そと）に通（つう）じる通信（つうしん）回線（かいせん）を管理（かんり）・接続（せつぞく）するための配線盤（はいせんばん）を何（なん）というか",
    options: [
      "1．分電盤（ぶんでんばん）",
      "2．MDF",
      "3．PBX",
      "4．分配器（ぶんぱいき）"
    ],
    answer: 2,
    explanation: "MDFはMain Distribution Frameの略で、通信回線を管理・接続する装置です。",
    translation: "Bảng MDF là bảng phân phối chính để quản lý và kết nối các đường dây viễn thông."
  },
  {
    question: "問3. 給排水（きゅうはいすい）衛生（えいせい）設備（せつび）工事（こうじ）について、適切（てきせつ）なものを選（えら）べ【64】",
    options: [
      "1．給湯（きゅうとう）設備（せつび）工事（こうじ）",
      "2．地熱井（ちねつい）工事（こうじ）",
      "3．塗装（とそう）工事（こうじ）",
      "4．舗装（ほそう）工事（こうじ）"
    ],
    answer: 1,
    explanation: "給排水衛生設備工事には、給湯設備工事が含まれます。",
    translation: "Trong công trình thiết bị cấp thoát nước và vệ sinh, có bao gồm hạng mục cấp nước nóng."
  },
  {
    question: "問4. 内外装（ないがいそう）仕上（しあ）げ工事（こうじ）に含（ふく）まれないものはどれか【57,58,59】",
    options: [
      "1．ガス",
      "2．屋根（やね）",
      "3．カーテンウォール",
      "4．防水（ぼうすい）"
    ],
    answer: 1,
    explanation: "ガス工事は内外装仕上げ工事には含まれません。",
    translation: "Công trình khí đốt không thuộc về công trình hoàn thiện nội ngoại thất."
  },
  {
    question: "問5. 工程表（こうていひょう）から読み取れるべき4つの要素はどれか【44職長】",
    options: [
      "1．ガントチャート",
      "2．バーチャート",
      "3．グラフ式工程表（こうていひょう）",
      "4．ネットワーク式工程表（こうていひょう）"
    ],
    answer: 4,
    explanation: "ネットワーク式工程表は、作業手順、日数、進行度、工期への影響を明確に把握できます。",
    translation: "Biểu đồ tiến độ dạng mạng (network) cho phép nắm rõ trình tự công việc, số ngày cần thiết, mức độ tiến hành và các công việc ảnh hưởng đến thời hạn."
  },
  {
    question: "問6. 「おつかれさまです」はどんな時（とき）に挨拶（あいさつ）するか【79】",
    options: [
      "1．他（ほか）の人（ひと）は大変（たいへん）そうだと見（み）えます",
      "2．仕事（しごと）が終（お）わるときにあいさつします",
      "3．休憩（きゅうけい）の時（とき）にあいさつします",
      "4．すべて正解（せいかい）です"
    ],
    answer: 4,
    explanation: "「おつかれさまです」は色々な場面で使える便利な挨拶です。",
    translation: "Câu chào 'Otsukaresama desu' được dùng trong nhiều tình huống: khi kết thúc công việc, lúc nghỉ ngơi, hoặc khi muốn bày tỏ sự cảm thông."
  },
  {
    question: "問7. 作業（さぎょう）終了後（しゅうりょうご）、火（ひ）を使（つか）う場合（ばあい）は、何（なん）をする？【99】",
    options: [
      "1．確実（かくじつ）に消火（しょうか）を確認（かくにん）する",
      "2．放置（ほうち）する",
      "3．ゴミを確認（かくにん）する",
      "4．上司（じょうし）に連絡（れんらく）する"
    ],
    answer: 1,
    explanation: "火を使った後は必ず消火を確認します。",
    translation: "Sau khi sử dụng lửa phải xác nhận dập tắt hoàn toàn để đảm bảo an toàn."
  },
  {
    question: "問8. 服装（ふくそう）の注意（ちゅうい）について、正（ただ）しいものを一つ選（えら）べ【98】",
    options: [
      "1．できるだけ上着（うわぎ）のボタンをはずす",
      "2．ポケットに手（て）を入（い）れたまま作業（さぎょう）する",
      "3．暑（あつ）いから半袖（はんそで）や半（はん）パンの作業服（さぎょうふく）を着（き）る",
      "4．そでは手首（てくび）までおろして着用（ちゃくよう）する"
    ],
    answer: 4,
    explanation: "作業服は安全のため手首まで袖を下ろして着用します。",
    translation: "Trang phục lao động phải mặc tay áo dài đến cổ tay để đảm bảo an toàn."
  },
  {
    question: "問9. 漏電（ろうでん）の定義（ていぎ）について正（ただ）しいものを選（えら）べ【92】",
    options: [
      "1．電気（でんき）が通（とお）るべきではない部分（ぶぶん）に電気（でんき）が流（なが）れてしまうこと",
      "2．大地（だいち）を電気的（でんきてき）に接続（せつぞく）すること",
      "3．雷（かみなり）による電流（でんりゅう）を放流（ほうりゅう）すること",
      "4．人体（じんたい）に電流（でんりゅう）が流（なが）れること"
    ],
    answer: 1,
    explanation: "漏電とは電気が本来通るべきでない部分に流れることです。",
    translation: "Rò điện là hiện tượng dòng điện chạy vào nơi mà bình thường không được phép có điện."
  },
  {
    question: "問10. ヒヤリ・ハット活動（かつどう）について、不適切（ふてきせつ）なものを選（えら）べ【職長94】",
    options: [
      "1．作業員（さぎょういん）が経験（けいけん）したヒヤリ・ハットを全員（ぜんいん）で共有（きょうゆう）する",
      "2．再発生（さいはっせい）しないため、報告（ほうこく）した作業員（さぎょういん）に責任（せきにん）を追及（ついきゅう）する",
      "3．報告（ほうこく）された内容（ないよう）を分析（ぶんせき）して改善点（かいぜんてん）を導（みちび）き出す",
      "4．原因（げんいん）を特定（とくてい）し、改善（かいぜん）策（さく）を提案（ていあん）する"
    ],
    answer: 2,
    explanation: "ヒヤリ・ハットは責任追及ではなく再発防止のために活用されます。",
    translation: "Hoạt động Hiyari-Hatto không phải để truy cứu trách nhiệm mà để ngăn ngừa tái diễn tai nạn."
  }
];
