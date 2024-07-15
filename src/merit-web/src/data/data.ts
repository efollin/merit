export const programs = [
  "D - Datateknik",
  "C - Infocom",
  "I - Industriell ekonomi",
  "F - Teknisk fysik",
  "V - Väg- och vattenbyggnad",
];

export const D_courses = [
  ["FMAB65",
  "EDAA45",
  "FMAB70",
  "EXTA65",
  "FAFA60",
  "EDAA01",
  "FMAB20",
  "EDAA40"],
  ["EDAA75"],
  ["FMAB30",
  "EDAF60",
  "EITF65",
  "EITF45",
  "EITF70",
  "FMAF10",
  "EDAF05",
  "EITA10",
  "EDAF95"],
  ["FMAF01",
  "EDAN40",
  "FMAF05"],
  ["EDAP10",
  "FRITF05",
  "ETSF25",
  "FMSF20",
  "EITA25",
  "FMNF05",
  "FMIF45",
  "EITG20",
  "EITA50"],
  [],


];

export const C_courses = [
  ["EITA55",
  "EDAA45",
  "EITA65",
  "FMAA21",
  "EDAA01",
  "MAMA20",
  "EDAA75"],
  [],
  ["FMAB65",
  "EDAF60",
  "MAMF60",
  "FMAB70",
  "EDAF45",
  "EITA25",
  "FMIF45",
  "ETSF10",
  "FMSF50"],
  [],
  ["ETSN11",
  "EDAF90",
  "ETSF25",
  "EITF06",
  "FMAF10",
  "MAMN01",
  "EDAF75",
  "EITG20",
  "EDAG10"],
  []

]
export const I_courses = [
  ["FMAB65",
  "MIOA01",
  "FMAB70",
  "FMAB20",
  "FMAB30",
  "FAFA76",
  "EDAA85",
  "MIOF21"],
  [],
  ["MTTF01",
  "FMAF01",
  "FMSF80",
  "MIOF02",
  "FMEA10",
  "MIOF25",
  "FMAF05"],
  [],
  ["MMTA05",
  "MIOF30",
  "FMIF01",
  "EXTF45",
  "FRTF05"],
  ["EITF45",
    "MVKN36",
    "FMAN61",
    "FMIN20",
    "FKMA01",
    "EDAA01",
    "MMKF35",
    "MMKN70",
    "FHLF20",
    "FBRF01",
    "FMSN40",
    "FMIN05",
    "FMNF10"
    ]

]
export const F_courses = [
  ["FMAB66",
  "FMAB22",
  "FAFA56",
  "FMAB70",
  "FMEA35",
  "FMAB35",
  "EDAA85",
  "FAFF40"],
  [],
  ["FMAF01",
  "FMSF80",
  "FMFF06",
  "FMAF05",
  "FMAF05",
  "FAFF11",
  "FMAN55",
  "BMEF05",
  "FMEA21"],
  [],
  ["EITF85",
  "FMFF40",
  "FAFF55",
  "MIOA12",
  "FMNN10",
  "FFFF05",
  "FRTF05",
  "FHLF25",
  "FMIF60"],
  ["EDAA01",
    "MIOA12"
  ],

]
export const V_courses = [
  ["FMAB65",
  "VTGA01",
  "FMAB70",
  "FAFA45",
  "VBMA30",
  "FMAB20",
  "VBFA01",
  "VSMA25"],
  [],
  ["FMAB30",
  "MIOA12",
  "FMIF50",
  "VSMA05",
  "FMNF15",
  "VBEA10",
  "VBKF15",
  "VVRA05",
  "VVAF01"],
  [],
  ["VGMF15",
  "VGTF05",
  "VVBF20",
  "FMSF50",
  "VTTF01"],
  ["VBKF01",
    "VBEF02",
    "VVBF10",
    "VSMF05",
    "VTGF01",
    "VBMF05",
    "ASBF10",
    "VTAF01"
  ]
]


