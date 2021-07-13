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
