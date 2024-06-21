

const localStorageData = localStorage.getItem('Form Values');
const localStorageParsed = JSON.parse(localStorageData)

let blogDiv = document.createElement("div");
let h2El = document.createElement('h2');
let pEl = document.createElement('p');
let h6El = document.createElement('h6');

blogDiv.classList.add('blog-post');
h6El.classList.add('posted-by');


blogDiv.appendChild(h2El);
blogDiv.appendChild(pEl);
blogDiv.appendChild(h6El);


// const storageEntries = Object.entries(localStorageParsed);

// console.log(storageEntries)



function addInputsToPost () {
   for (let key in localStorageParsed) {
    if (localStorageParsed.hasOwnProperty(key)) {
       object = localStorageParsed[key]
    //    console.log(object);
       
    }
    getObject0 = [object[0]];
    console.log("0", getObject0)

    for (let i = 0; i < getObject0.length; i++) {
        h2El.innerText = getObject0[i];
        pEl.innerText = getObject0[i];
        h6El.innerText = getObject0[i];
        document.body.appendChild(blogDiv);


    }

    // for (const key in getObject0) {
    //     console.log(`These are ${key}: ${getObject0[key]}`)
    //     h2El.innerText = getObject0[key];
    //     pEl.innerText = getObject0[key];
    //     h6El.innerText = getObject0[key];
    //     document.body.appendChild(blogDiv);
    // }

    getObject1 = object[1];
    console.log("1", getObject1)
   for (const key in getObject1) {
    console.log(`These are ${key}: ${getObject1[key]}`)
    h2El.innerText = getObject1[key];
    pEl.innerText = getObject1[key];
    h6El.innerText = getObject1[key];
    document.body.appendChild(blogDiv);

   }
}
}

addInputsToPost();


//  return Object.entries

    
    // // console.log("local storage 1", localStorageParsed[i]);
   
// }


// if ( h2El.innerText == "" 
//     && pEl.innerText == "" 
//     && h6El.innerText == ""
// ) {
//         !addInputsToPost();
//     } else {

       
//     };



// };

// if (localStorageParsed != null) {
// addInputsToPost();
// }
// console.log(localStorageParsed)

// if ( {
//     !addInputsToPost();
// } else {
// addInputsToPost();
// }






