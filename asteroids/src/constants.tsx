import { IAsteroid, ITitleTableAsteroids } from "./interfaces";

export enum ROUTES_LIST {
  asteroids = "/asteroids",
}

export const TITLE_TABLE_ASTEROIDS: ITitleTableAsteroids[] = [
  {
    titleTable: "Название",
    fieldName: "name",
  },
  {
    titleTable: "Абсолютная величина h",
    fieldName: "absolute_magnitude_h",
  },
  {
    titleTable: "Опасный",
    fieldName: "is_potentially_hazardous_asteroid",
  },
  {
    titleTable: "Предполагаемый диаметр",
    fieldName: "estimated_diameter",
  },
  {
    titleTable: "Промах дистанция",
    fieldName: "is_sentry_object",
  },

  // -----------------------------------
  {
    titleTable: "Ближайшая дата сближения",
    fieldName: "close_approach_date",
  },
  {
    titleTable: "Полная дата сближения",
    fieldName: "close_approach_date_full",
  },
  {
    titleTable: "Эпоха, дата сближения",
    fieldName: "epoch_date_close_approach",
  },
  {
    titleTable: "Относительная скорость",
    fieldName: "relative_velocity.kilometers_per_second",
  },
  {
    titleTable: "Расстояние промаха",
    fieldName: "miss_distance.astronomical",
  },
  {
    titleTable: "Орбитальное тело",
    fieldName: "orbiting_body",
  },
];

