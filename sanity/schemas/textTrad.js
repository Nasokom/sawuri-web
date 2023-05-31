export default{
    name:'textTrad',
    type:'object',
    title:'Traduction_Texte',
    fields:[
        {
            name:'fr',
            type: "array",
            of: [{ type: "block" }],
            title:'Francais'
        },
        {
            name:'de',
            type: "array",
            of: [{ type: "block" }],
            title:'Allemand'
        },
        {
            name:'en',
            type: "array",
            of: [{ type: "block" }],
            title:'Anglais'
        }
    ]
}