const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addedBtn = document.getElementById("addedBtn")
const deletedBtn = document.getElementById("deletedBtn")
const list = document.getElementById("list")

const listContent = []

const Render = function(){
    let listHTML = ''

    listContent.forEach(function(item){
        listHTML = listHTML + `
        <div class="list" id="list">
            <div class="item">
                <div>
                    <p>内容：${item.Content}</p>
                    <p>时间：${item.Date + ' ' + item.Time}</p>
                </div>
            </div>
        </div>
        `
    })

    list.innerHTML = listHTML
}

addedBtn.addEventListener('click',function(){
    listContent.unshift({
        Content: content.value,
        Date: date.value,
        Time: time.value
    })

    Render()
})

deletedBtn.addEventListener('click',function(){
    listContent.shift()
    Render()
})