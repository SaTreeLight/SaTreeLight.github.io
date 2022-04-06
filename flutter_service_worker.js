'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5cc95e57ac31be366b9a35314372ea18",
"index.html": "f14313a0e1008b6ad348a34a84ea7890",
"/": "f14313a0e1008b6ad348a34a84ea7890",
"main.dart.js": "c68aaf59396c499c31c352f22ee47807",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "466521f7eaa8d4e94075577c1b709b3c",
"assets/AssetManifest.json": "cd1e1531bc9a3ce5a1b18d9ba9ec018b",
"assets/NOTICES": "57d92b058fe1bbbe114104a6c1521c43",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/happiness-reaction/sadface.png": "2b8a8b6c44c6c9c8ececc1c42232a367",
"assets/assets/images/happiness-reaction/smileface.png": "2925173ac985c7ec7cbb313154164905",
"assets/assets/images/happiness-reaction/neutralface.png": "6a09ef7702eac81b0feabe3b10087929",
"assets/assets/images_hl_veg_only/Cleveland,%2520OH%2520hl_veg_only.png": "2716433997435c73dcbb1310af0df221",
"assets/assets/images_hl_veg_only/Chattanooga,%2520TN%2520hl_veg_only.png": "e548fab9953ab55027b3e054668af61f",
"assets/assets/images_hl_veg_only/San%2520Antonio,%2520TX%2520hl_veg_only.png": "3665053e6b74fd5909602a5c78ca5ebd",
"assets/assets/images_hl_veg_only/Tacoma,%2520WA%2520hl_veg_only.png": "91fdf6024aed9e33b6864facdff563d8",
"assets/assets/images_hl_veg_only/Irvine,%2520CA%2520hl_veg_only.png": "a28225253e497ea89274106f6cbe6c08",
"assets/assets/images_hl_veg_only/Santa%2520Clarita,%2520CA%2520hl_veg_only.png": "158dd68325de2dfb8120b3e313090fe0",
"assets/assets/images_hl_veg_only/Kansas%2520City,%2520MO%2520hl_veg_only.png": "154c9eb6e81f7fc24ff55de802a0342a",
"assets/assets/images_hl_veg_only/Cincinnati,%2520OH%2520hl_veg_only.png": "721eff61c4373f3f297ca8fb8cfb787f",
"assets/assets/images_hl_veg_only/Ontario,%2520CA%2520hl_veg_only.png": "74c71effb73c10b1ab18aa18a6445d09",
"assets/assets/images_hl_veg_only/Laredo,%2520TX%2520hl_veg_only.png": "522c5971940bcab9fd5905922bb23f25",
"assets/assets/images_hl_veg_only/Virginia%2520Beach,%2520VA%2520hl_veg_only.png": "c90332cc34bf15f7bb0040e8647c2097",
"assets/assets/images_hl_veg_only/Akron,%2520OH%2520hl_veg_only.png": "be20883be2dca2e178ddb46333774d32",
"assets/assets/images_hl_veg_only/Buffalo,%2520NY%2520hl_veg_only.png": "0f3fea609c8e39048188891dfe12eb9f",
"assets/assets/images_hl_veg_only/Fresno,%2520CA%2520hl_veg_only.png": "5cc27dac53137c835d18be3934c35c83",
"assets/assets/images_hl_veg_only/Albuquerque,%2520NM%2520hl_veg_only.png": "768d991e4587fbc73247ea14eeedd70d",
"assets/assets/images_hl_veg_only/Santa%2520Rosa,%2520CA%2520hl_veg_only.png": "eea325ca6b4462a7ed7abc9573b60cef",
"assets/assets/images_hl_veg_only/Lincoln,%2520NE%2520hl_veg_only.png": "5a525dd75e1e49bae1704868b85e3ea6",
"assets/assets/images_hl_veg_only/Knoxville,%2520TN%2520hl_veg_only.png": "588066d925ec52e3cb40630d8f0c4a16",
"assets/assets/images_hl_veg_only/Pearl%2520City,%2520HI%2520hl_veg_only.png": "5e71e7543175e1cfa3d7902ad745ad20",
"assets/assets/images_hl_veg_only/Seattle,%2520WA%2520hl_veg_only.png": "fbbdf73f5c3c1d1bcd6876930b5d5098",
"assets/assets/images_hl_veg_only/Madison,%2520WI%2520hl_veg_only.png": "93f2f8aebe1395286e6f3240b643b264",
"assets/assets/images_hl_veg_only/Miami,%2520FL%2520hl_veg_only.png": "c9ea8078a01b82f8c0c9ac86cec8fa84",
"assets/assets/images_hl_veg_only/Colorado%2520Springs,%2520CO%2520hl_veg_only.png": "37139693a0f862bae8904635337fe934",
"assets/assets/images_hl_veg_only/Pembroke%2520Pines,%2520FL%2520hl_veg_only.png": "403f7bd8d4997d79623ede866a9a96a9",
"assets/assets/images_hl_veg_only/Greensboro,%2520NC%2520hl_veg_only.png": "3774661ce40b6a29555de78572f6e8c1",
"assets/assets/images_hl_veg_only/Yonkers,%2520NY%2520hl_veg_only.png": "f9186f23eb55b2b2cdc3283476ae679c",
"assets/assets/images_hl_veg_only/Charleston,%2520WV%2520hl_veg_only.png": "179f90e2b30317252a958532d190e8d7",
"assets/assets/images_hl_veg_only/El%2520Paso,%2520TX%2520hl_veg_only.png": "68651f6742a33034234e87c71fd81794",
"assets/assets/images_hl_veg_only/Las%2520Cruces,%2520NM%2520hl_veg_only.png": "acd08637862ba57ebf1f28f0f2390ba5",
"assets/assets/images_hl_veg_only/North%2520Las%2520Vegas,%2520NV%2520hl_veg_only.png": "9f0289a0f0f48ead25d3a950f36d9881",
"assets/assets/images_hl_veg_only/Norfolk,%2520VA%2520hl_veg_only.png": "f433a1c78b28bb3acec2cf503391657a",
"assets/assets/images_hl_veg_only/Little%2520Rock,%2520AR%2520hl_veg_only.png": "40a7f84c296ee2dd39ba10e6978db4a6",
"assets/assets/images_hl_veg_only/Huntington,%2520WV%2520hl_veg_only.png": "558240e7309ed9ee1bb266da0e1f327e",
"assets/assets/images_hl_veg_only/Hialeah,%2520FL%2520hl_veg_only.png": "df0e0fc1a84f0e5e4da1e4c38e9924c3",
"assets/assets/images_hl_veg_only/Milwaukee,%2520WI%2520hl_veg_only.png": "d40f4bd95ca8a2f08979f97b919d5071",
"assets/assets/images_hl_veg_only/Rancho%2520Cucamonga,%2520CA%2520hl_veg_only.png": "2e19f8219c7fdef2e07492bde6fe6811",
"assets/assets/images_hl_veg_only/Rochester,%2520NY%2520hl_veg_only.png": "0555a5b7d210113c4358926dcdffc3cb",
"assets/assets/images_hl_veg_only/San%2520Francisco,%2520CA%2520hl_veg_only.png": "fc5c88de0919f39fa24bf22b2f8c2a75",
"assets/assets/images_hl_veg_only/Glendale,%2520CA%2520hl_veg_only.png": "522486a209beefc9118efdfda02e86a6",
"assets/assets/images_hl_veg_only/Charleston,%2520SC%2520hl_veg_only.png": "7791f70fc61043ef1c3c1d6327639b6d",
"assets/assets/images_hl_veg_only/Columbia,%2520MD%2520hl_veg_only.png": "4585b92f41168f4489ea1a8af6aed9ba",
"assets/assets/images_hl_veg_only/Aurora,%2520CO%2520hl_veg_only.png": "41d0a70f39af536e0725082743cc53db",
"assets/assets/images_hl_veg_only/Minneapolis,%2520MN%2520hl_veg_only.png": "8d42089f162310065d441d7074172303",
"assets/assets/images_hl_veg_only/Austin,%2520TX%2520hl_veg_only.png": "d10e1f184886420b63fba686c8e55941",
"assets/assets/images_hl_veg_only/Des%2520Moines,%2520IA%2520hl_veg_only.png": "10ce3f1cc2ae6c600ce7856ce535ba70",
"assets/assets/images_hl_veg_only/Nashville,%2520TN%2520hl_veg_only.png": "967eff930ca3a1e5387964f49aca1acb",
"assets/assets/images_hl_veg_only/West%2520Valley%2520City,%2520UT%2520hl_veg_only.png": "d2dabab9c749bd1029690c4de8ad9bb6",
"assets/assets/images_hl_veg_only/Boston,%2520MA%2520hl_veg_only.png": "eeb8a6b3101c46c3cae4021667bc9e26",
"assets/assets/images_hl_veg_only/Rapid%2520City,%2520SD%2520hl_veg_only.png": "1ec80d7e0298eec144c775338f2065b8",
"assets/assets/images_hl_veg_only/Scottsdale,%2520AZ%2520hl_veg_only.png": "9dafcb53e556d0dcd57f1045d609242a",
"assets/assets/images_hl_veg_only/Huntsville,%2520AL%2520hl_veg_only.png": "4a529dd8f8f998b20597e0e956463326",
"assets/assets/images_hl_veg_only/Fort%2520Worth,%2520TX%2520hl_veg_only.png": "18daaceeeb42b7c52d16e909a6166ad3",
"assets/assets/images_hl_veg_only/Long%2520Beach,%2520CA%2520hl_veg_only.png": "240071a04a09ef95c9e8601449b1fea4",
"assets/assets/images_hl_veg_only/Charlotte,%2520NC%2520hl_veg_only.png": "e07ced5b9933c06264d682af4a62b0a1",
"assets/assets/images_hl_veg_only/Santa%2520Ana,%2520CA%2520hl_veg_only.png": "ac35321e08ca278a36f7655d3b92ddf1",
"assets/assets/images_hl_veg_only/Henderson,%2520NV%2520hl_veg_only.png": "43ba9d56c815645d577fe08c6968043e",
"assets/assets/images_hl_veg_only/San%2520Diego,%2520CA%2520hl_veg_only.png": "351331ed2b155dc2c30ec2dfb3966583",
"assets/assets/images_hl_veg_only/Cedar%2520Rapids,%2520IA%2520hl_veg_only.png": "5818b1eb96b34139cad7a768673d8219",
"assets/assets/images_hl_veg_only/New%2520Haven,%2520CT%2520hl_veg_only.png": "145847843aa0421ccc37f0695cb88a7a",
"assets/assets/images_hl_veg_only/Winston-Salem,%2520NC%2520hl_veg_only.png": "80657b2169e472e304c88c45c83cce8e",
"assets/assets/images_hl_veg_only/Lexington-Fayette,%2520KY%2520hl_veg_only.png": "c6ee936030a081b076d41e518ff0717e",
"assets/assets/images_hl_veg_only/Durham,%2520NC%2520hl_veg_only.png": "080806bc44b79d38df9b57ebd09c4feb",
"assets/assets/images_hl_veg_only/Fort%2520Wayne,%2520IN%2520hl_veg_only.png": "057e6ed01a127fef0f70f4ba4a32313e",
"assets/assets/images_hl_veg_only/Grand%2520Prairie,%2520TX%2520hl_veg_only.png": "91d42a4d35a29f63a8872fdf3fa5708c",
"assets/assets/images_hl_veg_only/Plano,%2520TX%2520hl_veg_only.png": "ccfd03b7aeead3c4e67f1791ef4b679b",
"assets/assets/images_hl_veg_only/Arlington,%2520TX%2520hl_veg_only.png": "6308b2fe7f19b4b520fd97ed9197902f",
"assets/assets/images_hl_veg_only/Bakersfield,%2520CA%2520hl_veg_only.png": "80a43badb91f6e2daf38f6aa3327e7c0",
"assets/assets/images_hl_veg_only/Casper,%2520WY%2520hl_veg_only.png": "779a0c82fced8fb7018a06f071248c7c",
"assets/assets/images_hl_veg_only/Columbus,%2520OH%2520hl_veg_only.png": "f69ba1b2bb47d45888fc9b1b902c1025",
"assets/assets/images_hl_veg_only/Anaheim,%2520CA%2520hl_veg_only.png": "1596a1acc80efe35ad3b79894a7cf09e",
"assets/assets/images_hl_veg_only/Fargo,%2520ND%2520hl_veg_only.png": "6d40747e80d1f7515ce352df8d555ab2",
"assets/assets/images_hl_veg_only/Memphis,%2520TN%2520hl_veg_only.png": "34130826515391ce6f28b5b1737709d1",
"assets/assets/images_hl_veg_only/Amarillo,%2520TX%2520hl_veg_only.png": "a917a3ca5dffc799469ab6cab6eb49ea",
"assets/assets/images_hl_veg_only/Atlanta,%2520GA%2520hl_veg_only.png": "68606a2972c1fb5350c5e93101b59d4b",
"assets/assets/images_hl_veg_only/Toledo,%2520OH%2520hl_veg_only.png": "cbb60cca3cedb8842334543d7225b325",
"assets/assets/images_hl_veg_only/Billings,%2520MT%2520hl_veg_only.png": "90ad2559ceea2bba5fda7e173cd9443a",
"assets/assets/images_hl_veg_only/Gilbert,%2520AZ%2520hl_veg_only.png": "b91d8cdda1a438228dbffced74295f85",
"assets/assets/images_hl_veg_only/Riverside,%2520CA%2520hl_veg_only.png": "cd96a4c01973e3471d608e9c92a832d9",
"assets/assets/images_hl_veg_only/Richmond,%2520VA%2520hl_veg_only.png": "e89e2e9497f7d21ec5e1cd3a0a1203d4",
"assets/assets/images_hl_veg_only/Providence,%2520RI%2520hl_veg_only.png": "e3a4f8e50fa270cfe2b8ff93cacb256b",
"assets/assets/images_hl_veg_only/Montgomery,%2520AL%2520hl_veg_only.png": "be55fb40aa45ec84ad06d9c903d7b7c0",
"assets/assets/images_hl_veg_only/New%2520York,%2520NY%2520hl_veg_only.png": "bed266857947bce7b9743f24eb0b1374",
"assets/assets/images_hl_veg_only/Garden%2520Grove,%2520CA%2520hl_veg_only.png": "d3a2602a8d76152fa5b273be013fb927",
"assets/assets/images_hl_veg_only/Oklahoma%2520City,%2520OK%2520hl_veg_only.png": "a453a69d8bce741d0ed58ac7efcc68e7",
"assets/assets/images_hl_veg_only/Tampa,%2520FL%2520hl_veg_only.png": "d9555ed52c1335bd2d801c2dfc619edc",
"assets/assets/images_hl_veg_only/Fort%2520Lauderdale,%2520FL%2520hl_veg_only.png": "a0f064cbe3643e7f40cc3c698038c546",
"assets/assets/images_hl_veg_only/Oxnard,%2520CA%2520hl_veg_only.png": "a0db8c24a26bf8b4c29157da20cbc7ad",
"assets/assets/images_hl_veg_only/St.%2520Petersburg,%2520FL%2520hl_veg_only.png": "08635499eea958c88d270ccc9d0265be",
"assets/assets/images_hl_veg_only/Fremont,%2520CA%2520hl_veg_only.png": "e571fa7c780b52cbdafe9b155bc6d665",
"assets/assets/images_hl_veg_only/Tulsa,%2520OK%2520hl_veg_only.png": "b67ab525c59b7868947e53c4665c86cf",
"assets/assets/images_hl_veg_only/Spokane,%2520WA%2520hl_veg_only.png": "f1b993def850291d1820dbf961f3917e",
"assets/assets/images_hl_veg_only/Jackson,%2520MS%2520hl_veg_only.png": "7327538b42bfc4f7605b46973aa71bfd",
"assets/assets/images_hl_veg_only/Springfield,%2520MO%2520hl_veg_only.png": "6e8748fb1079b3fac768ef71a0ca2739",
"assets/assets/images_hl_veg_only/Missoula,%2520MT%2520hl_veg_only.png": "418fadacffff980bbdd5ac204b0f60e8",
"assets/assets/images_hl_veg_only/Philadelphia,%2520PA%2520hl_veg_only.png": "97f9d461c1d280aea7a1ce66c5746cc5",
"assets/assets/images_hl_veg_only/Baton%2520Rouge,%2520LA%2520hl_veg_only.png": "9d6b0553f2cd18bb1dca9c51ce385f93",
"assets/assets/images_hl_veg_only/Garland,%2520TX%2520hl_veg_only.png": "529e75004672c2f4c2f5ed6f40dfebda",
"assets/assets/images_hl_veg_only/Tempe,%2520AZ%2520hl_veg_only.png": "8ef497afe9e84bbe62c811c675efd6c4",
"assets/assets/images_hl_veg_only/Burlington,%2520VT%2520hl_veg_only.png": "00685a2e1aa6862eaf9d8afd0e02fdf6",
"assets/assets/images_hl_veg_only/Las%2520Vegas,%2520NV%2520hl_veg_only.png": "6dee17abb7a1dcff815bfdab7abcb218",
"assets/assets/images_hl_veg_only/Houston,%2520TX%2520hl_veg_only.png": "0b851c9f82c5f4054a069816c2918154",
"assets/assets/images_hl_veg_only/Nashua,%2520NH%2520hl_veg_only.png": "f8cee619d2b1b9de001c01048caf2488",
"assets/assets/images_hl_veg_only/Portland,%2520OR%2520hl_veg_only.png": "895739bbfaf7004c88d8fd3c8f13c6c5",
"assets/assets/images_hl_veg_only/Augusta,%2520GA%2520hl_veg_only.png": "75fa6d8242bb4695dfeb8198bbc61497",
"assets/assets/images_hl_veg_only/Chula%2520Vista,%2520CA%2520hl_veg_only.png": "86926c99e8040e63d5fde73566e270a7",
"assets/assets/images_hl_veg_only/Oakland,%2520CA%2520hl_veg_only.png": "1dffd2ab66b42e07b10f1094eda43cbf",
"assets/assets/images_hl_veg_only/Stockton,%2520CA%2520hl_veg_only.png": "b77498871ec5f7f632af900c022a1f83",
"assets/assets/images_hl_veg_only/Bridgeport,%2520CT%2520hl_veg_only.png": "556c032c8785b32f4f6fadda6084cb76",
"assets/assets/images_hl_veg_only/Irving,%2520TX%2520hl_veg_only.png": "e747d068d051541e08aaa4192997d553",
"assets/assets/images_hl_veg_only/Louisville,%2520KY%2520hl_veg_only.png": "92ac9f5c59edbe11ad3146f59f7db0f1",
"assets/assets/images_hl_veg_only/Reno,%2520NV%2520hl_veg_only.png": "acb35dba11aedd3ec5fa19507e7d640d",
"assets/assets/images_hl_veg_only/Birmingham,%2520AL%2520hl_veg_only.png": "99def67438ec670a9f8594c779a279a3",
"assets/assets/images_hl_veg_only/Salt%2520Lake%2520City,%2520UT%2520hl_veg_only.png": "a8c4514d53b36cb2693af875fcc7f3c9",
"assets/assets/images_hl_veg_only/Brownsville,%2520TX%2520hl_veg_only.png": "8241d3f002db7e58e590f8edd81c4873",
"assets/assets/images_hl_veg_only/Corpus%2520Christi,%2520TX%2520hl_veg_only.png": "bac378cb34ae1fa61cbc79cc50b8a21b",
"assets/assets/images_hl_veg_only/Fort%2520Smith,%2520AR%2520hl_veg_only.png": "df35f22ea50af9dcbed2fba54d9e0604",
"assets/assets/images_hl_veg_only/Huntington%2520Beach,%2520CA%2520hl_veg_only.png": "c9ebf9fb7bf9133615cd9c007bd6695a",
"assets/assets/images_hl_veg_only/Los%2520Angeles,%2520CA%2520hl_veg_only.png": "f01f87ede64b1c1538f7af8eb57ae79c",
"assets/assets/images_hl_veg_only/Portland,%2520ME%2520hl_veg_only.png": "c4f3e1c51347bd6ed5b615eb161b2966",
"assets/assets/images_hl_veg_only/Omaha,%2520NE%2520hl_veg_only.png": "55cd97d6bfda4ad29a3686ed70f22cab",
"assets/assets/images_hl_veg_only/San%2520Jose,%2520CA%2520hl_veg_only.png": "a5f1cc0bb235b6e3e05429925c263974",
"assets/assets/images_hl_veg_only/San%2520Bernardino,%2520CA%2520hl_veg_only.png": "ea964ce482fce0fc32942d879e90810d",
"assets/assets/images_hl_veg_only/Honolulu,%2520HI%2520hl_veg_only.png": "1f07851aa5005614b43439d9a5a46c6e",
"assets/assets/images_hl_veg_only/Salem,%2520OR%2520hl_veg_only.png": "9d0aecd92b2e5daf219d4f585c0ef001",
"assets/assets/images_hl_veg_only/Jersey%2520City,%2520NJ%2520hl_veg_only.png": "72be5c2a99377c1f605c78731b573509",
"assets/assets/images_hl_veg_only/New%2520Orleans,%2520LA%2520hl_veg_only.png": "e994512e1308dbba196029165ef87a68",
"assets/assets/images_hl_veg_only/Worcester,%2520MA%2520hl_veg_only.png": "50534b7b9f827b304055b4926b54f0a2",
"assets/assets/images_hl_veg_only/Newport%2520News,%2520VA%2520hl_veg_only.png": "16573f20a99a53a43cecd3bd7d3e6f7b",
"assets/assets/images_hl_veg_only/Dover,%2520DE%2520hl_veg_only.png": "2c0b934cb7e8b32cf4ed069f4b2083c8",
"assets/assets/images_hl_veg_only/Detroit,%2520MI%2520hl_veg_only.png": "ed856b2c1e074cf292053d302d3d3e55",
"assets/assets/images_hl_veg_only/Tallahassee,%2520FL%2520hl_veg_only.png": "c53631a4329952c6985b93baa11914c9",
"assets/assets/images_hl_veg_only/Cheyenne,%2520WY%2520hl_veg_only.png": "c03a2ef5b173c0e59d610aa743fa9092",
"assets/assets/images_hl_veg_only/Fayetteville,%2520NC%2520hl_veg_only.png": "95d67a053d0a46cad15186915b8c8e49",
"assets/assets/images_hl_veg_only/Columbia,%2520SC%2520hl_veg_only.png": "d7762c416edb80fce3d8e0381e96fca6",
"assets/assets/images_hl_veg_only/Aurora,%2520IL%2520hl_veg_only.png": "41b93673132f1a1fd13407b83125af60",
"assets/assets/images_hl_veg_only/Shreveport,%2520LA%2520hl_veg_only.png": "dc7e15a0b08e32e684acc7492bee3be0",
"assets/assets/images_hl_veg_only/Cape%2520Coral,%2520FL%2520hl_veg_only.png": "b4928c0ede66101d85d88acb5784ba49",
"assets/assets/images_hl_veg_only/Newark,%2520NJ%2520hl_veg_only.png": "2e9b1e9b17892b698323170786fa3a79",
"assets/assets/images_hl_veg_only/Sioux%2520Falls,%2520SD%2520hl_veg_only.png": "59d7653ccc607b195da8313493fb4415",
"assets/assets/images_hl_veg_only/Mesa,%2520AZ%2520hl_veg_only.png": "d8dda6d655bbe987724f3f7366ba057b",
"assets/assets/images_hl_veg_only/Fontana,%2520CA%2520hl_veg_only.png": "79ab3ff79a3cdde6b775f6afc9266a81",
"assets/assets/images_hl_veg_only/Warwick,%2520RI%2520hl_veg_only.png": "49e9bed4223fc9a875af577d1cce430c",
"assets/assets/images_hl_veg_only/Indianapolis,%2520IN%2520hl_veg_only.png": "bec5d9e5f998530a500a45beaf6571ae",
"assets/assets/images_hl_veg_only/Modesto,%2520CA%2520hl_veg_only.png": "0a2b47d768173b73b728a212a7bec044",
"assets/assets/images_hl_veg_only/Wichita,%2520KS%2520hl_veg_only.png": "1d4586746d28fed1e9dfd219a77eead5",
"assets/assets/images_hl_veg_only/Pittsburgh,%2520PA%2520hl_veg_only.png": "030b4e848effcc5da62ca8323ca878d7",
"assets/assets/images_hl_veg_only/Anchorage,%2520AK%2520hl_veg_only.png": "ed1f185dbeed04402fcd7220b243f89c",
"assets/assets/images_hl_veg_only/Dallas,%2520TX%2520hl_veg_only.png": "8a80c8aa07a5866e555bf395767fd178",
"assets/assets/images_hl_veg_only/Bismarck,%2520ND%2520hl_veg_only.png": "df88d652fb5d6f1badeed57763a0918d",
"assets/assets/images_hl_veg_only/Jacksonville,%2520FL%2520hl_veg_only.png": "9a5d8305407a9eab5cb5d4a7ccef4da8",
"assets/assets/images_hl_veg_only/Moreno%2520Valley,%2520CA%2520hl_veg_only.png": "0acbf5de29d35209aae9286f0b4bd148",
"assets/assets/images_hl_veg_only/Gulfport,%2520MS%2520hl_veg_only.png": "2ed1c02a2b56d263b1fd6b29edb20e29",
"assets/assets/images_hl_veg_only/Peoria,%2520AZ%2520hl_veg_only.png": "6be87f9f620bbbf4815a835679bbe35a",
"assets/assets/images_hl_veg_only/South%2520Burlington,%2520VT%2520hl_veg_only.png": "aff180b57618091e68c2cd59321e37f2",
"assets/assets/images_hl_veg_only/Lubbock,%2520TX%2520hl_veg_only.png": "ef4833339d15929e8e26427d4c24ee16",
"assets/assets/images_hl_veg_only/Baltimore,%2520MD%2520hl_veg_only.png": "610c4c81eae73a11227d110117c62296",
"assets/assets/images_hl_veg_only/Sacramento,%2520CA%2520hl_veg_only.png": "02286e6fac8ded8191be62e18c372464",
"assets/assets/images_hl_veg_only/Tucson,%2520AZ%2520hl_veg_only.png": "3d7e4330c63fcd0bffc5c69e2f51b602",
"assets/assets/images_hl_veg_only/Raleigh,%2520NC%2520hl_veg_only.png": "647cc75813e6bcb02766fb6e49d3886e",
"assets/assets/images_hl_veg_only/Columbus,%2520GA%2520hl_veg_only.png": "c5e353ebfad9987d3d37e5eb4b3fb825",
"assets/assets/images_hl_veg_only/Lewiston,%2520ME%2520hl_veg_only.png": "b407a2a4c88fe68a47e02401902cde8c",
"assets/assets/images_hl_veg_only/Overland%2520Park,%2520KS%2520hl_veg_only.png": "6cd688ba7063df677229065169b91b09",
"assets/assets/images_hl_veg_only/Port%2520St.%2520Lucie,%2520FL%2520hl_veg_only.png": "ede11253f18654b22fc0f510b9a62347",
"assets/assets/images_hl_veg_only/Washington,%2520DC%2520hl_veg_only.png": "8e03fdc1c8409f4371e14862e61d9e09",
"assets/assets/images_hl_veg_only/Boise,%2520ID%2520hl_veg_only.png": "e411ef28ebdf649668a4498a8f77bfb1",
"assets/assets/images_hl_veg_only/Chicago,%2520IL%2520hl_veg_only.png": "36e6f7695155714cfa53e83bbdd2ed53",
"assets/assets/images_hl_veg_only/Oceanside,%2520CA%2520hl_veg_only.png": "fe2db08db2c2ae15079ed0dd794391e3",
"assets/assets/images_hl_veg_only/Chandler,%2520AZ%2520hl_veg_only.png": "5a1110e4a4c2bb24e3b60fd3adb0b946",
"assets/assets/images_hl_veg_only/Nampa,%2520ID%2520hl_veg_only.png": "640f31d642e6d70a0135edff6beae6a0",
"assets/assets/images_hl_veg_only/St.%2520Paul,%2520MN%2520hl_veg_only.png": "17a2ade049885640c30acd2391c86749",
"assets/assets/images_hl_veg_only/Phoenix,%2520AZ%2520hl_veg_only.png": "595a2dea760b68e62c16178c8c967f47",
"assets/assets/images_hl_veg_only/Orlando,%2520FL%2520hl_veg_only.png": "442bc72fbc6b4540d7caf50733dfb9d5",
"assets/assets/images_hl_veg_only/St.%2520Louis,%2520MO%2520hl_veg_only.png": "3233dec4fc5855d9cae160ec6c51e3b8",
"assets/assets/images_hl_veg_only/Mobile,%2520AL%2520hl_veg_only.png": "3d2f3e170a46ef0e1a53414e3263faab",
"assets/assets/images_hl_veg_only/Glendale,%2520AZ%2520hl_veg_only.png": "538209b6eac975ab70146af70785ba67",
"assets/assets/images_hl_veg_only/Vancouver,%2520WA%2520hl_veg_only.png": "f430a41b07708745e2cba4f450e9a944",
"assets/assets/images_hl_veg_only/Grand%2520Rapids,%2520MI%2520hl_veg_only.png": "f7b8a30bee5a85791d2cae9953b68b6c",
"assets/assets/images_hl_veg_only/Juneau,%2520AK%2520hl_veg_only.png": "bb3f3fa9b2de87ec9a4dfb2973954f8e",
"assets/assets/images_hl_veg_only/Denver,%2520CO%2520hl_veg_only.png": "0336d017b8678bceaa201476b5eaf840",
"assets/assets/images_hl_veg_only/Manchester,%2520NH%2520hl_veg_only.png": "e0130bd952e106fa5ec02b634e57266b",
"assets/assets/images_hl_veg_only/Wilmington,%2520DE%2520hl_veg_only.png": "16fc0967bd746ba369a3e5f86dc0c61c",
"assets/assets/images_hl_veg_only/Chesapeake,%2520VA%2520hl_veg_only.png": "54906fd233e97af24b9a8b951dad80ca",
"assets/assets/american_cities/Fort%2520Smith,%2520AR.json": "0078bede9865202355f5d682f769bf7e",
"assets/assets/american_cities/Boston,%2520MA.json": "319288038a561f74bd5eefb29fd88008",
"assets/assets/american_cities/Santa%2520Rosa,%2520CA.json": "4f6522f5858ba1a144748b5a0347cddc",
"assets/assets/american_cities/Plano,%2520TX.json": "08210d0cba7e1ccb1518fdc9a7327729",
"assets/assets/american_cities/Knoxville,%2520TN.json": "f9f1694bb059972a7c5e1274a492c1f2",
"assets/assets/american_cities/Peoria,%2520AZ.json": "3cee9d8a07abff708c95b30728e7a552",
"assets/assets/american_cities/Oakland,%2520CA.json": "84cca929d1891e7cd52923949333b46e",
"assets/assets/american_cities/Warwick,%2520RI.json": "d711462511ea4f3716929e07601613c9",
"assets/assets/american_cities/Dallas,%2520TX.json": "a68c5744f8d50257fd1ea2474ddd3ae2",
"assets/assets/american_cities/Gilbert,%2520AZ.json": "6c8d9455e8687139c80941394794dcc4",
"assets/assets/american_cities/Colorado%2520Springs,%2520CO.json": "87dd029b1135f7d05a775495518abe9d",
"assets/assets/american_cities/Lewiston,%2520ME.json": "173202174b6f90ca66f00ab54109cbac",
"assets/assets/american_cities/Yonkers,%2520NY.json": "d137e29552e280a00360a077d8a6c193",
"assets/assets/american_cities/Bridgeport,%2520CT.json": "52c7572d8235d65903d21549fc50a546",
"assets/assets/american_cities/Norfolk,%2520VA.json": "2dae73b896bab086e38586415efe5ba8",
"assets/assets/american_cities/Charleston,%2520WV.json": "f18884d134b75d353a58b1df3105178a",
"assets/assets/american_cities/Arlington,%2520TX.json": "90be4e40ea6e00ceb8522cbc9a07791d",
"assets/assets/american_cities/El%2520Paso,%2520TX.json": "4c3e156a32d594b7f85f75dd1787f699",
"assets/assets/american_cities/Montgomery,%2520AL.json": "0a5601d87a132ea29d7e64b0ae606a13",
"assets/assets/american_cities/Albuquerque,%2520NM.json": "ba34ba6cfe8b94bd6cf9f91dacbf8cdf",
"assets/assets/american_cities/Bakersfield,%2520CA.json": "c1c6da78b2a95863683f9712902a8a93",
"assets/assets/american_cities/Minneapolis,%2520MN.json": "0f6ab113c1f0535cca012a955bf26136",
"assets/assets/american_cities/New%2520York,%2520NY.json": "b8d35354610452544460ad5f61912cfb",
"assets/assets/american_cities/Spokane,%2520WA.json": "1ea737194a8d317ee159df660da77db6",
"assets/assets/american_cities/Modesto,%2520CA.json": "c7799e7b6ee85c727c33328dfa04d740",
"assets/assets/american_cities/Vancouver,%2520WA.json": "8779e62d64f188767e4ee5fe79e41ad3",
"assets/assets/american_cities/Kansas%2520City,%2520MO.json": "299f0536342c3b9c9d408ed770eaf889",
"assets/assets/american_cities/Greensboro,%2520NC.json": "14122293c9ee795453768324fd698a15",
"assets/assets/american_cities/Jacksonville,%2520FL.json": "6a8cc8299e8f9b66705b8c3ab0349e81",
"assets/assets/american_cities/Charlotte,%2520NC.json": "6bf9c867b44a312a27f6e1164c36e7f1",
"assets/assets/american_cities/Portland,%2520OR.json": "378d6150dddaf1c21b1f9d7ac3c10231",
"assets/assets/american_cities/Fort%2520Wayne,%2520IN.json": "d229a0a1b12b0b79ffe663512b6337d2",
"assets/assets/american_cities/Miami,%2520FL.json": "e946c77f7c1cced8ef2555603fc3427c",
"assets/assets/american_cities/Lincoln,%2520NE.json": "4219c053281b46d6e030bfb0c7985014",
"assets/assets/american_cities/Pearl%2520City,%2520HI.json": "0bc9a3a95317101b7df7074ff39557ef",
"assets/assets/american_cities/Salt%2520Lake%2520City,%2520UT.json": "7d9b672ad736a20f320d409be4664643",
"assets/assets/american_cities/Houston,%2520TX.json": "0b0cf802252d2e09291f86c988695980",
"assets/assets/american_cities/Charleston,%2520SC.json": "481503bd31f709e80c9a7745593d813f",
"assets/assets/american_cities/Las%2520Cruces,%2520NM.json": "580c539d92535ac107bb1de1118e86b0",
"assets/assets/american_cities/Omaha,%2520NE.json": "a676ebb40e39a38961c6c4d3d48ed4c6",
"assets/assets/american_cities/Austin,%2520TX.json": "ebce67b1f4b7c0c46a64462a6c92d989",
"assets/assets/american_cities/Durham,%2520NC.json": "4fa960a71de7f353cc688ae16ea7ca6c",
"assets/assets/american_cities/Reno,%2520NV.json": "18b031f9ac6074631761ee5c3b33b665",
"assets/assets/american_cities/Pittsburgh,%2520PA.json": "39dea244290fa0ce04a028c4e6476264",
"assets/assets/american_cities/Sioux%2520Falls,%2520SD.json": "c96390429c8d9423942ebd43d3fdfd0e",
"assets/assets/american_cities/Milwaukee,%2520WI.json": "4b34b462d20c84132e50c1416de938d0",
"assets/assets/american_cities/Los%2520Angeles,%2520CA.json": "245a631eb886624518262569ebacac22",
"assets/assets/american_cities/Rapid%2520City,%2520SD.json": "8ca3dc8fcf0bd3a8ed24ee10e7444792",
"assets/assets/american_cities/Nampa,%2520ID.json": "9627d19fa48075aa226f5963cbbea412",
"assets/assets/american_cities/Boise,%2520ID.json": "e227e24612de8a904a5413c7f249ff48",
"assets/assets/american_cities/Buffalo,%2520NY.json": "aea1607d8509c173e048558dfee16381",
"assets/assets/american_cities/Overland%2520Park,%2520KS.json": "18b15c15aa2cc8e3fb1e8091683e4a27",
"assets/assets/american_cities/Providence,%2520RI.json": "ae5838674e923e80833029dab243e90c",
"assets/assets/american_cities/Jersey%2520City,%2520NJ.json": "98b5de7699f8cf2d21094f6de7d8c45e",
"assets/assets/american_cities/Springfield,%2520MO.json": "bf5fc6e8112966130e322bdcc7780f26",
"assets/assets/american_cities/Pembroke%2520Pines,%2520FL.json": "993fd7221ce2d961d456c842e596598c",
"assets/assets/american_cities/Indianapolis,%2520IN.json": "b71a3882d9273db7cb229f07590fb5b7",
"assets/assets/american_cities/Philadelphia,%2520PA.json": "5ea3f700de8c10aa1d21eacc34ffb0f7",
"assets/assets/american_cities/Chula%2520Vista,%2520CA.json": "cc7cc68b900c7211f08a7c35e23fbc7c",
"assets/assets/american_cities/West%2520Valley%2520City,%2520UT.json": "7768c5ca10558f4b4652920f0ba2587e",
"assets/assets/american_cities/Akron,%2520OH.json": "623b1b7262d836d05621559941747d07",
"assets/assets/american_cities/New%2520Haven,%2520CT.json": "a40e823da785531296fad52bfaabfc4f",
"assets/assets/american_cities/Columbia,%2520SC.json": "082d2524e6fbb4dea896d4802d2e6929",
"assets/assets/american_cities/Fremont,%2520CA.json": "fe875fe4d65b69fd5bcb3ad55fe9c4bc",
"assets/assets/american_cities/Columbia,%2520MD.json": "dce4f68d9e4ff18419e91ca5c30fa012",
"assets/assets/american_cities/Missoula,%2520MT.json": "722894243eb56c2e03268a3abe509aef",
"assets/assets/american_cities/San%2520Diego,%2520CA.json": "c7573b974cdc4d4e00b8f1b6bd40a252",
"assets/assets/american_cities/Las%2520Vegas,%2520NV.json": "2cb4877792c8972dd944184c4b46f83f",
"assets/assets/american_cities/Newark,%2520NJ.json": "ffc7f90fa88f6236547a6e711c0a565c",
"assets/assets/american_cities/Irving,%2520TX.json": "5e2d52b55002db6a6f204ba7be51df17",
"assets/assets/american_cities/Laredo,%2520TX.json": "135702b8e21f170a597dd26d520c1517",
"assets/assets/american_cities/New%2520Orleans,%2520LA.json": "1f89536ba9ed081d9f85091471836016",
"assets/assets/american_cities/Lubbock,%2520TX.json": "6bd104faa745bd9170549a9eaed2179e",
"assets/assets/american_cities/Denver,%2520CO.json": "322416ba16f9571f2b4c32cc06e0ae54",
"assets/assets/american_cities/Detroit,%2520MI.json": "e99064900683a914403f8e65f56fc1df",
"assets/assets/american_cities/Rochester,%2520NY.json": "6cefe045b23a4367cde1a6b2f44b8d09",
"assets/assets/american_cities/Cleveland,%2520OH.json": "aa6cf3de302edda88592d811794392d0",
"assets/assets/american_cities/Tacoma,%2520WA.json": "59997ffdac0384120935721495b863fa",
"assets/assets/american_cities/Shreveport,%2520LA.json": "b6e444fa1b6ad5a5eda76bda1f08584d",
"assets/assets/american_cities/Cedar%2520Rapids,%2520IA.json": "d86e30544c74e337227d9d187faef2ce",
"assets/assets/american_cities/Chicago,%2520IL.json": "7824b29a621540c5b59f26a0cbefac49",
"assets/assets/american_cities/Jackson,%2520MS.json": "88767ffc430c6879110a2701db2b88f8",
"assets/assets/american_cities/Fargo,%2520ND.json": "748ba01915a067a9dc11c4ca37c5e07e",
"assets/assets/american_cities/Glendale,%2520CA.json": "5888447fda49f5a8449c9f866acc28cb",
"assets/assets/american_cities/St.%2520Petersburg,%2520FL.json": "722c3da3abfdc0c2c2db182ae7bf5a37",
"assets/assets/american_cities/Orlando,%2520FL.json": "f6e070c3c3e890f48361702a2d83dda8",
"assets/assets/american_cities/Riverside,%2520CA.json": "4a925c282de02cf89a27d1e71018f66f",
"assets/assets/american_cities/Dover,%2520DE.json": "0a7905905ff23ac02b4f414188636ace",
"assets/assets/american_cities/Baton%2520Rouge,%2520LA.json": "0e3a13cd191eb28d49f8218c2e0b55af",
"assets/assets/american_cities/Raleigh,%2520NC.json": "8d07b7aca36938762e47fb9dd19d6309",
"assets/assets/american_cities/Grand%2520Rapids,%2520MI.json": "4f6b2494706965bec23737b50cc8dcf7",
"assets/assets/american_cities/Huntsville,%2520AL.json": "c14f648cb841e3bcd6ad2f8648a1f149",
"assets/assets/american_cities/Virginia%2520Beach,%2520VA.json": "b3dffbf5d707bd544f46456323b17530",
"assets/assets/american_cities/Fresno,%2520CA.json": "006ae6e974cb6ff7f5d612ed6c879fca",
"assets/assets/american_cities/Honolulu,%2520HI.json": "92d09054ffe7b1330a05b8ec20261a33",
"assets/assets/american_cities/Des%2520Moines,%2520IA.json": "166a34414cc0f88f0315898085484b5a",
"assets/assets/american_cities/Anchorage,%2520AK.json": "228b46c0901e0fd8fb8f5e4101e1e5ee",
"assets/assets/american_cities/Santa%2520Ana,%2520CA.json": "bbac78f153a634becb9614693788ebe1",
"assets/assets/american_cities/Juneau,%2520AK.json": "2dbf2e0fa9150847cdf961afaaa55833",
"assets/assets/american_cities/Scottsdale,%2520AZ.json": "e572e87e5bf6a8035caed92ca634f191",
"assets/assets/american_cities/Oklahoma%2520City,%2520OK.json": "5613a51b784434d65065443e61ddeeac",
"assets/assets/american_cities/Washington,%2520DC.json": "2211ecbc0d27f911f12ccb6a104f0b41",
"assets/assets/american_cities/Tallahassee,%2520FL.json": "284186a37784bd23ea54fa9cefc7d0e6",
"assets/assets/american_cities/Amarillo,%2520TX.json": "c657352ab0bfdf19e1357089625aa9f9",
"assets/assets/american_cities/Santa%2520Clarita,%2520CA.json": "733b1df05d52b78d4f858428bbc52990",
"assets/assets/american_cities/Atlanta,%2520GA.json": "2d0bc383bfe096f3216ace123ba500a7",
"assets/assets/american_cities/Ontario,%2520CA.json": "e0bf8180c91aef73274c6c6b19245b1d",
"assets/assets/american_cities/Columbus,%2520OH.json": "7b66f9b18ccafd6606a76e5fdd4aa5b1",
"assets/assets/american_cities/Winston-Salem,%2520NC.json": "056b908ece272976c09fccf088046191",
"assets/assets/american_cities/Mobile,%2520AL.json": "988f51edbeda8e6214a81fc5409e93cc",
"assets/assets/american_cities/Salem,%2520OR.json": "081574410d7e3fcc10351a464a35fddf",
"assets/assets/american_cities/Cincinnati,%2520OH.json": "8a865842bcf9531514ca027cf2750185",
"assets/assets/american_cities/Long%2520Beach,%2520CA.json": "c5d747bf228fbe91a20937aa54ecafe8",
"assets/assets/american_cities/Tucson,%2520AZ.json": "21c8faa0d6e99197d2adf8df388b7841",
"assets/assets/american_cities/San%2520Jose,%2520CA.json": "3b7134dcc970204a3b802283958e7be6",
"assets/assets/american_cities/Huntington,%2520WV.json": "647e8393655684d6481248365576c016",
"assets/assets/american_cities/Memphis,%2520TN.json": "e060d17fc96f23641fde4c5e9e641b49",
"assets/assets/american_cities/Sacramento,%2520CA.json": "74c7aa1066dcb3c64b04c2fb3e9e6e54",
"assets/assets/american_cities/San%2520Antonio,%2520TX.json": "0f51e715299ffc85d42499b29956bd7a",
"assets/assets/american_cities/Gulfport,%2520MS.json": "cc22f5721aa177005234bc0f230b34c2",
"assets/assets/american_cities/North%2520Las%2520Vegas,%2520NV.json": "173482699bf84d7ff94a8707e37cd52f",
"assets/assets/american_cities/Tampa,%2520FL.json": "0e1071e1fabc423b0dd230aee3864c14",
"assets/assets/american_cities/Lexington-Fayette,%2520KY.json": "1325714aa5a6c2f07a265c3992a89588",
"assets/assets/american_cities/Phoenix,%2520AZ.json": "7435509503be31d118b09e183baed815",
"assets/assets/american_cities/Garland,%2520TX.json": "fb823210faa4f70cbbf04cb601956b98",
"assets/assets/american_cities/Cape%2520Coral,%2520FL.json": "0596d197a9b274aa2db1b495b77c759e",
"assets/assets/american_cities/Rancho%2520Cucamonga,%2520CA.json": "b31699df1b70c4f218d92c0baacb4ca9",
"assets/assets/american_cities/Richmond,%2520VA.json": "0cb8430e590220494f533b74dc26f18d",
"assets/assets/american_cities/Worcester,%2520MA.json": "33a0bf66244fc4f738bdd7bec873d948",
"assets/assets/american_cities/Tempe,%2520AZ.json": "59f755bbccbe77989374d6d19e5afc68",
"assets/assets/american_cities/Toledo,%2520OH.json": "1d8cb2f6e4daf36fb7745536fd1b7771",
"assets/assets/american_cities/St.%2520Louis,%2520MO.json": "e17bf13939c97b72fbbad03704a12202",
"assets/assets/american_cities/Glendale,%2520AZ.json": "e7615afd1763873a79ee66f714cfa851",
"assets/assets/american_cities/Anaheim,%2520CA.json": "121d093a7f18618b7f26c86d3b72f939",
"assets/assets/american_cities/Augusta,%2520GA.json": "8c2f731c81d499090d7949e8a03a1971",
"assets/assets/american_cities/Chandler,%2520AZ.json": "08b716680695eb5e7785b3c1f5207bf4",
"assets/assets/american_cities/Burlington,%2520VT.json": "97f39699abac7b2a928c3ab5536b0980",
"assets/assets/american_cities/Seattle,%2520WA.json": "4d8b656a6f109f49fb885cab13c477f5",
"assets/assets/american_cities/Mesa,%2520AZ.json": "16f56f20a02128256ad914d6409f4e7a",
"assets/assets/american_cities/Huntington%2520Beach,%2520CA.json": "fe069bd2773f83cbfb990da8942c864c",
"assets/assets/american_cities/Fayetteville,%2520NC.json": "aacd75f2fa0bdae838a7b3cf2b7bda7b",
"assets/assets/american_cities/Irvine,%2520CA.json": "e7f9caa7aa7e0b62effd6880ff74577c",
"assets/assets/american_cities/South%2520Burlington,%2520VT.json": "a7da0b061c37fab577a721a60226b661",
"assets/assets/american_cities/Aurora,%2520IL.json": "37a433d694621692f8ed810f5f4df267",
"assets/assets/american_cities/Moreno%2520Valley,%2520CA.json": "28f04e32798613c850d6f19cbad43799",
"assets/assets/american_cities/Baltimore,%2520MD.json": "0b40fa17f6c98a56f9b5bf8398c82fad",
"assets/assets/american_cities/Stockton,%2520CA.json": "3f33464311cf3bccce6a99812924b267",
"assets/assets/american_cities/Casper,%2520WY.json": "a2ab5d9b235305f997624c34c8f5979f",
"assets/assets/american_cities/Wilmington,%2520DE.json": "a3550c406758f280c43dde2cb4751716",
"assets/assets/american_cities/Nashua,%2520NH.json": "c42b3607bd8cabe649c164cb21381e5d",
"assets/assets/american_cities/Port%2520St.%2520Lucie,%2520FL.json": "deb119510b2da5b78cfd9ac01a78df4a",
"assets/assets/american_cities/San%2520Francisco,%2520CA.json": "5bb22e90169eef41decdfecb8c6ca94d",
"assets/assets/american_cities/Corpus%2520Christi,%2520TX.json": "d6f541050207fcff856ec940bbdc75ec",
"assets/assets/american_cities/Henderson,%2520NV.json": "11a9cd8f0ac5e8e8c208a3b32da57d7a",
"assets/assets/american_cities/Hialeah,%2520FL.json": "7f1e78c5e15dbf164504f3a50d4fc8da",
"assets/assets/american_cities/Cheyenne,%2520WY.json": "dfb524992069e686c964bf1d659bfc82",
"assets/assets/american_cities/Aurora,%2520CO.json": "a06d8e2fdd023551aeb90cab8d2329d3",
"assets/assets/american_cities/Newport%2520News,%2520VA.json": "ce7db8e85e0d2e95651a4924b84f4e28",
"assets/assets/american_cities/Wichita,%2520KS.json": "014a9e0dc26b1fa3330737b526db8987",
"assets/assets/american_cities/Fort%2520Lauderdale,%2520FL.json": "1eaef8339195eb2f3e7eca0912bfba5e",
"assets/assets/american_cities/San%2520Bernardino,%2520CA.json": "cbdd4d8fc2c2dc7ec18f9987ad3341c9",
"assets/assets/american_cities/Brownsville,%2520TX.json": "bf5637daf55feddc49e7d8b07c9c9df4",
"assets/assets/american_cities/Columbus,%2520GA.json": "4fe333bf1538a40e221b43ba8db815ba",
"assets/assets/american_cities/Madison,%2520WI.json": "0ec1e2e4c017d173ebb9f897644038ad",
"assets/assets/american_cities/Chesapeake,%2520VA.json": "8f839863ea6205600c74230d872f4d9a",
"assets/assets/american_cities/Louisville,%2520KY.json": "83e44a1dba88070bad5e056ba5a5a08d",
"assets/assets/american_cities/Billings,%2520MT.json": "83c9764c3687761349a29e8601266c04",
"assets/assets/american_cities/Fontana,%2520CA.json": "c0440e82d0a0903a193cdfc8015057ea",
"assets/assets/american_cities/Tulsa,%2520OK.json": "be049a3c32dad7af9541cd24ed86d909",
"assets/assets/american_cities/St.%2520Paul,%2520MN.json": "a80b1b10ea1d3a86f63adb7bc0a9d06e",
"assets/assets/american_cities/Birmingham,%2520AL.json": "1fdd239fe09f6b97ad8047a1446bde9b",
"assets/assets/american_cities/Portland,%2520ME.json": "aa238d8f65afa4972db211464b3ac4f3",
"assets/assets/american_cities/Little%2520Rock,%2520AR.json": "1d8805116551af3c37433d92f1d8fdb8",
"assets/assets/american_cities/Bismarck,%2520ND.json": "14552c4b500f15ef12f9d4c441b7c1e5",
"assets/assets/american_cities/Grand%2520Prairie,%2520TX.json": "f41969108425fe2c42236b4863b7ad8c",
"assets/assets/american_cities/Chattanooga,%2520TN.json": "1e8f069e21b1c4a9373c461c02885481",
"assets/assets/american_cities/Oceanside,%2520CA.json": "d52c2ae6bbe510f64666786a79dbf59b",
"assets/assets/american_cities/Fort%2520Worth,%2520TX.json": "2f1336da4357c0ad597abfcae80aed76",
"assets/assets/american_cities/Garden%2520Grove,%2520CA.json": "49ee1c29e69c951045a944e4f700f48a",
"assets/assets/american_cities/Manchester,%2520NH.json": "f6e3dbacaabbb59f46d886ebd26c9d76",
"assets/assets/american_cities/Oxnard,%2520CA.json": "817be99678dcf8c80e0e3e0a4bae80dc",
"assets/assets/american_cities/Nashville,%2520TN.json": "c29ee1654b78c85e8900bc2b53d9b218",
"assets/assets/city_data.json": "c125eea461ed3c4201bdbfd7e9661926",
"assets/assets/graphics/placeholder.png": "572d05ea07f31fe7c8c95b28e4c9857d",
"assets/assets/transparent.png": "0e3a6096212efdffd9be6c2dbea24b1e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
