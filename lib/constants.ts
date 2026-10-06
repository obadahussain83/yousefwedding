export const WEDDING = {
  groomName: "يوسف",
  brideName: "لمى",
  groomInitial: "Y",
  brideInitial: "L",
  groomFullName: "يوسف سمارة عيسى",
  groomFatherName: "سمارة عيسى",
  groomKunya: "أبو فراس",
  brideFullName: "لمى محمد عطايا",
  brideFatherName: "محمد عطايا",
  brideFamily: "أبو وسام",

  weddingDate: new Date(2026, 9, 10, 18, 0, 0),
  dateLabel: "السبت 2026/10/10",
  timeLabel: "من السادسة حتى التاسعة مساءً",
  gatheringLine: "التجمع أمام منزل والد العريس في تمام الساعة الخامسة مساءً في اللبن الغربي",

  city: "شقبا",
  venue: "قاعات شقبا الكبرى",
  venueSubtitle: "الكائنة في شقبا",
  venueMapUrl: "https://maps.google.com/?q=%D9%82%D8%A7%D8%B9%D8%A7%D8%AA%20%D8%B4%D9%82%D8%A8%D8%A7%20%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89%20%D8%B4%D9%82%D8%A8%D8%A7",
  venueMapEmbedUrl:
    "https://www.google.com/maps?q=%D9%82%D8%A7%D8%B9%D8%A7%D8%AA%20%D8%B4%D9%82%D8%A8%D8%A7%20%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89%20%D8%B4%D9%82%D8%A8%D8%A7&output=embed",

  galleryImages: [
    "/gallery/photo-1.jpg",
    "/gallery/photo-2.jpg",
  ],

  program: [
    { time: "السبت 2026/10/10", title: "حفل الزفاف في قاعات شقبا الكبرى الكائنة في شقبا", icon: "party" },
    { time: "6:00-9:00 pm", title: "استقبال الضيوف والتهاني", icon: "welcome" },
    { time: "5:00 pm", title: "التجمع أمام منزل والد العريس في اللبن الغربي", icon: "rings" },
  ],

  invitationLine:
    "سبحان من جمع القلوب بفضله، طاب اللقاء وزاد تشريفكم",
  invitationVerse:
    "وعلى رحاب الود عمر دارها، في ليلة قد أشرقت أنوارها",
  publicInvitationText: "دعوة عامة",
  familiesLine: "أفراح آل عيسى وآل عطايا",
  hostLine:
    "يتشرفان بدعوتكم لحضور حفل زفاف",
  willOfGodLine: "وذلك بمشيئته تعالى",
  blessingLine: "بارك الله لهما وبارك عليهما وجمع بينهما في خير",
  noPhotosLine: "",
  heroLine: "تكتمل فرحتنا بحضوركم ومشاركتكم أجمل اللحظات",
  thankYouMessage: "دامت دياركم عامرة بالأفراح",
  tapToOpenText: "اضغط لفتح الدعوة",
} as const;
