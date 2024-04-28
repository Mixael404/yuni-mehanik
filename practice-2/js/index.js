console.log("Table");
const url = 'https://jsonplaceholder.typicode.com/posts'
const table = document.querySelector('table')
const search = document.querySelector('input')

async function getPosts(){
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Some error occupied!")
        }
        const data = await response.json()
        return data
    } catch(e){
        console.log(e);
    }
}

function renderCell(value, wrapper){
    const cell = document.createElement('td')
    cell.textContent = value
    wrapper.append(cell)
}

function renderRow(post){
    const row = document.createElement('tr')
    for (const key in post) {
        renderCell(post[key], row)
    }
    table.children[1].append(row)
}

function renderRows(data){
    table.children[1].innerHTML = ''
    data.forEach(post => {
        renderRow(post)
    });
}

function sortFields(data){
    table.addEventListener('click', (e) => {
        if(e.target.tagName !== 'TH'){
            return
        }
        const fieldToSort = e.target.dataset.type
        const currentOrder = e.target.dataset?.order
        
        if(currentOrder === "ASC"){
            e.target.dataset.order = 'DESC'
            data.sort((a,b) => {
                if(a[fieldToSort] < b[fieldToSort]) return 1
                if(a[fieldToSort] > b[fieldToSort]) return -1
                return 0
            })
        } else{
            data.sort((a,b) => {
                e.target.dataset.order = 'ASC'
                if(a[fieldToSort] < b[fieldToSort]) return -1
                if(a[fieldToSort] > b[fieldToSort]) return 1
                return 0
            })
        }
        const dataToShow = searchRows(search.value , data)
        renderRows(dataToShow)
    })

}

function searchRows(value, data){
        if(value.length < 3){
            renderRows(data)
            return data
        }
        const filteredData = data.filter(post => {
            let isContainsSubstring = false
            for(const key in post){
                if(post[key].toString().includes(value)) isContainsSubstring = true
            }
            return isContainsSubstring
        })
        renderRows(filteredData)
        return filteredData
}


getPosts()
    .then((data) => {
        renderRows(data)
        sortFields(data)
        search.addEventListener('keyup', (e) => searchRows(e.target.value , data))
    })


