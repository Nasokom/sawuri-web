export default {
    name: 'policy',
    type: 'document',
    title: 'infos reglementaires',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Titre'
      },
      {
        name: 'id',
        type: 'string',
        title: 'id',
        description:'Lien url, a voir ensemble',
      },
      {
        title: 'Sous Categorie',
        name: 'subCateg',
        type: 'array',
        description:" titre de sous categorie + un texte ",
        of: [{
                type: 'titreText',
            },]
      },
    ]}