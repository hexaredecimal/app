
const createGrid = (data) => {
  let entries = Object.entries(data)
  removeId("grid")
  let grid = 
`
<div id ="grid" class="z-0 grid grid-cols-2 gap-2" style="margin-bottom: 20vh;grid-gap: 3vw;translate: 0% 4%">
`
  for (let i = 0; i < entries.length; i++) {
    grid = grid.concat(createGridCont(entries[i]))
  }
  return grid.concat("</div>")
}

const createGridSplit = () => {
  let split = 
`
<div class="grid gap-2">
`.concat(createGridCont().repeat(3))

  return split.concat("</div>")
}


const createGridCont = (data) => {
  let div = 
`
<div class="flex border p-2 mx-1 my-1 border-white-700 shadow-2xl drop-shadow-2xl bg-white rounded-lg">
`.concat(createTestImage(data))
  return div.concat("</div>")
}

const createTestImage = (data) => {
  let nm = data[0]
  let dat = data[1]
  let url = dat.img

  let data_j = JSON.stringify(dat).trim().replaceAll('"', '\'')
  return `<img style="width: 100%; aspect-ratio: 3 / 2;" onclick="showPopUp(this)" class="h-auto max-w-full " src="${url}" alt="" data_name="${nm}" data_item="${data_j}">`
}

const showPopUp = (data) => {
  let name = data.getAttribute("data_name")
  let content = data.getAttribute("data_item").replaceAll("'", '"');
  document.body.innerHTML += createPopUp(name, JSON.parse(content))
}

const removeId = (id) => {
  let el = document.getElementById(id)
  while (el != null) {
    el.remove()
    el = document.getElementById(id)
  }
}

const createPopUp = (name, content) => {
  let el = document.getElementById("alert-additional-content-5")
  if (el != null) {
    removeId("alert-additional-content-5")
    el.remove()
    return ""
  }

  console.log(content)

  let ingre = content.ingre.split(",");
  let price = content.price 
  let ul = `<ul class="mt-1.5 list-disc list-inside">`
  for (i of ingre) {
    ul = ul.concat(`<li>${i}</li>`)
  }
  ul = ul.concat(`</ul>`)
  
  let code = `
<div id="alert-additional-content-5" style="translate: 5vw 20vh; width: 90%" class="shadow-2xl drop-shadow-2xl p-4 mx-auto my-auto z-40 rounded-full fixed border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
  <div class="flex items-center">
    <svg class="flex-shrink-0 w-4 h-4 me-2 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <h3 class="text-lg font-medium text-gray-800 dark:text-gray-300">${name}</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Prepared using the following fresh ingredients:</span>
      ${ul}
    </div>
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">
      <svg class="me-2 h-3 w-3 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
      Add to chart - R${price}
    </button>
    <button type="button" onclick="removeId('alert-additional-content-5')" class ="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
`
  return code 
} 
