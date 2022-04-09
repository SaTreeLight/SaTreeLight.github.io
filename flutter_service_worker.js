'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cd1e1531bc9a3ce5a1b18d9ba9ec018b",
"assets/assets/american_cities/Akron,%2520OH.json": "a68110151b92a3b9bb891033e2415692",
"assets/assets/american_cities/Albuquerque,%2520NM.json": "4a82d153f16bb16f9caeb89379114f92",
"assets/assets/american_cities/Amarillo,%2520TX.json": "9620031ddb58e6e47bb8c36c31453e94",
"assets/assets/american_cities/Anaheim,%2520CA.json": "cfb303efd588e936219c1f19d8d80737",
"assets/assets/american_cities/Anchorage,%2520AK.json": "04d870ea451d3460189ccf596999e4d6",
"assets/assets/american_cities/Arlington,%2520TX.json": "4a24d1ea7b77e3f3bad64e18cab7cc97",
"assets/assets/american_cities/Atlanta,%2520GA.json": "a1969d5367bb859b187dca4f241d1ac9",
"assets/assets/american_cities/Augusta,%2520GA.json": "24da4fbdb5218db514ad6415b812835e",
"assets/assets/american_cities/Aurora,%2520CO.json": "5fb050ada85d2b10123f8e7b6c8e345a",
"assets/assets/american_cities/Aurora,%2520IL.json": "1f4938c0d87846a8c9d936c9229f65ad",
"assets/assets/american_cities/Austin,%2520TX.json": "fcc35f7f3c500835c430fee3ab708b05",
"assets/assets/american_cities/Bakersfield,%2520CA.json": "a9e2aaf4e7a5f4d582c2a8d909e3233a",
"assets/assets/american_cities/Baltimore,%2520MD.json": "8452673a21416400873a5d353b373c1c",
"assets/assets/american_cities/Baton%2520Rouge,%2520LA.json": "5a79e22452122d0bc1a0d44e0adafb3d",
"assets/assets/american_cities/Billings,%2520MT.json": "50b6b3d381e7238e0d0897562db0c305",
"assets/assets/american_cities/Birmingham,%2520AL.json": "c81edcf63e0b7d445a1f8c5b6136d76c",
"assets/assets/american_cities/Bismarck,%2520ND.json": "1551a61d3e02e4c479829e45ec281e73",
"assets/assets/american_cities/Boise,%2520ID.json": "18b1c553f4819ffae09fc0db9daacc19",
"assets/assets/american_cities/Boston,%2520MA.json": "0f8c5171c49c59c0cb1d5a164f2a3220",
"assets/assets/american_cities/Bridgeport,%2520CT.json": "16e88badfd615bbdedc3e348f53a07be",
"assets/assets/american_cities/Brownsville,%2520TX.json": "83b7565511634ba9691a6b6e68ba7e47",
"assets/assets/american_cities/Buffalo,%2520NY.json": "46320068919bc4163630627798097d41",
"assets/assets/american_cities/Burlington,%2520VT.json": "3902421de5115d47f29da43798c746bc",
"assets/assets/american_cities/Cape%2520Coral,%2520FL.json": "f47acd07fcc40263fed07347a411fc91",
"assets/assets/american_cities/Casper,%2520WY.json": "677de88fe6995c68c17c14f50f9c7979",
"assets/assets/american_cities/Cedar%2520Rapids,%2520IA.json": "0868e4d1d464963a173587002bca983a",
"assets/assets/american_cities/Chandler,%2520AZ.json": "77b9ac3beaed7f50b9982f21e9d62bdc",
"assets/assets/american_cities/Charleston,%2520SC.json": "5998be82b508784b48a34b979fd80e5b",
"assets/assets/american_cities/Charleston,%2520WV.json": "0db215b7375ecef2d23b96fde283ee92",
"assets/assets/american_cities/Charlotte,%2520NC.json": "ad3e0649798554f453e801657a2f6f6d",
"assets/assets/american_cities/Chattanooga,%2520TN.json": "6811d0b285bd4d8281888698e25041e1",
"assets/assets/american_cities/Chesapeake,%2520VA.json": "c54f417624a6aa2dd15f221f2c8e2755",
"assets/assets/american_cities/Cheyenne,%2520WY.json": "d710f43af5566540c1e3065b47f61505",
"assets/assets/american_cities/Chicago,%2520IL.json": "45d7af758f0a0ef6606a04d38a565971",
"assets/assets/american_cities/Chula%2520Vista,%2520CA.json": "5aa3937cadd2ac85e5b420ea959f8506",
"assets/assets/american_cities/Cincinnati,%2520OH.json": "de0182f3e11d47487a421d1962891b02",
"assets/assets/american_cities/Cleveland,%2520OH.json": "f38210be691f8e772d29a5950eadeb59",
"assets/assets/american_cities/Colorado%2520Springs,%2520CO.json": "6bac47b9c51293beb472c6159920a2d1",
"assets/assets/american_cities/Columbia,%2520MD.json": "294636cdbc068af44ed951032b3ebce9",
"assets/assets/american_cities/Columbia,%2520SC.json": "cc3f67aa29c095bc1804ec805a17d7cf",
"assets/assets/american_cities/Columbus,%2520GA.json": "7d7aa8acccb9dde739e6617b856abdc1",
"assets/assets/american_cities/Columbus,%2520OH.json": "48c7d0051899006df894a97c836173b1",
"assets/assets/american_cities/Corpus%2520Christi,%2520TX.json": "b8dfa263c35f84961b5682004b27828b",
"assets/assets/american_cities/Dallas,%2520TX.json": "6276a0edd6964bb953634bf545361c31",
"assets/assets/american_cities/Denver,%2520CO.json": "ada9aaa62f3789dbb934420407188ef7",
"assets/assets/american_cities/Des%2520Moines,%2520IA.json": "a8c59b663fe6a3334dd2e56c550e5fd0",
"assets/assets/american_cities/Detroit,%2520MI.json": "71bef0ba87c91d4ab555a58b8da13a3b",
"assets/assets/american_cities/Dover,%2520DE.json": "475369b36f103171561de85c8095b9a5",
"assets/assets/american_cities/Durham,%2520NC.json": "8bbd801a1a73b513fa9270f76d78f6ed",
"assets/assets/american_cities/El%2520Paso,%2520TX.json": "556d1e8ca4348c6e464b7d02ea8e292b",
"assets/assets/american_cities/Fargo,%2520ND.json": "744ac056aa9fb221c25e85b87eae84df",
"assets/assets/american_cities/Fayetteville,%2520NC.json": "b0061d49709ab338d8872713b5024c60",
"assets/assets/american_cities/Fontana,%2520CA.json": "b75a28de6eecaaee58b7572a830aad54",
"assets/assets/american_cities/Fort%2520Lauderdale,%2520FL.json": "5e3ea0c545dab79c81c72ff621dd537e",
"assets/assets/american_cities/Fort%2520Smith,%2520AR.json": "11d8cc7938cd86a9bc7a4e2a25866c80",
"assets/assets/american_cities/Fort%2520Wayne,%2520IN.json": "a611f2016d689671a642620731a483ef",
"assets/assets/american_cities/Fort%2520Worth,%2520TX.json": "05069240c0845582116abd414102ee31",
"assets/assets/american_cities/Fremont,%2520CA.json": "eb75349ea820ae110f228f6cfc00abfe",
"assets/assets/american_cities/Fresno,%2520CA.json": "31c608cfa03b6db3b2f5c12677d0dec7",
"assets/assets/american_cities/Garden%2520Grove,%2520CA.json": "3d7af7c9d5807c24ec54f589485b0b39",
"assets/assets/american_cities/Garland,%2520TX.json": "1999b47fd8706f94cb21d024f8689805",
"assets/assets/american_cities/Gilbert,%2520AZ.json": "e65653f67a28d19f3e76c8903ce1108e",
"assets/assets/american_cities/Glendale,%2520AZ.json": "7a345ac6bffad7c73674c8e75a84cf63",
"assets/assets/american_cities/Glendale,%2520CA.json": "d3d3ffb042168777d448eb9af213e804",
"assets/assets/american_cities/Grand%2520Prairie,%2520TX.json": "8c73dc91ab0edc3384f9a32440c82515",
"assets/assets/american_cities/Grand%2520Rapids,%2520MI.json": "e8cd0709f18febadc3e17bcda1eab9e2",
"assets/assets/american_cities/Greensboro,%2520NC.json": "70137331c706e8bc5e4352a9f9ffca36",
"assets/assets/american_cities/Gulfport,%2520MS.json": "1ac1749a54ce2193a1ee7b9a48788082",
"assets/assets/american_cities/Henderson,%2520NV.json": "8bdff68d71b17941b1276d282d4f84fd",
"assets/assets/american_cities/Hialeah,%2520FL.json": "0c607790086e5ca59c0f2c8b26cbd60b",
"assets/assets/american_cities/Honolulu,%2520HI.json": "949090eabe24935f1b8bdeb98c8767eb",
"assets/assets/american_cities/Houston,%2520TX.json": "c19fd56d53bb2e0ed24d9b041cd86604",
"assets/assets/american_cities/Huntington%2520Beach,%2520CA.json": "0dd88cf4a453766207044214f0ac7e48",
"assets/assets/american_cities/Huntington,%2520WV.json": "f10c487dee3ca9a6619df5164f18e17e",
"assets/assets/american_cities/Huntsville,%2520AL.json": "ad1a9d56c4c10ffa3fd211e0832a1d0d",
"assets/assets/american_cities/Indianapolis,%2520IN.json": "47291f604189caaf8edb198b677dfffd",
"assets/assets/american_cities/Irvine,%2520CA.json": "ccb670074bc5dff6b09254a8d42a7425",
"assets/assets/american_cities/Irving,%2520TX.json": "5d2d0d22644c12f23d4f36b5fdcee28a",
"assets/assets/american_cities/Jackson,%2520MS.json": "d6ff6547ce2c5ffcc5e4ced4adf53154",
"assets/assets/american_cities/Jacksonville,%2520FL.json": "ada2cf1180ec728a6033be9de9163b2d",
"assets/assets/american_cities/Jersey%2520City,%2520NJ.json": "882e8f224e6135d7e40922c5aaf7652d",
"assets/assets/american_cities/Juneau,%2520AK.json": "fb082b12b7b15647bc4d0c450566fad5",
"assets/assets/american_cities/Kansas%2520City,%2520MO.json": "48777729cadb4f4dca3b61f37aaea781",
"assets/assets/american_cities/Knoxville,%2520TN.json": "d809985fe9b4b3edc2242c69f58ac9db",
"assets/assets/american_cities/Laredo,%2520TX.json": "9fefe4eddb323843d59a739ad2d5378c",
"assets/assets/american_cities/Las%2520Cruces,%2520NM.json": "419c98494edc8309747c86d8e27cc6c0",
"assets/assets/american_cities/Las%2520Vegas,%2520NV.json": "3da41e58b76c93cb8b0f4a4199a06843",
"assets/assets/american_cities/Lewiston,%2520ME.json": "71a868ce53a3d86b8397ac5c79088ccf",
"assets/assets/american_cities/Lexington-Fayette,%2520KY.json": "824ccd244b67ee53d62306001f059972",
"assets/assets/american_cities/Lincoln,%2520NE.json": "e8f2e1ff88f395fea9007b8182f5ecf4",
"assets/assets/american_cities/Little%2520Rock,%2520AR.json": "46735377cf2cb3fea1db98fd437233b2",
"assets/assets/american_cities/Long%2520Beach,%2520CA.json": "24b29692d55277e921b2772582fed443",
"assets/assets/american_cities/Los%2520Angeles,%2520CA.json": "31059056eadcf1e1ebf7283180395e8c",
"assets/assets/american_cities/Louisville,%2520KY.json": "d5ed01879e3f6209e320cd450f979cc2",
"assets/assets/american_cities/Lubbock,%2520TX.json": "b454e5d3d413627c06262894958a3e97",
"assets/assets/american_cities/Madison,%2520WI.json": "a4157fa9c5f0e0ae12869c90fe6ebe58",
"assets/assets/american_cities/Manchester,%2520NH.json": "290cd24cd56a801ac8bf0fbc67394d48",
"assets/assets/american_cities/Memphis,%2520TN.json": "1fdecb248f9afdb79e012d35db41b5e5",
"assets/assets/american_cities/Mesa,%2520AZ.json": "a85dbaf378172f5275c3ca5ddc80ead7",
"assets/assets/american_cities/Miami,%2520FL.json": "18bd4bbb34fd71949ab1bf0bf01b4de6",
"assets/assets/american_cities/Milwaukee,%2520WI.json": "b93f81814de75efd12a9cb7bf670bafd",
"assets/assets/american_cities/Minneapolis,%2520MN.json": "492d1dc26a2c737742dbfb3f4c24c596",
"assets/assets/american_cities/Missoula,%2520MT.json": "6e7bb18c5102649c08f02a0aca3e8a23",
"assets/assets/american_cities/Mobile,%2520AL.json": "aacb39e1c7b81c1b8e73ad51d16e69b0",
"assets/assets/american_cities/Modesto,%2520CA.json": "37a1946384f579c360c01590cd4834db",
"assets/assets/american_cities/Montgomery,%2520AL.json": "679c03a0862f6351770624e011c3d5a4",
"assets/assets/american_cities/Moreno%2520Valley,%2520CA.json": "115c720c345a0f458df1b2c9704e7bc3",
"assets/assets/american_cities/Nampa,%2520ID.json": "6eeed4576f4bcd22daad27140d712996",
"assets/assets/american_cities/Nashua,%2520NH.json": "c8dd2a858f06c434ebffdabfdfdcb2b6",
"assets/assets/american_cities/Nashville,%2520TN.json": "8dfb3054f6d7a542c9a92c3697e22890",
"assets/assets/american_cities/New%2520Haven,%2520CT.json": "c249a26bd31e4768e7b286172979ef73",
"assets/assets/american_cities/New%2520Orleans,%2520LA.json": "34ff458d441e98b7af918eac1d563835",
"assets/assets/american_cities/New%2520York,%2520NY.json": "09f285bb3627d7497127566629af9a6f",
"assets/assets/american_cities/Newark,%2520NJ.json": "3dc272448e6a55dcabcd76001611e97a",
"assets/assets/american_cities/Newport%2520News,%2520VA.json": "0f6af1f6ba767584ab70df6e9ae44261",
"assets/assets/american_cities/Norfolk,%2520VA.json": "5aa6d09f8f2af25c4bab3c68aa3ab5f6",
"assets/assets/american_cities/North%2520Las%2520Vegas,%2520NV.json": "99cfd5affae555176ce741c98169d583",
"assets/assets/american_cities/Oakland,%2520CA.json": "c2912911b7219e9ddb364893e8f23a2b",
"assets/assets/american_cities/Oceanside,%2520CA.json": "ea442e171b8a6bf700fba31793628e1e",
"assets/assets/american_cities/Oklahoma%2520City,%2520OK.json": "a778cc4af4333d9ad37627d7acfc6bee",
"assets/assets/american_cities/Omaha,%2520NE.json": "d5567020955f6aa4c7cc164a11fc7f7b",
"assets/assets/american_cities/Ontario,%2520CA.json": "a62a44b8d3e7c698ad1599a1431a573c",
"assets/assets/american_cities/Orlando,%2520FL.json": "c0ca6c2783d6aee624f83b62832ddbb0",
"assets/assets/american_cities/Overland%2520Park,%2520KS.json": "db3017b6b03330d22b3a874869c2a75b",
"assets/assets/american_cities/Oxnard,%2520CA.json": "2044338ebd6f9c12effcebeb64b15ac9",
"assets/assets/american_cities/Pearl%2520City,%2520HI.json": "6ff6db8b4c8c80ff82dba11f6b2e6673",
"assets/assets/american_cities/Pembroke%2520Pines,%2520FL.json": "34da3c14d4e29925a431af08d0b27abf",
"assets/assets/american_cities/Peoria,%2520AZ.json": "c4ba6733309f326a54ed7e4abff27c22",
"assets/assets/american_cities/Philadelphia,%2520PA.json": "4d673b83aa0f420ef7528efab6719e40",
"assets/assets/american_cities/Phoenix,%2520AZ.json": "2d079fd980aa0936f96f1f367d27a268",
"assets/assets/american_cities/Pittsburgh,%2520PA.json": "08c625f1a5c7439ee72832c268c2e96b",
"assets/assets/american_cities/Plano,%2520TX.json": "860073f710ccb4d8f76de4f1bac69bde",
"assets/assets/american_cities/Port%2520St.%2520Lucie,%2520FL.json": "6f73cfcf5e8f118a7f9daeade0b10ae7",
"assets/assets/american_cities/Portland,%2520ME.json": "14bd1afdb8796238f25cf11f320973e7",
"assets/assets/american_cities/Portland,%2520OR.json": "a540c30739707b96dbe1913f118cfdcc",
"assets/assets/american_cities/Providence,%2520RI.json": "c9b04502677a56b74677cb5fd052444c",
"assets/assets/american_cities/Raleigh,%2520NC.json": "3cb538e72b3d0dcdca38869002b2a0eb",
"assets/assets/american_cities/Rancho%2520Cucamonga,%2520CA.json": "0ecf8686c15f33958629247ca3dc088b",
"assets/assets/american_cities/Rapid%2520City,%2520SD.json": "06251e70abe40b2b538a4cf7c4da2345",
"assets/assets/american_cities/Reno,%2520NV.json": "da59185c4586226adf8fbb079b26c89b",
"assets/assets/american_cities/Richmond,%2520VA.json": "f9e11621e420bc8cc4a7b926e5babe1c",
"assets/assets/american_cities/Riverside,%2520CA.json": "8f2c5c518bea2e8cd7be94698ce114af",
"assets/assets/american_cities/Rochester,%2520NY.json": "99004d9d5414c8cb05090731b6fd7b4d",
"assets/assets/american_cities/Sacramento,%2520CA.json": "16f6c39b2910e315ccb6bda4975ab375",
"assets/assets/american_cities/Salem,%2520OR.json": "e8585910e134deb6515086e1fe155104",
"assets/assets/american_cities/Salt%2520Lake%2520City,%2520UT.json": "4796e565458665321bb78cb6e2d8db67",
"assets/assets/american_cities/San%2520Antonio,%2520TX.json": "11eae0441d27457ae1c8060e779481be",
"assets/assets/american_cities/San%2520Bernardino,%2520CA.json": "0ddf830a058188aae62a77331bf9a777",
"assets/assets/american_cities/San%2520Diego,%2520CA.json": "516f606e20bcf1a0692a8951b0d85150",
"assets/assets/american_cities/San%2520Francisco,%2520CA.json": "9c77cce05fb8ef77b7ad4d0200e426df",
"assets/assets/american_cities/San%2520Jose,%2520CA.json": "29d9e4d61a60e053b4130de3091715c9",
"assets/assets/american_cities/Santa%2520Ana,%2520CA.json": "5cf9849c30cdc8a7e347077f95b93abb",
"assets/assets/american_cities/Santa%2520Clarita,%2520CA.json": "a08ff1880c8248014297542b4e4b4b2d",
"assets/assets/american_cities/Santa%2520Rosa,%2520CA.json": "aa58182da6562cece30523a76dc162c0",
"assets/assets/american_cities/Scottsdale,%2520AZ.json": "aad5443aca940a9db4841a0a2027e959",
"assets/assets/american_cities/Seattle,%2520WA.json": "307b4745c27267e84151434aa018c63d",
"assets/assets/american_cities/Shreveport,%2520LA.json": "6735b03f57bd33e2a170dfde1d34f443",
"assets/assets/american_cities/Sioux%2520Falls,%2520SD.json": "f0a7819e7426aa6568db904b2014f7b9",
"assets/assets/american_cities/South%2520Burlington,%2520VT.json": "d0a0d4cb8ca723f1b55284ab3024cfb0",
"assets/assets/american_cities/Spokane,%2520WA.json": "d9f170e8493f33f839774c55a1e466e5",
"assets/assets/american_cities/Springfield,%2520MO.json": "3d80c42c46a13cb637e84ef05541f40e",
"assets/assets/american_cities/St.%2520Louis,%2520MO.json": "d075676545b580ec63d85f9d2e26efe1",
"assets/assets/american_cities/St.%2520Paul,%2520MN.json": "cfe8c3173cf62af88e82ed53577f66ab",
"assets/assets/american_cities/St.%2520Petersburg,%2520FL.json": "298983e8f686db2313370e5b11633b79",
"assets/assets/american_cities/Stockton,%2520CA.json": "3b82246f67afe2a21c4ceb07e4bd10be",
"assets/assets/american_cities/Tacoma,%2520WA.json": "d80ed2db3ebafed024c0e544b2f4c8a0",
"assets/assets/american_cities/Tallahassee,%2520FL.json": "005172968883f741d65af38577f0b143",
"assets/assets/american_cities/Tampa,%2520FL.json": "d4aeae0ff625ed307bd28b969662a407",
"assets/assets/american_cities/Tempe,%2520AZ.json": "a61bf70f27b3d23e40fea2da53088a0d",
"assets/assets/american_cities/Toledo,%2520OH.json": "d975e67cb8017fe3ecfe6d88bc07162e",
"assets/assets/american_cities/Tucson,%2520AZ.json": "9174cf69680302b80331aebc8fbba785",
"assets/assets/american_cities/Tulsa,%2520OK.json": "8784091aadf9514d4b8027fef51f87da",
"assets/assets/american_cities/Vancouver,%2520WA.json": "963725b882e5434ab225a97f324f15a4",
"assets/assets/american_cities/Virginia%2520Beach,%2520VA.json": "ceaadd9559580f45b6f7c53bb7f43de9",
"assets/assets/american_cities/Warwick,%2520RI.json": "d75238edf54a54d7d37e09bcd3da969f",
"assets/assets/american_cities/Washington,%2520DC.json": "f0f294ee1ebea60e4b41878ae905c04e",
"assets/assets/american_cities/West%2520Valley%2520City,%2520UT.json": "f3338683dc2be1a1ba90475ac9348a4e",
"assets/assets/american_cities/Wichita,%2520KS.json": "7d8d347eef5f0cbdc9acec6c0da58504",
"assets/assets/american_cities/Wilmington,%2520DE.json": "608884328fde13994605805edc7b6239",
"assets/assets/american_cities/Winston-Salem,%2520NC.json": "cbc9e27f1437b9c1c0b673af05998835",
"assets/assets/american_cities/Worcester,%2520MA.json": "7fbdcfedcd223b97a63e384e8848d690",
"assets/assets/american_cities/Yonkers,%2520NY.json": "55cf8b210eaf1658c2b597ffc096d012",
"assets/assets/city_data.json": "0a1f4e7d72a2adaf989553cfad3b2a18",
"assets/assets/graphics/placeholder.png": "572d05ea07f31fe7c8c95b28e4c9857d",
"assets/assets/images/happiness-reaction/neutralface.png": "6a09ef7702eac81b0feabe3b10087929",
"assets/assets/images/happiness-reaction/sadface.png": "2b8a8b6c44c6c9c8ececc1c42232a367",
"assets/assets/images/happiness-reaction/smileface.png": "2925173ac985c7ec7cbb313154164905",
"assets/assets/images_hl_veg_only/Akron,%2520OH%2520hl_veg_only.png": "be20883be2dca2e178ddb46333774d32",
"assets/assets/images_hl_veg_only/Albuquerque,%2520NM%2520hl_veg_only.png": "768d991e4587fbc73247ea14eeedd70d",
"assets/assets/images_hl_veg_only/Amarillo,%2520TX%2520hl_veg_only.png": "a917a3ca5dffc799469ab6cab6eb49ea",
"assets/assets/images_hl_veg_only/Anaheim,%2520CA%2520hl_veg_only.png": "1596a1acc80efe35ad3b79894a7cf09e",
"assets/assets/images_hl_veg_only/Anchorage,%2520AK%2520hl_veg_only.png": "ed1f185dbeed04402fcd7220b243f89c",
"assets/assets/images_hl_veg_only/Arlington,%2520TX%2520hl_veg_only.png": "6308b2fe7f19b4b520fd97ed9197902f",
"assets/assets/images_hl_veg_only/Atlanta,%2520GA%2520hl_veg_only.png": "68606a2972c1fb5350c5e93101b59d4b",
"assets/assets/images_hl_veg_only/Augusta,%2520GA%2520hl_veg_only.png": "75fa6d8242bb4695dfeb8198bbc61497",
"assets/assets/images_hl_veg_only/Aurora,%2520CO%2520hl_veg_only.png": "41d0a70f39af536e0725082743cc53db",
"assets/assets/images_hl_veg_only/Aurora,%2520IL%2520hl_veg_only.png": "41b93673132f1a1fd13407b83125af60",
"assets/assets/images_hl_veg_only/Austin,%2520TX%2520hl_veg_only.png": "d10e1f184886420b63fba686c8e55941",
"assets/assets/images_hl_veg_only/Bakersfield,%2520CA%2520hl_veg_only.png": "80a43badb91f6e2daf38f6aa3327e7c0",
"assets/assets/images_hl_veg_only/Baltimore,%2520MD%2520hl_veg_only.png": "610c4c81eae73a11227d110117c62296",
"assets/assets/images_hl_veg_only/Baton%2520Rouge,%2520LA%2520hl_veg_only.png": "9d6b0553f2cd18bb1dca9c51ce385f93",
"assets/assets/images_hl_veg_only/Billings,%2520MT%2520hl_veg_only.png": "90ad2559ceea2bba5fda7e173cd9443a",
"assets/assets/images_hl_veg_only/Birmingham,%2520AL%2520hl_veg_only.png": "99def67438ec670a9f8594c779a279a3",
"assets/assets/images_hl_veg_only/Bismarck,%2520ND%2520hl_veg_only.png": "df88d652fb5d6f1badeed57763a0918d",
"assets/assets/images_hl_veg_only/Boise,%2520ID%2520hl_veg_only.png": "e411ef28ebdf649668a4498a8f77bfb1",
"assets/assets/images_hl_veg_only/Boston,%2520MA%2520hl_veg_only.png": "eeb8a6b3101c46c3cae4021667bc9e26",
"assets/assets/images_hl_veg_only/Bridgeport,%2520CT%2520hl_veg_only.png": "556c032c8785b32f4f6fadda6084cb76",
"assets/assets/images_hl_veg_only/Brownsville,%2520TX%2520hl_veg_only.png": "8241d3f002db7e58e590f8edd81c4873",
"assets/assets/images_hl_veg_only/Buffalo,%2520NY%2520hl_veg_only.png": "0f3fea609c8e39048188891dfe12eb9f",
"assets/assets/images_hl_veg_only/Burlington,%2520VT%2520hl_veg_only.png": "00685a2e1aa6862eaf9d8afd0e02fdf6",
"assets/assets/images_hl_veg_only/Cape%2520Coral,%2520FL%2520hl_veg_only.png": "b4928c0ede66101d85d88acb5784ba49",
"assets/assets/images_hl_veg_only/Casper,%2520WY%2520hl_veg_only.png": "779a0c82fced8fb7018a06f071248c7c",
"assets/assets/images_hl_veg_only/Cedar%2520Rapids,%2520IA%2520hl_veg_only.png": "5818b1eb96b34139cad7a768673d8219",
"assets/assets/images_hl_veg_only/Chandler,%2520AZ%2520hl_veg_only.png": "5a1110e4a4c2bb24e3b60fd3adb0b946",
"assets/assets/images_hl_veg_only/Charleston,%2520SC%2520hl_veg_only.png": "7791f70fc61043ef1c3c1d6327639b6d",
"assets/assets/images_hl_veg_only/Charleston,%2520WV%2520hl_veg_only.png": "179f90e2b30317252a958532d190e8d7",
"assets/assets/images_hl_veg_only/Charlotte,%2520NC%2520hl_veg_only.png": "e07ced5b9933c06264d682af4a62b0a1",
"assets/assets/images_hl_veg_only/Chattanooga,%2520TN%2520hl_veg_only.png": "e548fab9953ab55027b3e054668af61f",
"assets/assets/images_hl_veg_only/Chesapeake,%2520VA%2520hl_veg_only.png": "54906fd233e97af24b9a8b951dad80ca",
"assets/assets/images_hl_veg_only/Cheyenne,%2520WY%2520hl_veg_only.png": "c03a2ef5b173c0e59d610aa743fa9092",
"assets/assets/images_hl_veg_only/Chicago,%2520IL%2520hl_veg_only.png": "36e6f7695155714cfa53e83bbdd2ed53",
"assets/assets/images_hl_veg_only/Chula%2520Vista,%2520CA%2520hl_veg_only.png": "86926c99e8040e63d5fde73566e270a7",
"assets/assets/images_hl_veg_only/Cincinnati,%2520OH%2520hl_veg_only.png": "721eff61c4373f3f297ca8fb8cfb787f",
"assets/assets/images_hl_veg_only/Cleveland,%2520OH%2520hl_veg_only.png": "2716433997435c73dcbb1310af0df221",
"assets/assets/images_hl_veg_only/Colorado%2520Springs,%2520CO%2520hl_veg_only.png": "37139693a0f862bae8904635337fe934",
"assets/assets/images_hl_veg_only/Columbia,%2520MD%2520hl_veg_only.png": "4585b92f41168f4489ea1a8af6aed9ba",
"assets/assets/images_hl_veg_only/Columbia,%2520SC%2520hl_veg_only.png": "d7762c416edb80fce3d8e0381e96fca6",
"assets/assets/images_hl_veg_only/Columbus,%2520GA%2520hl_veg_only.png": "c5e353ebfad9987d3d37e5eb4b3fb825",
"assets/assets/images_hl_veg_only/Columbus,%2520OH%2520hl_veg_only.png": "f69ba1b2bb47d45888fc9b1b902c1025",
"assets/assets/images_hl_veg_only/Corpus%2520Christi,%2520TX%2520hl_veg_only.png": "bac378cb34ae1fa61cbc79cc50b8a21b",
"assets/assets/images_hl_veg_only/Dallas,%2520TX%2520hl_veg_only.png": "8a80c8aa07a5866e555bf395767fd178",
"assets/assets/images_hl_veg_only/Denver,%2520CO%2520hl_veg_only.png": "0336d017b8678bceaa201476b5eaf840",
"assets/assets/images_hl_veg_only/Des%2520Moines,%2520IA%2520hl_veg_only.png": "10ce3f1cc2ae6c600ce7856ce535ba70",
"assets/assets/images_hl_veg_only/Detroit,%2520MI%2520hl_veg_only.png": "ed856b2c1e074cf292053d302d3d3e55",
"assets/assets/images_hl_veg_only/Dover,%2520DE%2520hl_veg_only.png": "2c0b934cb7e8b32cf4ed069f4b2083c8",
"assets/assets/images_hl_veg_only/Durham,%2520NC%2520hl_veg_only.png": "080806bc44b79d38df9b57ebd09c4feb",
"assets/assets/images_hl_veg_only/El%2520Paso,%2520TX%2520hl_veg_only.png": "68651f6742a33034234e87c71fd81794",
"assets/assets/images_hl_veg_only/Fargo,%2520ND%2520hl_veg_only.png": "6d40747e80d1f7515ce352df8d555ab2",
"assets/assets/images_hl_veg_only/Fayetteville,%2520NC%2520hl_veg_only.png": "95d67a053d0a46cad15186915b8c8e49",
"assets/assets/images_hl_veg_only/Fontana,%2520CA%2520hl_veg_only.png": "79ab3ff79a3cdde6b775f6afc9266a81",
"assets/assets/images_hl_veg_only/Fort%2520Lauderdale,%2520FL%2520hl_veg_only.png": "a0f064cbe3643e7f40cc3c698038c546",
"assets/assets/images_hl_veg_only/Fort%2520Smith,%2520AR%2520hl_veg_only.png": "df35f22ea50af9dcbed2fba54d9e0604",
"assets/assets/images_hl_veg_only/Fort%2520Wayne,%2520IN%2520hl_veg_only.png": "057e6ed01a127fef0f70f4ba4a32313e",
"assets/assets/images_hl_veg_only/Fort%2520Worth,%2520TX%2520hl_veg_only.png": "18daaceeeb42b7c52d16e909a6166ad3",
"assets/assets/images_hl_veg_only/Fremont,%2520CA%2520hl_veg_only.png": "e571fa7c780b52cbdafe9b155bc6d665",
"assets/assets/images_hl_veg_only/Fresno,%2520CA%2520hl_veg_only.png": "5cc27dac53137c835d18be3934c35c83",
"assets/assets/images_hl_veg_only/Garden%2520Grove,%2520CA%2520hl_veg_only.png": "d3a2602a8d76152fa5b273be013fb927",
"assets/assets/images_hl_veg_only/Garland,%2520TX%2520hl_veg_only.png": "529e75004672c2f4c2f5ed6f40dfebda",
"assets/assets/images_hl_veg_only/Gilbert,%2520AZ%2520hl_veg_only.png": "b91d8cdda1a438228dbffced74295f85",
"assets/assets/images_hl_veg_only/Glendale,%2520AZ%2520hl_veg_only.png": "538209b6eac975ab70146af70785ba67",
"assets/assets/images_hl_veg_only/Glendale,%2520CA%2520hl_veg_only.png": "522486a209beefc9118efdfda02e86a6",
"assets/assets/images_hl_veg_only/Grand%2520Prairie,%2520TX%2520hl_veg_only.png": "91d42a4d35a29f63a8872fdf3fa5708c",
"assets/assets/images_hl_veg_only/Grand%2520Rapids,%2520MI%2520hl_veg_only.png": "f7b8a30bee5a85791d2cae9953b68b6c",
"assets/assets/images_hl_veg_only/Greensboro,%2520NC%2520hl_veg_only.png": "3774661ce40b6a29555de78572f6e8c1",
"assets/assets/images_hl_veg_only/Gulfport,%2520MS%2520hl_veg_only.png": "2ed1c02a2b56d263b1fd6b29edb20e29",
"assets/assets/images_hl_veg_only/Henderson,%2520NV%2520hl_veg_only.png": "43ba9d56c815645d577fe08c6968043e",
"assets/assets/images_hl_veg_only/Hialeah,%2520FL%2520hl_veg_only.png": "df0e0fc1a84f0e5e4da1e4c38e9924c3",
"assets/assets/images_hl_veg_only/Honolulu,%2520HI%2520hl_veg_only.png": "1f07851aa5005614b43439d9a5a46c6e",
"assets/assets/images_hl_veg_only/Houston,%2520TX%2520hl_veg_only.png": "0b851c9f82c5f4054a069816c2918154",
"assets/assets/images_hl_veg_only/Huntington%2520Beach,%2520CA%2520hl_veg_only.png": "c9ebf9fb7bf9133615cd9c007bd6695a",
"assets/assets/images_hl_veg_only/Huntington,%2520WV%2520hl_veg_only.png": "558240e7309ed9ee1bb266da0e1f327e",
"assets/assets/images_hl_veg_only/Huntsville,%2520AL%2520hl_veg_only.png": "4a529dd8f8f998b20597e0e956463326",
"assets/assets/images_hl_veg_only/Indianapolis,%2520IN%2520hl_veg_only.png": "bec5d9e5f998530a500a45beaf6571ae",
"assets/assets/images_hl_veg_only/Irvine,%2520CA%2520hl_veg_only.png": "a28225253e497ea89274106f6cbe6c08",
"assets/assets/images_hl_veg_only/Irving,%2520TX%2520hl_veg_only.png": "e747d068d051541e08aaa4192997d553",
"assets/assets/images_hl_veg_only/Jackson,%2520MS%2520hl_veg_only.png": "7327538b42bfc4f7605b46973aa71bfd",
"assets/assets/images_hl_veg_only/Jacksonville,%2520FL%2520hl_veg_only.png": "9a5d8305407a9eab5cb5d4a7ccef4da8",
"assets/assets/images_hl_veg_only/Jersey%2520City,%2520NJ%2520hl_veg_only.png": "72be5c2a99377c1f605c78731b573509",
"assets/assets/images_hl_veg_only/Juneau,%2520AK%2520hl_veg_only.png": "bb3f3fa9b2de87ec9a4dfb2973954f8e",
"assets/assets/images_hl_veg_only/Kansas%2520City,%2520MO%2520hl_veg_only.png": "154c9eb6e81f7fc24ff55de802a0342a",
"assets/assets/images_hl_veg_only/Knoxville,%2520TN%2520hl_veg_only.png": "588066d925ec52e3cb40630d8f0c4a16",
"assets/assets/images_hl_veg_only/Laredo,%2520TX%2520hl_veg_only.png": "522c5971940bcab9fd5905922bb23f25",
"assets/assets/images_hl_veg_only/Las%2520Cruces,%2520NM%2520hl_veg_only.png": "acd08637862ba57ebf1f28f0f2390ba5",
"assets/assets/images_hl_veg_only/Las%2520Vegas,%2520NV%2520hl_veg_only.png": "6dee17abb7a1dcff815bfdab7abcb218",
"assets/assets/images_hl_veg_only/Lewiston,%2520ME%2520hl_veg_only.png": "b407a2a4c88fe68a47e02401902cde8c",
"assets/assets/images_hl_veg_only/Lexington-Fayette,%2520KY%2520hl_veg_only.png": "c6ee936030a081b076d41e518ff0717e",
"assets/assets/images_hl_veg_only/Lincoln,%2520NE%2520hl_veg_only.png": "5a525dd75e1e49bae1704868b85e3ea6",
"assets/assets/images_hl_veg_only/Little%2520Rock,%2520AR%2520hl_veg_only.png": "40a7f84c296ee2dd39ba10e6978db4a6",
"assets/assets/images_hl_veg_only/Long%2520Beach,%2520CA%2520hl_veg_only.png": "240071a04a09ef95c9e8601449b1fea4",
"assets/assets/images_hl_veg_only/Los%2520Angeles,%2520CA%2520hl_veg_only.png": "f01f87ede64b1c1538f7af8eb57ae79c",
"assets/assets/images_hl_veg_only/Louisville,%2520KY%2520hl_veg_only.png": "92ac9f5c59edbe11ad3146f59f7db0f1",
"assets/assets/images_hl_veg_only/Lubbock,%2520TX%2520hl_veg_only.png": "ef4833339d15929e8e26427d4c24ee16",
"assets/assets/images_hl_veg_only/Madison,%2520WI%2520hl_veg_only.png": "93f2f8aebe1395286e6f3240b643b264",
"assets/assets/images_hl_veg_only/Manchester,%2520NH%2520hl_veg_only.png": "e0130bd952e106fa5ec02b634e57266b",
"assets/assets/images_hl_veg_only/Memphis,%2520TN%2520hl_veg_only.png": "34130826515391ce6f28b5b1737709d1",
"assets/assets/images_hl_veg_only/Mesa,%2520AZ%2520hl_veg_only.png": "d8dda6d655bbe987724f3f7366ba057b",
"assets/assets/images_hl_veg_only/Miami,%2520FL%2520hl_veg_only.png": "c9ea8078a01b82f8c0c9ac86cec8fa84",
"assets/assets/images_hl_veg_only/Milwaukee,%2520WI%2520hl_veg_only.png": "d40f4bd95ca8a2f08979f97b919d5071",
"assets/assets/images_hl_veg_only/Minneapolis,%2520MN%2520hl_veg_only.png": "8d42089f162310065d441d7074172303",
"assets/assets/images_hl_veg_only/Missoula,%2520MT%2520hl_veg_only.png": "418fadacffff980bbdd5ac204b0f60e8",
"assets/assets/images_hl_veg_only/Mobile,%2520AL%2520hl_veg_only.png": "3d2f3e170a46ef0e1a53414e3263faab",
"assets/assets/images_hl_veg_only/Modesto,%2520CA%2520hl_veg_only.png": "0a2b47d768173b73b728a212a7bec044",
"assets/assets/images_hl_veg_only/Montgomery,%2520AL%2520hl_veg_only.png": "be55fb40aa45ec84ad06d9c903d7b7c0",
"assets/assets/images_hl_veg_only/Moreno%2520Valley,%2520CA%2520hl_veg_only.png": "0acbf5de29d35209aae9286f0b4bd148",
"assets/assets/images_hl_veg_only/Nampa,%2520ID%2520hl_veg_only.png": "640f31d642e6d70a0135edff6beae6a0",
"assets/assets/images_hl_veg_only/Nashua,%2520NH%2520hl_veg_only.png": "f8cee619d2b1b9de001c01048caf2488",
"assets/assets/images_hl_veg_only/Nashville,%2520TN%2520hl_veg_only.png": "967eff930ca3a1e5387964f49aca1acb",
"assets/assets/images_hl_veg_only/New%2520Haven,%2520CT%2520hl_veg_only.png": "145847843aa0421ccc37f0695cb88a7a",
"assets/assets/images_hl_veg_only/New%2520Orleans,%2520LA%2520hl_veg_only.png": "e994512e1308dbba196029165ef87a68",
"assets/assets/images_hl_veg_only/New%2520York,%2520NY%2520hl_veg_only.png": "bed266857947bce7b9743f24eb0b1374",
"assets/assets/images_hl_veg_only/Newark,%2520NJ%2520hl_veg_only.png": "2e9b1e9b17892b698323170786fa3a79",
"assets/assets/images_hl_veg_only/Newport%2520News,%2520VA%2520hl_veg_only.png": "16573f20a99a53a43cecd3bd7d3e6f7b",
"assets/assets/images_hl_veg_only/Norfolk,%2520VA%2520hl_veg_only.png": "f433a1c78b28bb3acec2cf503391657a",
"assets/assets/images_hl_veg_only/North%2520Las%2520Vegas,%2520NV%2520hl_veg_only.png": "9f0289a0f0f48ead25d3a950f36d9881",
"assets/assets/images_hl_veg_only/Oakland,%2520CA%2520hl_veg_only.png": "1dffd2ab66b42e07b10f1094eda43cbf",
"assets/assets/images_hl_veg_only/Oceanside,%2520CA%2520hl_veg_only.png": "fe2db08db2c2ae15079ed0dd794391e3",
"assets/assets/images_hl_veg_only/Oklahoma%2520City,%2520OK%2520hl_veg_only.png": "a453a69d8bce741d0ed58ac7efcc68e7",
"assets/assets/images_hl_veg_only/Omaha,%2520NE%2520hl_veg_only.png": "55cd97d6bfda4ad29a3686ed70f22cab",
"assets/assets/images_hl_veg_only/Ontario,%2520CA%2520hl_veg_only.png": "74c71effb73c10b1ab18aa18a6445d09",
"assets/assets/images_hl_veg_only/Orlando,%2520FL%2520hl_veg_only.png": "442bc72fbc6b4540d7caf50733dfb9d5",
"assets/assets/images_hl_veg_only/Overland%2520Park,%2520KS%2520hl_veg_only.png": "6cd688ba7063df677229065169b91b09",
"assets/assets/images_hl_veg_only/Oxnard,%2520CA%2520hl_veg_only.png": "a0db8c24a26bf8b4c29157da20cbc7ad",
"assets/assets/images_hl_veg_only/Pearl%2520City,%2520HI%2520hl_veg_only.png": "5e71e7543175e1cfa3d7902ad745ad20",
"assets/assets/images_hl_veg_only/Pembroke%2520Pines,%2520FL%2520hl_veg_only.png": "403f7bd8d4997d79623ede866a9a96a9",
"assets/assets/images_hl_veg_only/Peoria,%2520AZ%2520hl_veg_only.png": "6be87f9f620bbbf4815a835679bbe35a",
"assets/assets/images_hl_veg_only/Philadelphia,%2520PA%2520hl_veg_only.png": "97f9d461c1d280aea7a1ce66c5746cc5",
"assets/assets/images_hl_veg_only/Phoenix,%2520AZ%2520hl_veg_only.png": "595a2dea760b68e62c16178c8c967f47",
"assets/assets/images_hl_veg_only/Pittsburgh,%2520PA%2520hl_veg_only.png": "030b4e848effcc5da62ca8323ca878d7",
"assets/assets/images_hl_veg_only/Plano,%2520TX%2520hl_veg_only.png": "ccfd03b7aeead3c4e67f1791ef4b679b",
"assets/assets/images_hl_veg_only/Port%2520St.%2520Lucie,%2520FL%2520hl_veg_only.png": "ede11253f18654b22fc0f510b9a62347",
"assets/assets/images_hl_veg_only/Portland,%2520ME%2520hl_veg_only.png": "c4f3e1c51347bd6ed5b615eb161b2966",
"assets/assets/images_hl_veg_only/Portland,%2520OR%2520hl_veg_only.png": "895739bbfaf7004c88d8fd3c8f13c6c5",
"assets/assets/images_hl_veg_only/Providence,%2520RI%2520hl_veg_only.png": "e3a4f8e50fa270cfe2b8ff93cacb256b",
"assets/assets/images_hl_veg_only/Raleigh,%2520NC%2520hl_veg_only.png": "647cc75813e6bcb02766fb6e49d3886e",
"assets/assets/images_hl_veg_only/Rancho%2520Cucamonga,%2520CA%2520hl_veg_only.png": "2e19f8219c7fdef2e07492bde6fe6811",
"assets/assets/images_hl_veg_only/Rapid%2520City,%2520SD%2520hl_veg_only.png": "1ec80d7e0298eec144c775338f2065b8",
"assets/assets/images_hl_veg_only/Reno,%2520NV%2520hl_veg_only.png": "acb35dba11aedd3ec5fa19507e7d640d",
"assets/assets/images_hl_veg_only/Richmond,%2520VA%2520hl_veg_only.png": "e89e2e9497f7d21ec5e1cd3a0a1203d4",
"assets/assets/images_hl_veg_only/Riverside,%2520CA%2520hl_veg_only.png": "cd96a4c01973e3471d608e9c92a832d9",
"assets/assets/images_hl_veg_only/Rochester,%2520NY%2520hl_veg_only.png": "0555a5b7d210113c4358926dcdffc3cb",
"assets/assets/images_hl_veg_only/Sacramento,%2520CA%2520hl_veg_only.png": "02286e6fac8ded8191be62e18c372464",
"assets/assets/images_hl_veg_only/Salem,%2520OR%2520hl_veg_only.png": "9d0aecd92b2e5daf219d4f585c0ef001",
"assets/assets/images_hl_veg_only/Salt%2520Lake%2520City,%2520UT%2520hl_veg_only.png": "a8c4514d53b36cb2693af875fcc7f3c9",
"assets/assets/images_hl_veg_only/San%2520Antonio,%2520TX%2520hl_veg_only.png": "3665053e6b74fd5909602a5c78ca5ebd",
"assets/assets/images_hl_veg_only/San%2520Bernardino,%2520CA%2520hl_veg_only.png": "ea964ce482fce0fc32942d879e90810d",
"assets/assets/images_hl_veg_only/San%2520Diego,%2520CA%2520hl_veg_only.png": "351331ed2b155dc2c30ec2dfb3966583",
"assets/assets/images_hl_veg_only/San%2520Francisco,%2520CA%2520hl_veg_only.png": "fc5c88de0919f39fa24bf22b2f8c2a75",
"assets/assets/images_hl_veg_only/San%2520Jose,%2520CA%2520hl_veg_only.png": "a5f1cc0bb235b6e3e05429925c263974",
"assets/assets/images_hl_veg_only/Santa%2520Ana,%2520CA%2520hl_veg_only.png": "ac35321e08ca278a36f7655d3b92ddf1",
"assets/assets/images_hl_veg_only/Santa%2520Clarita,%2520CA%2520hl_veg_only.png": "158dd68325de2dfb8120b3e313090fe0",
"assets/assets/images_hl_veg_only/Santa%2520Rosa,%2520CA%2520hl_veg_only.png": "eea325ca6b4462a7ed7abc9573b60cef",
"assets/assets/images_hl_veg_only/Scottsdale,%2520AZ%2520hl_veg_only.png": "9dafcb53e556d0dcd57f1045d609242a",
"assets/assets/images_hl_veg_only/Seattle,%2520WA%2520hl_veg_only.png": "fbbdf73f5c3c1d1bcd6876930b5d5098",
"assets/assets/images_hl_veg_only/Shreveport,%2520LA%2520hl_veg_only.png": "dc7e15a0b08e32e684acc7492bee3be0",
"assets/assets/images_hl_veg_only/Sioux%2520Falls,%2520SD%2520hl_veg_only.png": "59d7653ccc607b195da8313493fb4415",
"assets/assets/images_hl_veg_only/South%2520Burlington,%2520VT%2520hl_veg_only.png": "aff180b57618091e68c2cd59321e37f2",
"assets/assets/images_hl_veg_only/Spokane,%2520WA%2520hl_veg_only.png": "f1b993def850291d1820dbf961f3917e",
"assets/assets/images_hl_veg_only/Springfield,%2520MO%2520hl_veg_only.png": "6e8748fb1079b3fac768ef71a0ca2739",
"assets/assets/images_hl_veg_only/St.%2520Louis,%2520MO%2520hl_veg_only.png": "3233dec4fc5855d9cae160ec6c51e3b8",
"assets/assets/images_hl_veg_only/St.%2520Paul,%2520MN%2520hl_veg_only.png": "17a2ade049885640c30acd2391c86749",
"assets/assets/images_hl_veg_only/St.%2520Petersburg,%2520FL%2520hl_veg_only.png": "08635499eea958c88d270ccc9d0265be",
"assets/assets/images_hl_veg_only/Stockton,%2520CA%2520hl_veg_only.png": "b77498871ec5f7f632af900c022a1f83",
"assets/assets/images_hl_veg_only/Tacoma,%2520WA%2520hl_veg_only.png": "91fdf6024aed9e33b6864facdff563d8",
"assets/assets/images_hl_veg_only/Tallahassee,%2520FL%2520hl_veg_only.png": "c53631a4329952c6985b93baa11914c9",
"assets/assets/images_hl_veg_only/Tampa,%2520FL%2520hl_veg_only.png": "d9555ed52c1335bd2d801c2dfc619edc",
"assets/assets/images_hl_veg_only/Tempe,%2520AZ%2520hl_veg_only.png": "8ef497afe9e84bbe62c811c675efd6c4",
"assets/assets/images_hl_veg_only/Toledo,%2520OH%2520hl_veg_only.png": "cbb60cca3cedb8842334543d7225b325",
"assets/assets/images_hl_veg_only/Tucson,%2520AZ%2520hl_veg_only.png": "3d7e4330c63fcd0bffc5c69e2f51b602",
"assets/assets/images_hl_veg_only/Tulsa,%2520OK%2520hl_veg_only.png": "b67ab525c59b7868947e53c4665c86cf",
"assets/assets/images_hl_veg_only/Vancouver,%2520WA%2520hl_veg_only.png": "f430a41b07708745e2cba4f450e9a944",
"assets/assets/images_hl_veg_only/Virginia%2520Beach,%2520VA%2520hl_veg_only.png": "c90332cc34bf15f7bb0040e8647c2097",
"assets/assets/images_hl_veg_only/Warwick,%2520RI%2520hl_veg_only.png": "49e9bed4223fc9a875af577d1cce430c",
"assets/assets/images_hl_veg_only/Washington,%2520DC%2520hl_veg_only.png": "8e03fdc1c8409f4371e14862e61d9e09",
"assets/assets/images_hl_veg_only/West%2520Valley%2520City,%2520UT%2520hl_veg_only.png": "d2dabab9c749bd1029690c4de8ad9bb6",
"assets/assets/images_hl_veg_only/Wichita,%2520KS%2520hl_veg_only.png": "1d4586746d28fed1e9dfd219a77eead5",
"assets/assets/images_hl_veg_only/Wilmington,%2520DE%2520hl_veg_only.png": "16fc0967bd746ba369a3e5f86dc0c61c",
"assets/assets/images_hl_veg_only/Winston-Salem,%2520NC%2520hl_veg_only.png": "80657b2169e472e304c88c45c83cce8e",
"assets/assets/images_hl_veg_only/Worcester,%2520MA%2520hl_veg_only.png": "50534b7b9f827b304055b4926b54f0a2",
"assets/assets/images_hl_veg_only/Yonkers,%2520NY%2520hl_veg_only.png": "f9186f23eb55b2b2cdc3283476ae679c",
"assets/assets/transparent.png": "0e3a6096212efdffd9be6c2dbea24b1e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "079bfea7cac67433ebdaceb2af8720b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ca521328367eecde1346dc3e90e191c",
"/": "5ca521328367eecde1346dc3e90e191c",
"main.dart.js": "749451e20da54ae5f15d0338c8740700",
"manifest.json": "d1488d5806172577e7e1365cae5ab7df",
"version.json": "5cc95e57ac31be366b9a35314372ea18"
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
