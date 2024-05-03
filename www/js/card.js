
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
  document.getElementById("card-container").innerHTML += createPopUp(name, JSON.parse(content))
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

  // console.log(content)

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

const createSlideDrawer = () => {
  let element = 
`
    <div id="drawer-swipe" style="height: 60vh;" class="fixed z-40 w-full h-500 overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full bottom-[0px]" tabindex="-1" aria-labelledby="drawer-swipe-label">
       <div class="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe">
          <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
          <h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"><svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"/>
          </svg>Customize order</h5>
        </div>
    <div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4"></div>
    </div>
`
  console.log("ehe")
  removeId("drawer-swipe")
  return element
}
