const generateID = () => Math.floor(Math.random()*(999999-100000)+100000)*1000;
let dogss = [
  {
    id:generateID()+505,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe5.jpg',
    name:'Lulu',
    height:'15',
    weight:'18-25',
    yearsLife:'15-18',
    temperament:[40,41,42]
  },
  {
    id:generateID()+501,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe1.jpg',
    name:'Toby',
    height:'5-10',
    weight:'28-40',
    yearsLife:'10-15',
    temperament:[2,4,6]
  },
  {
    id:generateID()+502,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe2.jp',
    name:'Chato',
    height:'7',
    weight:'20-30',
    yearsLife:'15',
    temperament:[10,11,12]
  },
  {
    id:generateID()+503,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe3.jpg',
    name:'Leon',
    height:'7-12',
    weight:'30',
    yearsLife:'12-15',
    temperament:[1,3,5]
  },
  {
    id:generateID()+504,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe4.jpg',
    name:'Tilin',
    height:'5-15',
    weight:'20-25',
    yearsLife:'12-18',
    temperament:[20,21,22]
  },
  {
    id:generateID()+505,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe5.jpg',
    name:'Lulu',
    height:'15',
    weight:'18-25',
    yearsLife:'15-18',
    temperament:[40,41,42]
  },
  {
    id: 20,
    image: 'default',
    name: 'Aussiedoodle',
    weight: '11-32',
    height: 'varies',
    yearsLife: '10-12',
    temperament: [ 1 ]
  },
  {
    id: 27,
    image: 'default',
    name: 'Bassador',
    weight: '23-32',
    height: 'varies',
    yearsLife: '10-12',
    temperament: [ 1 ]
  },
  {
    id: 35,
    image: 'default',
    name: 'Belgian Laekenois',
    weight: '20-29',
    height: '56-66',
    yearsLife: '10-12',
    temperament: [ 33, 51, 18, 6, 30, 71 ]
  },
  {
    id: 37,
    image: 'default',
    name: 'Belgian Sheepdog',
    weight: '18-34',
    height: '56-66',
    yearsLife: '12-14',
    temperament: [ 35, 22, 20, 38, 6, 86 ]
  },
  {
    id: 39,
    image: 'default',
    name: 'Bergamasco',
    weight: '25-39',
    height: '56-60',
    yearsLife: '13-15',
    temperament: [ 93, 66, 20, 125 ]
  },
  {
    id: 40,
    image: 'default',
    name: 'Berger Picard',
    weight: '25-32',
    height: '55-65',
    yearsLife: '12-15',
    temperament: [ 2, 37, 33, 51, 20, 126 ]
  },
  {
    id: 44,
    image: 'default',
    name: 'Black Russian Terrier',
    weight: '36-66',
    height: '66-76',
    yearsLife: '10-11',
    temperament: [ 68, 33, 51, 19, 88, 23 ]
  },
  {
    id: 46,
    image: 'default',
    name: 'Blue Picardy Spaniel',
    weight: '25-32',
    height: '56-61',
    yearsLife: '9-13',
    temperament: [ 4, 34, 77, 6, 30, 69 ]
  },
  {
    id: 49,
    image: 'default',
    name: 'Bolognese',
    weight: '3-5',
    height: '23-30',
    yearsLife: '13-15',
    temperament: [ 24, 127, 22, 41, 128 ]
  },
  {
    id: 52,
    image: 'default',
    name: 'Borzoi',
    weight: '25-54',
    height: '66-71',
    yearsLife: '10-13',
    temperament: [ 108, 11, 103, 34, 20, 89 ]
  },
  {
    id: 60,
    image: 'default',
    name: 'Brussels Griffon',
    weight: '4-5',
    height: '25',
    yearsLife: '12-15',
    temperament: [ 107, 90, 18, 57, 75, 71 ]
  },
  {
    id: 63,
    image: 'default',
    name: 'Bulldog',
    weight: '18-23',
    height: '30-41',
    yearsLife: '8-10',
    temperament: [ 129, 24, 123, 17 ]
  },
  {
    id: 66,
    image: 'default',
    name: 'Canaan Dog',
    weight: '16-25',
    height: '48-61',
    yearsLife: '12-14',
    temperament: [ 53, 36, 18, 85, 20, 125 ]
  },
  {
    id: 72,
    image: 'default',
    name: 'Cavapom',
    weight: '4-9',
    height: 'varies',
    yearsLife: '10-12',
    temperament: [ 1 ]
  },
  {
    id: 73,
    image: 'default',
    name: 'Cavapoo',
    weight: '5-11',
    height: 'varies',
    yearsLife: '10-15',
    temperament: [ 55, 17, 35, 92, 22, 4 ]
  },
  {
    id: 74,
    image: 'default',
    name: 'Cesky Terrier',
    weight: '6-11',
    height: '25-33',
    yearsLife: '10-15',
    temperament: [ 74, 41, 89, 31, 69, 130 ]
  },
  {
    id: 75,
    image: 'default',
    name: 'Chart Polski',
    weight: '29-43',
    height: '67-80',
    yearsLife: '10-13',
    temperament: [ 41, 19, 52, 23 ]
  },
  {
    id: 77,
    image: 'default',
    name: 'Chihuahua',
    weight: '3',
    height: '13',
    yearsLife: '12-20',
    temperament: [ 36, 51, 18, 85, 21 ]
  },
  {
    id: 82,
    image: 'default',
    name: 'Chug',
    weight: '5-9',
    height: 'varies',
    yearsLife: '10-13',
    temperament: [ 1 ]
  },
  {
    id: 83,
    image: 'default',
    name: "Cirneco dell'Etna",
    weight: '8-12',
    height: '42-50',
    yearsLife: '12-14',
    temperament: [ 35, 34 ]
  },
  {
    id: 85,
    image: 'default',
    name: 'Cockapoo',
    weight: '5-14',
    height: 'varies',
    yearsLife: '14-18',
    temperament: [ 16, 17, 20, 29, 6 ]
  },
  {
    id: 88,
    image: 'default',
    name: 'Collie',
    weight: '23-32',
    height: '56-66',
    yearsLife: '10-14',
    temperament: [ 17, 22, 34, 20, 6, 30 ]
  },
  {
    id: 90,
    image: 'default',
    name: 'Curly-Coated Retriever',
    weight: '27-32',
    height: '58-69',
    yearsLife: '10-15',
    temperament: [ 114, 51, 11, 75, 20, 31 ]
  },
  {
    id: 91,
    image: 'default',
    name: 'Dachshund',
    weight: '5-15',
    height: '20-23',
    yearsLife: '12-15',
    temperament: [ 114, 2, 36, 51, 4, 21 ]
  },
  {
    id: 93,
    image: 'default',
    name: 'Dandie Dinmont Terrier',
    weight: '8-11',
    height: '20-28',
    yearsLife: '12-14',
    temperament: [ 35, 51, 11, 57, 66, 7 ]
  },
  {
    id: 96,
    image: 'default',
    name: 'Dogue de Bordeaux',
    weight: '41-73',
    height: '58-69',
    yearsLife: '5-10',
    temperament: [ 36, 22, 57, 125, 58, 21 ]
  },
  {
    id: 97,
    image: 'default',
    name: 'Doxiepoo',
    weight: '5-14',
    height: 'varies',
    yearsLife: '10-15',
    temperament: [ 1 ]
  },
  {
    id: 99,
    image: 'default',
    name: 'English Cocker Spaniel',
    weight: '12-15',
    height: '38-43',
    yearsLife: '12-14',
    temperament: [ 31, 17, 35, 4, 89, 28 ]
  },
  {
    id: 100,
    image: 'default',
    name: 'English Foxhound',
    weight: '27-32',
    height: '61',
    yearsLife: '10-13',
    temperament: [ 17, 92, 57, 34, 98, 6 ]
  },
  {
    id: 106,
    image: 'default',
    name: 'Entlebucher Mountain Dog',
    weight: '20-29',
    height: '41-51',
    yearsLife: '10-13',
    temperament: [ 67, 36, 63, 22, 11, 20 ]
  },
  {
    id: 109,
    image: 'default',
    name: 'Fila Brasileiro',
    weight: '41-45',
    height: '60-75',
    yearsLife: '10-12',
    temperament: [ 24, 22, 40, 66, 23, 21 ]
  },
  {
    id: 112,
    image: 'default',
    name: 'Flat-Coated Retriever',
    weight: '27-32',
    height: '56-62',
    yearsLife: '10-13',
    temperament: [ 16, 17, 36, 131, 19 ]
  },
  {
    id: 117,
    image: 'default',
    name: 'German Spitz',
    weight: '4-12',
    height: '18-56',
    yearsLife: '14-16',
    temperament: [ 36, 51, 45, 31, 132 ]
  },
  {
    id: 118,
    image: 'default',
    name: 'German Wirehaired Pointer',
    weight: '20-34',
    height: '56-66',
    yearsLife: '14-16',
    temperament: [ 123, 17, 35, 22, 20, 6 ]
  },
  {
    id: 122,
    image: 'default',
    name: 'Goldendoodle',
    weight: '7-14',
    height: '33-61',
    yearsLife: '10-15',
    temperament: [ 17, 33, 20, 31 ]
  },
  {
    id: 126,
    image: 'default',
    name: 'Greater Swiss Mountain Dog',
    weight: '39-64',
    height: '60-72',
    yearsLife: '7-9',
    temperament: [ 67, 55, 50, 36, 18, 30 ]
  },
  {
    id: 131,
    image: 'default',
    name: 'Ibizan Hound',
    weight: '20-23',
    height: '57-70',
    yearsLife: '11-14',
    temperament: [ 2, 9, 11, 20, 6, 133 ]
  },
  {
    id: 132,
    image: 'default',
    name: 'Icelandic Sheepdog',
    weight: '9-20',
    height: '42-46',
    yearsLife: '12-15',
    temperament: [ 68, 74, 33, 63, 90, 18 ]
  },
  {
    id: 133,
    image: 'default',
    name: 'Irish Red and White Setter',
    weight: '23-34',
    height: '57-66',
    yearsLife: '11-15',
    temperament: [ 49, 35, 36, 33, 22, 4 ]
  },
  {
    id: 136,
    image: 'default',
    name: 'Irish Water Spaniel',
    weight: '20-31',
    height: '53-61',
    yearsLife: '12-15',
    temperament: [ 9, 90, 18, 85, 20, 6 ]
  },
  {
    id: 139,
    image: 'default',
    name: 'Jack Russell Terrier',
    weight: '6-8',
    height: '33-36',
    yearsLife: '12-14',
    temperament: [ 1 ]
  },
  {
    id: 143,
    image: 'default',
    name: 'Kerry Blue Terrier',
    weight: '15-18',
    height: '44-50',
    yearsLife: '12-15',
    temperament: [ 39, 35, 56, 18, 22, 34 ]
  },
  {
    id: 146,
    image: 'default',
    name: 'Kromfohrlander',
    weight: '11-14',
    height: '38-46',
    yearsLife: '12-14',
    temperament: [ 24, 55, 56, 57, 77, 31 ]
  },
  {
    id: 148,
    image: 'default',
    name: 'Labradoodle',
    weight: '20-45',
    height: '36-61',
    yearsLife: '10-15',
    temperament: [ 1 ]
  },
  {
    id: 150,
    image: 'default',
    name: 'Lacy Dog',
    weight: '14-23',
    height: '43-56',
    yearsLife: '12-16',
    temperament: [ 47, 36, 18, 20, 6, 134 ]
  },
  {
    id: 152,
    image: 'default',
    name: 'Lakeland Terrier',
    weight: '7-8',
    height: '37',
    yearsLife: '12-15',
    temperament: [ 17, 47, 11, 19, 20, 31 ]
  },
  {
    id: 154,
    image: 'default',
    name: 'Large Munsterlander',
    weight: '23-34',
    height: '58-64',
    yearsLife: '11-13',
    temperament: [ 35, 51, 22, 106, 31, 135 ]
  },
  {
    id: 157,
    image: 'default',
    name: 'Lhasapoo',
    weight: '5-9',
    height: 'varies',
    yearsLife: '12-15',
    temperament: [
      46, 50, 17, 36, 37,
      56, 33, 51, 18, 40,
      4, 20
    ]
  },
  {
    id: 158,
    image: 'default',
    name: 'Longdog',
    weight: '16-45',
    height: '61-76',
    yearsLife: '10-13',
    temperament: [ 1 ]
  },
  {
    id: 159,
    image: 'default',
    name: 'Lowchen',
    weight: '7',
    height: '30-33',
    yearsLife: '12-15',
    temperament: [ 17, 4, 20, 12, 6, 82 ]
  },
  {
    id: 160,
    image: 'default',
    name: 'Lurcher',
    weight: '16-45',
    height: '69-76',
    yearsLife: '10-15',
    temperament: [ 1 ]
  },
  {
    id: 162,
    image: 'default',
    name: 'Maltipoo',
    weight: '2-7',
    height: '36',
    yearsLife: '10-15',
    temperament: [ 1 ]
  },
  {
    id: 163,
    image: 'default',
    name: 'Manchester Terrier',
    weight: '5-10',
    height: '38-41',
    yearsLife: '14-16',
    temperament: [ 36, 81, 18, 87, 136, 6 ]
  },
  {
    id: 164,
    image: 'default',
    name: 'Mastiff',
    weight: '54-104',
    height: '70-76',
    yearsLife: '8-10',
    temperament: [ 55, 35, 10, 30, 69, 21 ]
  },
  {
    id: 166,
    image: 'default',
    name: 'Miniature Bull Terrier',
    weight: '9-16',
    height: '25-36',
    yearsLife: '11or12',
    temperament: [ 31, 30, 43, 81, 6 ]
  },
  {
    id: 169,
    image: 'default',
    name: 'Mudi',
    weight: '8-13',
    height: '38-47',
    yearsLife: '12-14',
    temperament: [ 81, 33, 51, 18, 20, 21 ]
  },
  {
    id: 170,
    image: 'default',
    name: 'Neapolitan Mastiff',
    weight: '50-91',
    height: '61-79',
    yearsLife: '8-10',
    temperament: [ 2, 50, 40, 38, 30, 31 ]
  },
  {
    id: 173,
    image: 'default',
    name: 'Norwegian Buhund',
    weight: '12-18',
    height: '41-47',
    yearsLife: '12-15',
    temperament: [ 17, 33, 63, 21, 7 ]
  },
  {
    id: 174,
    image: 'default',
    name: 'Norwegian Elkhound',
    weight: '22-25',
    height: '50-52',
    yearsLife: '10-12',
    temperament: [ 39, 68, 47, 18, 22, 4 ]
  },
  {
    id: 175,
    image: 'default',
    name: 'Norwegian Lundehund',
    weight: '6-7',
    height: '30-38',
    yearsLife: '6-8',
    temperament: [ 33, 18, 22, 30 ]
  },
  {
    id: 180,
    image: 'default',
    name: 'Otterhound',
    weight: '29-57',
    height: '61-71',
    yearsLife: '10-15',
    temperament: [ 104, 64, 58 ]
  },
  {
    id: 182,
    image: 'default',
    name: 'Pekeapoo',
    weight: '4-9',
    height: '20-38',
    yearsLife: '12-14',
    temperament: [ 1 ]
  },
  {
    id: 186,
    image: 'default',
    name: 'Peruvian Inca Orchid',
    weight: '4-25',
    height: '43-56',
    yearsLife: '11-12',
    temperament: [ 35, 51, 18, 137, 20, 30 ]
  },
  {
    id: 187,
    image: 'default',
    name: 'Petit Basset Griffon Vendeen',
    weight: '11-19',
    height: '33-38',
    yearsLife: '10-14',
    temperament: [ 118, 17, 51, 11, 12, 6 ]
  },
  {
    id: 190,
    image: 'default',
    name: 'Pointer',
    weight: '20-34',
    height: '58-71',
    yearsLife: '12-15',
    temperament: [ 58, 42, 35, 64, 22, 6 ]
  },
  {
    id: 191,
    image: 'default',
    name: 'Polish Lowland Sheepdog',
    weight: '16-25',
    height: '43-51',
    yearsLife: '10-12',
    temperament: [ 67, 51, 63, 20, 58, 138 ]
  },
  {
    id: 192,
    image: 'default',
    name: 'Pomapoo',
    weight: '2-7',
    height: '20-25',
    yearsLife: '12-14',
    temperament: [ 1 ]
  },
  {
    id: 194,
    image: 'default',
    name: 'Pomsky',
    weight: '3-17',
    height: '25-38',
    yearsLife: '12-15',
    temperament: [ 1 ]
  },
  {
    id: 195,
    image: 'default',
    name: 'Poodle',
    weight: '18-25',
    height: '41-61',
    yearsLife: '14-18',
    temperament: [ 18, 20, 28, 6, 139, 31 ]
  },
  {
    id: 198,
    image: 'default',
    name: 'Portuguese Podengo',
    weight: '4-30',
    height: '20-71',
    yearsLife: '10-14',
    temperament: [ 68, 17, 51, 57, 20, 6 ]
  },
  {
    id: 199,
    image: 'default',
    name: 'Portuguese Water Dog',
    weight: '16-27',
    height: '43-58',
    yearsLife: '10-14',
    temperament: [ 140, 24, 141, 40, 20, 23 ]
  },
  {
    id: 200,
    image: 'default',
    name: 'Presa Canario',
    weight: '45-73',
    height: '56-65',
    yearsLife: '9–11',
    temperament: [ 39, 94, 34, 38, 69 ]
  },
  {
    id: 202,
    image: 'default',
    name: 'Pugapoo',
    weight: '5-14',
    height: '20-38',
    yearsLife: '12-14',
    temperament: [ 1 ]
  },
  {
    id: 203,
    image: 'default',
    name: 'Puggle',
    weight: '7-14',
    height: '20-38',
    yearsLife: '12-14',
    temperament: [
      35, 123, 43, 81,  92, 56,
      51,  22,  4, 66,  34, 20,
      12,  29, 71, 23, 142
    ]
  },
  {
    id: 206,
    image: 'default',
    name: 'Pyrenean Shepherd',
    weight: '7-15',
    height: '38-52',
    yearsLife: '12-16',
    temperament: [ 114, 33, 143, 31, 71, 101 ]
  },
  {
    id: 215,
    image: 'default',
    name: 'Schapendoes',
    weight: '14-18',
    height: '41-51',
    yearsLife: '12-15',
    temperament: [ 17, 51, 20, 45, 71, 21 ]
  },
  {
    id: 217,
    image: 'default',
    name: 'Schnoodle',
    weight: '5-9',
    height: '25-30',
    yearsLife: '13-17',
    temperament: [
      39, 114, 36, 40,
      20,  29,  6, 30
    ]
  },
  {
    id: 220,
    image: 'default',
    name: 'Sealyham Terrier',
    weight: '9-11',
    height: '27',
    yearsLife: '14-17',
    temperament: [ 50, 17, 18, 58, 69 ]
  },
  {
    id: 224,
    image: 'default',
    name: 'Shihpoo',
    weight: '3-9',
    height: '20-38',
    yearsLife: '15',
    temperament: [ 1 ]
  },
  {
    id: 227,
    image: 'default',
    name: 'Silken Windhound',
    weight: '9-20',
    height: '47-60',
    yearsLife: '14',
    temperament: [ 17, 35, 4, 57, 78, 82 ]
  },
  {
    id: 229,
    image: 'default',
    name: 'Skye Terrier',
    weight: '16-20',
    height: '23-25',
    yearsLife: '12-14',
    temperament: [ 50, 17, 22, 87, 20, 70 ]
  },
  {
    id: 230,
    image: 'default',
    name: 'Sloughi',
    weight: '16-29',
    height: '61-74',
    yearsLife: '12-15',
    temperament: [ 18, 75, 20, 28 ]
  },
  {
    id: 231,
    image: 'default',
    name: 'Small Munsterlander Pointer',
    weight: '16-27',
    height: '48-56',
    yearsLife: '12-14',
    temperament: [ 39, 35, 20, 45, 12, 31 ]
  },
  {
    id: 234,
    image: 'default',
    name: 'Spanish Greyhound',
    weight: '23-29',
    height: '61-70',
    yearsLife: '10-13',
    temperament: [ 1 ]
  },
  {
    id: 237,
    image: 'default',
    name: 'Sprollie',
    weight: '18-25',
    height: '46-53',
    yearsLife: '12-16',
    temperament: [ 1 ]
  },
  {
    id: 240,
    image: 'default',
    name: 'Sussex Spaniel',
    weight: '16-20',
    height: '33-38',
    yearsLife: '10-15',
    temperament: [ 17, 74, 36, 92, 57, 69 ]
  },
  {
    id: 241,
    image: 'default',
    name: 'Swedish Lapphund',
    weight: '15-24',
    height: '41-51',
    yearsLife: '10-13',
    temperament: [ 42, 35, 51, 18, 31, 144 ]
  },
  {
    id: 247,
    image: 'default',
    name: 'Tosa Ken',
    weight: '45-91',
    height: '56-61',
    yearsLife: '10-12',
    temperament: [ 94, 50, 117, 75, 20, 23 ]
  },
  {
    id: 249,
    image: 'default',
    name: 'Toy Poodle',
    weight: '2-5',
    height: '25',
    yearsLife: '14-18',
    temperament: [ 1 ]
  },
  {
    id: 252,
    image: 'default',
    name: 'Volpino Italiano',
    weight: '4-6',
    height: '24-30',
    yearsLife: '14-16',
    temperament: [ 35, 51, 4, 87, 6, 71 ]
  },
  {
    id: 255,
    image: 'default',
    name: 'Welsh Terrier',
    weight: '9-10',
    height: '38-39',
    yearsLife: '10-14',
    temperament: [ 17, 56, 18, 20 ]
  },
  {
    id: 263,
    image: 'default',
    name: 'Yorkipoo',
    weight: '4-7',
    height: 'varies',
    yearsLife: '15',
    temperament: [ 1 ]
  }
];

dogss = dogss.slice(0,5)

const relations = dogss.map(el=>el.temperament.map(el1=>{return {DogId: el.id, TemperamentId:el1}})).flat()

module.exports = {dogss,relations};

// module.exports = async ()=>{
//   try{
//     for(let dg of dogss){
//       const {id,image,name,height,weight,yearsLife,temperaments} = dg;
//       const newDog = await Dog.Create({id,image,name,height,weight,yearsLife});
//       newDog.addTemperaments(temperaments)
//     }
//   }catch(err){
//     console.log({message:err.message})
//   }
// }
