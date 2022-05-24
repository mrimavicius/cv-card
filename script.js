"use strict"

const EXP_API = "https://zany-skitter-caper.glitch.me/experiences"
const SKILLS_API = "https://zany-skitter-caper.glitch.me/skills"
const exp = document.querySelector(".exp")
const skl = document.querySelector(".skills")

fetch(EXP_API)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(x => {
        const card = document.createElement("div")
        card.classList.add("item")
        card.innerHTML = 
        `
            <div class="year">
                <h5>${x.startYear} - ${x.finishYear}</h5>
                <p>${x.companyName}</p>
            </div>
            <div class="description">
                <h4>${x.position}</h4>
                <p>${x.description}</p>
            </div>
        `
        exp.append(card)
    });
})

fetch(SKILLS_API)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(x => {
        const skills = document.createElement("div")
        skills.classList.add("skill")
        skills.innerHTML =
        `
        <label for="js">${x.title}</label>
        <progress id="js" value="${x.level}" max="100"></progress>
        `
        skl.append(skills)
    })
})