export const LIST_ASTEROIDS = [
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/3304382?api_key=DEMO_KEY",
    },
    id: "3304382",
    neo_reference_id: "3304382",
    name: "(2005 WR2)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3304382",
    absolute_magnitude_h: 19.52,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.3315545381,
        estimated_diameter_max: 0.7413784854,
      },
      meters: {
        estimated_diameter_min: 331.5545380858,
        estimated_diameter_max: 741.3784854083,
      },
      miles: {
        estimated_diameter_min: 0.2060183749,
        estimated_diameter_max: 0.4606710909,
      },
      feet: {
        estimated_diameter_min: 1087.7773907333,
        estimated_diameter_max: 2432.3441900671,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 11:45",
        epoch_date_close_approach: 1725968700000,
        relative_velocity: {
          kilometers_per_second: "14.6351290871",
          kilometers_per_hour: "52686.4647136903",
          miles_per_hour: "32737.320255015",
        },
        miss_distance: {
          astronomical: "0.3201471511",
          lunar: "124.5372417779",
          kilometers: "47893331.891128157",
          miles: "29759536.4691042866",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/3426807?api_key=DEMO_KEY",
    },
    id: "3426807",
    neo_reference_id: "3426807",
    name: "(2008 RQ24)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3426807",
    absolute_magnitude_h: 20.8,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.1838886721,
        estimated_diameter_max: 0.411187571,
      },
      meters: {
        estimated_diameter_min: 183.8886720703,
        estimated_diameter_max: 411.1875710413,
      },
      miles: {
        estimated_diameter_min: 0.1142630881,
        estimated_diameter_max: 0.2555000322,
      },
      feet: {
        estimated_diameter_min: 603.309310875,
        estimated_diameter_max: 1349.040630575,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 22:34",
        epoch_date_close_approach: 1726007640000,
        relative_velocity: {
          kilometers_per_second: "3.6232299982",
          kilometers_per_hour: "13043.6279936151",
          miles_per_hour: "8104.8031830327",
        },
        miss_distance: {
          astronomical: "0.2467385224",
          lunar: "95.9812852136",
          kilometers: "36911557.397987288",
          miles: "22935778.2209410544",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/3616348?api_key=DEMO_KEY",
    },
    id: "3616348",
    neo_reference_id: "3616348",
    name: "(2012 VH5)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3616348",
    absolute_magnitude_h: 22.49,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0844413128,
        estimated_diameter_max: 0.1888165155,
      },
      meters: {
        estimated_diameter_min: 84.4413127979,
        estimated_diameter_max: 188.8165155254,
      },
      miles: {
        estimated_diameter_min: 0.052469383,
        estimated_diameter_max: 0.1173251071,
      },
      feet: {
        estimated_diameter_min: 277.0384366798,
        estimated_diameter_max: 619.4767767962,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 16:30",
        epoch_date_close_approach: 1725985800000,
        relative_velocity: {
          kilometers_per_second: "7.8735077501",
          kilometers_per_hour: "28344.6279002435",
          miles_per_hour: "17612.2494861263",
        },
        miss_distance: {
          astronomical: "0.3124953362",
          lunar: "121.5606857818",
          kilometers: "46748636.680453894",
          miles: "29048255.8477119772",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/3648844?api_key=DEMO_KEY",
    },
    id: "3648844",
    neo_reference_id: "3648844",
    name: "(2013 TR4)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3648844",
    absolute_magnitude_h: 23.24,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0597798714,
        estimated_diameter_max: 0.1336718562,
      },
      meters: {
        estimated_diameter_min: 59.7798714231,
        estimated_diameter_max: 133.6718561883,
      },
      miles: {
        estimated_diameter_min: 0.0371454785,
        estimated_diameter_max: 0.083059815,
      },
      feet: {
        estimated_diameter_min: 196.1281933598,
        estimated_diameter_max: 438.5559726568,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 00:30",
        epoch_date_close_approach: 1725928200000,
        relative_velocity: {
          kilometers_per_second: "9.1901151332",
          kilometers_per_hour: "33084.4144796243",
          miles_per_hour: "20557.3685415199",
        },
        miss_distance: {
          astronomical: "0.2288848305",
          lunar: "89.0361990645",
          kilometers: "34240683.118111035",
          miles: "21276173.900300883",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/3826885?api_key=DEMO_KEY",
    },
    id: "3826885",
    neo_reference_id: "3826885",
    name: "(2018 QR)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3826885",
    absolute_magnitude_h: 24.7,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0305179233,
        estimated_diameter_max: 0.0682401509,
      },
      meters: {
        estimated_diameter_min: 30.5179232594,
        estimated_diameter_max: 68.2401509401,
      },
      miles: {
        estimated_diameter_min: 0.0189629525,
        estimated_diameter_max: 0.0424024508,
      },
      feet: {
        estimated_diameter_min: 100.1244233463,
        estimated_diameter_max: 223.8850168104,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 18:37",
        epoch_date_close_approach: 1725993420000,
        relative_velocity: {
          kilometers_per_second: "10.7313597",
          kilometers_per_hour: "38632.8949200436",
          miles_per_hour: "24004.9785129571",
        },
        miss_distance: {
          astronomical: "0.2945986168",
          lunar: "114.5988619352",
          kilometers: "44071325.578226216",
          miles: "27384651.8711291408",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54016590?api_key=DEMO_KEY",
    },
    id: "54016590",
    neo_reference_id: "54016590",
    name: "(2020 HP1)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54016590",
    absolute_magnitude_h: 28.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0050647146,
        estimated_diameter_max: 0.0113250461,
      },
      meters: {
        estimated_diameter_min: 5.0647145883,
        estimated_diameter_max: 11.3250461062,
      },
      miles: {
        estimated_diameter_min: 0.0031470668,
        estimated_diameter_max: 0.0070370552,
      },
      feet: {
        estimated_diameter_min: 16.61651821,
        estimated_diameter_max: 37.155664267,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 00:26",
        epoch_date_close_approach: 1725927960000,
        relative_velocity: {
          kilometers_per_second: "9.7341157063",
          kilometers_per_hour: "35042.8165427157",
          miles_per_hour: "21774.2434234446",
        },
        miss_distance: {
          astronomical: "0.2072319934",
          lunar: "80.6132454326",
          kilometers: "31001464.808494058",
          miles: "19263416.9754836804",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54053850?api_key=DEMO_KEY",
    },
    id: "54053850",
    neo_reference_id: "54053850",
    name: "(2020 PM7)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54053850",
    absolute_magnitude_h: 22.31,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0917392059,
        estimated_diameter_max: 0.2051351006,
      },
      meters: {
        estimated_diameter_min: 91.7392059155,
        estimated_diameter_max: 205.1351006288,
      },
      miles: {
        estimated_diameter_min: 0.0570040821,
        estimated_diameter_max: 0.1274650026,
      },
      feet: {
        estimated_diameter_min: 300.9816563357,
        estimated_diameter_max: 673.0154435471,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 00:16",
        epoch_date_close_approach: 1725927360000,
        relative_velocity: {
          kilometers_per_second: "10.3710088411",
          kilometers_per_hour: "37335.6318280464",
          miles_per_hour: "23198.9096767103",
        },
        miss_distance: {
          astronomical: "0.0762722927",
          lunar: "29.6699218603",
          kilometers: "11410172.527936549",
          miles: "7089952.4433964162",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54194978?api_key=DEMO_KEY",
    },
    id: "54194978",
    neo_reference_id: "54194978",
    name: "(2021 RU7)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54194978",
    absolute_magnitude_h: 23.47,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0537718498,
        estimated_diameter_max: 0.1202375114,
      },
      meters: {
        estimated_diameter_min: 53.7718497693,
        estimated_diameter_max: 120.23751136,
      },
      miles: {
        estimated_diameter_min: 0.0334122681,
        estimated_diameter_max: 0.0747121027,
      },
      feet: {
        estimated_diameter_min: 176.416835597,
        estimated_diameter_max: 394.4800367703,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 20:52",
        epoch_date_close_approach: 1726001520000,
        relative_velocity: {
          kilometers_per_second: "11.658214134",
          kilometers_per_hour: "41969.5708822506",
          miles_per_hour: "26078.2591962518",
        },
        miss_distance: {
          astronomical: "0.2540391989",
          lunar: "98.8212483721",
          kilometers: "38003723.051946343",
          miles: "23614418.4893438134",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54239834?api_key=DEMO_KEY",
    },
    id: "54239834",
    neo_reference_id: "54239834",
    name: "(2022 BA1)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54239834",
    absolute_magnitude_h: 22.58,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0810130488,
        estimated_diameter_max: 0.1811506842,
      },
      meters: {
        estimated_diameter_min: 81.0130488243,
        estimated_diameter_max: 181.1506842357,
      },
      miles: {
        estimated_diameter_min: 0.0503391592,
        estimated_diameter_max: 0.1125617818,
      },
      feet: {
        estimated_diameter_min: 265.7908511048,
        estimated_diameter_max: 594.3264108678,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 13:13",
        epoch_date_close_approach: 1725973980000,
        relative_velocity: {
          kilometers_per_second: "24.9481370409",
          kilometers_per_hour: "89813.293347231",
          miles_per_hour: "55806.4877467836",
        },
        miss_distance: {
          astronomical: "0.3591632805",
          lunar: "139.7145161145",
          kilometers: "53730061.745012535",
          miles: "33386312.224481583",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54293318?api_key=DEMO_KEY",
    },
    id: "54293318",
    neo_reference_id: "54293318",
    name: "(2020 CO8)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54293318",
    absolute_magnitude_h: 28,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0066765941,
        estimated_diameter_max: 0.0149293183,
      },
      meters: {
        estimated_diameter_min: 6.676594135,
        estimated_diameter_max: 14.9293183439,
      },
      miles: {
        estimated_diameter_min: 0.004148642,
        estimated_diameter_max: 0.0092766455,
      },
      feet: {
        estimated_diameter_min: 21.9048371017,
        estimated_diameter_max: 48.9807047955,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 19:39",
        epoch_date_close_approach: 1725997140000,
        relative_velocity: {
          kilometers_per_second: "9.0363532405",
          kilometers_per_hour: "32530.8716658842",
          miles_per_hour: "20213.4185637268",
        },
        miss_distance: {
          astronomical: "0.1064886516",
          lunar: "41.4240854724",
          kilometers: "15930475.458532092",
          miles: "9898738.4393311896",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54358767?api_key=DEMO_KEY",
    },
    id: "54358767",
    neo_reference_id: "54358767",
    name: "(2023 JA4)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54358767",
    absolute_magnitude_h: 23.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0608912622,
        estimated_diameter_max: 0.1361570015,
      },
      meters: {
        estimated_diameter_min: 60.8912622106,
        estimated_diameter_max: 136.1570015386,
      },
      miles: {
        estimated_diameter_min: 0.0378360645,
        estimated_diameter_max: 0.0846040122,
      },
      feet: {
        estimated_diameter_min: 199.7744887109,
        estimated_diameter_max: 446.7093369279,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 00:47",
        epoch_date_close_approach: 1725929220000,
        relative_velocity: {
          kilometers_per_second: "19.6751651559",
          kilometers_per_hour: "70830.5945611698",
          miles_per_hour: "44011.3769371891",
        },
        miss_distance: {
          astronomical: "0.4669829344",
          lunar: "181.6563614816",
          kilometers: "69859652.312589728",
          miles: "43408775.0553971264",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/2662203?api_key=DEMO_KEY",
    },
    id: "2662203",
    neo_reference_id: "2662203",
    name: "662203 (2005 WR2)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2662203",
    absolute_magnitude_h: 19.48,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.3377185972,
        estimated_diameter_max: 0.7551617405,
      },
      meters: {
        estimated_diameter_min: 337.7185971644,
        estimated_diameter_max: 755.1617405255,
      },
      miles: {
        estimated_diameter_min: 0.2098485424,
        estimated_diameter_max: 0.4692356059,
      },
      feet: {
        estimated_diameter_min: 1108.0006823209,
        estimated_diameter_max: 2477.5648447858,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 11:45",
        epoch_date_close_approach: 1725968700000,
        relative_velocity: {
          kilometers_per_second: "14.6351306674",
          kilometers_per_hour: "52686.4704025748",
          miles_per_hour: "32737.3237898666",
        },
        miss_distance: {
          astronomical: "0.320147172",
          lunar: "124.537249908",
          kilometers: "47893335.01772364",
          miles: "29759538.411880632",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54440648?api_key=DEMO_KEY",
    },
    id: "54440648",
    neo_reference_id: "54440648",
    name: "(2024 JB6)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54440648",
    absolute_magnitude_h: 19.95,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.2719912773,
        estimated_diameter_max: 0.6081909854,
      },
      meters: {
        estimated_diameter_min: 271.9912773482,
        estimated_diameter_max: 608.1909854376,
      },
      miles: {
        estimated_diameter_min: 0.169007492,
        estimated_diameter_max: 0.3779122408,
      },
      feet: {
        estimated_diameter_min: 892.3598623751,
        estimated_diameter_max: 1995.3773126632,
      },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 05:17",
        epoch_date_close_approach: 1725945420000,
        relative_velocity: {
          kilometers_per_second: "18.9822397677",
          kilometers_per_hour: "68336.0631636761",
          miles_per_hour: "42461.3721363408",
        },
        miss_distance: {
          astronomical: "0.3625428936",
          lunar: "141.0291856104",
          kilometers: "54235644.666196632",
          miles: "33700466.8841602416",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54466216?api_key=DEMO_KEY",
    },
    id: "54466216",
    neo_reference_id: "54466216",
    name: "(2024 PZ5)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54466216",
    absolute_magnitude_h: 23.357,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0566441386,
        estimated_diameter_max: 0.1266601444,
      },
      meters: {
        estimated_diameter_min: 56.6441385787,
        estimated_diameter_max: 126.6601443889,
      },
      miles: {
        estimated_diameter_min: 0.035197025,
        estimated_diameter_max: 0.0787029406,
      },
      feet: {
        estimated_diameter_min: 185.8403556146,
        estimated_diameter_max: 415.5516681169,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 06:47",
        epoch_date_close_approach: 1725950820000,
        relative_velocity: {
          kilometers_per_second: "11.1375858736",
          kilometers_per_hour: "40095.3091449132",
          miles_per_hour: "24913.6658406268",
        },
        miss_distance: {
          astronomical: "0.0882165124",
          lunar: "34.3162233236",
          kilometers: "13197002.353868588",
          miles: "8200237.0126509944",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54467607?api_key=DEMO_KEY",
    },
    id: "54467607",
    neo_reference_id: "54467607",
    name: "(2024 RH)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467607",
    absolute_magnitude_h: 25.605,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0201166183,
        estimated_diameter_max: 0.0449821261,
      },
      meters: {
        estimated_diameter_min: 20.1166183497,
        estimated_diameter_max: 44.9821261073,
      },
      miles: {
        estimated_diameter_min: 0.0124998833,
        estimated_diameter_max: 0.0279505887,
      },
      feet: {
        estimated_diameter_min: 65.9994061463,
        estimated_diameter_max: 147.5791586177,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 15:25",
        epoch_date_close_approach: 1725981900000,
        relative_velocity: {
          kilometers_per_second: "11.3577749627",
          kilometers_per_hour: "40887.9898655587",
          miles_per_hour: "25406.2068139634",
        },
        miss_distance: {
          astronomical: "0.0428476819",
          lunar: "16.6677482591",
          kilometers: "6409921.946677553",
          miles: "3982940.8062461114",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54468526?api_key=DEMO_KEY",
    },
    id: "54468526",
    neo_reference_id: "54468526",
    name: "(2024 RG3)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468526",
    absolute_magnitude_h: 24.468,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0339590065,
        estimated_diameter_max: 0.0759346471,
      },
      meters: {
        estimated_diameter_min: 33.9590065397,
        estimated_diameter_max: 75.9346470712,
      },
      miles: {
        estimated_diameter_min: 0.0211011419,
        estimated_diameter_max: 0.0471835876,
      },
      feet: {
        estimated_diameter_min: 111.4140670159,
        estimated_diameter_max: 249.1294274972,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 01:40",
        epoch_date_close_approach: 1725932400000,
        relative_velocity: {
          kilometers_per_second: "7.3248487467",
          kilometers_per_hour: "26369.4554879877",
          miles_per_hour: "16384.954161411",
        },
        miss_distance: {
          astronomical: "0.1636368676",
          lunar: "63.6547414964",
          kilometers: "24479726.846432012",
          miles: "15210996.9190732856",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54468530?api_key=DEMO_KEY",
    },
    id: "54468530",
    neo_reference_id: "54468530",
    name: "(2024 RM3)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468530",
    absolute_magnitude_h: 26.448,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0136444168,
        estimated_diameter_max: 0.0305098434,
      },
      meters: {
        estimated_diameter_min: 13.6444167732,
        estimated_diameter_max: 30.5098434183,
      },
      miles: {
        estimated_diameter_min: 0.0084782449,
        estimated_diameter_max: 0.0189579319,
      },
      feet: {
        estimated_diameter_min: 44.7651483263,
        estimated_diameter_max: 100.0979146804,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 15:52",
        epoch_date_close_approach: 1725983520000,
        relative_velocity: {
          kilometers_per_second: "6.1513326605",
          kilometers_per_hour: "22144.7975776689",
          miles_per_hour: "13759.916028191",
        },
        miss_distance: {
          astronomical: "0.0122812832",
          lunar: "4.7774191648",
          kilometers: "1837253.807586784",
          miles: "1141616.5785702592",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54469027?api_key=DEMO_KEY",
    },
    id: "54469027",
    neo_reference_id: "54469027",
    name: "(2024 RA7)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469027",
    absolute_magnitude_h: 24.457,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0341314687,
        estimated_diameter_max: 0.0763202842,
      },
      meters: {
        estimated_diameter_min: 34.1314686955,
        estimated_diameter_max: 76.3202841751,
      },
      miles: {
        estimated_diameter_min: 0.0212083048,
        estimated_diameter_max: 0.0474232113,
      },
      feet: {
        estimated_diameter_min: 111.979887755,
        estimated_diameter_max: 250.394641133,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 02:55",
        epoch_date_close_approach: 1725936900000,
        relative_velocity: {
          kilometers_per_second: "14.0025424515",
          kilometers_per_hour: "50409.1528254122",
          miles_per_hour: "31322.287209768",
        },
        miss_distance: {
          astronomical: "0.1085906788",
          lunar: "42.2417740532",
          kilometers: "16244934.250334156",
          miles: "10094134.0719411128",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/54469033?api_key=DEMO_KEY",
    },
    id: "54469033",
    neo_reference_id: "54469033",
    name: "(2024 RG7)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469033",
    absolute_magnitude_h: 24.551,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0326854882,
        estimated_diameter_max: 0.0730869736,
      },
      meters: {
        estimated_diameter_min: 32.6854882382,
        estimated_diameter_max: 73.0869735783,
      },
      miles: {
        estimated_diameter_min: 0.0203098145,
        estimated_diameter_max: 0.0454141259,
      },
      feet: {
        estimated_diameter_min: 107.2358572313,
        estimated_diameter_max: 239.7866663946,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-10",
        close_approach_date_full: "2024-Sep-10 05:25",
        epoch_date_close_approach: 1725945900000,
        relative_velocity: {
          kilometers_per_second: "12.4510963004",
          kilometers_per_hour: "44823.9466813741",
          miles_per_hour: "27851.8573143238",
        },
        miss_distance: {
          astronomical: "0.0505171204",
          lunar: "19.6511598356",
          kilometers: "7557253.610373548",
          miles: "4695859.6435810424",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: true,
    sentry_data:
      "http://api.nasa.gov/neo/rest/v1/neo/sentry/54469033?api_key=DEMO_KEY",
  },
];

export const NAVIGATE_TITLES = [
  {
    id: 1,
    title: "Астероиды",
  },
  {
    id: 2,
    title: "По дате сближения",
  },
  {
    id: 3,
    title: "Поиск",
  },
];

export const LOGO_NASA = {
  path: "./src/assets/img/nasa-logo.svg",
  alt: "logo nasa",
};

export const DIAMETER_SIZES = {
  kilometers: "Километры",
  meters: "Метры",
  miles: "Мили",
  feet: "Фут",
};

export const RELATIVE_SPEED_UNITS = {
  kilometers_per_second: "км/с",
  kilometers_per_hour: "км/ч",
  miles_per_hour: "миль/ч",
};

export const UNITS_MEASUREMENT_SLIP_DISTANCE = {
  astronomical: "астрономическое",
  lunar: "лунное",
  kilometers: "км",
  miles: "миль",
};