export function createHpMap(hpMap: Map<String, number>) {

  hpMap.set("FMAB65", 7.5);
  hpMap.set("EDAA45", 7.5);
  hpMap.set("FMAB70", 7.5);
  hpMap.set("EXTA65", 4.5);
  hpMap.set("FAFA60", 5.0);
  hpMap.set("EDAA01", 7.5);
  hpMap.set("FMAB20", 6.0);
  hpMap.set("EDAA40", 5.0);
  hpMap.set("FMAB30", 6.0);
  hpMap.set("EDAF60", 4.5);
  hpMap.set("EITF65", 9.0);
  hpMap.set("EITF45", 7.5);
  hpMap.set("EITF70", 6.0);
  hpMap.set("FMAF10", 5.0);
  hpMap.set("EDAF05", 5.0);
  hpMap.set("EITA10", 5.0);
  hpMap.set("EDAF95", 5.0);
  hpMap.set("EDAP10", 7.5);
  hpMap.set("FRITF05", 7.5);
  hpMap.set("ETSF25", 7.5);
  hpMap.set("FMSF20", 7.5);
  hpMap.set("EITA25", 7.5);
  hpMap.set("FMNF05", 6.0);
  hpMap.set("FMIF45", 4.0);
  hpMap.set("EITG20", 5.0);
  hpMap.set("EITA50", 7.5);
  

  hpMap.set("VTGA01", 4.0);
  hpMap.set("FAFA46", 7.5);
  hpMap.set("VBMA30", 6.0);
  hpMap.set("VBFA01", 10.0);
  hpMap.set("VSMA25", 7.5);

  hpMap.set("FMIF50", 6.0);
  hpMap.set("EDAA80", 7.5);
  hpMap.set("VSMA06	", 7.5);
  hpMap.set("FMNF16", 5.0);
  hpMap.set("VBEA10", 5.0);
  hpMap.set("VBKF15", 9.0);
  hpMap.set("VVRA05", 9.0);
  hpMap.set("VVAF01", 5.0);

  hpMap.set("VGMF15	", 5.0);
  hpMap.set("VGTF05", 5.0);
  hpMap.set("VVBF20", 5.0);
  hpMap.set("FMSF50", 7.5);
  hpMap.set("VTTF01", 7.5);

  hpMap.set("VBKF01", 7.5);
  hpMap.set("VBEF02", 7.5);
  hpMap.set("VVBF10", 7.5);
  hpMap.set("VSMF05", 7.5);
  hpMap.set("VTGF01", 7.5);
  hpMap.set("VBMF05", 7.5);
  hpMap.set("ASBF10", 7.5);
  hpMap.set("VTAF01", 7.5);


  hpMap.set("MIOA01", 9.0);
  hpMap.set("FAFA76", 7.5);
  hpMap.set("EDAA85", 9.0);
  hpMap.set("MIOF21", 7.5);

  hpMap.set("MTTF01", 5.0);
  hpMap.set("FMAF01", 7.0);
  hpMap.set("FMSF80", 9.0);
  hpMap.set("MIOF02", 9.0);
  hpMap.set("FMEA10", 9.0);
  hpMap.set("MIOF25", 6.0);
  hpMap.set("FMAF05", 7.0);

  hpMap.set("MMTA05", 6.0);
  hpMap.set("MIOF30", 6.0);
  hpMap.set("FMIF01", 6.0);
  hpMap.set("EXTF45", 6.0);
  hpMap.set("FRTF05", 7.5);

  hpMap.set("EITF45", 7.5);
  hpMap.set("MVKN36	", 7.5);
  hpMap.set("FMAN61", 7.5);
  hpMap.set("FMIN20", 7.5);
  hpMap.set("FKMA01", 7.5);
  hpMap.set("MMKF35", 7.5);
  hpMap.set("MMKN70", 7.5);
  hpMap.set("FHLF20", 7.5);
  hpMap.set("FBRF01", 7.5);
  hpMap.set("FMSN40", 9.0);
  hpMap.set("FMIN05", 7.5);
  hpMap.set("FMNF10	", 6.0);

  hpMap.set("FMAB66", 5.0);
  hpMap.set("FMAB22", 7.5);
  hpMap.set("FAFA56", 10.0);
  hpMap.set("FMEA35", 6.0);
  hpMap.set("FMAB35", 7.5);
  hpMap.set("EDAA85", 9.0);
  hpMap.set("FAFF40", 7.5);


}

//KOLLA ALLA FÖR BARA GODKÄNT KURSER
//UPPDATERA hpMap.set