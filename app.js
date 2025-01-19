document.getElementById('donation-btn').addEventListener('click', function(event) {
    const e = event.target.classList.add('bg-bg');
    const d = document.getElementById('history-btn');
    const donationcontainer = document.getElementById('donation');
    const historyContainer = document.getElementById('history');
    d.classList.remove('bg-bg');
    donationcontainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');
});
document.getElementById('history-btn').addEventListener('click', function(event) {
    const e = event.target.classList.add('bg-bg');
    const d = document.getElementById('donation-btn');
    const donationcontainer = document.getElementById('donation');
    const historyContainer = document.getElementById('history');
    d.classList.remove('bg-bg');
    donationcontainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');
});


const contain = document.querySelectorAll('#donation-items');
let moneyContain = document.getElementById('allmoney');


contain.forEach((item) => {
   let donationAmount =item.querySelectorAll('#input');
   let totalAmountelement =item.querySelector('#donation-money');
    let mainText = item.querySelector('#main-text').innerText;
    
    let button = item.querySelector('button');
    button.addEventListener('click', function() {
       donationAmount.forEach((item) => {
           let donation = parseInt(item.value);
              console.log("donation",donation);
           if(isNaN(donation)||donation<0)
           {
            alert('Please enter a valid number');
           }
           else{
               let totalAmount = totalAmountelement.innerText.replace("BDT","").trim();  
                 totalAmount = parseInt(totalAmount)+donation;
                 
                 let c = totalAmountelement.innerText.replace("BDT","").trim(); 
                 c= parseInt(moneyContain.innerText);
                 
                 c= c-donation;
                 moneyContain.innerHTML = `<img class="w-1/6 lg:w-8" src="assets/coin.png" alt="">${c} BDT`;
                 
                 totalAmountelement.innerHTML =`<img class="sm:w-1/6 lg:w-5" src="assets/coin.png" alt="">${totalAmount} BDT`;
                    let model = document.getElementById('my_modal_1');
                    model.showModal();
                    item.value="";
                
                const historySection = document.getElementById('history');
                let newElement = document.createElement('div');
                newElement.classList.add('border' ,'border-gray-300' ,'rounded-xl' ,'p-6','m-5')
                newElement.innerHTML = ` <h1 class="lg:text-3xl font-bold" id="history-item">
            ${donation} Taka is Donated for ${mainText}
          </h1>
          <p class="lg:text-xl text-gray-600">
            Date : ${new Date()}
          </p>`
                historySection.appendChild(newElement);
                document.getElementById('close-modal').addEventListener('click',function(e){
                    e.preventDefault();
                    let model = document.getElementById('my_modal_1');
                    model.close();
                });
           }
       });
        
    });
  
});
