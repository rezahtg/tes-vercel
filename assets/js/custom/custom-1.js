

$(document).ready(function(){
  $("#btn-checkAccount").on('click', function(e) {
    e.preventDefault();
    document.getElementById('isAccountAvailable').classList.remove("custom-hide");
    document.getElementById('isAccountAvailable').classList.add("custom-show");
  })

  
  $("#ibCheck").on('change', function(e) {
    e.preventDefault();
    document.getElementById('destBank').classList.remove("custom-hide");
    document.getElementById('destBank').classList.add("custom-show");
  })

  $("#inCheck").on('change', function(e) {
    e.preventDefault();
    document.getElementById('destBank').classList.remove("custom-show");
    document.getElementById('destBank').classList.add("custom-hide");
  })

  $("#btn-submitBulk").on('click', function(e){
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'Your file has been submitted.',
          'success'
        )
        document.getElementById('summary-bulk').classList.remove("custom-hide");
        // document.getElementById('isAccountAvailable').classList.add("custom-show");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Please make sure the file you want submit:)',
          'error'
        )
      }
    })
  })

  $("#btn-updateStatus").on('click', function(e){
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'Your file has been submitted.',
          'success'
        )
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Please make sure the file you want submit:)',
          'error'
        )
      }
    })
  })
});  

// function checkStatus(param) {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Data Success Checked',
//         showConfirmButton: false,
//         timer: 2000,
//       }).then(okay => {
//     if (okay) {
//         if(param == "badge-data1"){
//             document.getElementById('trx-data1').classList.remove("badge-light-danger");
//             document.getElementById('trx-data1').classList.add("badge-light-warning");
//             document.getElementById('trx-data1').innerHTML = "Pending Release";
//         } else if(param == "badge-data2"){
//             document.getElementById('trx-data2').classList.remove("badge-light-danger");
//             document.getElementById('trx-data2').classList.add("badge-light-warning");
//             document.getElementById('trx-data2').innerHTML = "Pending Release";
//         } else if(param == "badge-data3"){
//             document.getElementById('trx-data3').classList.remove("badge-light-danger");
//             document.getElementById('trx-data3').classList.add("badge-light-warning");
//             document.getElementById('trx-data3').innerHTML = "Pending Release";
//         }
//    }})
// }