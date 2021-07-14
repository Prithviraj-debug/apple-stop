// const iphone = document.querySelector('.iphone');

// iphone.addEventListener('mousemove', (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
//     let yAxis = (window.innerWidth / 2 - e.pageY) / 30;
//     iphone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
// });

// container.addEventListener('mouseleave', e => {
//     card.style.transition = 'all 0.5s ease';
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`
// });

            document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
            document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('body').classList.toggle('lock-scroll'));
            document.querySelector('.baag').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('showbag'));

      function grabbed(){
        swal("Congrats!", "Item added to your Bag!", "success");
      }

      function order(){
        swal("Order Placed!", "₹ 135,688 will be debited from your bank account!", "success");
      }

      function success(){
        swal("Great!", "Your Account has been Created Successfuly!", "success");
      }
      
      function submit(){
        swal("Thank You!", "We'll Contact you soon..!", "success");
      }
      
      function bagged(){
        swal("Congrats!", "Item added to your Bag!", "success");
      }

