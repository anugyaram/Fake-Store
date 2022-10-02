const result = document.getElementById('result')
const listItems = []

getData()

async function getData(){
    const res = await fetch('https://fakestoreapi.com/products')

    const data = await res.json()

    data.forEach((user) => {
        console.log(user)
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <p><b>Category:</b> ${user.category}</p>
            <div class="image">
          <img src="${user.image}" alt="${user.title}">
          </div>
          <div class="user-info">
            <h2>${user.title}</h2>
            <p><b>Cost:</b> ${user.price}</p>
            <button class="btn">Add To Cart</button>
          </div>
        `
        result.appendChild(li)
    })
}

