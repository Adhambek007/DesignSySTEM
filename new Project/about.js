let wrapper = document.querySelector('.box');
let users =[
    {
        id: 1,
        img:"./img/person.svg",
        text:"The quality of our talent network",

    },
    {
        id: 2,
        img:"./img/sozlanmalar.svg",
        text:"Usage & implementation of our software",
    },
    {
        id: 3,
        img:"./img/innovation.svg",
        text:"How we help drive innovation",
    }
]
users.forEach(user => {
    let hero = document.createElement("div");
    hero.innerHTML = `
       <div class="mt-[32px] flex flex-col gap-2">
                <div class="flex items-center gap-[23px]">
                    <img src="${user.img}" alt="person">
                    <p class="text-[18px] font-bold text-white">${user.text}</p>
                </div>
              
            </div>
    `
    wrapper.appendChild(hero);

})