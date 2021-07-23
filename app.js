
            document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
            document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('body').classList.toggle('lock-scroll'));
            
            function grabbed(){
              swal("Congrats!", "Item added to your Bag!", "success");
            }
            
            function order(){
              swal("Order Placed!", "₹ 135,688 will be debited from your bank account!", "success");
            }
            
            function locate(){
              swal("Sorry!", "This feature is not available yet", "error");
            }
            
        function success(){
          if (username == 0) {
            alert("Shit");
          }
          // swal("Great!", "Your Account has been Created Successfuly!", "success");
      }
      
      function submit(){
        swal("Thank You!", "We'll Contact you soon..!", "success");
      }
      
      function bagged(){
        swal("Congrats!", "Item added to your Bag!", "success");
      }

