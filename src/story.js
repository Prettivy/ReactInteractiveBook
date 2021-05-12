const story = [
  {
    "id" : 1,
    "title" : "Histoire LoL",
    "chapter" : "Le début de l'aventure",
    "content" : "Contenu du premier chapitre... bla bla bla, vous arrivez à un croisement, vous pouvez aller, soit à a gauche, soit à droite, soit tout droit",
    "choices": [
      {
        "content" : "Vous allez à gauche",
        "target" : 2
      },
      {
        "content" : "Vous allez tout droit",
        "target" : 3
      },
      {
        "content" : "Vous allez à droite",
        "target" : 4
      },
      {
        "content" : "Vous dormez",
        "target" : 5
      }
    ]
  },
  {
    "id" : 2,
    "title" : "Histoire LoL",
    "chapter" : "Le héros s'enfonce dans les profondeurs",
    "content" : "Suivant vos opinions politiques, vous choisissez de partir à gauche toute, en commencez à entonner l'internationale pour vous donner du courage!, vous rencontrez un sombre magicien",
    "choices": [
      {
        "content" : "Vous lui tapez sur la gueule",
        "target" : 3
      },
      {
        "content" : "Vous tentez de discuter avec lui",
        "target" : 7
      },
      {
        "content" : "Vous prenez la fuite",
        "target" : 1
      }
    ]
  },
  {
    "id" : 3,
    "title" : "Histoire LoL",
    "chapter" : "Le chien aboie",
    "content" : "Le chien aboie et appel ainsi son maitre",
    "choices": [
      {
        "content" : "Vous regardez le chien",
        "target" : 9
      },
      {
        "content" : "Vous vous approchez du chien",
        "target" : 10
      },
      {
        "content" : "Vous prenez la fuite",
        "target" : 1
      }
    ]
  }
]

export default story