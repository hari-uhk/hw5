function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE
  let allRidesButton     = document.querySelector('#all-filter')
  let nooberPoolButton   = document.querySelector('#noober-pool-filter')
  let nooberPurpleButton = document.querySelector('#noober-purple-filter')
  let nooberXlButton     = document.querySelector('#noober-xl-filter')
  let nooberXButton      = document.querySelector('#noober-x-filter')
  
  
  allRidesButton.addEventListener('click', async function(event){
    event.preventDefault()
    console.log('all rides clicked')
    let response = await fetch('https://kiei451.com/api/rides.json')
    // console.log(response)
    let json = await response.json()
    let rides = document.querySelector('.rides')
    rides.innerHTML = ' ' // clearing previous html
    console.log(rides)
    rides.innerHTML.value = renderRides(json)
  })

  nooberPurpleButton.addEventListener('click', async function(event){
    event.preventDefault()
    console.log('purple rides clicked')
    let response = await fetch('https://kiei451.com/api/rides.json')
    // console.log(response)
    let json = await response.json()
    let rides = document.querySelector('.rides')
    rides.innerHTML = ' ' // clearing previous html
    console.log(rides)
    console.log(event.target.innerHTML)
    let purpleArray = []
    for( i=0; i<json.length; i++) {
      ride = json[i]
     if (levelOfService(ride) == event.target.innerHTML) {
           purpleArray.push(ride)
          }
        }
      rides.innerHTML.value = renderRides(purpleArray)
   })


  nooberPoolButton.addEventListener('click', async function(event){
    event.preventDefault()
    console.log('pool rides clicked')
    let response = await fetch('https://kiei451.com/api/rides.json')
    // console.log(response)
    let json = await response.json()
    let rides = document.querySelector('.rides')
    rides.innerHTML = ' ' // clearing previous html
    console.log(rides)
    console.log(event.target.innerHTML)
    let poolArray = []
    for( i=0; i<json.length; i++) {
      ride = json[i]
     if (levelOfService(ride) == event.target.innerHTML) {
           poolArray.push(ride)
          }
        }
      rides.innerHTML.value = renderRides(poolArray)
    })
 

    nooberXlButton.addEventListener('click', async function(event){
      event.preventDefault()
      console.log('XL rides clicked')
      let response = await fetch('https://kiei451.com/api/rides.json')
      // console.log(response)
      let json = await response.json()
      let rides = document.querySelector('.rides')
      rides.innerHTML = ' ' // clearing previous html
      console.log(rides)
      console.log(event.target.innerHTML)
      let XlArray = []
      for( i=0; i<json.length; i++) {
        ride = json[i]
       if (levelOfService(ride) == event.target.innerHTML) {
             XlArray.push(ride)
            }
          }
        rides.innerHTML.value = renderRides(XlArray)
      })

      nooberXButton.addEventListener('click', async function(event){
        event.preventDefault()
        console.log('X rides clicked')
        let response = await fetch('https://kiei451.com/api/rides.json')
        // console.log(response)
        let json = await response.json()
        let rides = document.querySelector('.rides')
        rides.innerHTML = ' ' // clearing previous html
        console.log(rides)
        console.log(event.target.innerHTML)
        let XArray = []
        for( i=0; i<json.length; i++) {
          ride = json[i]
         if (levelOfService(ride) == event.target.innerHTML) {
               XArray.push(ride)
              }
            }
          rides.innerHTML.value = renderRides(XArray)
        })



})

