
var qoute = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "So many books, so little time.",
        Auther:" ― Frank Zappa"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },
    {
        qoute: "'Be the change that you wish to see in the world.'",
        Auther: "Mahatma Gandhi"
    },
    {
        qoute: "To live is the rarest thing in the world. Most people exist, that is all.”",
        Auther: "― Oscar Wilde"
    },
    {
        qoute: "“We accept the love we think we deserve.”",
        Auther: "-― Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        qoute:"“Without music, life would be a mistake.”",
        Auther: "― Friedrich Nietzsche,"
    },
    {
        qoute: "I knew little else, but I always knew you.'",
        Auther: "― Holly Black"
    },
    {
        qoute: "“At my weakest, I wish for him. And at my strongest, I wish I could say it wasn’t the same.”",
        Auther: "― Lauren Roberts, Reckless"
    },
    {
        qoute: "The best revenge is massive success.",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "Resentment is like drinking poison and waiting for your enemies to die.",
        Auther: "--Nelson Mandela"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },

]




function newQoute() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}
